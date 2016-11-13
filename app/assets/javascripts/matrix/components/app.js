import React from 'react'
import { connect } from 'react-redux'
import Header from './header.js'
import Matrix from './matrix/matrix.js'
import TasksList from './tasks_list.js'

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return tasks
    case 'SHOW_COMPLETED':
      return tasks.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return tasks.filter(t => !t.completed)
    default:
      return tasks.filter(t => t.description.includes(filter))
  }
}

const App = ({tasks}) => (
  <div>
    <Header/>
    <Matrix tasks={tasks} />
    <TasksList tasks={tasks} />
  </div>
)

const mapStateToProps = (state) => {
  return {
    tasks: getVisibleTasks(state.tasks, state.visibilityFilter)
  }
}

export default connect(mapStateToProps)(App)
