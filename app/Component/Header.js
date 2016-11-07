import React, { Component } from 'react';
import { render } from 'react-dom'

import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';

const leftIcon = (
  <FontIcon
    className="material-icons"
    style={{ fontSize: 48 }}
  >
    apps
  </FontIcon>
);

class Header extends Component {
  render() {
    let { showIcon, style } = this.props;

    return (
      <AppBar
        style={style}
        showMenuIconButton={showIcon}
        iconElementLeft={leftIcon}
        zDepth={0}
      />
    );
  }
}

export default Header;
