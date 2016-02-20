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

    expect(extremeCoordinates({maxCost: 40,maxValue: 40,minCost: 5,minValue: 5}, {
      type: 'ADD_TASK',
      text: 'task0',
      cost: 30,
      value: 0,
      id: 0
    })).toEqual({
      maxCost: 40,
      maxValue: 40,
      minCost: 5,
      minValue: 0
    })
  })
  it('should handle UPDATE_TASK', () => {
    expect(extremeCoordinates({maxCost: 5,maxValue: 5,minCost: 0,minValue: 0}, {
      type: 'UPDATE_TASK',
      text: 'task0',
      cost: 33,
      value: 30,
      id: 0
    })).toEqual({
      maxCost: 33,
      maxValue: 30,
      minCost: 0,
      minValue: 0
    })

  })

})
