import { useState, useEffect } from 'react';
import axios from 'axios';

function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://sum-server.100xdevs.com/todo");
        setTodos(response.data.todo);
      }
      catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchData();
  }, []);

  return todos;
}

function App() {
  const todos = useTodos();

  return (
    <div>
      {todos && todos.length > 0 ? (
        todos.map(function (todo) {
          return (
            <div key={todo.id}>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
            </div>
          );
        })
      ) : (
        <p>No todos available</p>
      )}
    </div>
  );
}


export default App;