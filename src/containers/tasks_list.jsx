import React from 'react'
import {connect} from 'react-redux'
import EditTaskField from './edit_task_field.jsx'
import AddTask from '../containers/add_task.jsx'
import {callDeleteTask} from '../actions/actions.jsx'

  let addTaskSection = !matrix_infos.read_only ? <AddTask/> : false

let TasksList = ({tasks, onNewTextValidated, onTaskClick}) => {
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>Title</th>
          <th>Value</th>
          <th>Cost</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {addTaskSection}
        {tasks.map(task => <tr key={task.id}>
          <td><EditTaskField task={task} field='title' validationFn={(inputText) => (inputText.length > 0 && inputText.length < 64)}/></td>
          <td><EditTaskField task={task} field='value' validationFn={(inputValue) => Number.isInteger(parseInt(inputValue))}/></td>
          <td><EditTaskField task={task} field='cost' validationFn={(inputCost) => Number.isInteger(parseInt(inputCost))}/></td>
          <td><EditTaskField task={task} field='description'/></td>
          <td>{!matrix_infos.read_only ? (
            <a style='cursor: pointer;' 
              onClick={() => {
              onTaskClick(task.id);
            }} className='btn btn-default form-control'>
              Delete<span className='hidden-xs hidden-sm'> Task</span>
            </a>
          ): (<em>You need to be owner.</em>)}</td>
        </tr>)}
      </tbody>
    </table>
  )
}
const mapStateToProps = (state) => {
  return {tasks: state.tasks}
}
const mapDispatchToProps = (dispatch) => {
  return {
    onTaskClick: (id) => {
      dispatch(callDeleteTask(id))
    }
  }
}

TasksList = connect(mapStateToProps, mapDispatchToProps)(TasksList)

export default TasksList
