import React, {PropTypes} from 'react'
import Task from '../task.jsx'
import Cost from './legend/cost.jsx'
import Value from './legend/value.jsx'

const computeExtremeCoordinates = (tasks) => {
  let extremes = {minCost: 0, minValue: 0, maxCost: 10, maxValue: 10}
  tasks.forEach(task =>
    extremes = {
      minCost: Math.min(extremes.minCost, task.cost),
      minValue:  Math.min(extremes.minValue, task.value),
      maxCost: Math.max(extremes.maxCost, task.cost),
      maxValue: Math.max(extremes.maxValue, task.value)
    }
  )
  return extremes
}

var imgStyle = {
  position: 'absolute',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  opacity: '0.25'
};

var matrixHeight = {
  height: '300px'
};

const Matrix = ({tasks}) => {
  let extremeCoordinates = computeExtremeCoordinates(tasks)
  return (
    <div style={matrixHeight} className='maxl' >
      <Cost maxCost={extremeCoordinates.maxCost}/>
      <Value maxValue={extremeCoordinates.maxValue}/>
      <img style={Object.assign(imgStyle, matrixHeight)} src="/matrix-background.png" />
      {
        tasks.map(task =><Task key={task.id} {...{...task, extremeCoordinates}} />)
      }
    </div>
  )
}


Matrix.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      cost: PropTypes.number.isRequired}
    ).isRequired).isRequired
}

export default Matrix
