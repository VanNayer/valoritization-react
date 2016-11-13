import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/actions.js'


const FilterLink = ({ active, children, onClick }) => {
  if (active) {
    return <span className="btn btn-primary disabled mrxs">{children}</span>
  }

  return (
    <a href="#"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
       className="btn btn-primary mrxs"
    >
      {children}
    </a>
  )
}

FilterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink)
