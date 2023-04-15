import React, { useState } from 'react';
import {
  Marker, useMapEvents, Polyline,
} from 'react-leaflet';

function ClickLayer() {
  const [markers, setMarkers] = useState([]);

  const limeOptions = { color: 'blue' };

  useMapEvents({
    click(e) {
      const newMarkers = markers.concat(e.latlng);
      console.log(markers);
      setMarkers(newMarkers);
    },

  });
  return (
    <>
      {markers.map((marker) => (<Marker key={marker} position={marker} />))}
      <Polyline pathOptions={limeOptions} positions={markers} />

    </>

  );
}

export default ClickLayer;
