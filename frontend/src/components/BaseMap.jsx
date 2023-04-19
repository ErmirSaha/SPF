import React, { useEffect, useState } from 'react';
import {
  TileLayer, MapContainer,
} from 'react-leaflet';
import ClickLayer from './ClickLayer';
import Info from './Info';
import routeService from '../services/route';

function BaseMap() {
  const [markers, setMarkers] = useState([]);
  // const [canCalculate, setCanCalculate] = useState(false);

  useEffect(() => {
  }, []);

  const handleNewMarker = (newMarker) => {
    const newMarkers = markers.concat(newMarker);
    setMarkers(newMarkers);
  };

  const handleRouteSubmit = async () => {
    const vector = await routeService.calculateTSP(markers);
  };

  return (
    <>
      <Info disabled={markers.length < 3} onClick={handleRouteSubmit} />
      <MapContainer
        style={{
          width: '100%',
          height: '100vh',
        }}
        center={[27, 60]}
        zoom={4}
        scrollWheelZoom
      >

        <ClickLayer markers={markers} handleNewMarker={handleNewMarker} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

    </>
  );
}

export default BaseMap;
