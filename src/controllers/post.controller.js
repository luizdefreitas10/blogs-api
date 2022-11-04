const { postService } = require('../services');

const getAllPosts = async (_req, res) => {
  try {
    const posts = await postService.getAllPosts();
    return res.status(200).json(posts);
  } catch ({ status, message }) {
    res.status(status || 500).json({ message });
  }
};

const createNewPost = async (req, res) => {
  try {
    const post = await postService.createNewPost(req.body);
    return res.status(201).json(post);
  } catch ({ status, message }) {
    res.status(status || 500).json({ message });
  }
};

module.exports = { createNewPost, getAllPosts };