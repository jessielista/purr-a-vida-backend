const express = require('express')
const router = express.Router()
const BakeryItem = require('../models/BakeryItems.js')

// index route
router.route('/').get((req, res) => {
  BakeryItem.find()
    .then((foods) => res.json(foods))
    .catch((err) => res.status(400).json('Error: ' + err))
})

//localhost:5000/bakery/

http: router.route('/add').post((req, res) => {
  const bakeryItemName = req.body.bakeryItemName
  const productDescription = req.body.productDescription
  const price = req.body.price
  // const price = Number(req.body.price)

  const newBakedGood = new BakeryItem({
    bakeryItemName,
    productDescription,
    price,
  })

  newBakedGood
    .save()
    .then(() => res.json('Baked good added!'))
    .catch((err) => res.status(400).json('Error: This is not working...' + err))
})

module.exports = router
