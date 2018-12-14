import React from 'react';
import PropTypes from 'prop-types';
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
        <div style={{ textAlign: 'center' }}>
          <h2>{`${props.winner ? 'David' : 'You' } must pay the bill`}</h2>
          <h2>You need to find a way home</h2>
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

Transport.propTypes = {
  taxi: PropTypes.bool.isRequired,
  uber: PropTypes.bool.isRequired,
  choiceTaxi: PropTypes.func.isRequired,
  choiceUber: PropTypes.func.isRequired,
  winner: PropTypes.bool,
};

Transport.defaulProps = {
  winner: true,
};

export default Transport
