import React, { useEffect } from 'react';
import {
  TileLayer, MapContainer,
} from 'react-leaflet';
import ClickLayer from './ClickLayer';
import Info from './Info';

function BaseMap() {
  useEffect(() => {
  }, []);

  return (
    <>
      <Info />

      <MapContainer
        style={{
          width: '100%',
          height: '100vh',
        }}
        center={[27, 60]}
        zoom={4}
        scrollWheelZoom
      >

        <ClickLayer />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

    </>
  );
}

export default BaseMap;
