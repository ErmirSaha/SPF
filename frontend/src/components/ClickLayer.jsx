import React from 'react';
import {
  Marker, useMapEvents, Tooltip,
} from 'react-leaflet';
import { MAX_COUNT } from '../constants';

function ClickLayer({ markers, handleNewMarker }) {
  useMapEvents({
    click(e) {
      if (markers.length >= MAX_COUNT) return;
      handleNewMarker(e.latlng);
    },
  });
  const renderTooltip = (index) => {
    if (index === 0) return (<Tooltip direction="right" offset={[0, 0]} opacity={1} permanent>Start</Tooltip>);
    if (index === markers.length - 1) return null;
    return (<Tooltip direction="right" offset={[0, 0]} opacity={1} permanent>{index + 1}</Tooltip>);
  };
  return (
    <>
      {markers.map((marker, index) => (
        <Marker key={marker.id} position={marker}>
          {renderTooltip(index)}
        </Marker>
      ))}
    </>

  );
}

export default ClickLayer;
