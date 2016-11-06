import React, { Component } from 'react';
import { render } from 'react-dom'

import Drawer from 'material-ui/Drawer';

class Header extends Component {
  render() {
    const { open, docked, style } = this.props;
    return (
      <Drawer
        open={open}
        docked={docked}
      >
        Sidebar
      </Drawer>
    );
  }
}

export default Header;
