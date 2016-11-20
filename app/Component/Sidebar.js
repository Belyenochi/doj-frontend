import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import { Link } from 'react-router'

import Drawer from 'material-ui/Drawer';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const SelectableList = makeSelectable(List);

class Sidebar extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  render() {
    const { open, docked, style, action, pathname } = this.props;
  
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
        <SelectableList
          value={pathname}
          onChange={(event, value) => { this.context.router.push(value); }}
        >
          <Subheader>Online Judge</Subheader>
          <ListItem primaryText="Home" value="/" />
          <ListItem
            primaryText="Problem"
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem primaryText="All Problem" value="/problem" />
            ]}
          />
        </SelectableList>
      </Drawer>
    );
  }
}

export default Sidebar;
