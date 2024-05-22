"use strict";
// hoppscotch.io
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import WebSocket, { WebSocketServer } from 'ws';
// import http from 'http';
// const server = http.createServer(function (request: any, response: any) {
//     console.log((new Date()) + ' Received request for ' + request.url);
//     response.end("hi there");
// });
// const wss = new WebSocketServer({ server });
// let userCount = 0;
// wss.on('connection', function connection(socket) {
//     socket.on('error', console.error);
//     socket.on('message', function message(data, isBinary) {
//         wss.clients.forEach(function each(client) {
//             if (client.readyState === WebSocket.OPEN) {
//                 client.send(data, { binary: isBinary });
//             }
//         });
//     });
//     console.log("user connected ", ++userCount);
//     socket.send('Hello! Message From Server!!');
// });
// server.listen(8080, function () {
//     console.log((new Date()) + ' Server is listening on port 8080');
// });
const express_1 = __importDefault(require("express"));
const ws_1 = require("ws");
const app = (0, express_1.default)();
const httpServer = app.listen(8080);
const wss = new ws_1.WebSocketServer({ server: httpServer });
let userCount = 0;
wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    ws.on('message', function message(data, isBinary) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === ws_1.WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });
    console.log("user connected ", ++userCount);
    ws.send('Hello! Message From Server!!');
});
