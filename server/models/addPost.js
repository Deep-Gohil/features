// Add Post To Whatsapp 

const mongoose = require('mongoose')

const addPostToWhatsapp = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    image: { type: String, require: true },
    caption: { type: String, require: true },
    location: { type: String },
    createdAt: { type: Date, default: Date.now },
    liked: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const Post = mongoose.model("Post",addPostToWhatsapp)
module.exports = Post;