const { Admin } = require("../db/index");

function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    // Check if username and password are provided in the headers
    if (!username || !password) {
        return res.status(401).json({ message: 'Authentication failed. Username and password are required in headers.' });
    }
    // Validate admin from the admin DB
    Admin.findOne({
        username: username,
        password: password
    })
        .then(admin => {
            if (!admin) {
                return res.status(403).json({ message: 'Authentication failed. Invalid credentials.' });
            }
            // If authentication is successful, attach the admin object to the request for later use
            req.admin = admin;
            next();
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        });
}

module.exports = adminMiddleware;