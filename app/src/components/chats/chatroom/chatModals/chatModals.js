import React from 'react';
import { Modal, Button, Col, Row } from 'react-bootstrap';
import ChatLine from '../ChatLineItem';

export function PrivateChatModal(props) {
  return (
    <Modal show={props.showRequest} dialogClassName="custom-modal">
      <Modal.Header>
        <Modal.Title id="contained-modal-title-lg">Private Chat</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>{props.senderName} would like to start a private chat.</h3>
        <Button onClick={props.acceptPrivateChat}>Accept</Button>
        <Button onClick={props.declinePrivateChat}>Decline</Button>
      </Modal.Body>
    </Modal>
  );
}

export function RejectPrivateChatModal(props) {
  return (
    <Modal show={props.rejected} dialogClassName="custom-modal">
      <Modal.Header>
        <Modal.Title id="contained-modal-title-lg">Private Chat</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>{props.receiverName} has rejected your chat request.</h3>
        <Button onClick={props.acceptRejection}>OK</Button>
      </Modal.Body>
    </Modal>
  );
}

export function ChatBoxComponent(props) {
  return (
    <Col xsOffset={1} mdOffset={1} xs={9} md={9}>
      <div id="chatbox" ref={(div) => { this.chatList = div; }}>
        { props.messages.map((message, index) =>
          <ChatComponent key={index} message={message} privateChat={props.handlePrivateChat} />
        )}
      </div>
    </Col>
  );
}

function ChatComponent(props) {
  return (
     <Row key={index}>
      <Col xs={12} md={12}>
        <ChatLine message={props.message} privateChat={this.handlePrivateChat}/>
      </Col>
    </Row>
  );
}

