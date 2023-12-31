const jwt = require('jsonwebtoken');
const { User } = require('../db/index');
const { JWT_SECRET } = require("../config");

async function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    // Check if the Authorization header is present
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized. Token not provided.' });
    }
    try {
        // Verify the JWT token
        const verified = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET); // Replace 'your-secret-key' with your actual secret key
        // Check if the verified token contains the expected user credentials
        const { username, password } = verified;
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(401).json({ message: 'Unauthorized. Invalid credentials.' });
        }
        // Attach the admin object to the request for later use
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Unauthorized. Invalid token.' });
    }
}

module.exports = userMiddleware;