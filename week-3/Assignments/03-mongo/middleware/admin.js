const { Admin } = require("../db/index");

async function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
    // Check if username and password are provided in the headers
    if (!username || !password) {
        return res.status(401).json({ message: "Authentication failed. Username and password are required in headers." });
    }
    try {
        // Validate admin from the database
        const admin = await Admin.findOne({ username, password });
        if (!admin) {
            return res.status(403).json({ message: "Authentication failed. Invalid credentials." });
        }
        // Attach the admin object to the request for later use
        req.admin = admin;
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = adminMiddleware;