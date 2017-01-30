import React, { Component, PropTypes } from 'react';

import _ from 'lodash';

import markdownIt from 'markdown-it';
import hljs from 'highlight.js';
import katex from 'katex';

import 'github-css/index.css';
import 'highlight.js/styles/atom-one-light.css';
import 'katex/dist/katex.min.css'

function getMarkdown() {
  // https://markdown-it.github.io/markdown-it/
  const markdown = markdownIt({
    html:         true,         // Enable HTML tags in source
    xhtmlOut:     true,         // Use '/' to close single tags (<br />).
                                // This is only for full CommonMark compatibility.
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    linkify:      false,        // Autoconvert URL-like text to links
  });

  // source map
  markdown.map = false;

  // inline math
  markdown.renderer.rules.code_inline = function (tokens, idx) {
    let code = tokens[idx].content;

    // inline math
    if (code.startsWith('$') && code.endsWith('$')) {
      code = code.substr(1, code.length - 2);
      try {
        return katex.renderToString(code);
      } catch (err) {
        return `<code>${err}</code>`;
      }
    }
    // not math
    return `<code>${markdown.utils.escapeHtml(code)}</code>`;
  };

  // code block
  markdown.renderer.rules.code_block = (tokens, idx) => {
    const token = tokens[idx];
    const code = token.content.trim();
    const map = markdown.map ? `data-source-line="${token.map[0] + 1}"` : '';

    // unknown programming language
    return `<pre ${map} class="hljs"><code>${hljs.highlightAuto(code).value}</code></pre>`;
  };

  // render math block
  const render_math_block = function (code, map) {
    // consecutive new lines means a new formula
    const tex = _.reduce(code.split(/(?:\n\s*){2,}/), function (result, line) {
      try {
        result += katex.renderToString(line.trim(), { displayMode: true });
      } catch (err) {
        result += `<pre>${err}</pre>`;
      }
      return result;
    }, '');
    return `<div${map}>${tex}</div>`;
  };

  // fence block
  markdown.renderer.rules.fence = function (tokens, idx) {
    const token = tokens[idx];
    const code = token.content.trim();
    const map = markdown.map ? ` data-source-line="${token.map[0] + 1}"` : '';
    const lang = token.info ? token.info.trim().split(/\s+/g)[0] : '' ;

    // math
    if (lang === 'math' || lang === 'katex') {
      return render_math_block(code, map);
    }
    // programming language
    if (lang.length > 0) {
      return `<pre ${map} class="hljs"><code>${hljs.highlight(lang, code, true).value}</code></pre>`;
    }
    // unknown programming language
    return `<pre ${map} class="hljs"><code>${hljs.highlightAuto(code).value}</code></pre>`;
  };

  return markdown;
}

function getStyles(props, context) {
  const styles = {
    root: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 10,
      marginRight: 10,
    },
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

    const markdown = getMarkdown();

    return (
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{__html: markdown.render(text)}}
        style={Object.assign({}, styles.root, style)}
      />
    );
  }
}

export default MarkdownElement;