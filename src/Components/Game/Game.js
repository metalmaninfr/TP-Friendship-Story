import React from 'react';
// import Button from '../shared/Button/Button';
import './Game.scss';

const Game = (props) => (
  <div className={ `${props.pints >= 5 ? "blur" : ''} Game` }>
    <div className="play-container">
      <div className="beer-container">
        <p className="players">You</p>
        <div className="beer">
          <div className="beer-handle" />
          <div className="beer-content" />
        </div>
      </div>
      <div className="beer-container">
        <p className="players">David</p>
        <div className="beer">
          <div className="beer-handle" />
          <div className="beer-content" />
        </div>
      </div>
    </div>
    {props.amount >= 0 ?
      <div>
        <button className="btnCircle" onClick={props.drink}>Drink</button>
      </div>
    :
      <div className="flexCenterRow">
        <p className="text-again" onClick={props.refill}>Try again ?</p>
        <p className="text-danger">Give up ?</p>
      </div>
    }
    <footer className="footer">
      <div className="footer-items">
        <p>enemie pints drank</p>
        <p>{props.enemieScore}</p>
      </div>
      <div className="footer-items">
        <p>number of pints drank</p>
        <p>{props.pints}</p>
      </div>
    </footer>
  </div>
);

export default Game