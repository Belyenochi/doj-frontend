import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import LoginButton from './LoginButton';

class Main extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <LoginButton>
          Hello from Home Component
        </LoginButton>
      </MuiThemeProvider>
    );
  }
}

export default Main;
