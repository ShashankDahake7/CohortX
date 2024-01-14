import { useState } from 'react';

let counter = 4;

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Go to Gym",
    description: "go to gym today"
  }, {
    id: 2,
    title: "eat food",
    description: "eat food"
  }, {
    id: 3,
    title: "go to class",
    description: "go to class"
  }]);

  function addTodo() {
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()
    }]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(function (todo) {
        return <Todo key={todo.id} title={todo.title} description={todo.description} />
      })}
    </div>
  )
}

export default App

export function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  )
}