import React, {PropTypes} from 'react'
import Task from '../task.jsx'

const TaskList = ({tasks, onTaskClick}) => (

  <div className="matrix">
    <img className="matrix__img" src="matrix-background.png"/>
    {tasks.map(task => <task key={task.id} {...task} onClick={() => onTaskClick(task.id)}/>)}
  </div>
)

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, completed: PropTypes.bool.isRequired, text: PropTypes.string.isRequired}).isRequired).isRequired,
  onTaskClick: PropTypes.func.isRequired
}

export default TaskList
