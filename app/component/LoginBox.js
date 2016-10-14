import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import keycode from 'keycode';

class LoginBox extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {

    this.props.onRequestClose();
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.onRequestClose}
      />,
      <FlatButton
        ref="submit"
        label="Submit"
        primary={true}
        onTouchTap={this.handleSubmit}
      />,
    ];

    return (
      <Dialog
        title="Login"
        actions={actions}
        autoScrollBodyContent={true}
        contentStyle={{
          width: '360px',
          maxWidth: '100%',
        }}
        {...this.props}
      >
        <TextField
          ref="username"
          floatingLabelText="Username"
          onKeyDown={
            (event) => keycode(event) === 'enter'
              ? this.refs.password.focus()
              : null
          }
        /><br />
        <TextField
          ref="password"
          floatingLabelText="Password"
          type="password"
          onKeyDown={
            (event) => keycode(event) === 'enter'
              ? this.refs.submit.props.onTouchTap()
              : null
          }
        /><br />
      </Dialog>
    );
  }
}

export default LoginBox;
