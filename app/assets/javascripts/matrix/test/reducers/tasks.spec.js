import expect from 'expect'
import tasks from '../../reducers/tasks.js';
import {addTask, setVisibilityFilter, toggleTask, deleteTask, updateTask} from '../../actions/actions.js';

describe('tasks reducer', () => {
  it('should handle initial state', () => {
    expect(tasks(undefined, {}))
    .toEqual([])
  })

  it('should handle ADD_TASK', () => {
    expect(
      tasks([{
        id: '0-1-2-3-4'
      }], addTask('8-8-8-8-8', 'New', 7777, 77, 'coucou', true)))
    .toEqual([{
      id: '0-1-2-3-4'
    }, {
      id: '8-8-8-8-8',
      title: 'New',
      value: 7777,
      cost: 77,
      description: 'coucou',
      completed: true
    }])
  })

  it('should handle TOGGLE_TASK', () => {
    expect(tasks([{completed: false,id: 1}, {completed: false,id: 0}],toggleTask(1)))
    .toEqual([{completed: true,id: 1}, {completed: false,id: 0}])
  })

  it('should handle DELETE_TASK', () => {
    expect(tasks([{id: 1}, {id: 0}], deleteTask(1)))
    .toEqual([{id: 0}])
  })

  it('should handle UPDATE_TASK', () => {
    expect(tasks([{id: 0}], updateTask(0, 'coucou', 22, 33, 'desc')))
    .toEqual([{
      title: 'coucou',
      value: 22,
      cost: 33,
      id: 0,
      description: 'desc'
    }])
  })

})
