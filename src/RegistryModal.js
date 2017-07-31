import React, { Component } from 'react';
import Modal from './Modal.js';

class RegistryModal extends Component {
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <h1>Registry Modal</h1>
        <ul>
          <li>
            <a href='https://smile.amazon.com/wedding/shauna-mcbride-alan-kebert-mccomb-march-2018/registry/1G2EGGXDSNVJP'>
              Amazon Registry
            </a>
          </li>
          <li>Awesome thing 2</li>
          <li>Awesome thing 3</li>
        </ul>
        <p><button onClick={this.props.onClose}>Close</button></p>
      </Modal>
    );
  }
}

export default RegistryModal;
