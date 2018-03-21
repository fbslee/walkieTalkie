import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-bootstrap';
import { FormGroup, Button, Modal, Checkbox } from 'react-bootstrap';
import { connect } from 'react-redux';

import AvailableInterests from './AvailableInterests';
import { toggleInterest } from '../actions/interestActions';

@connect(store => ({
  allInterests: store.app.allInterests,
  selectedInterest: stope.app.selectedInterest
}))

class UserInterests extends Component {

  componentWillMount() {
    
  }

  handleInterestSelection(interest) {
    this.props.dispatch(toggleInterest(interest))
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
            this.props.allInterests.map((interest) => <Checkbox
                      handleCheckboxChange={this.handleInterestSelection(interest)} 
                      label={interest}
                      key={interest}/>)
          }
          </Modal.Body>
        </Modal>
      ) : (<div />)
    );
  }
}

export default UserInterests;

