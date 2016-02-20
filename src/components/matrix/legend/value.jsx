import React, {PropTypes} from 'react'

var matrixLegendStyle = {
  position: 'absolute',
  backgroundColor: 'black',
  color: 'white',
  width: '20px',
  height: '100%'
}


const Value = ({maxValue}) => (
  <div style={matrixLegendStyle}>
    <span style={{position: 'absolute', top: '1%'}}>{maxValue}</span>
  </div>
)

Value.propTypes = {
  maxValue: PropTypes.number.isRequired
}

export default Value
