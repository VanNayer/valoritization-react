import React, {PropTypes} from 'react'

var matrixLegendStyle = {
  position: 'absolute',
  backgroundColor: 'black',
  color: 'white',
  width: '100%',
  height: '20px',
  bottom: 0
}

const Cost = ({maxCost}) => (
  <div style={matrixLegendStyle}>
    <span style={{position: 'absolute', right: '50%'}}>{matrix_infos.cost}</span>
    <span style={{position: 'absolute', right: '1%'}}>{maxCost}</span>
  </div>
)

Cost.propTypes = {
  maxCost: PropTypes.number.isRequired
}

export default Cost
