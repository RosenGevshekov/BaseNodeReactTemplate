const express = require('express');
const router = express.Router();
const db = require('../models');

// Get Page Content
router.get('/page/:name', async (req, res) => {
    try {
        const page = await db.Page.findOne({ where: { name: req.params.name } });
        if (!page) return res.status(404).json({ message: 'Page not found' });
        res.json(page);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Blogs
router.get('/blogs', async (req, res) => {
    try {
        const blogs = await db.Blog.findAll();
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;