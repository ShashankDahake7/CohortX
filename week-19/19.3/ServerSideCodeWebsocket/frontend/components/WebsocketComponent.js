"use client"
import { useEffect, useState, ChangeEvent } from 'react';

const WebSocketComponent = () => {
  const [socket, setSocket] = useState(null);
  const [latestMessage, setLatestMessage] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');

    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('Hello Server!');
      setSocket(newSocket);
    };

    newSocket.onmessage = (event) => {
      console.log('Message received:', event.data);
      setLatestMessage(event.data);
    };

    return () => {
      newSocket.close();
    };
  }, []);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (socket) {
      socket.send(message);
    }
  };

  if (!socket) {
    return <div>Connecting to the socket server...</div>;
  }

  return (
    <>
      <input onChange={handleMessageChange} />
      <button onClick={handleSendMessage}>
        Send
      </button>
      <div>{latestMessage}</div>
    </>
  );
};

export default WebSocketComponent;