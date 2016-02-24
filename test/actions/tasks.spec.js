import expect from 'expect'
import * as actions from '../../src/actions/actions.jsx'

describe('task actions', () => {
  it('addTask should create ADD_TASK action', () => {
    expect(actions.addTask(0, 'Use Redux', 34, 57)).toEqual({
      type: 'ADD_TASK',
      id: 0,
      value: 34,
      cost: 57,
      title: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toogleTask should create TOGGLE_TASK action', () => {
    expect(actions.toggleTask(1)).toEqual({
      type: 'TOGGLE_TASK',
      id: 1
    })
  })

  it('updateTask should create UPDATE_TASK action', () => {
    expect(actions.updateTask(1, 'Michel', 3, 4)).toEqual({
      type: 'UPDATE_TASK',
      id: 1,
      title: 'Michel',
      value: 3,
      cost: 4
    })
  })
})
