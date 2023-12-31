const jwt = require('jsonwebtoken');
const { Admin } = require('../db/index');
const { JWT_SECRET } = require("../config");

async function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;
    // Check if the Authorization header is present
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized. Token not provided.' });
    }
    try {
        // Verify the JWT token
        // const words = token.split(" ");
        // const jwtToken = words[1];
        // const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        const verified = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET); // Replace 'your-secret-key' with your actual secret key
        // Check if the verified token contains the expected admin credentials
        const { username, password } = verified;
        const admin = await Admin.findOne({ username, password });
        if (!admin) {
            return res.status(401).json({ message: 'Unauthorized. Invalid credentials.' });
        }
        // Attach the admin object to the request for later use
        req.admin = admin;
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Unauthorized. Invalid token.' });
    }
}

module.exports = adminMiddleware;