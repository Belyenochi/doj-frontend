import React, { Component } from 'react';
import { render } from 'react-dom';

import { grey300 } from 'material-ui/styles/colors';;

class Footer extends Component {
  render() {
    const style = {
      backgroundColor: grey300,
      textAlign: 'center',
    };

    return (
      <div style={style}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              Footer
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
