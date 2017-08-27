import React, { Component } from 'react';
import Modal from './Modal.js';

class RegistryModal extends Component {
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <div className='center-align'>
          <div>
            <h1>Registry Info</h1>
            <ul>
              <li>
                <a href='https://smile.amazon.com/wedding/shauna-mcbride-alan-kebert-mccomb-march-2018/registry/1G2EGGXDSNVJP'>
                  Amazon Registry
                </a>
              </li>
              <li>Honeyfund</li>
            </ul>
          </div>
          <p><button onClick={this.props.onClose}>Close</button></p>
        </div>
      </Modal>
    );
  }
}

export default RegistryModal;
