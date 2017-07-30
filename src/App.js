import React, { Component } from 'react';
import ModalConductor from './ModalConductor.js';
import './App.css';

class App extends Component {
  render() {
    let modalButtonsStyle = {
      position: 'absolute',
      top: '66%',
      left: '48%',
      transform: 'translate(-50%, -50%)',
    }

    return (
      <div style={modalButtonsStyle}>
        <ModalConductor />
      </div>
    )
  }
}

export default App;
