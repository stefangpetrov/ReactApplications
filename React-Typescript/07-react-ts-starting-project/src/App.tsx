import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
      const newTodo = new Todo(todoText);

      setTodos((prevTodos) => {
        return prevTodos.concat(newTodo);
      })
  }

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== todoId);
    })
}

  return (
    <div >
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos onClick={removeTodoHandler} items={todos}/>
    </div>
  );
}

export default App;
