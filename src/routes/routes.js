const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.json(posts);

});

router.get('/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.json(post);

});

router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    const post = await newPost.save();
    res.json(post);

});

router.put('/:id', async (req, res) => {
    const post = req.body;
    await Post.findByIdAndUpdate(req.params.id, post);
    res.json({ status: "Post updates" });

});

router.delete('/:id', async (req, res) => {
    await Post.findByIdAndRemove(req.params.id);
    res.json({ status: 'Post Deleted' });

});



module.exports = router;