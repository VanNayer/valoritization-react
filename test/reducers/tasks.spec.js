import expect from 'expect'
import tasks from '../../src/reducers/tasks.jsx'
import {addTask, updateTask, toggleTask} from '../../src/actions/actions.jsx'

describe('tasks reducer', () => {
  it('should handle initial state', () => {
    expect(tasks(undefined, {}))
    .toEqual([])
  })

  it('should handle ADD_TASK', () => {
    expect(tasks([], addTask('0-1-2-3-4', 'task0', 8000, 8888)))
    .toEqual([{
      id: '0-1-2-3-4',
      title: 'task0',
      value: 8000,
      cost: 8888,
      completed: false
    }])

    expect(
      tasks([{
        id: '0-1-2-3-4',
        title: 'task0',
        value: 8000,
        cost: 8888,
        completed: false
      }], addTask('8-8-8-8-8', 'New', 7777, 77, true)))
    .toEqual([{
      id: '0-1-2-3-4',
      title: 'task0',
      value: 8000,
      cost: 8888,
      completed: false
    }, {
      id: '8-8-8-8-8',
      title: 'New',
      value: 7777,
      cost: 77,
      completed: true
    }])
  })

  it('should handle TOGGLE_TASK', () => {
    expect(tasks([{completed: false,id: 1}, {completed: false,id: 0}],toggleTask(1)))
    .toEqual([{completed: true,id: 1}, {completed: false,id: 0}])
  })

  it('should handle UPDATE_TASK', () => {
    expect(tasks([{id: 0}], updateTask(0, 'coucou', 22, 33)))
    .toEqual([{
      title: 'coucou',
      value: 22,
      cost: 33,
      id: 0
    }])
  })

})
