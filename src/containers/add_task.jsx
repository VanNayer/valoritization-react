import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../actions/index.jsx'

let AddTask = ({ dispatch }) => {
  let input

  return (
    <div>
      <input ref={node => {
        input = node
      }} />
      <button onClick={() => {
        dispatch(addTask(input.value))
        input.value = ''
      }}>
        Add Task
      </button>
    </div>
  )
}
AddTask = connect()(AddTask)

export default AddTask
