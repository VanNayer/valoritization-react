import React from 'react'
import {connect} from 'react-redux'
import EditTaskField from './edit_task_field.js'
import SortingHeader from './sorting_header.js'
import AddTask from './add_task.js'
import {callDeleteTask, callToggleTask} from '../actions/actions.js'

let addTaskSection = !matrix_infos.read_only ? <AddTask/> : false

let TasksList = ({tasks, task_list_display, onNewTextValidated, onTaskClick, activeSort, dispatch}) => {
  let btnStyle = {cursor: 'pointer', width: '48%'}
  return (
    <table className='table table-striped' style={{top: '30px'}}>
      <thead>
        <tr>
          <SortingHeader title='Ratio' fn={it => {return (it.value/it.cost)}}/>
          <SortingHeader title='Title' fn={it => {return it.title}}/>
          <SortingHeader title='Value' fn={it => {return it.value}}/>
          <SortingHeader title='Cost' fn={it => {return it.cost}}/>
          <SortingHeader title='Description' fn={it => {return it.description}}/>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {addTaskSection}
        {tasks.sort(task_list_display.sortFunction).map(task => <tr key={task.id} style={Object.assign({textDecoration: task.completed ? 'line-through': 'none'})}>
          <td style={{width: '7%'}}>{(task.value / task.cost).toFixed(2)}</td>
          <td style={{width: '25%'}}><EditTaskField task={task} field='title' validationFn={(inputText) => (inputText.length > 0 && inputText.length < 64)}/></td>
          <td style={{width: '11%'}}><EditTaskField task={task} field='value' validationFn={(inputValue) => Number.isInteger(parseInt(inputValue))}/></td>
          <td style={{width: '11%'}}><EditTaskField task={task} field='cost' validationFn={(inputCost) => Number.isInteger(parseInt(inputCost))}/></td>
          <td style={{width: '25%'}}><EditTaskField task={task} field='description'/></td>
          <td style={{width: '25%'}}>{!matrix_infos.read_only ? (
            <span>
              <a onClick={() => {dispatch(callDeleteTask(task.id))}} className='btn btn-default mrxs' style={btnStyle}>
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
