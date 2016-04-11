import React, { PropTypes } from 'react'
import {connect} from 'react-redux'
import {changeListOrder} from '../actions/actions.jsx'

let sortBy = (a, b, att) => {
  if (a[att]< b[att])
    return -1;
  else if (a[att] > b[att])
    return 1;
  else
    return 0;
}

let SortingHeader = ({ attribute, dispatch }) => {
  let sortAsc = (a, b) => sortBy(a, b, attribute)
  let sortDesc = (a, b) => sortBy(b, a, attribute)

  return (
    <th>
      {attribute}&nbsp;
      <a onClick={() => {dispatch(changeListOrder(sortAsc))}} style={{cursor: 'pointer'}}><span className='fa fa-sort-asc'/></a>
      <a onClick={() => {dispatch(changeListOrder(sortDesc))}} style={{cursor: 'pointer'}}><span className='fa fa-sort-desc'/></a>
    </th>
  )
}

SortingHeader.propTypes = {
  attribute: PropTypes.string.isRequired
}

SortingHeader = connect()(SortingHeader)
export default SortingHeader
