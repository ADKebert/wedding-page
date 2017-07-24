import React, { Component } from 'react';
import Modal from './Modal.js';

class RegistryModal extends Component {
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <h1>Registry Modal</h1>
        <ul>
          <li>Awesome thing 1</li>
          <li>Awesome thing 2</li>
          <li>Awesome thing 3</li>
        </ul>
        <p><button onClick={this.props.onClose}>Close Modal</button></p>
      </Modal>
    );
  }
}

export default RegistryModal;
