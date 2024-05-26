"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GameManager_1 = require("./GameManager");
const logger_1 = require("./logger");
(0, logger_1.startLogger)();
setInterval(() => {
    GameManager_1.GameManager.getInstance().addGame({
        id: Math.random().toString(),
        "whitePlayer": "shashank",
        "blackPlayer": "king",
        moves: []
    });
}, 5000);
