"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const GameManager_1 = require("./GameManager");
function startLogger() {
    setInterval(() => {
        GameManager_1.GameManager.getInstance().logState();
    }, 4000);
}
exports.startLogger = startLogger;
