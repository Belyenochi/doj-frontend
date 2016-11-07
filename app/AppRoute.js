import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './Page/Layout';
import Home from './Page/Home';
import ProblemList from './Page/ProblemList';

/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 * Routes are used to declare your view hierarchy.
 */
const AppRoute = (
  <Router
    onUpdate={() => window.scrollTo(0, 0)}
    history={browserHistory}
  >
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="index" component={Home} />
      <Route path="problem" component={ProblemList} />
    </Route>
  </Router>
);

export default AppRoute;
