import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import axios from 'axios';

import UserInterests from './UserInterests';
import MapModal from './MapModal';
import { NavHeader, NavToggle } from './ViewNavbarComponents';

import { togModal, togMapModal } from './../../actions/navActions';
import { chatExit } from './../../actions/chatActions';
import { userLogout } from './../../actions/loginActions';

@connect(store => ({
  userId: store.login.userId,
  name: store.login.name,
  roomId: store.chat.roomId,
  show: store.nav.show,
  showMap: store.nav.showMap,
}))
class ViewNavBar extends Component {

  handleChatExit() {
    if (this.props.roomId) {
      axios.post('/exitChat', { id: this.props.userId })
    .then(() => {
      this.props.dispatch(chatExit());
    })
    .catch((err) => {
      console.log(err);
    });
    }
  }

  handleUserLogout() {
    axios.post('/logout', { id: this.props.userId })
   .then(() => {
     this.props.dispatch(userLogout());
   })
   .catch((err) => {
     console.log(err);
   });
  }

  toggleModal() {
    this.props.dispatch(togModal(this.props.show));
  }

  toggleMapModal() {
    this.props.dispatch(togMapModal(this.props.showMap));
  }

  render() {
    const NavHeaderProps = { handleChatExit: ::this.handleChatExit };
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
