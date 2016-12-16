import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Apps from 'material-ui/svg-icons/navigation/apps';
import { black } from 'material-ui/styles/colors';

class Header extends Component {
  render() {
    let { showIcon, styles, action } = this.props;

    const leftIcon = (
      <IconButton
        onClick={() => action.openSidebar()}
        iconStyle={{ width: 48, height: 48 }}
        style={{ width: 56, height: 56, padding: 4 }}
      >
        <Apps color={black}>apps</Apps>
      </IconButton>
    );

    return (
      <AppBar
        onLeftIconButtonTouchTap={(event) => {console.log(event);}}
        style={styles.header}
        showMenuIconButton={showIcon}
        iconElementLeft={leftIcon}
        iconStyleLeft={{ marginTop: 4 }}
        zDepth={0}
      />
    );
  }
}


export default Header;
