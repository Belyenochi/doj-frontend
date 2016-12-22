import React, { Component } from 'react';
import { render } from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import theme from './styles/theme';
import AppRoute from './AppRoute';

// Link to Redux
const store = createStore(reducer);

// Helpers for debugging
window.React = React;

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
let rootElement = document.getElementById('app');
render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      {AppRoute}
    </MuiThemeProvider>
  </Provider>,
  rootElement
);
