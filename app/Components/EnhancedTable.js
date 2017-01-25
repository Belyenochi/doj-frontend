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
    row: {},
  };

  return styles;
}

function getHeaders(rowStyle, cols) {
  const result = _.reduce(cols, function(result, col) {
    const elem = (
      <TableHeaderColumn
        key={col.value}
        style={col.style}
      >
        {col.value}
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

function getBodies(rowStyle, cols, rows) {
  const result = _.reduce(rows, function(result, row) {

    const terms = _.reduce(cols, function(result, col) {
      const elem = (
        <TableRowColumn
          key={col.value}
          style={col.style}
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
    cols: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    style: PropTypes.object,
    rowStyle: PropTypes.object,
  };

  render() {
    const styles = getStyles(this.props, this.context);
    const rootStyle = Object.assign({}, styles.root, this.props.style);
    const rowStyle = Object.assign({}, styles.row, this.props.rowStyle);

    const { cols, rows } = this.props;
    const headers = getHeaders(rowStyle, cols);
    const bodies = getBodies(rowStyle, cols, rows);

    styles.root = Object.assign(styles.root, );
    styles.row = Object.assign(styles.row, props.rowStyle);

    return (
      <Table style={rootStyle}>
        <TableHeader>
          {headers}
        </TableHeader>
        <TableBody>
          {bodies}
        </TableBody>
      </Table>
    );
  }
}

export default EnhancedTable;