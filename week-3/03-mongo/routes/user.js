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
        const newUser = await User.create({ username, password });
        return res.json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/courses', async (req, res) => {
    try {
        // Fetch all courses
        const courses = await Course.find();
        return res.json({ courses });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try {
        const courseId = req.params.courseId;
        // Check if the course exists
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        // Implement course purchase logic here
        // You may want to update the user's purchasedCourses array or perform any other necessary actions
        return res.json({ message: 'Course purchased successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        // Implement fetching purchased courses logic here
        // You may need to retrieve the user's purchasedCourses array
        return res.json({ purchasedCourses: [] }); // Placeholder for now
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;