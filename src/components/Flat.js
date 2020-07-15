import React, { Component } from 'react';
import './cards.css';

class Flat extends Component {
  handleClick = () => {
    const { lat, lng } = this.props.flatObj;
    this.props.getCoordsFunction({ lat, lng });
  };

  render() {
    const { lat, lng } = this.props.flatObj;
    const selectedLat = this.props.selectedFlatCoords.lat;
    const selectedLng = this.props.selectedFlatCoords.lng;
    return (
      <div
        onClick={this.handleClick}
        className={`ui card ${
          selectedLat === lat && selectedLng === lng ? 'active' : ''
        }`}
      >
        <div className="image">
          <img src={this.props.flatObj.imageUrl} alt="" />
        </div>
        <div className="content">
          <div className="card-description">
            <b>{this.props.flatObj.name}</b>
          </div>
          <div className="card-category">€{this.props.flatObj.price}</div>
        </div>
      </div>
    );
  }
}

export default Flat;
