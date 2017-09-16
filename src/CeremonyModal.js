import React, { Component } from 'react';
import Modal from './Modal.js';

class CeremonyModal extends Component {
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <div className='center-align'>
          <div>
            <h2>Where</h2>
            <p>Centenary United Methodist Church</p>
            <p>500 Delaware Ave</p>
            <p>McComb, MS 39648</p>
            <h2>When</h2>
            <p>
              Saturday, March 17, 2018 @ 4:00 PM
            </p>
            <h3>
              Reception and Dinner to follow @ 5:00 PM
            </h3>
          </div>
          <p><button onClick={this.props.onClose}>Close</button></p>
        </div>
      </Modal>
    );
  }
}

export default CeremonyModal;
