import React, { Component } from 'react';
import Title from 'react-title-component';

import EnhancedTable from '../Components/EnhancedTable';

import withWidth from '../utils/withWidth';

const cols = [
  {
    id: 'id',
    label: '#',
    style: {
      textAlign: 'center',
      width: '50px',
    },
  },
  {
    id: 'title',
    label: 'Title',
    style: {
      textAlign: 'left',
    },
  },
  {
    id: 'ac',
    label: 'AC',
    style: {
      textAlign: 'center',
      width: '60px',
    },
  },
  {
    id: 'ac/sub',
    label: 'AC / Submit',
    gene: row => row.ac + ' / ' + row.sub,
    style: {
      textAlign: 'center',
      width: '90px',
    },
  },
  {
    id: 'acrate',
    label: 'AC Rate',
    gene: row => (100. * row.ac / Math.max(row.sub, 1)).toFixed(2) + '%',
    style: {
      textAlign: 'right',
      width: '70px',
    },
  },
  {
    id: 'voj',
    label: 'VOJ',
    style: {
      textAlign: 'center',
      width: '50px',
    },
  },
  {
    id: 'vid',
    label: 'VID',
    style: {
      textAlign: 'center',
      width: '50px',
    },
  },
];

const rows = [
  {
    id: 1000,
    title: 'A + B Problem',
    ac: 560,
    sub: 814,
    voj: 'zucc',
    vid: 1000,
  },
  {
    id: 1001,
    title: '鸡兔同笼',
    ac: 446,
    sub: 1021,
    voj: 'zucc',
    vid: 1001,
  },
  {
    id: 1002,
    title: '斐波那契数列',
    ac: 962,
    sub: 962,
    voj: 'zucc',
    vid: 1002,
  },
  {
    id: 1003,
    title: '打印螺旋矩阵',
    ac: 127,
    sub: 385,
    voj: 'zucc',
    vid: 1003,
  },
  {
    id: 1004,
    title: 'No Brainer',
    ac: 177,
    sub: 229,
    voj: 'zucc',
    vid: 1004,
  },
];

@withWidth({
  widths: {
    1: 375,
    2: 425,
    3: 512,
    4: 768,
  }
})
class ProblemList extends Component {
  render() {
    const { screenWidth } = this.props;

    return (
      <div>
        <Title render={(prev) => `Problem · ${prev}`} />
        <EnhancedTable
          cols={cols}
          colStyle={{
            paddingLeft: '8px',
            paddingRight: '8px',
          }}
          hidden={
            screenWidth == 0 ? ['ac/sub', 'acrate', 'voj', 'vid'] :
            screenWidth == 1 ? ['ac', 'acrate', 'voj', 'vid'] :
            screenWidth == 2 ? ['ac/sub', 'voj', 'vid'] :
            screenWidth == 3 ? ['ac/sub', 'voj', 'vid'] : ['ac']
          }
          rows={rows}
        />
      </div>
    );
  };
}

export default ProblemList;
