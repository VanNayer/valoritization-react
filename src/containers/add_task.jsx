import React from 'react'
import {connect} from 'react-redux'
import {callAddTask} from '../actions/actions.jsx'

let AddTask = ({dispatch}) => {

  let title;
  let value;
  let cost;

  return (
    <tr>
      <td><input ref={node => {title = node}}/></td>
      <td><input ref={node => {value = node}}/></td>
      <td><input ref={node => {cost = node}}/></td>
      <td>
        <button onClick={() => {
          dispatch(callAddTask(title.value, parseInt(value.value), parseInt(cost.value)));
          title.value = '';
          value.value = '';
          cost.value = '';
        }}>
          Add Task
        </button>
      </td>
    </tr>
  )
}
AddTask = connect()(AddTask)

export default AddTask
