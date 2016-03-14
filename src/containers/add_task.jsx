import React from 'react'
import {connect} from 'react-redux'
import {callAddTask} from '../actions/actions.jsx'

let AddTask = ({dispatch}) => {

  let title;
  let value;
  let cost;
  let description;

  return (
    <tr>
      <td><input ref={node => {title = node}} className='form-control'/></td>
      <td><input ref={node => {value = node}} className='form-control'/></td>
      <td><input ref={node => {cost = node}} className='form-control'/></td>
      <td><input ref={node => {description = node}} className='form-control'/></td>
      <td>
        <a href="#" onClick={() => {
          dispatch(callAddTask(title.value, parseInt(value.value), parseInt(cost.value), description.value));
          title.value = '';
          value.value = '';
          cost.value = '';
          description.value = '';
        }}
        className='btn btn-primary form-control'
        >
          Add<span className='hidden-xs hidden-sm'> Task</span>
        </a>
      </td>
    </tr>
  )
}
AddTask = connect()(AddTask)

export default AddTask
