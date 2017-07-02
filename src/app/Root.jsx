import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './containers/Home.jsx';
import Typography from './containers/Typography.jsx';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={ Home } exact />
        <Route path='/typography' component={ Typography } exact />
      </Switch>
    </Router>
  )
};

export default Root;
