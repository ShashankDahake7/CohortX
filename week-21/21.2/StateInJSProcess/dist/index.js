"use strict";
// import { games } from "./store";
// import { startLogger } from "./logger";
Object.defineProperty(exports, "__esModule", { value: true });
// startLogger();
// setInterval(() => {
//     games.push({
//         "id": "1",
//         "whitePlayer": "shashank",
//         "blackPlayer": "king",
//         moves: []
//     })
// }, 5000)
// Bad Approach -> empty array
// import { GameManager } from "./GameManager";
// import { startLogger } from "./logger";
// const gameManager = new GameManager();
// startLogger();
// setInterval(() => {
//     gameManager.addGame({
//         id: Math.random().toString(),
//         "whitePlayer": "shashank",
//         "blackPlayer": "king",
//         moves: []
//     })
// }, 5000)
// Not empty array
const GameManager_1 = require("./GameManager");
const logger_1 = require("./logger");
(0, logger_1.startLogger)();
setInterval(() => {
    GameManager_1.gameManager.addGame({
        id: Math.random().toString(),
        "whitePlayer": "shashank",
        "blackPlayer": "king",
        moves: []
    });
}, 5000);
