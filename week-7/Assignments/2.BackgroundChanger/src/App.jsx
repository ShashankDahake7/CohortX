import { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeBackgroundColor = (newColor) => {
    setBackgroundColor(newColor);
  };

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        minHeight: '100vh',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <button className="red-button" onClick={() => changeBackgroundColor('red')}>
        Red
      </button>
      <button className="yellow-button" onClick={() => changeBackgroundColor('yellow')}>
        Yellow
      </button>
      <button className="black-button" onClick={() => changeBackgroundColor('black')}>
        Black
      </button>
      <button className="purple-button" onClick={() => changeBackgroundColor('purple')}>
        Purple
      </button>
      <button className="green-button" onClick={() => changeBackgroundColor('green')}>
        Green
      </button>
      <button className="blue-button" onClick={() => changeBackgroundColor('blue')}>
        Blue
      </button>
      <button className="default-button" onClick={() => changeBackgroundColor('white')}>
        Default
      </button>
    </div>
  );
}

export default App;