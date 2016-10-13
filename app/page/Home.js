import React, { Component } from 'react';
import { render } from "react-dom";

import LoginButton from '../component/LoginButton';

class Home extends Component {
  render() {
    return (
      <LoginButton>
        Hello from Home Component
      </LoginButton>
    );
  }
}

export default Home;
