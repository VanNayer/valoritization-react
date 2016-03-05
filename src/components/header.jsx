import React from 'react'
import FilterLink from '../containers/filter_link.jsx'

const Header = () => (

  <div className='row man pan'>
    <div className='col-md-3 h3 maxs'>
      {matrix_infos.name}
    </div>
    <div className='col-md-3'>
      <FilterLink filter="SHOW_ALL">All</FilterLink>&nbsp;
      <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>&nbsp;
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink >&nbsp;
    </div>
  </div>
)
export default Header
