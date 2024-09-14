import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  login: String,
  password: String
});

const Admin = mongoose.model('admins', schema);

export default Admin;
