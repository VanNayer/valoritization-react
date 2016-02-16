import expect from 'expect'
import tasks from '../../src/reducers/tasks.jsx'

describe('tasks reducer', () => {
  it('should handle initial state', () => {
    expect(tasks(undefined, {})).toEqual([])
  })

  it('should handle ADD_TASK', () => {
    expect(tasks([], {
      type: 'ADD_TASK',
      text: 'task0',
      value: 8000,
      cost: 8888,
      id: 0
    })).toEqual([{
      text: 'task0',
      completed: false,
      value: 8000,
      cost: 8888,
      id: 0
    }])

  expect(
      tasks([{
        text: 'Run the tests',
        completed: false,
        value: 1,
        cost: 2,
        id: 0
      }, {
        text: 'Use Redux',
        completed: false,
        value: 3,
        cost: 4,
        id: 1
      }], {
        type: 'ADD_TASK',
        text: 'Fix the tests',
        value: 5,
        cost: 6,
        id: 2
      })
    ).toEqual([{
      text: 'Run the tests',
      completed: false,
      value: 1,
      cost: 2,
      id: 0
    }, {
      text: 'Use Redux',
      completed: false,
      value: 3,
      cost: 4,
      id: 1
    }, {
      text: 'Fix the tests',
      completed: false,
      value: 5,
      cost: 6,
      id: 2
    }])
  })

  it('should handle TOGGLE_TASK', () => {
    expect(
      tasks([{
        text: 'Run the tests',
        completed: false,
        value: 8000,
        cost: 8888,
        id: 1
      }, {
        text: 'Use Redux',
        completed: false,
        value: 7000,
        cost: 7777,
        id: 0
      }], {
        type: 'TOGGLE_TASK',
        id: 1
      })
    ).toEqual([{
      text: 'Run the tests',
      completed: true,
      value: 8000,
      cost: 8888,
      id: 1
    }, {
      text: 'Use Redux',
      completed: false,
      value: 7000,
      cost: 7777,
      id: 0
    }])
  })

})
