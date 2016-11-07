import React, { Component } from 'react';
import { render } from 'react-dom'

import AppBar from 'material-ui/AppBar';

class Header extends Component {
  render() {
    let { showIcon, style } = this.props;

    return (
      <AppBar
        style={style}
        showMenuIconButton={showIcon}
      />
    );
  }
}

export default Header;
