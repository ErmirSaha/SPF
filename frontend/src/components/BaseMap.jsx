import React, { useEffect, useState } from 'react';
import {
  TileLayer, MapContainer, Polyline,
} from 'react-leaflet';
import ClickLayer from './ClickLayer';
import Info from './Info';
import routeService from '../services/route';
import { APP_STATES, MAX_COUNT } from '../constants';

function BaseMap() {
  const [markers, setMarkers] = useState([]);
  const [info, setInfo] = useState(undefined);
  const [appState, setAppState] = useState(APP_STATES.ADDING_MARKERS);

  useEffect(() => {
  }, []);

  const handleNewMarker = (newMarker) => {
    if (markers.length >= MAX_COUNT) return;
    if (appState === APP_STATES.SHOWING_RESULT) return;
    const markerWithId = { ...newMarker, id: Math.floor(Math.random() * 1000000) };
    const newMarkers = markers.concat(markerWithId);
    setMarkers(newMarkers);
  };

  const handleRouteSubmit = async () => {
    setAppState(APP_STATES.CALCULATING);
    const result = await routeService.calculateTSP(markers);
    if (!result) {
      alert('Problem with calculation');
      setAppState(APP_STATES.ADDING_MARKERS);
      return;
    }
    setAppState(APP_STATES.SHOWING_RESULT);
    const { path, distance, counter } = result.data;
    // eslint-disable-next-line no-return-assign, no-param-reassign
    const pathWithId = path.map((location) => ({
      ...location,
      id: Math.floor(Math.random() * 1000000),
    }));
    setMarkers(pathWithId);
    setInfo({ distance, counter });
  };

  const handleRouteReset = () => {
    setMarkers([]);
    setAppState(APP_STATES.ADDING_MARKERS);
  };
  return (
    <>
      <Info
        markers={markers}
        onRouteSubmit={handleRouteSubmit}
        onRouteReset={handleRouteReset}
        info={info}
        appState={appState}
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
