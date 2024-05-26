import express from 'express'
import { WebSocketServer, WebSocket } from 'ws'

const app = express();
const httpServer = app.listen(8080);

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', (ws: WebSocket) => {
    console.log('New Client Connected');
    ws.on('error', console.error);
    ws.on('message', (message: string) => {
        try {
            const data = JSON.parse(message);
            if (data.userId) {
                console.log(`Received userId: ${data.userId}`);
            }
            else {
                console.log("No userId found in the message");
            }
            ws.close();
        }
        catch (e) {
            console.log("Error parsing message", e);
            ws.close();
        }
    });
    ws.on('error', (error) => {
        console.log("Websocket error", error);
    });
    ws.on('close', () => {
        console.log("Client disconnected");
    });
});

console.log("WebSocket server is running on ws://localhost:8080");