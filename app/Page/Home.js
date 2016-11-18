import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from 'react-title-component';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Action from '../Action';

import Paper from 'material-ui/Paper';
import MediaQuery from 'react-responsive';

class Home extends Component {
  render() {
    let { style } = this.props;

    const smallWidth = 768, mediumWidth = 992, largeWidth = 1200;

    return (
      <div>
        <Title render={(prev) => `Home · ${prev}`} />

        <MediaQuery maxWidth={smallWidth - 1}>
          <div style={{ margin: '20px' }}>
            <div>
              <Paper style={style.paper} zDepth={2}>
                Hello from Home Component, this is content.
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
              </Paper>
            </div>
            <div>
              <Paper style={style.paper} zDepth={2}>
                No Problem.
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
              </Paper>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={smallWidth}>
          <div style={{ margin: '20px' }}>
            <div style={{ width: '256px', float: 'right' }}>
              <Paper style={style.paper} zDepth={2}>
                No Problem.
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
              </Paper>
            </div>
            <div style={{ marginRight: '256px' }}>
              <Paper style={style.paper} zDepth={2}>
                Hello from Home Component, this is content.
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
              </Paper>
            </div>
          </div>
        </MediaQuery>

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
