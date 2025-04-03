const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json());

const ALL_USERS = [
    {
        username: "shashank@gmail.com",
        password: "123",
        name: "Shashank",
    },
    {
        username: "raman@gmail.com",
        password: "123321",
        name: "Raman singh",
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari",
    },
];

function userExists(username, password) {
    // write logic to return true or false if this user exists in ALL_USERS array
    let userExists = false;
    // using find
    // ALL_USERS.find((user) => {
    //     if (user.username === username && user.password === password) {
    //         userExists = true;
    //     }
    // })
    for (let i = 0; i < ALL_USERS.length; i++) {
        if ((ALL_USERS[i].username == username) && (ALL_USERS[i].password == password)) {
            userExists = true;
        }
    }
    return userExists;
}

// Returns a json web token with username encrypted
app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User doesn't exist in our in memory db",
        });
    }
    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    });
});

// Returns an array of all users if user is signed in (token is correct) Return 403 status code if not
app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of all users
        // res.json(ALL_USERS) 
        // return a list of users other than this username
        const otherUsers = ALL_USERS.filter((user) => user.username != username)
        res.json(otherUsers)
    }
    catch (err) {
        return res.status(403).json({
            msg: "Invalid token",
        });
    }
});

app.listen(3000);