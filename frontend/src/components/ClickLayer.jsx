import React, { useState } from 'react';
import {
  Marker, useMapEvents,
} from 'react-leaflet';

function ClickLayer() {
  const [markers, setMarkers] = useState([]);

  useMapEvents({
    click(e) {
      const newMarkers = markers.concat(e.latlng);
      setMarkers(newMarkers);
    },

  });
  return (
    <>
      {markers.map((marker) => (<Marker position={marker} />))}
    </>

  );
}

export default ClickLayer;
