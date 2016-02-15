import React, {PropTypes} from 'react'

// const computeTaskPosition = (taskValue, taskCost, extreme) => (
//     let relativeCost = (taskCost - extreme.minCost)
//     let relativeCostDelta = (extreme.maxCost - extreme.minCost)
//     let x = Math.round((( relativeCost) * 100) / ( relativeCostDelta))
//
//     let relativeValue = (taskValue - extreme.minValue)
//     let relativeValueDelta = (extreme.maxValue - extreme.minValue)
//     let y = Math.round((( relativeValue) * 100) / ( relativeValueDelta))
//
//     return {x, y}
// )

const Task = ({onClick, completed, text, value, cost}) => (
  <article
    className="matrix__tasks__task"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      padding: value
    }}>
    {text} {value} {cost}
  </article>
)

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  cost: PropTypes.number.isRequired
}

export default Task
