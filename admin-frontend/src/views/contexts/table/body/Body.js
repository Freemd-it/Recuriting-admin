import React from 'react';
import TableRows from 'views/contexts/table/body/tableRow'
import TableBody from '@material-ui/core/TableBody';
// import EmptyRow from '@material-ui/core/TableRow';
// import TableCell from '@material-ui/core/TableCell';
import _ from 'lodash'

import './Body.scss';

const Body = ({rows, /* rowsPerPage, */ onClickRow, onCheckRow, columns, cursor = false, type}) => {
  // const emptyRows = rowsPerPage - rows.length;
  console.log('rows', rows)
  const bodyRows = (
    _.map(rows, (item/*, index */) => {
      return (<TableRows
        type = {type}
        columns={columns}
        className={cursor ? 'tableBodyRow__cursor' : ''}
        key={item._id}
        item={item}
        onClick={onClickRow}
        onCheckRow={onCheckRow}
      />)
    })
  )
  return (
    <TableBody>
      {bodyRows}
      {/*
        emptyRows > 0 && (
        <EmptyRow style={{height: `${48 * emptyRows}px`}}>
          <TableCell  align="center" colSpan={columns.length} />
        </EmptyRow>)
        */}
    </TableBody>
  )
}   

export default Body