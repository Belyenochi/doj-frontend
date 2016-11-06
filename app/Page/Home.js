import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from 'react-title-component';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// import * as action from '../Action';
import action from '../Action';

class Home extends Component {
  render() {
    let { SidebarProps } = this.props;

    return (
      <div>
        <Title render={(prev) => `Home - ${prev}`} />
        Hello from Home Component, this is content.
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    SidebarProps: state.Sidebar,
  };
};

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(action, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
