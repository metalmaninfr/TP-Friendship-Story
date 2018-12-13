import React from 'react';
import { Link } from 'react-router-dom';
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
        {props.enemieGiveUp ?
        <Link
          className="btnCircle btnCircleLink"
          to={{
            pathname: '/choose-transport',
            state: {
              winner: true,
            }
          }}
        >
          Drink
        </Link>
        :
        <button className="btnCircle" onClick={props.drink}>Drink</button>
        }
      </div>
    :
      <div className="flexCenterRow">
        <p className="text-again" onClick={props.refill}>Try again ?</p>
        <Link
          className="text-danger"
          to={{
            pathname: '/choose-transport',
            state: {
              winner: false,
            }
          }}
        >
          Give up ?
        </Link>
      </div>
    }
    <footer className="footer">
      <div className="footer-items">
        <p>david pints drank</p>
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
