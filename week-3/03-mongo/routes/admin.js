const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        // Check if admin already exists with the same username
        const existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin with this username already exists' });
        }
        // Create a new admin
        const newAdmin = await Admin.create({ username, password });
        return res.json({ message: 'Admin created successfully' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    try {
        const { title, description, price, imageLink } = req.body;
        // Create a new course
        const newCourse = await Course.create({ title, description, price, imageLink, published: true });
        return res.json({ message: 'Course created successfully', courseId: newCourse._id });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    try {
        // Fetch all courses
        const courses = await Course.find();
        return res.json({ courses });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;