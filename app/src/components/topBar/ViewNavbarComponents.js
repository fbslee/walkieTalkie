import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export function NavHeader({ handleChatExit }) {
  return (
    <Navbar.Header>
      <Navbar.Brand onClick={handleChatExit}>
        walkieTalkie
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
  );
}

export function NavToggle(props) {
  return (
    <Navbar.Collapse>
      <Nav>
        <NavItem onClick={props.toggleModal}>Interest</NavItem>
        <NavItem onClick={props.toggleMapModal}>Map</NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem onClick={props.handleUserLogout}>Logout</NavItem>
      </Nav>
    </Navbar.Collapse>
  );
}

export default NavToggle;
