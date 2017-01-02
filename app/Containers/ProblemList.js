import React, { Component } from 'react';
import Title from 'react-title-component';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui';

const tableData = [
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
    ac: 76,
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
  state = {
    showCheckboxes: true,
    stripedRows: true,
    showRowHover: true,
  };

  render() {
    return (
      <div>
        <Title render={(prev) => `Problem · ${prev}`} />
        <Table
          selectable={this.state.showCheckboxes}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.showCheckboxes}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Accepted / Submit</TableHeaderColumn>
              <TableHeaderColumn>AC Rate</TableHeaderColumn>
              <TableHeaderColumn>VOJ</TableHeaderColumn>
              <TableHeaderColumn>VID</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map((row, index) => {
              let res = {};
              res.id = row.id;
              res.title = row.title;
              res.aps = row.ac + ' / ' + row.sub;
              res.rate = (100. * row.ac / Math.max(row.sub, 1)).toFixed(2) + '%';
              res.voj = row.voj;
              res.vid = row.vid;
              return (
                <TableRow key={res.id}>
                  <TableRowColumn>{res.id}</TableRowColumn>
                  <TableRowColumn>{res.title}</TableRowColumn>
                  <TableRowColumn>{res.aps}</TableRowColumn>
                  <TableRowColumn>{res.rate}</TableRowColumn>
                  <TableRowColumn>{res.voj}</TableRowColumn>
                  <TableRowColumn>{res.vid}</TableRowColumn>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  };
}

export default ProblemList;
