import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from 'react-title-component';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
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
        // paddingLeft: 256,
      });
    }
    else {
      this.props.action.unfixedSidebar();
      this.props.action.adjustStyle('main', {
        // paddingLeft: 0,
      });
    }
  }

  render() {
    let { children, sidebarProps } = this.props;
    let { open, fixed } = sidebarProps;
    let style = this.props.style;

    const sidebar = fixed
      ? (
        <Col md={3} style={{height: '1000px'}}>
          <Sidebar
            open={fixed || open}
            docked={fixed}
            style={style}
          />
        </Col>
      )
      : (
        <Sidebar
          open={fixed || open}
          docked={fixed}
          style={style}
        />
      );

    return (
      <div>
        <Title render="Diverse Online Judge" />
        <Grid fluid={true}>
          <Row>
            {sidebar}
            <div style={style.main}>
              <Header style={style} showIcon={!fixed} />
              <div style={style.content}>{children}</div>
            </div>
          </Row>
          <Row>
            <Footer style={style} />
          </Row>
        </Grid>
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
