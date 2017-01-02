import React, { Component } from 'react';

import { RaisedButton } from 'material-ui';

import LoginBox from './LoginBox';

class LoginButton extends Component {
  render() {
    return (
      <div>
        <LoginBox
          open={this.state.bOpen}
          onRequestClose={this.handleClose}
        />
        <RaisedButton
          label="Login"
          onTouchTap={this.handleOpen}
        />
      </div>
    );
  };
}

export default LoginButton;
