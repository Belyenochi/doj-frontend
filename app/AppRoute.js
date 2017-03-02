import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './Containers/Layout';
import Auth from './Containers/Auth';
import Home from './Containers/Home';
import Problem from './Containers/Problem';
import ProblemList from './Containers/ProblemList';

/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 * Routes are used to declare your view hierarchy.
 */
const AppRoute = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="auth" component={Auth} />
    <Route path="pl" component={ProblemList}>
      <Route path="l" component={ProblemList} />
      <Route path="r" component={ProblemList} />
    </Route>
    <Route path="p">
      <Route path=":pid" component={Problem} />
    </Route>
  </Route>
);

export default AppRoute;
