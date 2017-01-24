import React, { Component } from 'react';
import Title from 'react-title-component';

import EnhancedTable from '../Components/EnhancedTable';

const cols = [
  {
    id: 'id',
    value: '#',
    style: {
      width: 80,
      textAlign: 'center',
    },
  },
  {
    id: 'title',
    value: 'Title',
  },
  {
    id: 'ac/sub',
    value: 'Accepted / Submit',
    gene: row => row.ac + ' / ' + row.sub,
    style: {
      width: 160,
      textAlign: 'center',
    },
  },
  {
    id: 'acrate',
    value: 'AC Rate',
    gene: row => (100. * row.ac / Math.max(row.sub, 1)).toFixed(2) + '%',
    style: {
      width: 100,
      textAlign: 'right',
    },
  },
  {
    id: 'voj',
    value: 'VOJ',
    style: {
      width: 80,
      textAlign: 'center',
    },
  },
  {
    id: 'vid',
    value: 'VID',
    style: {
      width: 80,
      textAlign: 'center',
    },
  },
];

const rows = [
  {
    id: 1000,
    title: 'A + B Problem',
    ac: 560,
    sub: 814,
    voj: 'doj',
    vid: 1000,
  },
  {
    id: 1001,
    title: '鸡兔同笼',
    ac: 446,
    sub: 1021,
    voj: 'doj',
    vid: 1001,
  },
  {
    id: 1002,
    title: '斐波那契数列',
    ac: 962,
    sub: 962,
    voj: 'doj',
    vid: 1002,
  },
  {
    id: 1003,
    title: '打印螺旋矩阵',
    ac: 127,
    sub: 385,
    voj: 'doj',
    vid: 1003,
  },
  {
    id: 1004,
    title: 'No Brainer',
    ac: 177,
    sub: 229,
    voj: 'doj',
    vid: 1004,
  },
];

class ProblemList extends Component {
  render() {
    return (
      <div>
        <Title render={(prev) => `Problem · ${prev}`} />
        <EnhancedTable
          cols={cols}
          rows={rows}
        />
      </div>
    );
  };
}

export default ProblemList;
