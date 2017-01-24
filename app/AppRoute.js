import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './Containers/Layout';
import Home from './Containers/Home';
import ProblemList from './Containers/ProblemList';

/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 * Routes are used to declare your view hierarchy.
 */
const AppRoute = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="pl" component={ProblemList} />
    <Route path="pl/l" component={ProblemList} />
    <Route path="pl/r" component={ProblemList} />
  </Route>
);

export default AppRoute;
