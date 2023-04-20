import React from 'react';
import '../styles/ResetButton.css';

function ResetButton(props) {
  const { onRouteReset } = props;
  return (
    <button type="button" id="reset-button" onClick={onRouteReset}>
      <h3>RESET</h3>
    </button>
  );
}

export default ResetButton;
