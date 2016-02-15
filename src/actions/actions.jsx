let nextTaskId = 0

export const addTask = (text, value, cost) => {
  return {
    type: 'ADD_TASK',
    id: nextTaskId++,
    text,
    value,
    cost
  }
}

export const setVisibilityFilter = (filter) => {
  return {type: 'SET_VISIBILITY_FILTER', filter}
}

export const toggleTask = (id) => {
  return {type: 'TOGGLE_TASK', id}
}
