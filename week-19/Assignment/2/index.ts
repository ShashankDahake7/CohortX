import { WebSocket, WebSocketServer } from "ws";
import Redis from 'ioredis';

const wss = new WebSocketServer({ port: 8080 });

// Connect to Redis pub/sub
const redisSubscriber = new Redis();
const redisPublisher = new Redis();

// Function to send message to WebSocket clients
function sendMessage(ws: WebSocket, message: string) {
    if (ws.readyState === WebSocket.OPEN) {
        ws.send(message);
    }
}

// Handle WebSocket connections
wss.on('connection', (ws: WebSocket) => {
    console.log('Client connected');

    // Handle messages from WebSocket client
    ws.on('message', (message: string) => {
        console.log('Received message:', message);

        // Subscribe to Redis channel based on user ID
        const userId = JSON.parse(message).userId;
        redisSubscriber.subscribe(`user:${userId}`);

        // Listen for messages from Redis
        redisSubscriber.on('message', (channel: string, message: string) => {
            console.log('Received message from Redis:', message);

            // Send message back to WebSocket client
            sendMessage(ws, message);
        });

        // Unsubscribe from Redis when WebSocket closes
        ws.on('close', () => {
            console.log('Client disconnected');
            redisSubscriber.unsubscribe(`user:${userId}`);
        });
    });
});