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