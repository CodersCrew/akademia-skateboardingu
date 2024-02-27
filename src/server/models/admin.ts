import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  login: String,
  password: String
});

const adminModel = mongoose.model('admins', adminSchema);

export default adminModel;
