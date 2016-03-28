// import expect from 'expect'
// import extremeCoordinates from '../../src/reducers/extreme_coordinates.jsx'
// import {addTask, updateTask, toggleTask} from '../../src/actions/actions.jsx'
//
// describe('extreme_coordinates reducer', () => {
//   it('should handle initial state', () => {
//     expect(extremeCoordinates(undefined, {}))
//     .toEqual({
//       maxCost: 10,
//       maxValue: 10,
//       minCost: 0,
//       minValue: 0
//     })
//   })
//   it('should handle ADD_TASK', () => {
//     expect(extremeCoordinates(undefined, addTask(0, '', 4, 7)))
//     .toEqual({
//       maxCost: 10,
//       maxValue: 10,
//       minCost: 0,
//       minValue: 0
//     })
//     expect(extremeCoordinates(undefined,  addTask(0, '', 30, 30)))
//     .toEqual({
//       maxCost: 30,
//       maxValue: 30,
//       minCost: 0,
//       minValue: 0
//     })
//     expect(extremeCoordinates({maxCost: 40,maxValue: 40,minCost: 5,minValue: 5},  addTask(0, '', 0, 30)))
//     .toEqual({
//       maxCost: 40,
//       maxValue: 40,
//       minCost: 5,
//       minValue: 0
//     })
//   })
//   it('should handle UPDATE_TASK', () => {
//     expect(extremeCoordinates({maxCost: 5,maxValue: 5,minCost: 0,minValue: 0}, updateTask(0, '', 30, 33)))
//     .toEqual({
//       maxCost: 33,
//       maxValue: 30,
//       minCost: 0,
//       minValue: 0
//     })
//   })
//   // it('should handle DELETE_TASK', () => {
//   //   it('when task is an extremist', () => {
//   //     expect(extremeCoordinates({maxCost: 11, maxValue: 11, minCost: 0, minValue: 0}, deleteTask(0)))
//   //     .toEqual({
//   //       maxCost: 10,
//   //       maxValue: 10,
//   //       minCost: 0,
//   //       minValue: 0
//   //     })
//   //   })
//   // })
// })
