import React, { Component, PropTypes } from 'react';
import Title from 'react-title-component';
import Radium from 'radium';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Paper from 'material-ui/Paper';

import Actions from '../Actions';

function getStyles(props, context) {
  const width = 768;

  const styles = {
    root: {
      position: 'relative',
      padding: '10px',
      display: 'flex',
      justifyContent: 'center',
      [`@media (max-width: ${width - 1}px)`]: {
        flexDirection: 'column',
      },
      [`@media (min-width: ${width}px)`]: {
        flexDirection: 'row',
      },
    },
    center: {
      flex: '1',
    },
    right: {
      flex: 'none',
      [`@media (min-width: ${width}px)`]: {
        width: '256px',
      },
    },
    paper: {
      margin: '10px',
      // marginRight: '10px',
    },
  };

  return styles;
}

@Radium
class Home extends Component {
  render() {
    const styles = getStyles(this.props, this.context);

    const center = (
      <div style={styles.center}>
        <Paper style={styles.paper} zDepth={2}>
          Hello from Home Component, this is content.
          <br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br />
        </Paper>
      </div>
    );

    const right = (
      <div style={styles.right}>
        <Paper style={styles.paper} zDepth={2}>
          No Problem.
          <br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br />
        </Paper>
      </div>
    );

    return (
      <div>
        <Title render={(prev) => `Home · ${prev}`} />
        <div style={styles.root}>
          {center}
          {right}
        </div>
        <br style={styles.clear} />
      </div>
    );
  };
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
