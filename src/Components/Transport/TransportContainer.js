import React, { Component } from 'react';
import Transport from './Transport';

class TransportContainer extends Component {
  constructor() {
    super();
    this.state = {
      uber: false,
      taxi: false,
    };
    console.log(this.state.winner);
  }

  handUber = () => {
    this.setState({ uber: !this.state.uber });
    console.log(this.state.uber);
  }
  handTaxi = () => {
    this.setState({ taxi: !this.state.taxi });
  }


  render() {
    return (
      <div>
        <Transport
          choiceUber={() => this.handUber()}
          choiceTaxi={() => this.handTaxi()}
          taxi={this.state.taxi}
          uber={this.state.uber}
          winner={this.props.location.state.winner}
        />
      </div>
    );
  }
}

export default TransportContainer;
