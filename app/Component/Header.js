import React, { Component } from 'react';
import { render } from 'react-dom'

import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import { black } from 'material-ui/styles/colors';

class Header extends Component {
  render() {
    let { showIcon, style, action } = this.props;

    const leftIcon = (
      <IconButton
        onClick={() => action.openSidebar()}
        iconStyle={{ width: 48, height: 48, fontSize: 48, }}
        style={{ width: 56, height: 56, padding: 4 }}
      >
        <FontIcon
          className="material-icons"
          color={black}
        >
          apps
        </FontIcon>
      </IconButton>
    );

    return (
      <AppBar
        onLeftIconButtonTouchTap={(event) => {console.log(event);}}
        style={style.header}
        showMenuIconButton={showIcon}
        iconElementLeft={leftIcon}
        iconStyleLeft={{ marginTop: 4 }}
        zDepth={0}
      />
    );
  }
}


export default Header;
