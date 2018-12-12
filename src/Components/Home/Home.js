import React from 'react';
import './home.scss';
import Button from '../shared/Button/Button'

const Home = () => (
  <div className="home">
    <h1 className='title'>You have arrived at the bar</h1>
    <div className="circle"></div>
    <div className="buttonContainer">
      <Button url="/go-inside" text="Go inside" extraClassName="button"/>
      <Button url="/smoke" text="Smoke a cigarette" extraClassName="button"/>
    </div>
  </div>
);

export default Home
