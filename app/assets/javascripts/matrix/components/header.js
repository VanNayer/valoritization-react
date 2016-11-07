import React from 'react'
import FilterLink from '../components/filter_link.js'

const Header = ({ tags = []}) => (

  <div className='row man pan'>
    <div className='col-md-5'>
      <FilterLink filter="SHOW_ALL">All</FilterLink>&nbsp;
      <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>&nbsp;
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>&nbsp;
      {
        tags.map( tag =>
          <FilterLink filter={tag}>{tag}</FilterLink>
        )
      }
    </div>
    <div className='col-md-5 h3 maxs hidden-xs hidden-sm'>
      {matrix_infos.name}
    </div>
  </div>
)
export default Header
