import React from "react"
import Todo from "../models/todo"
import TodoItem from "./TodoItem"

const Todos: React.FC<{onClick: (id: string) => void,items: Todo[]}> = (props) => {
  return (
    <ul>
        {props.items.map((item) => (
            <TodoItem onClick={props.onClick.bind(null, item.id)} key={item.id} text={item.text}/>
        ))}
    </ul>
  )

  
}

export default Todos