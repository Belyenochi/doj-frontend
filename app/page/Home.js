import React, { Component } from 'react';
import { render } from "react-dom";
import Title from 'react-title-component';

import LoginButton from '../component/LoginButton';

class Home extends Component {
  render() {
    return (
      <div>
        <Title render={(prev) => `Home - ${prev}`} />
        Hello from Home Component, this is content.
        <LoginButton />
      </div>
    );
  }
}

export default Home;
