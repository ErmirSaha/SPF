import React, { useEffect, useState } from 'react';
import {
  TileLayer, MapContainer, Polyline,
} from 'react-leaflet';
import ClickLayer from './ClickLayer';
import Info from './Info';
import routeService from '../services/route';

function BaseMap() {
  const [markers, setMarkers] = useState([]);
  const [info, setInfo] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  }, []);

  const handleNewMarker = (newMarker) => {
    const markerWithId = { ...newMarker, id: Math.floor(Math.random() * 1000000) };
    const newMarkers = markers.concat(markerWithId);
    setMarkers(newMarkers);
  };

  const handleRouteSubmit = async () => {
    setLoading(true);
    const result = await routeService.calculateTSP(markers);
    setLoading(false);
    const { path, distance, counter } = result.data;
    // eslint-disable-next-line no-return-assign, no-param-reassign
    const pathWithId = path.map((location) => ({
      ...location,
      id: Math.floor(Math.random() * 1000000),
    }));
    setMarkers(pathWithId);
    setInfo({ distance, counter });
    console.log(path, distance, counter);
  };

  return (
    <>
      <Info
        disabled={markers.length < 3}
        onClick={handleRouteSubmit}
        info={info}
        loading={loading}
      />
      <MapContainer
        style={{
          width: '100%',
          height: '100vh',
        }}
        center={[62.0, 26.72]}
        zoom={6}
        scrollWheelZoom
      >

        <ClickLayer markers={markers} handleNewMarker={handleNewMarker} />
        <Polyline pathOptions={{ color: 'black' }} positions={markers} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>

    </>
  );
}

export default BaseMap;
