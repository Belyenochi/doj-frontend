import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './page/Layout';
import Home from './page/Home';
import ProblemList from './page/ProblemList';

/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 * Routes are used to declare your view hierarchy.
 */
const AppRoute = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="index" component={Home} />
    <Route path="problem" component={ProblemList} />
  </Route>
);

export default AppRoute;
