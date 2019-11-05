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


        <Route path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />


      </Router>
    );
  }
}