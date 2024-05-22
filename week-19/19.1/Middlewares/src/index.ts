// import express from "express";
// const app = express();

// let requestCount = 0;

// app.use(
//     function middleware(req, res, next) {
//         requestCount++;
//         next()
//     }
// );

// app.get("/", (req, res) => {
//     res.send("Hello world");
// })

// app.get("/requestCount", (req, res) => {
//     res.json({
//         requestCount
//     })
// })

// app.listen(8080);


// import express from "express"
// import jwt from 'jsonwebtoken'

// const app = express();

// //@ts-ignore
// async function authMiddleware(req, res, next) {
//     const token = req.headers.authorization.split(" ")[1];
//     const decoded = jwt.verify(token, "secret");
//     if (decoded) {
//         next();
//     } else {
//         res.status(401).send("Unauthorised");
//     }
// }

// app.get("/", authMiddleware, (req, res) => {
//     res.send("You are logged in");
// })

// app.listen(8080);