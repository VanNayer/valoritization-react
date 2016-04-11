import React from 'react'
import {connect} from 'react-redux'
import EditTaskField from './edit_task_field.jsx'
import SortingHeader from './sorting_header.jsx'
import AddTask from './add_task.jsx'
import {callDeleteTask, callToggleTask} from '../actions/actions.jsx'

let addTaskSection = !matrix_infos.read_only ? <AddTask/> : false

let TasksList = ({tasks, task_list_display, onNewTextValidated, onTaskClick, activeSort, dispatch}) => {
  let btnStyle = {cursor: 'pointer', width: '50%'}
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <SortingHeader attribute='title'/>
          <SortingHeader attribute='value'/>
          <SortingHeader attribute='cost'/>
          <SortingHeader attribute='description'/>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {addTaskSection}
        {tasks.sort(task_list_display.sortFunction).map(task => <tr key={task.id} style={Object.assign({textDecoration: task.completed ? 'line-through': 'none'})}>
          <td><EditTaskField task={task} field='title' validationFn={(inputText) => (inputText.length > 0 && inputText.length < 64)}/></td>
          <td><EditTaskField task={task} field='value' validationFn={(inputValue) => Number.isInteger(parseInt(inputValue))}/></td>
          <td><EditTaskField task={task} field='cost' validationFn={(inputCost) => Number.isInteger(parseInt(inputCost))}/></td>
          <td><EditTaskField task={task} field='description'/></td>
          <td>{!matrix_infos.read_only ? (
            <span>
              <a onClick={() => {dispatch(callDeleteTask(task.id))}} className='btn btn-default' style={btnStyle}>
                Delete<span className='hidden-xs hidden-sm'> Task</span>
              </a>
              <a onClick={() => {dispatch(callToggleTask(task.id))}} className='btn btn-default' style={btnStyle}>
                Toggle<span className='hidden-xs hidden-sm'> Task</span>
              </a>
            </span>
          ): (<em>You need to be owner.</em>)}</td>
        </tr>)}
      </tbody>
    </table>
  )
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    task_list_display: state.tasklistDisplay
  }
}

TasksList = connect(mapStateToProps)(TasksList)

export default TasksList
