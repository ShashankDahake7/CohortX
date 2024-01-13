import { useState, useEffect } from 'react';
import { CreateTodo } from '../components/CreateTodo';
import { Todos } from '../components/Todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(function () {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/todos");
        const json = await response.json();
        setTodos(json.todos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means the effect will run once after the initial render

  return (
    <>
      <CreateTodo />
      <Todos todos={todos} />
    </>
  );
}

export default App;
