import React, { Component, PropTypes } from 'react';

import { AppBar, IconButton } from 'material-ui';
import { colors } from 'material-ui/styles';
import Apps from 'material-ui/svg-icons/navigation/apps';

const { black } = colors;

function getStyles(props, context) {
  const { appBar } = context.muiTheme;

  const buttonSize = 56;
  const iconSize = 48;

  const styles = {
    root: {
      position: 'fixed',
      top: 0,
    },
    iconButton: {
      width: buttonSize,
      height: buttonSize,
      padding: (buttonSize - iconSize) / 2,
    },
    iconButtonIcon: {
      width: iconSize,
      height: iconSize,
    },
    iconLeft: {
      marginTop: (appBar.height - buttonSize) / 2,
    }
  };

  return styles;
}

class Header extends Component {
  static propTypes = {
    showIcon: PropTypes.bool,
    style: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    let { showIcon, style, actions } = this.props;

    const styles = getStyles(this.props, this.context);

    const leftIcon = (
      <IconButton
        onClick={() => actions.openSidebar()}
        iconStyle={styles.iconButtonIcon}
        style={styles.iconButton}
      >
        <Apps color={black}>apps</Apps>
      </IconButton>
    );

    return (
      <AppBar
        style={Object.assign({}, styles.root, style)}
        showMenuIconButton={showIcon}
        iconElementLeft={leftIcon}
        iconStyleLeft={styles.iconLeft}
        zDepth={0}
      />
    );
  };
}


export default Header;
