import React, { Component, PropTypes } from 'react';

import matchMedia from 'matchmedia';

import constants from '../utils/constants';

class WithWidth extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static childContextTypes = {
    width: PropTypes.number,
  };

  state = {
    width: 0,
  };

  getChildContext() {
    return {
      width: this.state.width,
    };
  }

  componentWillMount() {
    const { widths } = constants;

    this._mql = Object.keys(widths).reduce((prev, key) => {
      let value = widths[key];
      prev[key] = matchMedia(`(min-width: ${value}px)`);
      prev[key].addListener(this.updateWidth);
      return prev;
    }, {});
    this.updateWidth();
  }

  componentWillReceiveProps(nextProps) {
    this.updateWidth();
  }

  componentWillUnmount() {
    for (let [k, v] of this._mql) {
      v.removeListener(this.updateWidth);
    }
  }

  queryWidth = () => {
    return Object.keys(this._mql).reduce((prev, key) => {
      if (this._mql[key].matches === true) ++prev;
      return prev;
    }, 0);
  };

  updateWidth = () => {
    let newWidth = this.queryWidth();
    if (this.state.width === newWidth) return;
    this.setState({
      width: newWidth,
    });
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

export default WithWidth;
