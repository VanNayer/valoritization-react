export const requestAddTask = (title, value, cost) => {
  return {type: 'REQUEST_ADD_TASK', title, value, cost}
}
export const addTask = (id, title, value, cost, completed = false) => {
  return {type: 'ADD_TASK', id, title, value, cost, completed}
}

export const updateTask = (id, title, value, cost) => {
  return {type: 'UPDATE_TASK', id, title, value, cost}
}

export const setVisibilityFilter = (filter) => {
  return {type: 'SET_VISIBILITY_FILTER', filter}
}

export const toggleTask = (id) => {
  return {type: 'TOGGLE_TASK', id}
}

export const createTask = (title, value, cost) => {
  return dispatch => {
    dispatch(requestAddTask(title, value, cost))

    return fetch(new Request('tasks', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {title: title, value: value, cost: cost, description: 'michel'} )
    })).then(response => {
      return response.json();
    }).then(function(json) {
      dispatch(addTask(json.id, title, value, cost))
    }).catch((err) => {
      console.log('err')
    })
  }
}
