import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';




export default class App extends Component {


  render() {


    // JSX
    return (
      <Router>


        <Route path="/" component={Header} />
        <Route path="/" component={Header} />
        <Route path="/" component={Header} />
        <Route path="/" component={Header} />


        <div>
          <h2>I am the App Component</h2>
        </div>


      </Router>
    );
  }
}