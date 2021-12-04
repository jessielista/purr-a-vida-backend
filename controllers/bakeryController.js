const express = require('express')
const router = express.Router()
const Food = require('../models/bakery-items.js')
const mongoose = require('mongoose')

// index route

router.route('/').get((req, res) => {
  Food.find()
    .then((foods) => res.json(foods))
    .catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router
