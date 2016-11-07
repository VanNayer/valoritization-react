import React, { PropTypes } from 'react'
import {connect} from 'react-redux'
import {changeListOrder} from '../actions/actions.js'

let sortBy = (a, b, fn) => {
  if (fn(a) < fn(b))
    return -1;
  else if (fn(a) > fn(b))
    return 1;
  else
    return 0;
}

let SortingHeader = ({ title, fn, dispatch }) => {
  let sortAsc = (a, b) => sortBy(a, b, fn)
  let sortDesc = (a, b) => sortBy(b, a, fn)
  return (
    <th>
      {title}&nbsp;
      <a onClick={() => {dispatch(changeListOrder(sortAsc))}} style={{cursor: 'pointer'}}><span className='fa fa-sort-asc'/></a>
      <a onClick={() => {dispatch(changeListOrder(sortDesc))}} style={{cursor: 'pointer'}}><span className='fa fa-sort-desc'/></a>
    </th>
  )
}

SortingHeader.propTypes = {
  title: PropTypes.string.isRequired,
  fn: PropTypes.func.isRequired
}

SortingHeader = connect()(SortingHeader)
export default SortingHeader
