import React, { Component } from 'react';
import { render } from 'react-dom'

import Drawer from 'material-ui/Drawer';

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
        Sidebar
      </Drawer>
    );
  }
}

export default Sidebar;
