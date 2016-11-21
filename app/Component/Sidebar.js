import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom'
import { Link } from 'react-router'

import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import IconHome from 'material-ui/svg-icons/action/home';
import IconList from 'material-ui/svg-icons/editor/format-list-numbered';

const SelectableList = makeSelectable(List);

class Sidebar extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  render() {
    const { open, docked, style, action, pathname } = this.props;
    const router = this.context.router;

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
          onChange={(event, value) => {
            router.push(value);
            action.closeSidebar();
          }}
        >
          <Subheader>Person</Subheader>
          <Subheader>Common</Subheader>
          <ListItem
            leftIcon={<IconHome />}
            primaryText="Home"
            value="/"
          />
          <ListItem
            leftIcon={<IconList />}
            primaryText="Problem"
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem primaryText="All Problem" value="/problem" />,
            ]}
          />
        </SelectableList>
      </Drawer>
    );
  }
}

export default Sidebar;
