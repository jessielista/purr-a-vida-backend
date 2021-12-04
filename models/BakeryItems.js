const mongoose = require('mongoose')
const { Schema, model } = mongoose

const bakeryItems = new Schema({
  bakeryItemName: { type: String },
  productDescription: { type: String },
  price: { type: String },
  // price: { type: Number },
})

const BakeryItem = model('BakeryItem', bakeryItems)

module.exports = BakeryItem
