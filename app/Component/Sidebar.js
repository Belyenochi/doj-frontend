import React, { Component } from 'react';
import { render } from 'react-dom'

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

class Sidebar extends Component {
  render() {
    const { open, docked, style } = this.props;
    return (
      <Drawer
        open={open}
        docked={docked}
        style={style.sidebar}
        zDepth={1}
      >
        <div style={style.logo}>
          Diverse OJ
        </div>
        <div style={style.content}>
          Sidebar
        </div>
      </Drawer>
    );
  }
}

export default Sidebar;
