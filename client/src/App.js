import React, { Component } from 'react';
import './App.css';
import Home from './components/HomePage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import UserPage from './components/UserPage';
import ChallengeList from './components/ChallengeList';
import Challenge from './components/Challenge';



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/users' component={Home}/>
          <Route exact path='/users/:userId' component={UserPage}/>
          <Route exact path='/users/:userId/challenges' component={ChallengeList}/>
          <Route exact path='/users/:userId/challenges/:id' component={Challenge}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
