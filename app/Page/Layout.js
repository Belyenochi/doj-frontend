import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from 'react-title-component';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Action from '../Action';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import withWidth, { SMALL, MEDIUM, LARGE } from 'material-ui/utils/withWidth';

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
    let { children, action } = this.props;
    let { open, fixed } = this.props.sidebarProps;
    let style = this.props.style;

    return (
      <div>
        <Title render="Diverse Online Judge" />
        <Grid fluid={true}>
          <Row>
            <Col md={fixed ? 3 : 0} style={{ height: fixed ? 1000 : 0 }}>
              <Sidebar
                open={fixed || open}
                docked={fixed}
                style={style}
                action={action}
              />
            </Col>
            <div style={style.main}>
              <Header
                showIcon={!fixed}
                style={style}
                action={action}
              />
              <Col md={fixed ? 9 : 12}>
                <div style={style.content}>{children}</div>
              </Col>
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
