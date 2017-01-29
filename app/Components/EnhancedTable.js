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
import IconButton from 'material-ui/IconButton';
import IconSortNone from 'material-ui/svg-icons/navigation/more-horiz';
import IconSortDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import IconSortUp from 'material-ui/svg-icons/navigation/arrow-drop-up';

function getStyles(props, context) {
  const tableHeaderColumn = context.muiTheme.tableHeaderColumn;
  const iconFontSize = 16;
  const iconButtonSize = 20;

  const styles = {
    root: {},
    header: {},
    body: {},
    col: {},
    row: {},
    cell: {},
    iconFont: {
      width: iconFontSize,
      height: iconFontSize,
    },
    iconButton: {
      width: iconButtonSize,
      height: iconButtonSize,
      padding: (iconButtonSize - iconFontSize) / 2,

      position: 'absolute',
      right: 0,
      top: (tableHeaderColumn.height - iconButtonSize) / 2,
    },
  };

  return styles;
}

class EnhancedTable extends Component {
  static propTypes = {
    bodyStyle: PropTypes.object,
    cellStyle: PropTypes.object,
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

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    sortByIndex: 0,
    sortReverse: false,
  };

  handleTouchTap = (index) => {
    const {
      sortByIndex,
      sortReverse,
    } = this.state;

    if (sortByIndex !== index) {
      this.setState({
        sortByIndex: index,
        sortReverse: false,
      });
    }
    else {
      this.setState({
        sortReverse: !sortReverse
      });
    }
  };

  render() {
    const {
      bodyStyle,
      cellStyle,
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

    const {
      sortByIndex,
      sortReverse,
    } = this.state;

    const styles = getStyles(this.props, this.context);

    const mixinRootStyle = Object.assign({}, styles.root, style);
    const mixinHeaderStyle = Object.assign({}, styles.header, headerStyle);
    const mixinBodyStyle = Object.assign({}, styles.body, bodyStyle);
    const mixinColStyle = Object.assign({}, styles.col, colStyle);
    const mixinRowStyle = Object.assign({}, styles.row, rowStyle);
    const mixinCellStyle = Object.assign({}, styles.cell, cellStyle);

    const mixinCols = _
      .chain(cols)
      .filter((col) => !_.includes(hidden, col.id))
      .map((col) => ({
        id: col.id,
        label: col.label,
        _style: col.style,
        style: Object.assign({}, mixinColStyle, col.style),
        sort: col.sort,
        gene: col.gene,
      }))
      .value();

    const mixinRows = _
      .chain(rows)
      .map((row) => _.map(mixinCols, (col) => ({
        label: typeof col.gene === 'function' ? col.gene(row) : row[col.id],
        style: Object.assign({}, mixinCellStyle, col._style),
        weight: typeof col.sort === 'function' ? col.sort(row) : row[col.id],
      })))
      .sortBy([row => (row[sortByIndex] && row[sortByIndex].weight)])
      .tap(function (array) {
        if (sortReverse) {
          array.reverse();
        }
      })
      .value();

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
                {col.label + '　'}
                <IconButton
                  style={styles.iconButton}
                  iconStyle={styles.iconFont}
                  onTouchTap={() => this.handleTouchTap(index)}
                >
                  {
                    sortByIndex !== index ? <IconSortNone /> :
                    sortReverse === true ? <IconSortUp /> : <IconSortDown　/>
                  }
                </IconButton>
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