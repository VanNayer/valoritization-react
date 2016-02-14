import React from 'react'
import Footer from './footer.jsx'
import AddTask from '../containers/add_task.jsx'
import VisibleTaskList from '../containers/visible_tasklist.jsx'

const App = () => (
  <div>
    <AddTask />
    <VisibleTaskList />
    <Footer />
  </div>
)

export default App
