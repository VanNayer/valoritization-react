import { connect } from 'react-redux'
import { callToggleTask } from '../actions/actions.jsx'
import Matrix from '../components/matrix/matrix.jsx'

const getVisibleTasks = (tasks, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return tasks
    case 'SHOW_COMPLETED':
      return tasks.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return tasks.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: getVisibleTasks(state.tasks, state.visibilityFilter),
    extremeCoordinates: state.extremeCoordinates
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskClick: (id) => {
      dispatch(callToggleTask(id))
    }
  }
}

const VisibleTasksMatrix = connect(
  mapStateToProps,
  mapDispatchToProps
)(Matrix)

export default VisibleTasksMatrix
