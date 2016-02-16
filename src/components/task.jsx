import React, {PropTypes} from 'react'

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

const Task = ({onClick, completed, text, value, cost, extremeCoordinates}) => (
  <article
    className="matrix__tasks__task"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      left: computeXPosition(cost, extremeCoordinates) + '%',
      bottom: computeYPosition(value, extremeCoordinates) + '%'
    }}>
    {text}
  </article>
)

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  cost: PropTypes.number.isRequired,
  extremeCoordinates: React.PropTypes.shape({
    maxCost: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
    minCost: PropTypes.number.isRequired,
    minValue: PropTypes.number.isRequired
  })
}

export default Task
