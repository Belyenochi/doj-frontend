import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './page/Home';

/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */
const AppRoute = (
  <Route path="/" component={Home}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
  </Route>
);

export default AppRoute;
