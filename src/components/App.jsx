import React from 'react'
import Footer from './footer.jsx'
import AddTask from '../containers/add_task.jsx'
import VisibleTasksMatrix from '../containers/visible_tasks_matrix.jsx'
import TasksList from '../containers/tasks_list.jsx'

const App = () => (
  <div>
    <AddTask />
    <VisibleTasksMatrix />
    <TasksList />
    <Footer />
  </div>
)

export default App
