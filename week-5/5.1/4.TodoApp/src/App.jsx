import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([{
    title: "DSA",
    description: "atleast 5-6 questions everyday",
    completed: true
  }, {
    title: "Exercise",
    description: "atleast 15-20 mins everyday",
    completed: false
  }, {
    title: "Exercise",
    description: "atleast 15-20 mins everyday",
    completed: false
  }]);

  function addTodo() {
    // ... -> spread operator
    setTodos([...todos, {
      title: "new Todo",
      description: "new description"
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add a Random todo</button>

      {/* <Todo title="Shashank" description="D" />
      <Todo title="Shashank1" description="D1" /> */}

      {/* <Todo title={todos[0].title} description={todos[0].description} />
      <Todo title={todos[1].title} description={todos[1].description} /> */}

      {todos.map(function (todo) {
        // return (
        //   <div>
        //     <Todo title={todo.title} description={todo.description} />
        //   </div>
        // )
        return <Todo title={todo.title} description={todo.description} />
      })}
    </div>
  )
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

export default App;