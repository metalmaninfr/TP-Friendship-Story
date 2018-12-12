import React from 'react';
import './Smoke.scss';
import Button from '../shared/Button/Button'
import Cigarette from '../../assets/Smoke.gif'

const Smoke = () => (
  <div className="Smoke">
    <h1> You have a smoke or two </h1>
    <img src={Cigarette} alt='cigarette gif' />
    <Button text="Go inside ?" url='/go-inside' extraClassName="link-text" />
  </div>
);

export default Smoke
