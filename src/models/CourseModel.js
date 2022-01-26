const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    title: {
        type: String,
        minlength: 5,
        maxlength: 30
    },
    categories: [Number],
    content: String,
    picture: String,
    author: Number,
    comments: [Number],
    likes: Number,
    dislike: Number,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Course", CourseSchema);