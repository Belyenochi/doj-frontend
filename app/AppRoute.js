import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from './page/Layout';
import Home from './page/Home';

/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 * Routes are used to declare your view hierarchy.
 */
const AppRoute = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
  </Route>
);

export default AppRoute;
