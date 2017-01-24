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
  };

  return styles;
}

function getHeaders(cols) {
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
    <TableRow>
      {result}
    </TableRow>
  );
}

function getBodies(cols, rows) {
  const result = _.reduce(rows, function(result, row) {

    const terms = _.reduce(cols, function(result, col) {
      const elem = (
        <TableRowColumn
          key={col.value}
          style={col.style}
        >
          {typeof col.gene === 'function' ? col.gene(row) : row[col.id] }
        </TableRowColumn>
      );
      result.push(elem);

      return result;
    }, []);

    const elem = (
      <TableRow key={row.id}
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
  };

  render() {
    const styles = getStyles(this.props, this.context);

    const { cols, rows } = this.props;
    const headers = getHeaders(cols);
    const bodies = getBodies(cols, rows);

    return (
      <Table style={styles.root}>
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