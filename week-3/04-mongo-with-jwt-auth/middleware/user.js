const jwt = require('jsonwebtoken');
const { User } = require('../db/index');

function userMiddleware(req, res, next) {
    const token = req.headers.authorization;
    // Check if the Authorization header is present
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized. Token not provided.' });
    }
    try {
        // Verify the JWT token
        const verified = jwt.verify(token.replace('Bearer ', ''), 'your-secret-key'); // Replace 'your-secret-key' with your actual secret key
        // Check if the verified token contains the expected user credentials
        const { username, password } = verified;
        User.findOne({ username, password })
            .then(user => {
                if (!user) {
                    return res.status(401).json({ message: 'Unauthorized. Invalid credentials.' });
                }
                // Attach the user object to the request for later use
                req.user = user;
                next();
            })
            .catch(error => {
                console.error(error);
                res.status(500).json({ message: 'Internal Server Error' });
            });
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: 'Unauthorized. Invalid token.' });
    }
}

module.exports = userMiddleware;