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
    let formData = new FormData()
    formData.append('title', text)
    formData.append('value', value)
    formData.append('cost', cost)
    formData.append('description', 'michel')
    return fetch(new Request('tasks', {
      method: 'POST',
      body: formData
    })).then(response => {
      return response.json();
    }).then(function(json) {
      dispatch(addTask(json.id, text, value, cost))
    }).catch((err) => {
      console.log('err')
    })
  }
}
