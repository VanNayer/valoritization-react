import React from 'react'
import {connect} from 'react-redux'
import {callUpdateTask} from '../actions/actions.jsx'
import InlineEdit from 'react-edit-inline'


let dispatchEdit = (dispatch, task, field, input) => {
  switch (field) {
    case 'title':
      dispatch(callUpdateTask(task.id, input.enteredValue, task.value, task.cost, task.description));
      break;
    case 'value':
      dispatch(callUpdateTask(task.id, task.title, parseInt(input.enteredValue), task.cost, task.description));
      break;
    case 'cost':
      dispatch(callUpdateTask(task.id, task.title, task.value, parseInt(input.enteredValue), task.description));
      break;
    case 'description':
      dispatch(callUpdateTask(task.id, task.title, task.value, task.cost, input.enteredValue));
      break;
    default:
      console.error('The field ${field} does not exist for a task.');
    }
}

let EditTaskField = ({task, field, validationFn, dispatch}) => {
  if(matrix_infos.read_only) {
    return (<p> {task[field].toString()}</p>)
  }
  return (
        <InlineEdit
          validate={validationFn}
          activeClassName="editing form-control"
          text={ task[field] ? task[field].toString() : 'None'}
          paramName="enteredValue"
          change={(input) => dispatchEdit(dispatch, task, field, input)}
          />
  )
}

EditTaskField = connect()(EditTaskField)
export default EditTaskField
