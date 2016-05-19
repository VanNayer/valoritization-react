import { combineReducers } from 'redux'
import tasks from './tasks.js'
import visibilityFilter from './visibility_filter.js'
import tasklistDisplay from './task_list_display.js'

const valoritizationApp = combineReducers({
  tasks,
  visibilityFilter,
  tasklistDisplay
})

export default valoritizationApp
