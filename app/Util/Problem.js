import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from 'react-title-component';

class Problem extends Component {
  render() {
    return (
      <div>
        <Title render={(prev) => `Problem - ${prev}`} />
        Hello, Problem.
      </div>
    );
  }
}

export default Problem;
