import React, {Component} from 'react';

import CeremonyModal from './CeremonyModal.js';
import AccomodationsModal from './AccomodationsModal.js';
import RegistryModal from './RegistryModal.js';

class ModalConductor extends Component {
  constructor() {
    super();

    this.state = { showModal: 'NONE' };
  }

  render() {
    let ulStyle = {
      display: 'flex',
      listStyle: 'none',
    }

    console.log(this.state.showModal)
    switch(this.state.showModal) {
      case 'CEREMONYMODAL':
        return <CeremonyModal onClose={() => this.closeModal()}/>

      case 'REGISTRYMODAL':
        return <RegistryModal onClose={() => this.closeModal()}/>

      case 'ACCOMODATIONSMODAL':
        return <AccomodationsModal onClose={() => this.closeModal()}/>

      default:
        return(
          <div>
            <ul style={ulStyle}>
              <li><button onClick={() => this.openCeremony()}>Ceremony</button></li>
              <li><button onClick={() => this.openAccomodations()}>Accomodations</button></li>
              <li><button onClick={() => this.openRegistry()}>Registry</button></li>
            </ul>
          </div>
        )
    }
  }

  closeModal() {
    this.setState({ showModal: 'NONE' });
  }

  openCeremony() {
    this.setState({ showModal: 'CEREMONYMODAL' });
  }

  openAccomodations() {
    this.setState({ showModal: 'ACCOMODATIONSMODAL' })
  }

  openRegistry() {
    this.setState({ showModal: 'REGISTRYMODAL' })
  }
}

export default ModalConductor;