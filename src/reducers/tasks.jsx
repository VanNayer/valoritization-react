const task = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {id: action.id, text: action.text, value: action.value, cost: action.cost, completed: false}
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
      return Object.assign({}, state, {text: action.text, value: action.value, cost: action.cost})
    default:
      return state
  }
}

const tasks = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        task(undefined, action)
      ]
    case 'TOGGLE_TASK':
    case 'UPDATE_TASK':
      return state.map(taskState => task(taskState, action))
    default:
      return state
  }
}

export default tasks
