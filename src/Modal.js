import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div>
        <div className='modal'>{this.props.children}</div>
        <div className='backdrop' onClick={e => this.close(e)}/>
      </div>
    )
  }

  close(e) {
    e.preventDefault()

    if (this.props.onClose) {
      this.props.onClose()
    }
  }
}

export default Modal;
