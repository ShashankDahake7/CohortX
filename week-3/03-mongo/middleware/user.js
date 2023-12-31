const { User } = require("../db/index");

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    // Check if username and password are provided in the headers
    if (!username || !password) {
        return res.status(401).json({ message: 'Authentication failed. Username and password are required in headers.' });
    }
    // Validate user from the user DB
    User.findOne({
        username: username,
        password: password
    })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Authentication failed. Invalid credentials.' });
            }
            // If authentication is successful, attach the user object to the request for later use
            req.user = user;
            next();
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        });
}

module.exports = userMiddleware;