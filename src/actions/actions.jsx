export const requestAddTask = (text, value, cost) => {
  return {type: 'REQUEST_ADD_TASK', text, value, cost}
}
export const addTask = (id, text, value, cost) => {
  return {type: 'ADD_TASK', id, text, value, cost}
}

export const updateTask = (id, text, value, cost) => {
  return {type: 'UPDATE_TASK', id, text, value, cost}
}

export const setVisibilityFilter = (filter) => {
  return {type: 'SET_VISIBILITY_FILTER', filter}
}

export const toggleTask = (id) => {
  return {type: 'TOGGLE_TASK', id}
}

export const createTask = (text, value, cost) => {
  return dispatch => {
    dispatch(requestAddTask(text, value, cost))
    return fetch(new Request('/matrices/1/uuid')).then(response => dispatch(addTask(response, text, value, cost))).catch((err) => {
      console.log('err')
    })
  }
}
