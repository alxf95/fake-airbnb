import React from 'react';
import GoogleMapReact from 'google-map-react';

import pin from './pin.png';

const InsertPin = ({ image }) => (
  <img src={image} alt="" style={{ height: '30px' }} />
);

const Map = ({ selectedFlatCoords }) => {
  if (Object.entries(selectedFlatCoords).length === 0) {
    return null;
  }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCLSfpVnSR91x4EKlbntWhXb_N6wYkpUmk' }}
        center={selectedFlatCoords}
        defaultZoom={16}
      >
        <InsertPin
          lat={selectedFlatCoords.lat}
          lng={selectedFlatCoords.lng}
          image={pin}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
