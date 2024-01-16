import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return (
    <div><Todo id={3} /></div>
  )
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  // implement effect here
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://sum-server.100xdevs.com/todo?id=" + id);
        setTodo(response.data.todo);
      }
      catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  )
}

export default App;