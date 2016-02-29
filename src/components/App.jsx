import React from 'react'
import Footer from './footer.jsx'
import VisibleTasksMatrix from '../containers/visible_tasks_matrix.jsx'
import TasksList from '../containers/tasks_list.jsx'

const App = () => (
  <div>
    <Footer/>
    <VisibleTasksMatrix/>
    <TasksList/>

  </div>
)
export default App
