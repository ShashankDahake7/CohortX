import { useEffect, useState } from 'react';

const useSocket = (url: any) => {
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [latestMessage, setLatestMessage] = useState("");

    useEffect(() => {
        const newSocket = new WebSocket(url);
        newSocket.onopen = () => {
            console.log('Connection established');
            newSocket.send('Hello Server!');
            setSocket(newSocket);
        }
        newSocket.onmessage = (message) => {
            console.log('Message received:', message.data);
            setLatestMessage(message.data);
        }
        newSocket.onerror = (error) => {
            console.error('WebSocket error:', error);
        }
        newSocket.onclose = () => {
            console.log('WebSocket connection closed');
        }

        return () => {
            newSocket.close();
        }
    }, [url]);

    return {
        socket,
        latestMessage,
        sendMessage: (msg: any) => {
            if (socket && socket.readyState === WebSocket.OPEN) {
                socket.send(msg);
            } else {
                console.error('Socket is not open');
            }
        }
    };
};

export default useSocket;
