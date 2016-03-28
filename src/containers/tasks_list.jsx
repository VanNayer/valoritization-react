import React from 'react'
import {connect} from 'react-redux'
import EditTaskField from './edit_task_field.jsx'
import AddTask from '../containers/add_task.jsx'
import {callDeleteTask, changeListOrder} from '../actions/actions.jsx'

let addTaskSection = !matrix_infos.read_only ? <AddTask/> : false



let sortBy = (a, b, att) => {
  if (a[att]< b[att])
    return -1;
  else if (a[att] > b[att])
    return 1;
  else
    return 0;
}
let sortByCost = (a, b) => sortBy(a, b, 'cost')
let sortByValue = (a, b) => sortBy(a, b, 'value')
let sortByTitle = (a, b) => sortBy(a, b, 'title')

let TasksList = ({tasks, task_list_display, onNewTextValidated, onTaskClick, activeSort, dispatch}) => {
  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th><a onClick={() => {dispatch(changeListOrder(sortByTitle))}} style={{cursor: 'pointer'}}>Title</a></th>
          <th><a onClick={() => {dispatch(changeListOrder(sortByValue))}} style={{cursor: 'pointer'}}>Value</a></th>
          <th><a onClick={() => {dispatch(changeListOrder(sortByCost))}} style={{cursor: 'pointer'}}>Cost</a></th>
          <th>Description</th>
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
            <a onClick={() => {dispatch(callDeleteTask(task.id))}}
              className='btn btn-default form-control'
              style={{cursor: 'pointer'}}
            >
              Delete<span className='hidden-xs hidden-sm'> Task</span>
            </a>
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
