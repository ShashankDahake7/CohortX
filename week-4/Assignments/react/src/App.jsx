import React, { useState } from 'react';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || description.trim() === '') {
      alert('Please enter both title and description.');
      return;
    }
    setTodos([...todos, { title, description }]);
    setTitle('');
    setDescription('');
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Title:<input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /></label><br /> <br />
        <label>Description:<input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /></label><br /><br />
        <button type="submit">Add TODO</button>
      </form>
      <div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <strong>{todo.title}:</strong>
              {todo.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;