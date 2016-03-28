import { combineReducers } from 'redux'
import tasks from './tasks.jsx'
import visibilityFilter from './visibility_filter.jsx'
import tasklistDisplay from './task_list_display.jsx'

const valoritizationApp = combineReducers({
  tasks,
  visibilityFilter,
  tasklistDisplay
})

export default valoritizationApp
