import React from 'react';
import '../styles/Info.css';
import { ColorRing } from 'react-loader-spinner';
import ResetButton from './ResetButton';
import { APP_STATES, MAX_COUNT } from '../constants';
import CalculateButton from './CalculateButton';

function Info(props) {
  const {
    markers, info, appState, onRouteSubmit, onRouteReset,
  } = props;

  const renderInfo = () => {
    const { ADDING_MARKERS, CALCULATING, SHOWING_RESULT } = APP_STATES;
    switch (appState) {
      case ADDING_MARKERS:
        return (
          <div id="info-div">
            <div id="horizontal-div">
              <h3 id="title-text">{`Shortest path finder: ${MAX_COUNT - markers.length} markers left`}</h3>
            </div>
            <div>
              <CalculateButton
                disabled={markers.length < 3 || markers.length > MAX_COUNT}
                onRouteSubmit={onRouteSubmit}
              />
            </div>

          </div>
        );

      case CALCULATING:
        return (
          <div id="info-div">
            <div id="horizontal-div">
              <h3 id="title-text">Calculating</h3>
              <ColorRing
                height="60"
                width="60"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
            </div>
          </div>
        );

      case SHOWING_RESULT:
        return (
          <div id="info-div">
            <div id="horizontal-div">
              <h3 id="title-text">{`Shortest path: ${Math.floor(info.distance)}km, ${info.counter} permutations.`}</h3>
            </div>
            <ResetButton onRouteReset={onRouteReset} />
          </div>
        );
      default:
        return null;
    }
  };
  return (
    renderInfo()
  );
}

export default Info;
