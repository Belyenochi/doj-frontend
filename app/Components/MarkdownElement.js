import React, { Component, PropTypes } from 'react';
import markdownIt from 'markdown-it';

const markdown = markdownIt('commonmark');

function getStyles(props, context) {
  const styles = {
    root: {},
  };

  return styles;
}

class MarkdownElement extends Component {
  static propTypes = {
    style: PropTypes.object,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    text: '',
  };

  render() {
    const {
      style,
      text,
    } = this.props;

    const styles = getStyles(this.props, this.context);

    return (
      <div
        style={Object.assign({}, styles.root, style)}
        dangerouslySetInnerHTML={{__html: markdown.render(text)}}
      />
    );
  }
}

export default MarkdownElement;