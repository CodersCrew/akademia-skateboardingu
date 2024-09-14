import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  description: String,
  method: [String],
  price: Number
});

const Delivery = mongoose.model('deliveries', schema);

export default Delivery;
