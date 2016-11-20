import React, { Component } from 'react';
import { render } from 'react-dom';
import Title from 'react-title-component';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Action from '../Action';

import MediaQuery from 'react-responsive';

import Constant from '../Util/Constant';
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

  render() {
    let { children, action, style } = this.props;
    let { open } = this.props.sidebarProps;
    let { smallWidth, mediumWidth, largeWidth } = Constant;

    return (
      <div>
        <Title render="Diverse Online Judge" />

        <MediaQuery maxWidth={smallWidth - 1}>
          <Sidebar
            open={open}
            docked={false}
            style={style}
            action={action}
          />
          <div>
            <div style={style.main}>
              <Header
                showIcon={true}
                style={style}
                action={action}
              />
              <div style={{ ...style.content }}>{children}</div>
              <div style={{ clear: 'both' }}>
                <Footer style={style}></Footer>
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={smallWidth} maxWidth={mediumWidth - 1}>
          <Sidebar
            open={open}
            docked={false}
            style={style}
            action={action}
          />
          <div>
            <div style={style.main}>
              <Header
                showIcon={true}
                style={style}
                action={action}
              />
              <div style={{ ...style.content, maxWidth: '700px' }}>{children}</div>
              <div style={{ clear: 'both' }}>
                <Footer style={style}></Footer>
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={mediumWidth} maxWidth={largeWidth - 1}>
          <Sidebar
            open={true}
            docked={true}
            style={style}
            action={action}
          />
          <div style={{ marginLeft: '256px' }}>
            <div style={style.main}>
              <Header
                showIcon={false}
                style={style}
                action={action}
              />
              <div style={{ ...style.content, maxWidth: '700px' }}>{children}</div>
              <div style={{ clear: 'both' }}>
                <Footer style={style}></Footer>
              </div>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery minWidth={largeWidth}>
          <Sidebar
            open={true}
            docked={true}
            style={style}
            action={action}
          />
          <div style={{ marginLeft: '256px' }}>
            <div style={style.main}>
              <Header
                showIcon={false}
                style={style}
                action={action}
              />
              <div style={{ ...style.content, maxWidth: '1024px' }}>{children}</div>
              <div style={{ clear: 'both' }}>
                <Footer style={style}></Footer>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    constant: state.constant,
    sidebarProps: state.sidebar,
    style: state.style,
  };
};

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(Action, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
