"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const ioredis_1 = __importDefault(require("ioredis"));
const wss = new ws_1.WebSocketServer({ port: 8080 });
// Connect to Redis pub/sub
const redisSubscriber = new ioredis_1.default();
const redisPublisher = new ioredis_1.default();
// Function to send message to WebSocket clients
function sendMessage(ws, message) {
    if (ws.readyState === ws_1.WebSocket.OPEN) {
        ws.send(message);
    }
}
// Handle WebSocket connections
wss.on('connection', (ws) => {
    console.log('Client connected');
    // Handle messages from WebSocket client
    ws.on('message', (message) => {
        console.log('Received message:', message);
        // Subscribe to Redis channel based on user ID
        const userId = JSON.parse(message).userId;
        redisSubscriber.subscribe(`user:${userId}`);
        // Listen for messages from Redis
        redisSubscriber.on('message', (channel, message) => {
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
