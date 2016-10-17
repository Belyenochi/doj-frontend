import React, { Component } from 'react';
import { render } from "react-dom";
import Title from 'react-title-component';

import AppBar from 'material-ui/AppBar';
import spacing from 'material-ui/styles/spacing';
import { grey900 } from 'material-ui/styles/colors';
import withWidth, { LARGE } from 'material-ui/utils/withWidth';

import Sidebar from '../component/Sidebar';

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

  getStyle() {
    let style = {
      appBar: {
        position: 'fixed',
        top: 0,
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
    return style;
  }

  render() {
    let { children, width } = this.props;
    let { open } = this.state;
    let docked = false;
    let showMenuIconButton = true;
    let style = this.getStyle();

    if (width === LARGE) {
      docked = true;
      open = true;
      showMenuIconButton = false;

      style.content.paddingLeft = 256;
      style.footer.paddingLeft = 256;
    }

    return (
      <div>
        <Title render="Diverse Online Judge" />
        <AppBar
          style={style.appBar}
          showMenuIconButton={showMenuIconButton}
          onLeftIconButtonTouchTap={this.handleLeftIconButtonTouchTap}
        />
        <Sidebar
          open={open}
          docked={docked}
          onRequestChange={this.handleRequestChange}
        />
        <div
          style={style.content}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default withWidth()(Layout);
