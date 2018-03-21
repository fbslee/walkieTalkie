import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';

import UserInterests from './UserInterests';
import MapModal from './MapModal';
import { NavHeader, NavToggle } from './ViewNavbarComponents';



@connect(store => ({

}))
class ViewNavBar extends Component {
  handleUserLogout() {
    axios.post('/logout', { id: this.props.userId })
   .then(() => {
     
   })
   .catch((err) => {
     console.log(err);
   });
  }

  toggleModal() {

  }

  toggleMapModal() {

  }

  render() {
    console.log('PROPS:');
    console.log(this.props)
    const NavHeaderProps = { handleChatExit: this.props.chatExit };
    const navToggleProps = {
      toggleModal: ::this.toggleModal,
      toggleMapModal: ::this.toggleMapModal,
      handleUserLogout: ::this.handleUserLogout,
    };
    const userInterestsProps = {
      show: this.props.show,
      user: this.props.userId,
      toggleModal: ::this.toggleModal,
    };
    const mapModalProps = {
      show: this.props.showMap,
      toggleModal: ::this.toggleMapModal,
    };

    const userInterests = this.props.show ? <UserInterests {...userInterestsProps} /> : null;
    const mapModal = this.props.showMap ? <MapModal {...mapModalProps} /> : null;
    return (
      <Navbar inverse collapseOnSelect>
        <NavHeader {...NavHeaderProps} />
        {
          (this.props.userId) ?
            <div>
              <NavToggle {...navToggleProps} />
              <div>{userInterests}</div>
              <div>{mapModal}</div>
            </div> : <NavItem />
        }
      </Navbar>
    );
  }
}

export default ViewNavBar;
