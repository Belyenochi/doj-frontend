import React, { Component } from 'react';
import Title from 'react-title-component';
import { render } from "react-dom";

class Layout extends Component {
  render() {
    return (
      <div>
        <Title render="Diverse Online Judge" />
        Layout
        {this.props.children}
      </div>
    );
  }
}

export default Layout;
