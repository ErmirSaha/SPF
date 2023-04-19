import React from 'react';
import '../styles/Info.css';

function Info(props) {
  const { disabled, onClick } = props;

  return (
    <div id="info-div">
      <h3 id="title-text">Shortest path finder</h3>
      <button disabled={disabled} type="button" id="calculate-button" onClick={onClick}>
        <h3>CALCULATE</h3>
      </button>
    </div>
  );
}

export default Info;
