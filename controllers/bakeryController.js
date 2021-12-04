const express = require('express')
const router = express.Router()
const BakeryItem = require('../models/BakeryItems.js')

// index route
router.route('/').get((req, res) => {
  BakeryItem.find()
    .then((bakeryitems) => res.json(bakeryitems))
    .catch((err) => res.status(400).json('Error: ' + err))
  // console.log('Request went through, now to retunrn something.')
  // return res.send('Hello Jessica! /get')
})

// new route
router.route('/add').post((req, res) => {
  // maybe need to use create?
  const bakeryItemName = req.body.bakeryItemName
  // const productDescription = req.body.productDescription
  const price = req.body.price
  // const price = Number(req.body.price)

  const newBakedGood = new BakeryItem({
    bakeryItemName,
    // productDescription,
    price,
  })

  newBakedGood
    .save()
    .then(() => res.json('Baked good added!'))
    .catch((err) => res.status(400).json('Error: This is not working...' + err))

  // return res.send(newBakedGood)
})

module.exports = router
