const { Router } = require("express");
const jwt = require('jsonwebtoken');
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();
const { JWT_SECRET } = require("../config");

// Admin Routes
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if the admin with the same username already exists
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Username is already taken. Choose a different one.' });
        }
        // Create a new admin
        await Admin.create({ username, password });
        res.json({ message: 'Admin created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if the admin exists and the password is correct
        const admin = await Admin.findOne({ username, password });
        if (!admin) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        // Sign a JWT token with admin credentials
        const token = jwt.sign({ username, password }, JWT_SECRET);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const { title, description, price, imageLink } = req.body;
    try {
        // Create a new course
        const newCourse = await Course.create({ title, description, price, imageLink, published: true });
        res.json({ message: 'Course created successfully', courseId: newCourse._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    try {
        // Fetch all courses
        const courses = await Course.find();
        res.json({ courses: courses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;