import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppRoute from './AppRoute';

// Helpers for debugging
window.React = React;

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
  <MuiThemeProvider>
    <Router
      history={browserHistory}
      onUpdate={() => window.scrollTo(0, 0)}
      routes={AppRoute}
    />
  </MuiThemeProvider>,
  document.getElementById('app')
);
