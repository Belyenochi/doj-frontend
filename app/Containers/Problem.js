import React, { Component, PropTypes } from 'react';
import Title from 'react-title-component';

class Problem extends Component {
  render() {
    const {
      pid,
    } = this.props.params;

    return (
      <div>
        <Title render={(prev) => `Problem · ${prev}`} />
        {pid}
      </div>
    );
  }
}

export default Problem;