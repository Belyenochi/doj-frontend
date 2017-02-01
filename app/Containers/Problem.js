import React, { Component, PropTypes } from 'react';
import Title from 'react-title-component';

import _ from 'lodash';

import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import Snackbar from 'material-ui/Snackbar';
import { Tabs, Tab } from 'material-ui/Tabs';
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

function getLangs() {
  const langs = {
    'gcc': 'GNU GCC 5.1.0',
    'g++03': 'GNU G++03 5.1.0',
    'g++11': 'GNU G++11 5.1.0',
    'g++14': 'GNU G++14 6.2.0',
    'vc++': 'Microsoft Visual C++ 2010',
    'c#': 'C# Mono 3.12.1.0',
    'c#.net': 'MS C# .NET 4.0.30319',
    'java8': 'Java 1.8.0_112',
    'python2': 'Python 2.7.10',
    'python3': 'Python 3.5.2',
    'pascal': 'Free Pascal 2.6.4',
    'delphi': 'Delphi 7',
    'haskell': 'Haskell GHC 7.8.3',
    'javascript': 'JavaScript V8 4.8.0',
    'ruby': 'Ruby 2.0.0p645',
    'php': 'PHP 7.0.12',
    'perl': 'Perl 5.20.1',
    'kotlin': 'Kotlin 1.0.5-2',
    'go': 'Go 1.7.3',
  };

  return langs;
}

function renderLangs(langs) {
  const result = _.reduce(langs, (result, value, key) => {
    result.push(<MenuItem value={key} key={key} primaryText={value} />);
    return result;
  }, []);

  return result;
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
    lang: 'g++03',
    open: false,
  };

  handleLangChange = (event, index, value) => {
    this.setState({
      lang: value,
    });
  };

  handleCodeChange = (event, value) => {
    this.setState({
      code: value,
    });
  };

  handleSubmit = () => {
    this.setState({
      open: true,
      code: '',
    });
  };

  handleCancel = () => {
    this.setState({
      code: '',
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    const {
      pid,
    } = this.props.params;

    const {
      code,
      lang,
      open,
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
            <div style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
              <SelectField
                value={lang}
                onChange={this.handleLangChange}
                floatingLabelText="Language:"
                maxHeight={200}
              >
                {renderLangs(getLangs())}
              </SelectField>
            </div>
            <TextField
              hintText="Your Code"
              multiLine={true}
              fullWidth={true}
              value={code}
              onChange={this.handleCodeChange}
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
              <Snackbar
                open={open}
                message="Submit Success."
                autoHideDuration={4000}
                onRequestClose={this.handleRequestClose}
              />
            </div>
          </Tab>
          <Tab label="status">
            TODO.
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Problem;