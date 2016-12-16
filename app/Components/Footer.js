import React, { Component } from 'react';

class Footer extends Component {
  render() {
    let { styles } = this.props;

    return (
      <div style={styles.footer}>
        <div>
          <h5>Help Website Grow</h5>
          <p>
            Discuss new features, future goals, general problems or questions, or anything else you can think of.
          </p>
          <a target="_blank" href="https://github.com/ChouUn/acm.zucc.edu.cn/issues">Issues</a>
        </div>
      </div>
    );
  }
}

export default Footer;
