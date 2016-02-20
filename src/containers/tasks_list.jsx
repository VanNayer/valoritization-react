import React from 'react'
import {connect} from 'react-redux'
import EditTaskField from './edit_task_field.jsx'
import AddTask from '../containers/add_task.jsx'

let TasksList = ({tasks, onNewTextValidated}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Value</th>
          <th>Cost</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <AddTask />
        {tasks.map(task => <tr key={task.id}>
          <td><EditTaskField task={task} field='text' validationFn={(inputText) => (inputText.length > 0 && inputText.length < 64)}/>
          </td>
          <td><EditTaskField task={task} field='value' validationFn={(inputValue) => Number.isInteger(parseInt(inputValue))}/>
          </td>
          <td><EditTaskField task={task} field='cost' validationFn={(inputCost) => Number.isInteger(parseInt(inputCost))}/>
          </td>
          <td></td>
        </tr>)}

      </tbody>
    </table>
  )
}
const mapStateToProps = (state) => {
  return {tasks: state.tasks}
}

TasksList = connect(mapStateToProps, {})(TasksList)

export default TasksList
