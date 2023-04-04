import {
  MapContainer, TileLayer,
} from 'react-leaflet';
import React from 'react';

function App() {
  return (
    <MapContainer
      style={{
        width: '100%',
        height: '100vh',
      }}
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}

export default App;
