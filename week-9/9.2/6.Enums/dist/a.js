"use strict";
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
// function doSomething(keyPressed: Direction) {
//     if (keyPressed == Direction.Up) {
//     }
// }
// doSomething(Direction.Up)
// doSomething(Direction.Down)
// console.log(Direction.Up)
// console.log(Direction.Down)
// enum Direction {
//     Up = "up",
//     Down = "down", 
//     Left = "left",
//     Right = "right"
// }
// function doSomething(keyPressed: Direction) {
//     if (keyPressed == Direction.Up) {
//     }
// }
// doSomething(Direction.Up)
// doSomething(Direction.Down)
// console.log(Direction.Up)
// console.log(Direction.Down)
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed == Direction.Up) {
    }
}
doSomething(Direction.Up);
doSomething(Direction.Down);
console.log(Direction.Up);
console.log(Direction.Down);
