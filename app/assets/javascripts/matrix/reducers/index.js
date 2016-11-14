import { combineReducers } from 'redux'
import tasks from './tasks.js'
import visibilityFilter from './visibility_filter.js'
import tasklistDisplay from './task_list_display.js'
import { reducer as formReducer } from 'redux-form'

const valoritizationApp = combineReducers({
  tasks,
  visibilityFilter,
  tasklistDisplay,
  form: formReducer
})

export default valoritizationApp
