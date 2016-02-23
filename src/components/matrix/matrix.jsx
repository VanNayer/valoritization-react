import React, {PropTypes} from 'react'
import Task from '../task.jsx'
import Cost from './legend/cost.jsx'
import Value from './legend/value.jsx'

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

const Matrix = ({tasks, onTaskClick, extremeCoordinates}) => (
  <div style={matrixHeight} >
    <Cost maxCost={extremeCoordinates.maxCost}/>
    <Value maxValue={extremeCoordinates.maxValue}/>
    <img style={Object.assign(imgStyle, matrixHeight)} src="/matrix-background.png" />
    {tasks.map(task =>
      <Task
        key={task.id}
        {...{...task, extremeCoordinates}}
        onClick={() => onTaskClick(task.id) }
      />)
    }
  </div>
)

Matrix.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired, completed: PropTypes.bool.isRequired, text: PropTypes.string.isRequired, value: PropTypes.number.isRequired, cost: PropTypes.number.isRequired}).isRequired).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  extremeCoordinates: React.PropTypes.shape({maxCost: PropTypes.number.isRequired, maxValue: PropTypes.number.isRequired, minCost: PropTypes.number.isRequired, minValue: PropTypes.number.isRequired})
}

export default Matrix
