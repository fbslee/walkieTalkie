import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';
import { FormGroup, Button, Modal } from 'react-bootstrap';

import AvailableInterests from './AvailableInterests';


class UserInterests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      allInterests: [
        'Soccer', 'Basketball', 'Football', 'Baseball', 'Hockey', 
          'Beer', 'Wine', 'Tequila', 'Vodka', 'Whiskey', 'Shopping', 'Shoes', 'Style',
          'Country', 'Hiphop', 'RnB', 'Jazz', 'EDM', 'Classical', 'Rock', 
          'Java', 'C', 'Node', 'Ruby', 'Javascript', 'Photography'
        ],
      selectedInterest: {},
    };
    this.componentWillMount = this.componentWillMount.bind(this);
    this.handleInterestSelection = this.handleInterestSelection.bind(this);
    this.handleSaveInterest = this.handleSaveInterest.bind(this);
  }

  componentWillMount() {
    
  }

  handleInterestSelection(interestId) {
    if (!this.state.selectedInterest.hasOwnProperty(interestId)) {
      this.state.selectedInterest[interestId] = true;
    } else {
      this.state.selectedInterest[interestId] = false;
    }
  }

  handleSaveInterest() {
    axios.post('/saveInterest', this.state.selectedInterest)
    .then((result) => {
      this.props.toggleModal();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      this.state.mounted ? (
        <Modal show={this.props.show} onHide={this.props.toggleModal} dialogClassName="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg">Your Interests</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {
            this.state.allInterests.map((interest) => <AvailableInterests
                      key = {interest.id}
                      checked = {this.state.selectedInterest[interest.id]} 
                      interest = {interest} 
                      toggleInterest = {this.handleInterestSelection}/>)
          }
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.handleSaveInterest}>Save</Button>
          </Modal.Footer>
        </Modal>
      ) : (<div />)
    );
  }
}

export default UserInterests;

