import React, { Component } from 'react';
import Modal from './Modal.js';

class AccomodationsModal extends Component {
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <div className='center-align'>
          <div>
            <h1>Accomodations in McComb</h1>
            <h2>Hotels</h2>
            <p>
              here's the info for hotels in McComb
            </p>
            <h2>Restaurants</h2>
            <h3>In Town:</h3>
            <ul>
              <li>Upscale Dining - The Caboose Restaurant in downtown McComb</li>
              <li>Catfish House - Mr. Whiskers</li>
              <li>Mexican - Tortilla Soup near I-55</li>
              <li>Sushi and Hibachi - Kyoto on Delaware Ave.</li>
              <li>Deli - Broma's Deli in Edgewood Mall</li>
            </ul>
            <h3>Brookhaven:</h3>
            <ul>
              <li>American - Georgia Blue</li>
            </ul>
            <h3>Hattiesburg:</h3>
            <ul>
              <li>Our Favorite - Cotton Blues</li>
              <li>Seafood - Halfshell Oyster House</li>
              <li>New Orleans Style - Patio 44</li>
            </ul>
            <h2>Recreation</h2>

            <h3>In Town:</h3>
            <ul>
              <li>Percy Quinn State park has a walking trail, tennis, and a golf course.</li>
              <li>Tubing/Canoeing the Bogue Chitto river can be a lot of fun if it's warm enough.</li>
            </ul>

            <h3>Travel Required:</h3>
            <ul>
              <li>UA Westbrook 4 Movie Theater in Brookhaven - closest, about 20 mins</li>
              <li>The Grand Movie Theater in Hattiesburg - nicer and more selection, about 70 mins</li>
              <li>Abita Springs Brewery - fun tour for fans of beer, 1.5 hours, we recommend The Chimes restaurant while you're in town.</li>
              <li>New Orleans - about 2 hours</li>
            </ul>
          </div>
          <p><button onClick={this.props.onClose}>Close</button></p>
        </div>
      </Modal>
    );
  }
}

export default AccomodationsModal;
