import React, { Component, PropTypes } from 'react';
import Title from 'react-title-component';

import MarkdownElement from '../Components/MarkdownElement';

const data = {
  1000: `
# 1000: A+B Problem
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
  1001: `
# 1001: 鸡兔同笼
## Code
\`\`\` math
a = b ^ 2

c = \\sum_{i=1}^{n} a_i
\`\`\`
  `,
};

class Problem extends Component {
  render() {
    const {
      pid,
    } = this.props.params;

    return (
      <div>
        <Title render={(prev) => `Problem ${pid} · ${prev}`} />
        <MarkdownElement text={data[pid]} />
      </div>
    );
  }
}

export default Problem;