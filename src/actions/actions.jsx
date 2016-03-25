import fetch from 'isomorphic-fetch';

export const requestAddTask = (title, value, cost, description) => {
  return {type: 'REQUEST_ADD_TASK', title, value, cost, description}
}
export const addTask = (id, title, value, cost, description, completed = false) => {
  return {type: 'ADD_TASK', id, title, value, cost, description, completed}
}

export const updateTask = (id, title, value, cost, description) => {
  return {type: 'UPDATE_TASK', id, title, value, cost, description}
}

export const setVisibilityFilter = (filter) => {
  return {type: 'SET_VISIBILITY_FILTER', filter}
}

export const toggleTask = (id) => {
  return {type: 'TOGGLE_TASK', id}
}

export const deleteTask = (id) => {
  return {type: 'DELETE_TASK', id}
}

export const changeListOrder = (sortFunction) => {
  return {type: 'CHANGE_LIST_ORDER', sortFunction}
}


export const callAddTask = (title, value, cost, description) => {
  return dispatch => {
    dispatch(requestAddTask(title, value, cost, description));
    return fetch(new Request('tasks', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify( {title, value, cost, description} )
    })).then(response => {
      return response.json();
    }).then(function(json) {
      dispatch(addTask(json.id, title, value, cost, description))
    }).catch((err) => {
      console.log('err:', err)
    })
  }
}

export const callUpdateTask = (id, title, value, cost, description) => {
  return dispatch => {
    return fetch(new Request('tasks/'+ id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify( {title, value, cost, description} )
    })).then(() => {
      dispatch(updateTask(id, title, value, cost, description))
    }).catch((err) => {
      console.log('err')
    })
  }
}

export const callToggleTask = (id) => {
  return dispatch => {
    return fetch(new Request('tasks/'+ id +'/toggle', {
      method: 'PUT'
    })).then(() => {
      dispatch(toggleTask(id))
    }).catch((err) => {
      console.log('err')
    })
  }
}

export const callDeleteTask = (id) => {
  return dispatch => {
    return fetch(new Request('tasks/'+ id, {
      method: 'DELETE',
      credentials: 'same-origin'
    })).then(() => {
      dispatch(deleteTask(id))
    }).catch((err) => {
      console.log('err')
    })
  }
}
