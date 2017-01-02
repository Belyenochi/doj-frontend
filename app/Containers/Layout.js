import React, { Component, PropTypes } from 'react';
import Title from 'react-title-component';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import Actions from '../Actions';

function getStyles(props, context) {
  const { screenWidth } = context;
  const { spacing } = context.muiTheme;

  const styles = {
    content: {
      paddingTop: spacing.desktopKeylineIncrement,
      minHeight: 560,
      margin: '0px auto',
      maxWidth: screenWidth >= 3 ? '1024px' : '700px',
    },
    main: {
      marginLeft: screenWidth >= 2 ? '256px' : '0px',
    },
    clear: {
      clear: 'both',
    },
  };

  return styles;
}

class Layout extends Component {
  constructor(props) {
    super(props);
    this.props.actions.initSidebar();
  };

  static contextTypes = {
    screenWidth: PropTypes.number.isRequired,
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    let { children, location, actions } = this.props;
    let { open } = this.props.sidebarProps;
    let { screenWidth } = this.context;

    const styles = getStyles(this.props, this.context);

    const sidebar = (
      (match => (
        <Sidebar
          open={match || open}
          docked={match}
          actions={actions}
          pathname={location.pathname}
        />
      ))(screenWidth >= 2)
    );

    const header = (
      (match => (
        <Header
          showIcon={!match}
          actions={actions}
        />
      ))(screenWidth >= 2)
    );

    return (
      <div>
        <Title render="Diverse Online Judge" />
        <div>
          {sidebar}
          <div style={styles.main}>
            {header}
            <div style={styles.content}>{children}</div>
            <br style={styles.clear} />
            <Footer />
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    sidebarProps: state.sidebar,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
