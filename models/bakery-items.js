// add schema here
const mongoose = require('mongoose')
const { Schema, model } = mongoose

const bakeryItems = new Schema({
  bakeryItemName: { type: String },
  productDescription: { type: String },
  price: { type: Number },
})

const Food = model('Food', bakeryItems)

module.exports = Food
