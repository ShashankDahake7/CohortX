const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// User Routes
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        // Check if user already exists with the same username
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this username already exists' });
        }
        // Create a new user
        await User.create({ username, password });
        return res.json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/courses', async (req, res) => {
    try {
        // Fetch all courses
        const courses = await Course.find({ isPublished: true });
        return res.json({ courses });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
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
        // Implement fetching purchased courses logic here
        // You may need to retrieve the user's purchasedCourses array
        const user = await User.findOne({
            username: req.headers.username
        });
        const courses = await Course.find({
            _id: {
                "$in": user.purchasedCourses
            }
        })
        return res.json({ courses: courses })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;