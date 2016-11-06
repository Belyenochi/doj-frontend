import React, { Component } from 'react';
import { render } from 'react-dom'

import { grey300 } from 'material-ui/styles/colors';;

class Header extends Component {
  render() {
    const style = {
      backgroundColor: grey300,
    };

    return (
      <div style={style}>
        Header
      </div>
    );
  }
}

export default Header;
