import { combineReducers } from 'redux'
import tasks from './tasks.jsx'
import visibilityFilter from './visibility_filter.jsx'
import extremeCoordinates from './extreme_coordinates.jsx'


const valoritizationApp = combineReducers({
  tasks,
  visibilityFilter,
  extremeCoordinates
})

export default valoritizationApp
