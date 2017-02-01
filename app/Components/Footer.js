import React, { Component, PropTypes } from 'react';

function getStyles(props, context) {
  const { palette } = context.muiTheme;

  const styles = {
    root: {
      marginTop: 20,
      padding: 12,
      backgroundColor: palette.accent3Color,
      textAlign: 'center',
    },
  };

  return styles;
}

class Footer extends Component {
  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const styles = getStyles(this.props, this.context);

    return (
      <div style={styles.root}>
        <div>
          <h5>Help Website Grow</h5>
          <p>
            Discuss new features, future goals, general problems or questions, or anything else you can think of.
          </p>
          <a target="_blank" href="https://github.com/ChouUn/acm.zucc.edu.cn/issues">Issues</a>
        </div>
      </div>
    );
  };
}

export default Footer;
