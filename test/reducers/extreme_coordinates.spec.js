import expect from 'expect'
import extremeCoordinates from '../../src/reducers/extreme_coordinates.jsx'

describe('extreme_coordinates reducer', () => {
  it('should handle initial state', () => {
    expect(extremeCoordinates(undefined, {})).toEqual({
      maxCost: 10,
      maxValue: 10,
      minCost: 0,
      minValue: 0
    })
  })

  it('should handle ADD_TASK', () => {
    expect(extremeCoordinates(undefined, {
      type: 'ADD_TASK',
      text: 'task0',
      cost: 5,
      value: 7,
      id: 0
    })).toEqual({
      maxCost: 10,
      maxValue: 10,
      minCost: 0,
      minValue: 0
    })

    expect(extremeCoordinates(undefined, {
      type: 'ADD_TASK',
      text: 'task0',
      cost: 30,
      value: 30,
      id: 0
    })).toEqual({
      maxCost: 30,
      maxValue: 30,
      minCost: 0,
      minValue: 0
    })

    expect(extremeCoordinates({}}, {
      type: 'ADD_TASK',
      text: 'task0',
      cost: 30,
      value: 30,
      id: 0
    })).toEqual({
      maxCost: 30,
      maxValue: 30,
      minCost: 0,
      minValue: 0
    })
  })

})
