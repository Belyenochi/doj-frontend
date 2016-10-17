import React, { Component } from 'react';
import { render } from "react-dom";
import Title from 'react-title-component';

import AppBar from 'material-ui/AppBar';
import spacing from 'material-ui/styles/spacing';
import { grey900 } from 'material-ui/styles/colors';
import withWidth, { LARGE } from 'material-ui/utils/withWidth';

import Sidebar from '../component/Sidebar';

const styles = {
  appBar: {
    position: 'fixed',
    top: 0,
  },
  sidebar: {
  },
  content: {
    paddingTop: spacing.desktopKeylineIncrement,
    minHeight: 400,
    margin: spacing.desktopGutter,
  },
  footer: {
    backgroundColor: grey900,
    textAlign: 'center',
  },
};

class Layout extends Component {
  state = {
    open: false,
  };

  handleLeftIconButtonTouchTap = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  handleRequestChange = (open) => {
    this.setState({
      open: open,
    });
  }

  getStyles() {
    return styles;
  }

  render() {
    let { children, width } = this.props;
    let { open } = this.state;
    let docked = false;
    let showMenuIconButton = true;
    let styles = this.getStyles();

    if (width === LARGE) {
      docked = true;
      open = true;
      showMenuIconButton = false;

      styles.content.paddingLeft = 256;
      styles.footer.paddingLeft = 256;
    }

    return (
      <div>
        <Title render="Diverse Online Judge" />
        <AppBar
          style={styles.appBar}
          showMenuIconButton={showMenuIconButton}
          onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap}
        />
        <Sidebar
          style={styles.Sidebar}
          open={open}
          docked={docked}
          onRequestChange={this.handleRequestChange}
        />
        <div
          style={styles.content}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default withWidth()(Layout);
