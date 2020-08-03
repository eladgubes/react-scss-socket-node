const express = require('express')
const { addReview } = require('./review.controller')
const router = express.Router()



router.post('/', addReview)

module.exports = router