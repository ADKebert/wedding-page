import React, { Component } from 'react';
import Modal from './Modal.js';

class RegistryModal extends Component {
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <div className='center-align'>
          <div>
            <h1>Registry Info</h1>
            <ul className='registry-ul'>
              <li className='registry-link'>
                <p>Wedding gift registry at</p>
                <a href='https://smile.amazon.com/wedding/shauna-mcbride-alan-kebert-mccomb-march-2018/registry/1G2EGGXDSNVJP'>
                  Amazon
                </a>
              </li>
              <li className='registry-link'>
                <p>Or contribute to our honeymoon at</p>
                <a href='https://www.honeyfund.com/wedding/AlanandShaunaGetMarried'>
                  Honeyfund
                </a>
              </li>
            </ul>
          </div>
          <p><button onClick={this.props.onClose}>Close</button></p>
        </div>
      </Modal>
    );
  }
}

export default RegistryModal;
