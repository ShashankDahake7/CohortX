// import { games } from "./store";
// import { startLogger } from "./logger";

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
import { gameManager } from "./GameManager";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
    gameManager.addGame({
        id: Math.random().toString(),
        "whitePlayer": "shashank",
        "blackPlayer": "king",
        moves: []
    })
}, 5000)
