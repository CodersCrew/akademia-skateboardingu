import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  date: Date,
  rating: Number,
  text: String,
  name: String
});

const commentModel = mongoose.model('comments', commentSchema);

export default commentModel;
