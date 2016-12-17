import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import IconHome from 'material-ui/svg-icons/action/home';
import IconList from 'material-ui/svg-icons/editor/format-list-numbered';
import Filter1 from 'material-ui/svg-icons/image/filter-1';
import Filter2 from 'material-ui/svg-icons/image/filter-2';
import Filter3 from 'material-ui/svg-icons/image/filter-3';

const SelectableList = makeSelectable(List);

class Sidebar extends Component {
  static propTypes = {
    open: PropTypes.bool,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  render() {
    const { open, docked, styles, actions, pathname } = this.props;
    const router = this.context.router;

    return (
      <Drawer
        open={open}
        docked={docked}
        style={styles.sidebar}
        onRequestChange={(open) => actions.switchSidebar(open)}
      >
        <Link to="/" activeStyle={{ textDecoration: 'none' }}>
          <div style={styles.logo}>Diverse OJ</div>
        </Link>
        <SelectableList
          value={pathname}
          onChange={(event, value) => {
            router.push(value);
            actions.closeSidebar();
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
              <ListItem
                leftIcon={<Filter1 />}
                primaryText="All Problem"
                value="/pl"
              />,
              <ListItem
                leftIcon={<Filter2 />}
                primaryText="Local Problem"
                value="/pl/l"
              />,
              <ListItem
                leftIcon={<Filter3 />}
                primaryText="Remote Problem"
                value="/pl/r"
              />,
            ]}
          />
        </SelectableList>
      </Drawer>
    );
  };
}

export default Sidebar;
