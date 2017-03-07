import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
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
    gene: row => (<Link to={`/p/${row.id}`}>{row.title}</Link>),
    sort: row => row.title,
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
    label: 'AC / submit',
    style: {
      textAlign: 'center',
      width: '90px',
    },
    gene: row => row.ac + ' / ' + row.sub,
    sort: row => row.ac,
  },
  {
    id: 'acrate',
    label: 'AC rate',
    style: {
      textAlign: 'right',
      width: '70px',
    },
    gene: row => (100. * row.ac / Math.max(row.sub, 1)).toFixed(2) + '%',
    sort: row => 100. * row.ac / Math.max(row.sub, 1),
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
    id: 1,
    title: 'A + B Problem',
    ac: 560,
    sub: 814,
    voj: 'zucc',
    vid: 1000,
  },
  {
    id: 2,
    title: '鸡兔同笼',
    ac: 446,
    sub: 1021,
    voj: 'zucc',
    vid: 1001,
  },
  {
    id: 3,
    title: '斐波那契数列',
    ac: 962,
    sub: 962,
    voj: 'zucc',
    vid: 1002,
  },
  {
    id: 4,
    title: '打印螺旋矩阵',
    ac: 127,
    sub: 385,
    voj: 'zucc',
    vid: 1003,
  },
  {
    id: 5,
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
  static propTypes = {
    screenWidth: PropTypes.number.isRequired,
  };

  render() {
    const {
      screenWidth,
    } = this.props;

    return (
      <div>
        <Title render={(prev) => `Problem List · ${prev}`} />
        <EnhancedTable
          cellStyle={{
            paddingLeft: '8px',
            paddingRight: '8px',
          }}
          colStyle={{
            paddingLeft: '8px',
            paddingRight: '8px',
          }}
          cols={cols}
          hidden={
            screenWidth == 0 ? ['ac/sub', 'acrate', 'voj', 'vid'] :
            screenWidth == 1 ? ['ac', 'acrate', 'voj', 'vid'] :
            screenWidth == 2 ? ['ac/sub', 'voj', 'vid'] :
            screenWidth == 3 ? ['ac/sub', 'voj', 'vid'] : ['ac']
          }
          rows={rows}
          showRowHover={true}
          stripedRows={true}
        />
      </div>
    );
  };
}

export default ProblemList;
