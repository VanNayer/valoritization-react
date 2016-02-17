import React, {PropTypes} from 'react'
import Task from '../task.jsx'

const Matrix = ({tasks, onTaskClick, extremeCoordinates}) => (
  <div className="matrix">
    <img className="matrix__img" src="matrix-background.png"/>
    {tasks.map(task => <Task key={task.id} {...{...task, extremeCoordinates}} onClick={() => onTaskClick(task.id)} />)}
  </div>
)

Matrix.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, completed: PropTypes.bool.isRequired, text: PropTypes.string.isRequired, value: PropTypes.number.isRequired, cost: PropTypes.number.isRequired}).isRequired).isRequired,
  onTaskClick: PropTypes.func.isRequired,
  extremeCoordinates: React.PropTypes.shape({
    maxCost: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
    minCost: PropTypes.number.isRequired,
    minValue: PropTypes.number.isRequired
  })
}

export default Matrix
