const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    date: Date,
    rating: Number,
    text: String,
    name: String,
});

commentModel = mongoose.model('comments', commentSchema);

module.exports = commentModel;
