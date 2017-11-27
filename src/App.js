import React, { Component } from 'react';
import './App.css';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';
import GamePage from './components/game/game';
import LoginPage from './components/login/login';
import ResultPage from './components/result/result';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <Route exact path="/" component={LoginPage}/>
          <Route path="/game" component={GamePage}/>
          <Route path="/result" component={ResultPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
