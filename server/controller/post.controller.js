const Post = require("../models/addPost");

const getAllPost = async (req, res) => {
    try {
        let posts = await Post.find().populate("User")
        res.json(posts);
    } catch (e) {
        res.status(400).json    ({ err: e.message });
    }
}

const getPostById = async (req, res) => {
    try {
        let { id } = req.params
        let post = await Post.findById(id).populate("User")
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(post);
    } catch (e) {
        res.status(400).json({ err: e.message });
    }
}

const createPost = async (req, res) => {
    if (req.file) {
        req.body.image = req.file.image;
    }
    try {
        req.body.user = req.body.user;

        let newPost = await Post.create(req.body);
        res.status(201).json(newPost);
    } catch (e) {
        res.status(400).json({ err: e.message });
    }
}

const updatePost = async (req, res) => {
    if (req.file) {
        req.body.image = req.file.image;
    }
    try {
        let { id } = req.params
        let newPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
        if (!newPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(newPost);
    } catch (e) {
        res.status(400).json({ err: e.message });
    }
}

const deletePost = async (req, res) => {
    try {
        let { id } = req.params
        let deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(deletedPost);
    } catch (e) {
        res.status(400).json({ err: e.message });
    }
}

module.exports = { getAllPost, getPostById, createPost, updatePost, deletePost };