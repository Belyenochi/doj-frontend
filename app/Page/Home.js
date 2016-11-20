import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from 'react-title-component';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Action from '../Action';

import Paper from 'material-ui/Paper';
import MediaQuery from 'react-responsive';

import Constant from '../Util/Constant';

class Home extends Component {
  render() {
    let { constant, style } = this.props;
    let { smallWidth, mediumWidth, largeWidth } = Constant

    const center = (
      <Paper style={style.paper} zDepth={2}>
        Hello from Home Component, this is content.
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
      </Paper>
    );

    const right = (
      <Paper style={style.paper} zDepth={2}>
        No Problem.
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
      </Paper>
    );

    return (
      <div>
        <Title render={(prev) => `Home · ${prev}`} />

        <MediaQuery maxWidth={smallWidth - 1}>
          <div>
            <div style={{ margin: '20px' }}>{center}</div>
            <div style={{ margin: '20px' }}>{right}</div>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={smallWidth} maxWidth={mediumWidth - 1}>
          <div style={{ margin: '20px' }}>
            <div style={{ width: '224px', float: 'right' }}>{right}</div>
            <div style={{ marginRight: '224px' }}>{center}</div>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={mediumWidth} maxWidth={largeWidth - 1}>
          <div style={{ margin: '20px' }}>
            <div style={{ width: '256px', float: 'right' }}>{right}</div>
            <div style={{ marginRight: '256px' }}>{center}</div>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={largeWidth}>
          <div style={{ margin: '20px' }}>
            <div style={{ width: '288px', float: 'right' }}>{right}</div>
            <div style={{ marginRight: '288px' }}>{center}</div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    constant: state.constant,
    style: state.style,
  };
};

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(Action, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
