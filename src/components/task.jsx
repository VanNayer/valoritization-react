import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { callToggleTask } from '../actions/actions.jsx'

var taskStyle = {
  color: 'white',
  position: 'absolute',
  borderRadius: '40px',
  backgroundColor: '#333',
  paddingLeft: '10px',
  paddingRight: '10px',
  textAlign: 'center',
  opacity: '.8',
  whiteSpace: 'nowrap'
}

const computeXPosition = (taskCost, extreme) => {
  let relativeCost = (taskCost - extreme.minCost)
  let relativeCostDelta = (extreme.maxCost - extreme.minCost)
  return Math.round(((relativeCost) * 100) / (relativeCostDelta))
}
const computeYPosition = (taskValue, extreme) => {
  let relativeValue = (taskValue - extreme.minValue)
  let relativeValueDelta = (extreme.maxValue - extreme.minValue)
  return Math.round(((relativeValue) * 100) / (relativeValueDelta))
}

const Task = connect()(({
  id,
  completed,
  title,
  value,
  cost,
  extremeCoordinates,
  dispatch
}) => (
  <article className="matrix__tasks__task" onClick={() => dispatch(callToggleTask(id))}
    style={
      Object.assign({
          textDecoration: completed ? 'line-through': 'none',
          left: computeXPosition(cost, extremeCoordinates) + '%',
          bottom: computeYPosition(value, extremeCoordinates) + '%'
        }, taskStyle)}>
    {title}
  </article>
))

Task.propTypes = {
  id: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  cost: PropTypes.number.isRequired,
  extremeCoordinates: React.PropTypes.shape({maxCost: PropTypes.number.isRequired, maxValue: PropTypes.number.isRequired, minCost: PropTypes.number.isRequired, minValue: PropTypes.number.isRequired})
}


export default Task
