import React, { Component } from 'react';
import Title from 'react-title-component';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../Actions';

import Paper from 'material-ui/Paper';
import MediaQuery from 'react-responsive';

import Constant from '../utils/constant';

class Home extends Component {
  render() {
    let { constant, styles } = this.props;
    let { smallWidth, mediumWidth, largeWidth } = Constant

    const center = (
      <Paper style={styles.paper} zDepth={2}>
        Hello from Home Component, this is content.
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br />
      </Paper>
    );

    const right = (
      <Paper style={styles.paper} zDepth={2}>
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
      styles: state.styles,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
