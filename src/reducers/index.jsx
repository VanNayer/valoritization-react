import { combineReducers } from 'redux'
import tasks from './tasks.jsx'
import visibilityFilter from './visibility_filter.jsx'
import extremeCoordinates from './extreme_coordinates.jsx'
import tasklistDisplay from './task_list_display.jsx'

const valoritizationApp = combineReducers({
  tasks,
  visibilityFilter,
  tasklistDisplay
})

export default valoritizationApp
