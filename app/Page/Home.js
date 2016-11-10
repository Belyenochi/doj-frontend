import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from 'react-title-component';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Paper from 'material-ui/Paper';

import Action from '../Action';

class Home extends Component {
  render() {
    let { style } = this.props;

    return (
      <div>
        <Title render={(prev) => `Home - ${prev}`} />
        {/* <Grid fluid={true}>
          <Row> */}
            <Col xs={12} sm={8} md={6}>
              <Paper style={style.paper} zDepth={2}>
                Hello from Home Component, this is content.
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
              </Paper>
            </Col>
            <Col xs={12} sm={4} md={3}>
              <Paper style={style.paper} zDepth={2}>
                No Problem.
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
              </Paper>
            </Col>
          {/* </Row>
        </Grid> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    style: state.style,
  };
};

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(Action, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
