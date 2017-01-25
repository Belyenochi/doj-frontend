import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import IconHome from 'material-ui/svg-icons/action/home';
import IconList from 'material-ui/svg-icons/editor/format-list-numbered';
import Filter1 from 'material-ui/svg-icons/image/filter-1';
import Filter2 from 'material-ui/svg-icons/image/filter-2';
import Filter3 from 'material-ui/svg-icons/image/filter-3';

const SelectableList = makeSelectable(List);

function getStyles(props, context) {
  const { appBar, spacing } = context.muiTheme;

  const styles = {
    root: {},
    logo: {
      backgroundColor: appBar.color,
      color: appBar.textColor,
      fontSize: 24,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      textAlign: 'center',
    },
    list: {},
  };

  return styles;
}

class Sidebar extends Component {
  static propTypes = {
    docked: PropTypes.bool,
    listStyle: PropTypes.object,
    logoStyle: PropTypes.object,
    onRequestChange: PropTypes.func,
    open: PropTypes.bool,
    pathname: PropTypes.string,
    style: PropTypes.object,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  };

  render() {
    const {
      docked,
      listStyle,
      logoStyle,
      onRequestChange,
      open,
      pathname,
      style,
      ...other
    } = this.props;

    const styles = getStyles(this.props, this.context);

    const router = this.context.router;

    const nestedItems = [
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
    ];

    return (
      <Drawer
        docked={docked}
        onRequestChange={onRequestChange}
        open={open}
        style={Object.assign({}, styles.root, style)}
        {...other}
      >
        <Link activeStyle={{ textDecoration: 'none' }} to="/">
          <div style={Object.assign({}, styles.logo, logoStyle)}>Diverse OJ</div>
        </Link>
        <SelectableList
          onChange={(event, value) => {
            router.push(value);
            onRequestChange(false);
          }}
          style={Object.assign({}, styles.list, listStyle)}
          value={pathname}
        >
          <Subheader>Person</Subheader>
          <Subheader>Common</Subheader>
          <ListItem
            leftIcon={<IconHome />}
            primaryText="Home"
            value="/"
          />
          <ListItem
            nestedItems={nestedItems}
            leftIcon={<IconList />}
            primaryText="Problem"
            primaryTogglesNestedList={true}
          />
        </SelectableList>
      </Drawer>
    );
  };
}

export default Sidebar;
