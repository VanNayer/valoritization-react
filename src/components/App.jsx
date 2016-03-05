import React from 'react'
import Header from './header.jsx'
import VisibleTasksMatrix from '../containers/visible_tasks_matrix.jsx'
import TasksList from '../containers/tasks_list.jsx'

const App = () => (
  <div>
    <Header/>
    <VisibleTasksMatrix/>
    <TasksList/>
  </div>
)
export default App
