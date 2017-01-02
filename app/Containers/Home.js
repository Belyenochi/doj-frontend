import React, { Component, PropTypes } from 'react';
import Title from 'react-title-component';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Paper } from 'material-ui';

import Actions from '../Actions';

function getStyles(props, context) {
  const { screenWidth } = context;

  const rightBlockSize = ((width) => {
    if (width === 3) return '288px';
    if (width === 2) return '256px';
    if (width === 1) return '224px';
    return '';
  })(screenWidth);

  const styles = {
    root: {
      position: 'relative',
      padding: '20px',
    },
    paper: {
      marginLeft: '10px',
      marginRight: '10px',
    },
    center: {
      marginBottom: screenWidth > 0 ? '' : '20px',
      marginRight: screenWidth > 0 ? rightBlockSize : '',
    },
    right: {
      marginTop: screenWidth > 0 ? '' : '20px',
      width: rightBlockSize,
      float: screenWidth > 0 ? 'right' : '',
    },
    clear: {
      clear: "both",
    },
  };

  return styles;
}

class Home extends Component {
  static contextTypes = {
    screenWidth: PropTypes.number.isRequired,
  };

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
          {right}
          {center}
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
