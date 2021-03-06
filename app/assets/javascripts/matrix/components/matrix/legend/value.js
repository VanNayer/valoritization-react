import React, {PropTypes} from 'react'

var matrixLegendStyle = {
  position: 'absolute',
  backgroundColor: 'black',
  color: 'white',
  width: '30px',
  left: '-30px',
  height: '100%'
}

const Value = ({maxValue}) => (
  <div style={matrixLegendStyle}>
    <span style={{position: 'absolute', top: '1%', textAlign: 'center', width: '100%'}}>{maxValue}</span>
    <span style={{position: 'absolute', top: '50%', textAlign: 'center', width: '100%', transform: 'rotate(-90deg)'}}>{matrix_infos.value}</span>
  </div>
)

Value.propTypes = {
  maxValue: PropTypes.number.isRequired
}

export default Value
