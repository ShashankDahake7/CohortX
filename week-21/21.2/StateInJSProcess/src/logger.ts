// import { games } from "./store";

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
import { gameManager } from "./GameManager";

export function startLogger() {
    setInterval(() => {
        gameManager.logState();
    }, 4000)
}
