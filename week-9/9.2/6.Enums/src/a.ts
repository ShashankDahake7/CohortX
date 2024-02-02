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

// enum Direction {
//     Up = 1,
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


// Common usecase in express
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/", (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })