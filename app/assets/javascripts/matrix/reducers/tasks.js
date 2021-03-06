const task = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        id: action.id,
        title: action.title,
        value: action.value,
        cost: action.cost,
        completed: action.completed,
        description: action.description
      }
    case 'TOGGLE_TASK':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        completed: !state.completed
      })
    case 'UPDATE_TASK':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {title: action.title, value: action.value, cost: action.cost, description: action.description})
    default:
      return state
  }
}

const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, task(undefined, action)]
    case 'TOGGLE_TASK':
    case 'UPDATE_TASK':
      return state.map(taskState => task(taskState, action))
    case 'DELETE_TASK':
      return state.filter((taskState) => { return taskState.id != action.id })
    default:
      return state
  }
}

export default tasks
