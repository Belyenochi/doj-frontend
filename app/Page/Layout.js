import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from 'react-title-component';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import withWidth, { SMALL, MEDIUM, LARGE } from 'material-ui/utils/withWidth';

import action from '../Action';
import Sidebar from '../Component/Sidebar';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const style = {
  main: {
    paddingLeft: 0,
  },
};

class Layout extends Component {
  constructor(props) {
    super(props);
    this.props.action.initSidebar();
    this.props.action.initStyle('main', style.main);
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
    let { children, SidebarProps } = this.props;
    let { open, fixed } = SidebarProps;
    let style = this.props.Style;

    return (
      <div>
        <Title render="Diverse Online Judge" />
        <Sidebar
          id="sidebar"
          open={fixed || open}
          docked={fixed}
          style={style}
        />
        <div id="main" style={style.main}>
          <Header id="header" />
          <div id="content">{children}</div>
          <Footer id="footer" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    SidebarProps: state.Sidebar,
    Style: state.Style,
  };
};

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(action, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(withWidth()(Layout));
