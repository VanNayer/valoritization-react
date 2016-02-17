import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions/actions.jsx'

let AddTask = ({ dispatch }) => {

  let text;
  let value;
  let cost;

  return (
    <div>
      <input ref={node => {text = node}} />
      <input ref={node => {value = node}} />
      <input ref={node => {cost = node}} />
      <button
        onClick={() => {
          dispatch(addTask(text.value, parseInt(value.value), parseInt(cost.value)))
          text.value = ''
        }
      }>
        Add Task
      </button>
    </div>
  )
}
AddTask = connect()(AddTask)

export default AddTask
