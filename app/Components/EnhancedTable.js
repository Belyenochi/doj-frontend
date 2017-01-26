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

class EnhancedTable extends Component {
  static propTypes = {
    bodyStyle: PropTypes.object,
    colStyle: PropTypes.object,
    cols: PropTypes.array.isRequired,
    enableSelectAll: PropTypes.bool,
    headerStyle: PropTypes.object,
    hidden: PropTypes.array,
    multiSelectable: PropTypes.bool,
    rowStyle: PropTypes.object,
    rows: PropTypes.array.isRequired,
    selectable: PropTypes.bool,
    showCheckboxes: PropTypes.bool,
    showRowHover: PropTypes.bool,
    stripedRows: PropTypes.bool,
    style: PropTypes.object,
  };

  static defaultProps = {
    enableSelectAll: false,
    multiSelectable: false,
    selectable: false,
    showCheckboxes: false,
    showRowHover: false,
    stripedRows: false,
  };

  render() {
    const {
      bodyStyle,
      colStyle,
      cols,
      enableSelectAll,
      headerStyle,
      hidden,
      multiSelectable,
      rowStyle,
      rows,
      selectable,
      showCheckboxes,
      showRowHover,
      stripedRows,
      style,
      ...other
    } = this.props;

    const styles = getStyles(this.props, this.context);

    const mixinRootStyle = Object.assign({}, styles.root, style);
    const mixinBodyStyle = Object.assign({}, styles.body, bodyStyle);
    const mixinColStyle = Object.assign({}, styles.col, colStyle);
    const mixinHeaderStyle = Object.assign({}, styles.header, headerStyle);
    const mixinRowStyle = Object.assign({}, styles.row, rowStyle);

    const mixinCols = _
      .chain(cols)
      .filter((col) => !_.includes(hidden, col.id))
      .map((col) => ({
        gene: col.gene,
        id: col.id,
        label: col.label,
        style: Object.assign({}, mixinColStyle, col.style),
      }))
      .value();

    const mixinRows = _.map(rows, (row) =>
      _.map(mixinCols, (col) => ({
        label: typeof col.gene === 'function' ? col.gene(row) : row[col.id],
        style: col.style,
      }))
    );

    return (
      <Table
        multiSelectable={multiSelectable}
        selectable={selectable}
        style={mixinRootStyle}
        {...other}
      >
        <TableHeader
          adjustForCheckbox={showCheckboxes}
          displaySelectAll={showCheckboxes}
          enableSelectAll={enableSelectAll}
          style={mixinHeaderStyle}
        >
          <TableRow style={mixinRowStyle}>
            {_.map(mixinCols, (col, index) => (
              <TableHeaderColumn
                key={index}
                style={col.style}
              >
                {col.label}
              </TableHeaderColumn>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={showCheckboxes}
          showRowHover={showRowHover}
          stripedRows={stripedRows}
          style={mixinBodyStyle}
        >
          {_.map(mixinRows, (row, index) => (
            <TableRow
              key={index}
              style={mixinRowStyle}
            >
              {_.map(row, (col, index) => (
                <TableRowColumn
                  key={index}
                  style={col.style}
                >
                  {col.label}
                </TableRowColumn>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default EnhancedTable;