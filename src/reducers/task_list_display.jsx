const task_list_display = (state = {sortFunction: () => {return 0}}, action) => {
  switch (action.type) {
    case 'CHANGE_LIST_ORDER':
      return {sortFunction: action.sortFunction}
    default:
      return state
  }
}

export default task_list_display
