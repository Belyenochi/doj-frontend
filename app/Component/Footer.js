import React, { Component } from 'react';
import { render } from 'react-dom';

class Footer extends Component {
  render() {
  let { style } = this.props;

    return (
      <div style={style.footer}>
        Footer
      </div>
    );
  }
}

export default Footer;
