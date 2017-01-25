import React, { Component, PropTypes } from 'react';
import EventListener from 'react-event-listener';

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
  state = {
    zDepth: 0,
  };

  handleScroll = () => {
    this.setState({
      zDepth: window.scrollY ? 2 : 0,
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) return true;
    if (this.state.zDepth !== nextState.zDepth) return true;
    return false;
  }

  render() {
    const {
      onClick,
      showIcon,
      style,
      title,
      ...other,
    } = this.props;

    const {
      zDepth,
    } = this.state;

    const styles = getStyles(this.props, this.context);

    const iconElementLeft = (
      <IconButton onClick={onClick}>
        <Menu color={white}>apps</Menu>
      </IconButton>
    );

    return (
      <div>
        <EventListener
          target={window}
          onScroll={this.handleScroll}
        >
        </EventListener>
        <AppBar
          iconElementLeft={iconElementLeft}
          showMenuIconButton={showIcon}
          style={Object.assign({}, styles.root, style)}
          title={showIcon ? title : ''}
          zDepth={zDepth}
          {...other}
        />
      </div>
    );
  };

  static propTypes = {
    onClick: PropTypes.func,
    showIcon: PropTypes.bool,
    style: PropTypes.object,
    title: PropTypes.string,
  };
}

export default Header;
