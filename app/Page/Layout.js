import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from 'react-title-component';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Action from '../Action';

import withWidth, { SMALL, MEDIUM, LARGE } from 'material-ui/utils/withWidth';

import matchMedia from 'matchmedia';

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
    }
    else {
      this.props.action.unfixedSidebar();
    }
  }

  render() {
    console.log(matchMedia);

    let { children, action } = this.props;
    let { open, fixed } = this.props.sidebarProps;
    let style = this.props.style;

    const smallWidth = 768;
    const mediumWidth = 992;
    const largeWidth = 1200;

    return (
      <div>
        <Title render="Diverse Online Judge" />
        <Sidebar
          open={fixed || open}
          docked={fixed}
          style={style}
          action={action}
        />
        <div style={style.main}>
          <Header
            showIcon={!fixed}
            style={style}
            action={action}
          />
          <div style={style.content}>{children}</div>
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
