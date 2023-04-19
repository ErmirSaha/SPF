import React from 'react';
import {
  Marker, useMapEvents,
} from 'react-leaflet';

function ClickLayer({ markers, handleNewMarker }) {
  useMapEvents({
    click(e) {
      handleNewMarker(e.latlng);
    },
  });
  return (
    <>
      {markers.map((marker) => (<Marker key={marker} position={marker} />))}
    </>

  );
}

export default ClickLayer;
