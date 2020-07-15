import React, { Component } from 'react';

import FlatList from './FlatList';
import Map from './Map';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlatCoords: {},
    };
  }

  getFlatCoords = coords => {
    this.setState({ selectedFlatCoords: coords });
  };

  render() {
    return (
      <div id="app">
        <div className="left-scene">
          <FlatList
            getCoordsFunction={this.getFlatCoords}
            selectedFlatCoords={this.state.selectedFlatCoords}
          />
        </div>
        <div className="right-scene">
          <Map selectedFlatCoords={this.state.selectedFlatCoords} />
        </div>
      </div>
    );
  }
}

export default App;
