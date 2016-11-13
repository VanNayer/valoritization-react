import React from 'react'
import FilterLink from '../components/filter_link.js'
import { connect } from 'react-redux'


const flatten = list => list.reduce(
    (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);

const uniq = (arrArg) => {
  return arrArg.filter((elem, pos, arr) => {
    return arr.indexOf(elem) == pos;
  });
}


const detectTagsInDescription = (tasks) => {
  return uniq(
    flatten(tasks.map(
      task => task.description.match(/(\s|^)+#(?:\[[^\]]+\]|\S+)/g))
      )
    ).filter(tag => tag)
}

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

const mapStateToProps = (state) => {
  return {
    tags: detectTagsInDescription(state.tasks)
  }
}


export default connect(mapStateToProps)(Header)
