//AddProducts.js

const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const addProducts = new Schema({
  productName: {
    type: String
  },
  productTitle: {
    type: String
  },
  productLongDescription: {
    type: String
  },
  productLongDescription: {
    type: String
  },
  IsActive: {
    type: Boolean
  },
  productTypes: {
    type: String
  },
  productPrize: {
    type: Number
  },
  productDiscount: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("addProducts", addProducts);
