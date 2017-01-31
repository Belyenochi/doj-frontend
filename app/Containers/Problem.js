import React, { Component, PropTypes } from 'react';
import Title from 'react-title-component';

import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField'

import MarkdownElement from '../Components/MarkdownElement';

function getData(pid) {
  const data = {
    1000: {
      title: 'A+B Problem',
      tlpt: 1,
      mlpt: 256,
      content: `
## Description
Calculate \`$a+b$\`
## Input
Two integer \`$a, b$\` \`$(0 \\leq a, b \\leq 10)$\`
## Code
\`\`\` cpp
int main() {
  int a = 1 + 2;
  return 0;
}
\`\`\`
      `,
    },
    1001: {
      title: '鸡兔同笼',
      tlpt: 1,
      mlpt: 256,
      content: `
## Code
\`\`\` math
a = b ^ 2

c = \\sum_{i=1}^{n} a_i
\`\`\`
      `,
    },
  };

  return data[pid];
}


function getStyles(props, context) {
  const {
    baseTheme,
  } = context.muiTheme;

  const styles = {
    root: {
      fontFamily: baseTheme.fontFamily,
    },
    headline: {
      marginTop: 20,
      marginBottom: 20,
      width: '100%',
      textAlign: 'center',
    },
    title: {
      margin: 10,
    },
    button: {
      margin: 20,
    },
  };

  return styles;
}

class Problem extends Component {
  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    code: '',
  };

  handleChange = (event) => {
    this.setState({
      code: event.target.value,
    });
  };

  handleSubmit = () => {
    alert('success');
  }

  handleCancel = () => {
    this.setState({
      code: '',
    });
  }

  render() {
    const {
      pid,
    } = this.props.params;

    const {
      code,
    } = this.state;

    const styles = getStyles(this.props, this.context);

    const data = getData(pid);

    return (
      <div style={styles.root}>
        <Title render={(prev) => `Problem ${pid} · ${prev}`} />
        <div style={styles.headline}>
          <h1 style={styles.title}>{pid + ': ' + data.title}</h1>
          <div>{`time limit per test: ${data.tlpt} seconds`}</div>
          <div>{`memory limit per test: ${data.mlpt} megabytes`}</div>
        </div>
        <Tabs>
          <Tab label="content">
            <MarkdownElement text={data.content} />
          </Tab>
          <Tab label="submit">
            <TextField
              hintText="Your Code"
              multiLine={true}
              fullWidth={true}
              value={code}
              onChange={this.handleChange}
            />
            <div style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
              <RaisedButton
                label="Submit"
                primary={true}
                style={styles.button}
                onClick={this.handleSubmit}
              />
              <RaisedButton
                label="Clear"
                style={styles.button}
                onClick={this.handleCancel}
              />
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Problem;