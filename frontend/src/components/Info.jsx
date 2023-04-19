import React from 'react';
import '../styles/Info.css';

function Info(props) {
  const { disabled, onClick, info } = props;

  const renderTitle = () => {
    if (info) {
      const { distance, counter } = info;
      return <h3 id="title-text">{`Shortest path: ${Math.floor(distance)}km, ${counter} permutations.`}</h3>;
    }
    return <h3 id="title-text">Shortest path finder</h3>;
  };
  return (
    <div id="info-div">
      {renderTitle()}
      <button disabled={disabled} type="button" id="calculate-button" onClick={onClick}>
        <h3>CALCULATE</h3>
      </button>
    </div>
  );
}

export default Info;
