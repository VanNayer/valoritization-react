const extremeCoordinates = (state = {minValue: 0, maxValue: 10, minCost: 0, maxCost: 10}, action) => {
  switch (action.type) {
    case 'ADD_TASK':
    case 'UPDATE_TASK':
      return {
        minValue:  Math.min(state.minValue, action.value),
        maxValue: Math.max(state.maxValue, action.value),
        minCost: Math.min(state.minCost, action.cost),
        maxCost: Math.max(state.maxCost, action.cost)
    }
    default:
      return state
  }
}

export default extremeCoordinates
