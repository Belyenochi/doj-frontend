import React, { Component, PropTypes } from 'react';

import _ from 'lodash';

import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

function getStyles(props, context) {
  const styles = {
    root: {},
    body: {},
    col: {},
    header: {},
    row: {},
  };

  return styles;
}

function getHeaders(rowStyle, colStyle, cols) {
  const result = _.reduce(cols, function (result, col) {
    const elem = (
      <TableHeaderColumn
        key={col.label}
        style={Object.assign({}, colStyle, col.style)}
      >
        {col.label}
      </TableHeaderColumn>
    );
    result.push(elem);

    return result;
  }, []);

  return (
    <TableRow style={rowStyle}>
      {result}
    </TableRow>
  );
}

function getBodies(rowStyle, colStyle, cols, rows) {
  const result = _.reduce(rows, function (result, row) {

    const terms = _.reduce(cols, function (result, col) {
      const elem = (
        <TableRowColumn
          key={col.label}
          style={Object.assign({}, colStyle, col.style)}
        >
          {typeof col.gene === 'function' ? col.gene(row) : row[col.id]}
        </TableRowColumn>
      );
      result.push(elem);

      return result;
    }, []);

    const elem = (
      <TableRow
        key={row.id}
        style={rowStyle}
      >
        {terms}
      </TableRow>
    );
    result.push(elem);

    return result;
  }, []);

  return result;
}

class EnhancedTable extends Component {
  static propTypes = {
    bodyStyle: PropTypes.object,
    colStyle: PropTypes.object,
    cols: PropTypes.array.isRequired,
    headerStyle: PropTypes.object,
    rowStyle: PropTypes.object,
    rows: PropTypes.array.isRequired,
    style: PropTypes.object,
  };

  render() {
    const {
      bodyStyle,
      colStyle,
      cols,
      headerStyle,
      rowStyle,
      rows,
      style,
      ...other
    } = this.props;

    const styles = getStyles(this.props, this.context);

    const lastRootStyle = Object.assign({}, styles.root, style);
    const lastBodyStyle = Object.assign({}, styles.body, bodyStyle);
    const lastColStyle = Object.assign({}, styles.col, colStyle);
    const lastHeaderStyle = Object.assign({}, styles.header, headerStyle);
    const lastRowStyle = Object.assign({}, styles.row, rowStyle);

    const headers = getHeaders(lastRowStyle, lastColStyle, cols);
    const bodies = getBodies(lastRowStyle, lastColStyle, cols, rows);

    return (
      <Table
        style={lastRootStyle}
        {...other}
      >
        <TableHeader style={lastHeaderStyle}>{headers}</TableHeader>
        <TableBody style={lastBodyStyle}>{bodies}</TableBody>
      </Table>
    );
  }
}

export default EnhancedTable;