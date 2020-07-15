import React, { Component } from 'react';

import Flat from './Flat';
import flats from '../data/flats';

class FlatList extends Component {
  mapFlats() {
    return flats.map(flat => (
      <Flat
        flatObj={flat}
        key={flat.name}
        getCoordsFunction={this.props.getCoordsFunction}
        selectedFlatCoords={this.props.selectedFlatCoords}
      />
    ));
  }

  render() {
    return (
      <div className="flat-list">
        <div className="ui cards">{this.mapFlats()}</div>
      </div>
    );
  }
}

export default FlatList;
