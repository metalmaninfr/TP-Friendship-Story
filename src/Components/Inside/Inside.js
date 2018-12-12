import React from 'react';
import './Inside.scss';
import Slider from "react-slick";
import Button from '../shared/Button/Button'

const Inside = () => (
  <div className="Inside">
    <Slider
      slidesToShow={1}
      infinite={false}
      adaptiveHeight={true}
      className="slider"
    >
    <div className="alignCenter">
      <p className="title">You see david at the bar</p>
      <p>He sees you and calls you over to see him, you go and say hello and he has a cheeky grin when he says hello back</p>
    </div>
    <div className="alignCenter">
      <p className="title">He challenges you too a drink off, who ever can drink the least pints has to pay the bill, and the taxi home</p>
      <Button extraClassName="button" text="Play the game" url="/game" />
    </div>
    </Slider>
  </div>
);

export default Inside
