import React from 'react';
import './Transport.scss';
import Button from '../shared/Button/Button'
import image1 from '../../assets/taxi.jpg';
import image2 from '../../assets/uber.jpg';

const Transport = (props) => (
  <div>
    {props.taxi || props.uber ?
      <div className="Transport">
        <div><h3>{`You chose ${props.taxi ? 'taxi' : 'uber'}`}</h3></div>
        <div><img src={props.taxi ? image1 : image2} alt='transport' /></div>
        <Button text='Play again ?' url='/' extraClassName="button" />
      </div>
    :
      <div className="Transport">
        <div>
          <h2>You need to go home</h2>
        </div>
        <div className="transportation-container">
          <h3>choose your transportation</h3>
          <div className="transportation">
            <div className='circleChoice' onClick={props.choiceUber}>
              <p>Uber</p>
            </div>
            <div className='circleChoice' onClick={props.choiceTaxi}>
              <p>Taxi</p>
            </div>
          </div>
        </div>
        <div />
      </div>
    }
  </div>
);


export default Transport
