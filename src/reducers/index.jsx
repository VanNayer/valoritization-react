import { combineReducers } from 'redux'
import tasks from './tasks.jsx'
import visibilityFilter from './visibility_filter.jsx'

const valoritizationApp = combineReducers({
  tasks,
  visibilityFilter
})

export default valoritizationApp
