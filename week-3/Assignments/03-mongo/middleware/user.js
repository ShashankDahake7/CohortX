const { User } = require("../db/index");

async function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    // Check if username and password are provided in the headers
    if (!username || !password) {
        return res.status(401).json({ message: "Authentication failed. Username and password are required in headers." });
    }
    try {
        // Validate user from the database
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(401).json({ message: "Authentication failed. Invalid credentials." });
        }
        // Attach the user object to the request for later use
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = userMiddleware;