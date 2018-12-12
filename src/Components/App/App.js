import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from '../Home/HomeContainer';
import GameContainer from '../Game/GameContainer';
import SmokeContainer from '../Smoke/SmokeContainer';
import InsideContainer from '../Inside/InsideContainer';
import TransportContainer from '../Transport/TransportContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
					<Switch>
						<Route exact path='/' component={HomeContainer} />
            <Route exact path='/go-inside' component={InsideContainer} />
            <Route exact path='/smoke' component={SmokeContainer} />
            <Route exact path='/game' component={GameContainer} />
            <Route exact path='/choose-transport' component={TransportContainer} />
					</Switch>
				</Router>
      </div>
    );
  }
}

export default App;
