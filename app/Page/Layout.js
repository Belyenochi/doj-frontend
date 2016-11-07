import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from 'react-title-component';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import withWidth, { SMALL, MEDIUM, LARGE } from 'material-ui/utils/withWidth';

import Action from '../Action';
import Style from '../Style';
import Sidebar from '../Component/Sidebar';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.props.action.initSidebar();
    this.props.action.initStyle(Style);
  }

  componentWillReceiveProps(nextProps) {
    let { width } = nextProps;
    if (width === this.props.width) return;
    if (width === LARGE) {
      this.props.action.fixedSidebar();
      this.props.action.adjustStyle('main', {
        paddingLeft: 256,
      });
    }
    else {
      this.props.action.unfixedSidebar();
      this.props.action.adjustStyle('main', {
        paddingLeft: 0,
      });
    }
  }

  render() {
    let { children, sidebarProps } = this.props;
    let { open, fixed } = sidebarProps;
    let style = this.props.style;

    return (
      <div>
        <Title render="Diverse Online Judge" />
        <Sidebar id="sidebar"
          open={fixed || open}
          docked={fixed}
          style={style}
        />
        <div id="main" style={style.main} >
          <Header id="header" style={style.header} showIcon={!fixed} />
          <div id="content" style={style.content} >{children}</div>
          <Footer id="footer" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sidebarProps: state.sidebar,
    style: state.style,
  };
};

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(Action, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(Layout));
