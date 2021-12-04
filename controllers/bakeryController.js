const express = require('express')
const router = express.Router()
const BakeryItem = require('../models/BakeryItems.js')

// index route
router.route('/').get((req, res) => {
  BakeryItem.find()
    .then((cart) => res.json(cart))
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

router.route('/:id').get((req, res) => {
  BakeryItem.findById(req.params.id)
    .then((cart) => res.json(cart))
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
  BakeryItem.findById(req.params.id)
    .then((cart) => {
      cart.bakeryItemName = req.body.bakeryItemName
      cart.price = req.body.price

      cart
        .save()
        .then(() => res.json('bakery item updated in cart!'))
        .catch((err) => res.status(400).json('Error: ' + err))
    })
    .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
  BakeryItem.findByIdAndDelete(req.params.id)
    .then(() => res.json('bakery item deleted from cart.'))
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
