"use strict";
// import { games } from "./store";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
// export function startLogger() {
//     setInterval(() => {
//         console.log(games);
//     }, 4000)
// }
// Bad Approach -> Gives empty array
// import { GameManager } from "./GameManager";
// const gameManager = new GameManager();
// export function startLogger() {
//     setInterval(() => {
//         gameManager.logState();
//     }, 4000)
// }
// Not empty array
const GameManager_1 = require("./GameManager");
function startLogger() {
    setInterval(() => {
        GameManager_1.gameManager.logState();
    }, 4000);
}
exports.startLogger = startLogger;
