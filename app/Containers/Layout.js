import React, { Component } from 'react';
import Title from 'react-title-component';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../Actions';

import MediaQuery from 'react-responsive';

import styles from '../styles';
import constants from '../utils/constants';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.props.actions.initSidebar();
    this.props.actions.initStyles(styles);
  }

  render() {
    let { children, location, actions, styles } = this.props;
    let { open } = this.props.sidebarProps;
    let { smallWidth, mediumWidth, largeWidth } = constants;

    const undockedSidebar = (
      <Sidebar
        open={open}
        docked={false}
        actions={actions}
        pathname={location.pathname}
      />
    );

    const dockedSidebar = (
      <Sidebar
        open={true}
        docked={true}
        actions={actions}
        pathname={location.pathname}
      />
    );

    const showHeader = (
      <Header
        showIcon={true}
        styles={styles}
        actions={actions}
      />
    );

    const unshowHeader = (
      <Header
        showIcon={false}
        styles={styles}
        actions={actions}
      />
    );

    const clearFooter = (
      <div style={{ clear: 'both' }}>
        <Footer styles={styles}></Footer>
      </div>
    );

    return (
      <div>
        <Title render="Diverse Online Judge" />

        <MediaQuery maxWidth={smallWidth - 1}>
          {undockedSidebar}
          <div style={{ marginLeft: '0px' }}>
            <div style={styles.main}>
              {showHeader}
              <div style={{ ...styles.content }}>{children}</div>
              {clearFooter}
            </div>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={smallWidth} maxWidth={mediumWidth - 1}>
          {undockedSidebar}
          <div style={{ marginLeft: '0px' }}>
            <div style={styles.main}>
              {showHeader}
              <div style={{ ...styles.content, maxWidth: '700px' }}>{children}</div>
              {clearFooter}
            </div>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={mediumWidth} maxWidth={largeWidth - 1}>
          {dockedSidebar}
          <div style={{ marginLeft: '256px' }}>
            <div style={styles.main}>
              {unshowHeader}
              <div style={{ ...styles.content, maxWidth: '700px' }}>{children}</div>
              {clearFooter}
            </div>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={largeWidth}>
          {dockedSidebar}
          <div style={{ marginLeft: '256px' }}>
            <div style={styles.main}>
              {unshowHeader}
              <div style={{ ...styles.content, maxWidth: '1024px' }}>{children}</div>
              {clearFooter}
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    sidebarProps: state.sidebar,
    styles: state.styles,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
