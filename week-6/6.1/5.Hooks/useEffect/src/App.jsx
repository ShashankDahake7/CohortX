import { useState } from 'react'
import { useEffect } from 'react'
import { Todos } from '../components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  // without polling
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://sum-server.100xdevs.com/todos");
  //       const json = await response.json();
  //       setTodos(json.todos);
  //     }
  //     catch (error) {
  //       console.error('Error fetching todos:', error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // Polling for 10 sec
  useEffect(() => {
    setInterval(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://sum-server.100xdevs.com/todos");
          const json = await response.json();
          setTodos(json.todos);
        }
        catch (error) {
          console.error('Error fetching todos:', error);
        }
      };
      fetchData();
    }, 10000);
  }, []);

  return (
    <div><Todos todos={todos} /></div>
  )
}

export default App;

// You cannot directly use an async function as the first argument to useEffect. Here's why and how to work around it:
// Why?
// Return Value:
// useEffect expects its callback function to return either nothing (undefined) or a cleanup function.
// Async Functions:
// async functions always return a Promise, which doesn't match what useEffect expects. 
// How to Use Async/Await in useEffect
// Define an Inner Function: Create a regular function inside your useEffect and make it async.
// Call the Inner Function: Immediately call the inner function within the useEffect callback.