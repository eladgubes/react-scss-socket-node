const express = require('express')
const { getOrder, removeOrder, getOrders, updateOrder } = require('./order.controller')

const router = express.Router()

router.post('/', updateOrder)
router.get('/', getOrders)
router.get('/:id', getOrder)
router.delete('/:id', removeOrder)


module.exports = router


