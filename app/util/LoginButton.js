import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import LoginBox from './LoginBox';

class LoginButton extends Component {
  state = {
    bOpen: false,
  };

  handleOpen = () => {
    this.setState({
      bOpen: true,
    });
  }

  handleClose = () => {
    this.setState({
      bOpen: false,
    });
  }

  render() {
    return (
      <div>
        <LoginBox
          ref="loginBox"
          open={this.state.bOpen}
          onRequestClose={this.handleClose}
        />
        <RaisedButton
          label="Login"
          onTouchTap={this.handleOpen}
        />
      </div>
    );
  }
}

export default LoginButton;
