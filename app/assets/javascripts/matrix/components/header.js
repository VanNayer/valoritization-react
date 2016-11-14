import React from 'react'
import FilterLink from '../components/filter_link.js'
import { connect } from 'react-redux'

const Header = ({ tags = []}) => (
  <div className='row man pan'>
    <div className='col-md-8'>
      <FilterLink filter="SHOW_ALL">All</FilterLink>
      <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
      {
        tags.map( tag =>
          <FilterLink filter={tag} key={tag}>{tag}</FilterLink>
        )
      }
    </div>
    <div className='col-md-2 h3 maxs hidden-xs hidden-sm'>
      {matrix_infos.name}
    </div>
  </div>
)

const detectTagsInDescription = tasks =>
  tasks
    .map(task => task.description.match(/(\s|^)+#(?:\[[^\]]+\]|\S+)/g))
    .reduce((flattened, current) => flattened.concat(current), []) // flatten arrays of matches
    .filter(description => description) // remove undefined
    .map(description => description.trim().toUpperCase())
    .filter((elem, pos, arr) => arr.indexOf(elem) == pos) // uniq

const mapStateToProps = (state) => {
  return {
    tags: detectTagsInDescription(state.tasks)
  }
}

export default connect(mapStateToProps)(Header)
