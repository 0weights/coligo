import mongoose from 'mongoose';

const producSchema = new mongoose.schema({

  name: {type:String},
  image: {type:String},
  description: {type:String},
  brand: {type:String},
  category: {type:String},
  price: {type:Number},
  countInStock: {type:Number},
  rating: {type:Number},
  numReviews: {type:Number},
})

const Product = mongoose.model("product", producSchema);

export default Product;