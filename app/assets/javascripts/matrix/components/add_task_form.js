import React from 'react'
import { Field, reduxForm } from 'redux-form';

let AddTaskForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="row mtxl ptxl mbxl">
      <div className="col-md-4 man paxs">
        <Field name="title" component="input" className="form-control" type="text" placeholder="Title of a new task"/>
      </div>
      <div className="col-md-1 man paxs">
        <Field name="value" component="input" className="form-control" type="number" placeholder="Value" />
      </div>
      <div className="col-md-1 man paxs">
        <Field name="cost" component="input" className="form-control" type="number" placeholder="Cost" />
      </div>
      <div className="col-md-3 man paxs">
        <Field name="description" component="input" className="form-control" type="text" placeholder="Description" />
      </div>
      <div className="col-md-3 man ptxs pbxs plxl">
        <button type="submit" className='btn btn-primary form-control'>Add task</button>
      </div>
    </form>
  )
}

AddTaskForm = reduxForm({form: 'add_task'})(AddTaskForm)
export default AddTaskForm;
