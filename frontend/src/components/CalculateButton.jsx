import React from 'react';
import '../styles/CalculateButton.css';

function CalculateButton(props) {
  const { disabled, onRouteSubmit } = props;
  return (
    <button
      type="button"
      id="calculate-button"
      disabled={disabled}
      onClick={onRouteSubmit}
    >
      <h3>CALCULATE</h3>
    </button>
  );
}

export default CalculateButton;
