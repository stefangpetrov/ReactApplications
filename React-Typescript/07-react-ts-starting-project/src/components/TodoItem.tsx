import React from 'react'
import Todo from '../models/todo'

const TodoItem: React.FC<{onClick: () => void,text: string}> = (props) => {
  return (
    <li onClick={props.onClick}>{props.text}</li>
  )
}

export default TodoItem