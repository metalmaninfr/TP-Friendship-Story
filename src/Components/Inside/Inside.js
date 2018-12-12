import React from 'react';
import './Inside.scss';
import Slider from "react-slick";
import Button from '../shared/Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons'


const Inside = () => (
  <div className="Inside">
    <Slider
      slidesToShow={1}
      infinite={false}
      className="slider"
    >
    <div className="alignCenter">
      <p className="title">You see david at the bar</p>
      <p>He sees you and calls you over to see him, you go and say hello and he has a cheeky grin when he says hello back</p>
      <div className='swipe-container'>
        <FontAwesomeIcon icon={faHandPointUp} className='swipe' size="2x" />
        <p>use your finger to slide</p>
      </div>
    </div>
    <div className="alignCenter">
      <p className="title">He challenges you too a drink off, who ever can drink the least pints has to pay the bill, and the taxi home</p>
      <Button extraClassName="button" text="Play the game" url="/game" />
    </div>
    </Slider>
  </div>
);

export default Inside
