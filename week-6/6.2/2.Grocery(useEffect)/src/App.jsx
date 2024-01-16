import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [selectedTodoId, setSelectedTodoId] = useState(1);
  return (
    <div>
      <button onClick={() => setSelectedTodoId(1)}>1</button>
      <button onClick={() => setSelectedTodoId(2)}>2</button>
      <button onClick={() => setSelectedTodoId(3)}>3</button>
      <button onClick={() => setSelectedTodoId(4)}>4</button>
      <Todo id={selectedTodoId} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("https://sum-server.100xdevs.com/todo?id=" + id);
        const response = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
        setTodo(response.data.todo);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchData();
  }, [id]); // Include id in the dependency array If you use an empty dependency array ([]), the effect will only run once when the component mounts, and it won't be aware of changes to the id prop.

  return (
    <div>
      <br />
      ID:{id}
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </div>
  );
}

export default App;
