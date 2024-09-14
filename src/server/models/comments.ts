import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  date: Date,
  name: String,
  rating: Number,
  text: String
});

const Comment = mongoose.model('comments', schema);

export default Comment;
