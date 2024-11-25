const express = require('express');
const router = express.Router();
const db = require('../models');

// Create or Update Page
router.post('/page', async (req, res) => {
    const { name, content } = req.body;
    try {
        const [page, created] = await db.Page.upsert({ name, content });
        res.json(page);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add Blog Post
router.post('/blog', async (req, res) => {
    const { title, content } = req.body;
    try {
        const blog = await db.Blog.create({ title, content });
        res.json(blog);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;