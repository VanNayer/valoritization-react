import React from 'react'
import Header from './header.js'
import VisibleTasksMatrix from '../containers/visible_tasks_matrix.js'
import TasksList from '../containers/tasks_list.js'

const App = () => (
  <div>
    <Header/>
    <VisibleTasksMatrix/>
    <TasksList/>
  </div>
)
export default App