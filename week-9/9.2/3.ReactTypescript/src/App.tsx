// Assignment #2 - Create a React component that takes todos as an input and renders them

import './App.css'

function App() {
  return (
    <>
      <Todo title="Go to Gym" description="From 6-7" done={false} />
    </>
  )
}

interface TodoProp {
  title: string,
  description: string,
  done: boolean
}

function Todo(props: TodoProp) {
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
    <h3>{props.done}</h3>
  </div>
}

export default App
