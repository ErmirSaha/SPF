import React, { useState } from 'react';
import {
  Marker, useMapEvents,
} from 'react-leaflet';

function LocationMarker() {
  const [position, setPosition] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },

  });
  return position === null ? null : (
    <Marker position={position} />
  );
}

export default LocationMarker;
