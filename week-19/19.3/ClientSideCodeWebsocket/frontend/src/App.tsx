// import { useEffect, useState } from 'react'
// import './App.css'

// function App() {
//   const [socket, setSocket] = useState<WebSocket | null>(null);
//   const [latestMessage, setLatestMessage] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const newSocket = new WebSocket('ws://localhost:8080');
//     newSocket.onopen = () => {
//       console.log('Connection established');
//       newSocket.send('Hello Server!');
//       setSocket(newSocket);
//     }
//     newSocket.onmessage = (message) => {
//       console.log('Message received:', message.data);
//       setLatestMessage(message.data);
//     }
//     return () => {
//       newSocket.close();
//     }
//   }, [])

//   if (!socket) {
//     return <div>
//       Connecting to the socker server....
//     </div>
//   }
//   return (
//     <>
//       <input onChange={(e) => {
//         setMessage(e.target.value);
//       }}></input>
//       <button onClick={() => {
//         socket.send(message)
//       }}>Send</button>
//       {latestMessage}
//     </>
//   )
// }

// export default App

import { useState } from 'react';
import useSocket from '../customHook/useSocket';
import './App.css';

function App() {
  const { socket, latestMessage, sendMessage } = useSocket('ws://localhost:8080');
  const [message, setMessage] = useState("");

  if (!socket) {
    return <div>
      Connecting to the socket server....
    </div>;
  }

  return (
    <>
      <input
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={message}
      />
      <button onClick={() => {
        sendMessage(message);
      }}>Send</button>
      <div>{latestMessage}</div>
    </>
  );
}

export default App;