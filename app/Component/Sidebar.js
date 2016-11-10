import React, { Component } from 'react';
import { render } from 'react-dom'
import { Link } from 'react-router'

import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

class Sidebar extends Component {
  render() {
    const { open, docked, style, action } = this.props;

    return (
      <Drawer
        open={open}
        docked={docked}
        style={style.sidebar}
        onRequestChange={(open) => action.switchSidebar(open)}
      >
        <Link to="/" activeStyle={{ textDecoration: 'none' }}>
          <div style={style.logo}>Diverse OJ</div>
        </Link>
        <div style={style.content}>
          Sidebar
        </div>
      </Drawer>
    );
  }
}

export default Sidebar;
