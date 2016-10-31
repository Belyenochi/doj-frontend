import React, { Component } from 'react';
import { render } from 'react-dom';

import Drawer from 'material-ui/Drawer';
import { spacing, typography } from 'material-ui/styles';
import { cyan500 } from 'material-ui/styles/colors';

import LoginButton from '../component/LoginButton';

const styles = {
  logo: {
    fontSize: 36,
    color: typography.textFullWhite,
    lineHeight: `${spacing.desktopKeylineIncrement}px`,
    fontWeight: typography.fontWeightLight,
    backgroundColor: cyan500,
    marginBottom: 8,
    textAlign: 'center',
  },
};

class AppNav extends Component {
  render() {
    const {
      style,
      open,
      docked,
      onRequestChange,
    } = this.props;

    return (
      <Drawer
        style={style}
        open={open}
        docked={docked}
        onRequestChange={onRequestChange}
      >
        <div
          style={styles.logo}
          // onTouchTap={this.handleTouchTapHeader}
        >
          DOJ
        </div>
        <LoginButton />
      </Drawer>
    );
  }
}

export default AppNav;
