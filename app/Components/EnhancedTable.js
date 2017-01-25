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
    header: {},
    body: {},
    row: {},
    col: {},
  };

  return styles;
}

function getHeaders(rowStyle, colStyle, cols) {
  const result = _.reduce(cols, function(result, col) {
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
  const result = _.reduce(rows, function(result, row) {

    const terms = _.reduce(cols, function(result, col) {
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
    cols: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    style: PropTypes.object,
    headerStyle: PropTypes.object,
    bodyStyle: PropTypes.object,
    rowStyle: PropTypes.object,
    colStyle: PropTypes.object,
  };

  render() {
    const styles = getStyles(this.props, this.context);
    const rootStyle = Object.assign({}, styles.root, this.props.style);
    const headerStyle = Object.assign({}, styles.header, this.props.headerStyle);
    const bodyStyle = Object.assign({}, styles.body, this.props.bodyStyle);
    const rowStyle = Object.assign({}, styles.row, this.props.rowStyle);
    const colStyle = Object.assign({}, styles.col, this.props.colStyle);

    const { cols, rows } = this.props;
    const headers = getHeaders(rowStyle, colStyle, cols);
    const bodies = getBodies(rowStyle, colStyle, cols, rows);

    return (
      <Table style={rootStyle}>
        <TableHeader style={headerStyle}>
          {headers}
        </TableHeader>
        <TableBody style={bodyStyle}>
          {bodies}
        </TableBody>
      </Table>
    );
  }
}

export default EnhancedTable;