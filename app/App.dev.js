import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import injectTapEventPlugin from 'react-tap-event-plugin';

import reducer from './Reducer';
import theme from './styles/theme';
import AppRoute from './AppRoute';

// Helpers for debugging
window.React = React;

// Link to Redux
const store = createStore(reducer);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const AppRouter = (
  <Router
    onUpdate={() => window.scrollTo(0, 0)}
    history={useRouterHistory(createHashHistory)()}
  >
    {AppRoute}
  </Router>
)

// Element created by React
let app = (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      {AppRouter}
    </MuiThemeProvider>
  </Provider>
);

// Element from HTML
let rootElement = document.getElementById('app');

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(app, rootElement);
