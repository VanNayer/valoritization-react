import React, {PropTypes} from 'react'

var matrixLegendStyle = {
  position: 'absolute',
  backgroundColor: 'white',
  color: 'black',
  width: '100%',
  height: '20px',
  bottom: '-20px',
  fontWeight: '900'

}

const Cost = ({maxCost, minCost}) => (
  <div style={matrixLegendStyle}>
    <span style={{position: 'absolute', right: '95%'}}>{minCost} {matrix_infos.cost}</span>
    <span style={{position: 'absolute', right: '50%'}}>{(maxCost-minCost)/2} {matrix_infos.cost}</span>
    <span style={{position: 'absolute', right: '1%'}}>{maxCost} {matrix_infos.cost}</span>
  </div>
)

Cost.propTypes = {
  minCost: PropTypes.number.isRequired,
  maxCost: PropTypes.number.isRequired
}

export default Cost
