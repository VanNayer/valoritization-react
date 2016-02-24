import React from 'react'
import {connect} from 'react-redux'
import {updateTask} from '../actions/actions.jsx'
import InlineEdit from 'react-edit-inline'


let dispatchEdit = (dispatch, task, field, input) => {
  switch (field) {
    case 'title':
      dispatch(updateTask(task.id, input.enteredValue, task.value, task.cost));
      break;
    case 'value':
      dispatch(updateTask(task.id, task.title, parseInt(input.enteredValue), task.cost));
      break;
    case 'cost':
      dispatch(updateTask(task.id, task.title, task.value, parseInt(input.enteredValue)));
      break;
    default:
      console.error('The field ${field} does not exist for a task.');
    }
}

let EditTaskField = ({task, field, validationFn, dispatch}) => {
  return (
        <InlineEdit
          validate={validationFn}
          activeClassName="editing"
          text={task[field].toString()}
          paramName="enteredValue"
          change={(input) => dispatchEdit(dispatch, task, field, input)}
          style={{display: 'inline-block'}}
          />
  )
}

EditTaskField = connect()(EditTaskField)
export default EditTaskField
