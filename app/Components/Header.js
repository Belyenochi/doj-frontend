import React, { Component, PropTypes } from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { white } from 'material-ui/styles/colors';

function getStyles(props, context) {
  const styles = {
    root: {
      position: 'fixed',
      top: 0,
    },
  };

  return styles;
}

class Header extends Component {
  static propTypes = {
    showIcon: PropTypes.bool,
    style: PropTypes.object,
    onClick: PropTypes.func,
  };

  render() {
    const styles = getStyles(this.props, this.context);

    const {
      showIcon,
      style,
      onClick,
      ...other,
    } = this.props;

    const iconElementLeft = (
      <IconButton
        onClick={onClick}
      >
        <Menu color={white}>apps</Menu>
      </IconButton>
    );

    return (
      <AppBar
        style={Object.assign({}, styles.root, style)}
        showMenuIconButton={showIcon}
        iconElementLeft={iconElementLeft}
        zDepth={0}
        {...other}
      />
    );
  };
}

export default Header;
