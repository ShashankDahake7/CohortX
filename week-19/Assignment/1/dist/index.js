"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
const httpServer = app.listen(8080);
const wss = new ws_1.WebSocketServer({ server: httpServer });
wss.on('connection', (ws) => {
    console.log('New Client Connected');
    ws.on('error', console.error);
    ws.on('message', (message) => {
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
