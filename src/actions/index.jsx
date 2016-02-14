let nextTaskId = 0

export const addTask = (text) => {
  return {
    type: 'ADD_TASK',
    id: nextTaskId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {type: 'SET_VISIBILITY_FILTER', filter}
}

export const toggleTask = (id) => {
  return {type: 'TOGGLE_TASK', id}
}
