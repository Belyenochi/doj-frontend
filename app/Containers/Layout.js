import React, { Component, PropTypes } from 'react';
import Title from 'react-title-component';

import { StyleRoot } from 'radium';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import Actions from '../Actions';
import withWidth from '../utils/withWidth';
import _ from "lodash";

function getStyles(props, context) {
  const { screenWidth } = props;
  const { spacing } = context.muiTheme;

  const styles = {
    content: {
      paddingTop: spacing.desktopKeylineIncrement,
      minHeight: 560,
      margin: '0px auto',
      maxWidth: screenWidth >= 3 ? '1024px' : '700px',
    },
    main: {
      marginLeft: screenWidth >= 2 ? '256px' : '0px',
    },
  };

  return styles;
}

@withWidth({
  widths: {
    1: 768,
    2: 992,
    3: 1200
  }
})
class Layout extends Component {
  constructor(props) {
    super(props);
    this.props.actions.initSidebar();
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
  };

  static propTypes = {
    actions: PropTypes.object.isRequired,
    children: PropTypes.node,
    location: PropTypes.object,
    screenWidth: PropTypes.number.isRequired,
  };

  render() {
    const {
      actions,
      children,
      location,
      screenWidth,
    } = this.props;

    const styles = getStyles(this.props, this.context);

    const open = this.props.sidebarProps.open;
    const router = this.context.router;

    const title = _
      .chain([
        ['/pl', 'Problem List'],
        ['/p', 'Problem'],
        ['/', 'Home'],
      ])
      .filter((value) => router.isActive(value[0]))
      .head()
      .value()[1];

    const sidebar = (
      (match => (
        <Sidebar
          docked={match}
          onRequestChange={(status) => actions.switchSidebar(status)}
          open={match || open}
          pathname={location.pathname}
        />
      ))(screenWidth >= 2)
    );

    const header = (
      (match => (
        <Header
          onClick={() => actions.openSidebar()}
          showIcon={!match}
          title={title}
        />
      ))(screenWidth >= 2)
    );

    return (
      <div>
        <Title render="Diverse Online Judge" />
        {/*StyleRoot for Radium*/}
        <StyleRoot>
          <div>
            {sidebar}
            <div style={styles.main}>
              {header}
              <div style={styles.content}>{children}</div>
              <Footer />
            </div>
          </div>
        </StyleRoot>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    sidebarProps: state.sidebar,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
