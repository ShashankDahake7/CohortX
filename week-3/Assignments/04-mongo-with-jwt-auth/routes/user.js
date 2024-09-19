const { Router } = require("express");
const jwt = require('jsonwebtoken');
const userMiddleware = require("../user");
const { User, Course } = require("../db/index"); // Adjust the path based on your project structure
const { JWT_SECRET } = require("../config");
const router = Router();

// User Routes
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if the user with the same username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username is already taken. Choose a different one.' });
        }
        // Create a new user
        const newUser = await User.create({ username, password });
        res.json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if the user exists and the password is correct
        const user = await User.findOne({ username, password });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        // Sign a JWT token with user credentials
        const token = jwt.sign({ username, password }, JWT_SECRET); // Replace 'your-secret-key' with your actual secret key
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/courses', userMiddleware, async (req, res) => {
    try {
        // Fetch all courses
        const courses = await Course.find();
        res.json({ courses: courses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const { courseId } = req.params;
    try {
        // Find the user and course
        const user = req.user; // User object attached by userMiddleware
        const course = await Course.findById(courseId);
        // Check if the course exists
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        // Check if the user has already purchased the course
        if (user.purchasedCourses.includes(courseId)) {
            return res.status(400).json({ message: 'You have already purchased this course' });
        }
        // Update the User model to include the purchased course
        user.purchasedCourses.push(courseId);
        await user.save();
        res.json({ message: 'Course purchased successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        // Fetch purchased courses for the user
        const user = req.user; // User object attached by userMiddleware
        const purchasedCourses = await Course.find({ _id: { $in: user.purchasedCourses } });
        res.json({ purchasedCourses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;