import React, { Component } from 'react';
import Game from './Game';
import PassOut from './PassOut';

class GameContainer extends Component {
  constructor() {
    super();
    this.state = {
      amount: 90,
      amountBis: 100,
      pintsDrank: 0,
      enemieDrank: 0,
      enemieGiveUp: false,
    };
  }

  componentDidMount() {
    const beerContent = document.querySelectorAll('.beer-content');
    const drink = () => {
      if (this.state.enemieDrank < 14) {
        if (this.state.amountBis >= 0) {
        this.setState({ amountBis: this.state.amountBis - 10 })
        beerContent[1].style.height = `${this.state.amountBis}%`;
        }
        if (this.state.amountBis === 0) {
          this.setState({ amountBis: 110, enemieDrank: this.state.enemieDrank + 1 })
        }
      }
    }
    setInterval(drink, 300);
  }

  handleClick = () => {
    const beerContent = document.querySelectorAll('.beer-content');
    if (this.state.amount >= 0) {
      this.setState({ amount: this.state.amount - 10 });
    }
    if (this.state.amount === 0) {
      this.setState({ pintsDrank: this.state.pintsDrank + 1 });
    }
    if (this.state.enemieDrank < 8 && this.state.pintsDrank > 8) {
      this.setState({ enemieGiveUp: true });
    }
    beerContent[0].style.height = `${this.state.amount}%`;
  }

  handleRefill = () => {
    const beerContent = document.querySelectorAll('.beer-content');
    this.setState({ amount: 100 })
    beerContent[0].style.height = '99%';
  }

  render() {
    return (
      <div>
        {this.state.pintsDrank <= 10 ?
          <Game
            drink={() => this.handleClick()}
            refill={() => this.handleRefill()}
            pints={this.state.pintsDrank}
            amount={this.state.amount}
            enemieScore={this.state.enemieDrank}
            enemieGiveUp={this.state.enemieGiveUp}
          />
        :
        <PassOut />
      }
      </div>
    );
  }
}

export default GameContainer;
