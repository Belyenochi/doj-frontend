import React, { Component } from 'react';
import Title from 'react-title-component';

class ProblemList extends Component {
  render() {
    return (
      <div>
        <Title render={(prev) => `Problem · ${prev}`} />
        Hello, ProblemList.
      </div>
    );
  }
}

export default ProblemList;
