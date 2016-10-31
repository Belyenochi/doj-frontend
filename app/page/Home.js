import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from 'react-title-component';

class Home extends Component {
  render() {
    return (
      <div>
        <Title render={(prev) => `Home - ${prev}`} />
        Hello from Home Component, this is content.
      </div>
    );
  }
}

export default Home;
