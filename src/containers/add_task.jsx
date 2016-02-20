import React from 'react'
import {connect} from 'react-redux'
import {addTask} from '../actions/actions.jsx'

let AddTask = ({dispatch}) => {

  let text;
  let value;
  let cost;

  return (
    <tr>
      <td><input ref={node => {text = node}}/></td>
      <td><input ref={node => {value = node}}/></td>
      <td><input ref={node => {cost = node}}/></td>
      <td>
        <button onClick={() => {
          dispatch(addTask(text.value, parseInt(value.value), parseInt(cost.value)));
          text.value = ''
        }}>
          Add Task
        </button>
      </td>
    </tr>
  )
}
AddTask = connect()(AddTask)

export default AddTask
