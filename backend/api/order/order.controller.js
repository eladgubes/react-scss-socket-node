
const orderService = require('./order.service')


module.exports = {
    getOrder,
    removeOrder,
    getOrders,
    updateOrder
}

async function getOrder(req, res) {
    const { id } = req.params
    try {
        const currOrder = await orderService.getOrderById(id)
        res.send(currOrder)
    } catch{
        res.status(401).send({ error: err })
    }
}

async function getOrders(req, res) {
    const filter = req.query
    try {
        const currOrder = await orderService.getOrders(filter)
        res.send(currOrder)
    } catch (err) {
        res.status(401).send({ error: err })

    }
}

async function removeOrder(req, res) {
    const { id } = req.params
    try {
        const currOrder = await orderService.removeOrder(id)
        res.send(currOrder)
    } catch{
        res.status(401).send({ error: err })
    }
}


async function updateOrder(req, res) {
    const order = req.body
    try {
        if (order._id) {
            const currOrder = await orderService.updateOrder(order)
        } else {
            const currOrder = await orderService.addOrder(order)
        }
        res.send(currOrder)
    } catch{
        res.status(401).send({ error: err })
    }
}
