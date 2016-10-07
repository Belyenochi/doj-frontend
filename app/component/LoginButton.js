import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import LoginBox from './LoginBox';

class LoginButton extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);

    this.state = {
      bOpen: false,
    };
  }

  handleOpen() {
    this.setState({
      bOpen: true,
    });
  }

  handleClose() {
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
