import React from 'react'
import {connect} from 'react-redux'

let TasksList = ({tasks}) => {
  return (
    <ul>
      {tasks.map(task => <li key={task.id}>{task.text}</li>)}
    </ul>
  )
}
const mapStateToProps = (state) => {
  return {tasks: state.tasks}
}
TasksList = connect(mapStateToProps, {})(TasksList)

export default TasksList
