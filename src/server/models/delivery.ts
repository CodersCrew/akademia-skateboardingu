import mongoose from 'mongoose';

const deliverySchema = new mongoose.Schema({
  method: [String],
  description: String,
  price: Number
});

const deliveryModel = mongoose.model('deliveries', deliverySchema);

export default deliveryModel;
