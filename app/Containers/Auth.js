import React, { Component, PropTypes } from 'react';
import Title from 'react-title-component';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

function getStyles(props, context) {
  const styles = {
    root: {
      maxWidth: '300px',
      margin: 'auto',
    },
  };

  return styles;
}

class Signin extends Component {
  state = {
    account: '',
    password: '',
  };

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = () => {
  };

  render() {
    const {
      account,
      password,
    } = this.state;

    const styles = getStyles(this.props, this.context);

    return (
      <div style={styles.root}>
        <Title render={(prev) => `Authenticate · ${prev}`} />
        <br />
        <TextField
          id="account"
          floatingLabelText="Account"
          value={account}
          onChange={this.handleChange('account')}
        />
        <br />
        <TextField
          id="password"
          floatingLabelText="Password"
          value={password}
          onChange={this.handleChange('password')}
        />
        <br />
        <br />
        <RaisedButton
          label="Submit"
          primary={true}
          style={styles.button}
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}

export default Signin;