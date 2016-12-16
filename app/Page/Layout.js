import React, { Component } from 'react';
import Title from 'react-title-component';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Action from '../Action';

import MediaQuery from 'react-responsive';

import Constant from '../utils/constant';
import Style from '../styles';
import Sidebar from '../Component/Sidebar';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.props.action.initSidebar();
    this.props.action.initStyle(Style);
  }

  render() {
    let { children, location, action, style } = this.props;
    let { open } = this.props.sidebarProps;
    let { smallWidth, mediumWidth, largeWidth } = Constant;

    const undockedSidebar = (
      <Sidebar
        open={open}
        docked={false}
        style={style}
        action={action}
        pathname={location.pathname}
      />
    );

    const dockedSidebar = (
      <Sidebar
        open={true}
        docked={true}
        style={style}
        action={action}
        pathname={location.pathname}
      />
    );

    const showHeader = (
      <Header
        showIcon={true}
        style={style}
        action={action}
      />
    );

    const unshowHeader = (
      <Header
        showIcon={false}
        style={style}
        action={action}
      />
    );

    const clearFooter = (
      <div style={{ clear: 'both' }}>
        <Footer style={style}></Footer>
      </div>
    );

    return (
      <div>
        <Title render="Diverse Online Judge" />

        <MediaQuery maxWidth={smallWidth - 1}>
          {undockedSidebar}
          <div style={{ marginLeft: '0px' }}>
            <div style={style.main}>
              {showHeader}
              <div style={{ ...style.content }}>{children}</div>
              {clearFooter}
            </div>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={smallWidth} maxWidth={mediumWidth - 1}>
          {undockedSidebar}
          <div style={{ marginLeft: '0px' }}>
            <div style={style.main}>
              {showHeader}
              <div style={{ ...style.content, maxWidth: '700px' }}>{children}</div>
              {clearFooter}
            </div>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={mediumWidth} maxWidth={largeWidth - 1}>
          {dockedSidebar}
          <div style={{ marginLeft: '256px' }}>
            <div style={style.main}>
              {unshowHeader}
              <div style={{ ...style.content, maxWidth: '700px' }}>{children}</div>
              {clearFooter}
            </div>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={largeWidth}>
          {dockedSidebar}
          <div style={{ marginLeft: '256px' }}>
            <div style={style.main}>
              {unshowHeader}
              <div style={{ ...style.content, maxWidth: '1024px' }}>{children}</div>
              {clearFooter}
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    constant: state.constant,
    sidebarProps: state.sidebar,
    style: state.style,
  };
};

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(Action, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
