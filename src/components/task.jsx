import React, {PropTypes} from 'react'

const Task = ({onClick, completed, text}) => (
  <article class="matrix__tasks__task" onClick={onClick} style={{
    textDecoration: completed
      ? 'line-through'
      : 'none'
  }}>
    {text}
  </article>
)

Task.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
