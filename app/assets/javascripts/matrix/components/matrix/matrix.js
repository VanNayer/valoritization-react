import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import Task from '../task.js'
import Cost from './legend/cost.js'
import Value from './legend/value.js'

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
  height: '300px',
  background: 'linear-gradient(160deg, rgba(255,255,255,1) 0%, rgba(230,126,34,1) 100%)'
};


const Matrix = ({tasks}) => {
  let extremeCoordinates = computeExtremeCoordinates(tasks)
  return (
    <div style={matrixHeight} className='maxs' >
      <Cost maxCost={extremeCoordinates.maxCost} minCost={extremeCoordinates.minCost}/>
      <Value maxValue={extremeCoordinates.maxValue}/>
      {
        tasks.map(task => <Task key={task.id} {...{...task, extremeCoordinates}} />)
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


const mapStateToProps = (state) => {
  return {
    extremeCoordinates: state.extremeCoordinates
  }
}

export default connect(mapStateToProps)(Matrix)
