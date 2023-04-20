import React from 'react';
import '../styles/Info.css';
import { ColorRing } from 'react-loader-spinner';

function Info(props) {
  const {
    disabled, onClick, info, loading,
  } = props;

  const renderTitle = () => {
    if (info) {
      const { distance, counter } = info;
      return <h3 id="title-text">{`Shortest path: ${Math.floor(distance)}km, ${counter} permutations.`}</h3>;
    }
    return <h3 id="title-text">Shortest path finder</h3>;
  };
  return (
    <div id="info-div">
      <div id="horizontal-div">
        {renderTitle()}

        <ColorRing
          visible={loading}
          height="60"
          width="60"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
      <button disabled={disabled} type="button" id="calculate-button" onClick={onClick}>
        <h3>CALCULATE</h3>
      </button>

    </div>
  );
}

export default Info;
