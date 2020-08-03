const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    getOrderById,
    removeOrder,
    addOrder,
    getOrders,
    updateOrder

}
async function getOrders(filter) {
    const criteria = _buildCriteria(filter)
    const collection = await dbService.getCollection('order')
    try {
        const orders = await collection.find(criteria).sort({ createdAt: -1 }).toArray();
        return orders
    } catch (err) {
        console.log('orders not found');
        throw err
    }
}



function _buildCriteria(filter) {
    const criteria = {};
    if (filter.position === 'buyer') {
        criteria['buyer._id'] = filter.name
    } else if (filter.position === 'seller') {
        criteria['seller._id'] = filter.name
    }
    return criteria;
}


async function getOrderById(orderId) {
    const collection = await dbService.getCollection('order')
    try {
        const order = await collection.findOne({ "_id": ObjectId(orderId) })
        return order
    } catch (err) {
        console.log('order not found');
        throw err
    }
}

async function removeOrder(orderId) {
    try {
        const orderIdx = gOrders.findIndex(order => order._id === orderId)
        gOrders.splice(orderIdx, 1)
        return orderIdx
    } catch (err) {
        console.log('order do not removed');
        throw err
    }
}



async function addOrder(orderDetails) {
    const collection = await dbService.getCollection('order')
    var order = {
        buyer: {
            _id: orderDetails.buyer._id,
            fullName: orderDetails.buyer.fullName,
            profileImg: orderDetails.buyer.profileImg
        },
        seller: {
            _id: orderDetails.seller._id,
            fullName: orderDetails.seller.fullName,
            profileImg: orderDetails.seller.profileImg
        },
        guestCount: orderDetails.guestCount,
        createdAt: Date.now(),
        eventAt: new Date(orderDetails.date).getTime(),
        price: orderDetails.price * (orderDetails.guestCount / 50),
        isRead: false,
        isApprove: false
    }
    try {
        await collection.insertOne(order);
        return order;
    } catch (err) {
        return Promise.reject(status(401).send('order did not save'))
    }

}


async function updateOrder(order) {
    const collection = await dbService.getCollection('order')
    order._id = ObjectId(order._id);
    try {
        await collection.replaceOne({ "_id": order._id }, { $set: order })
        return order
    } catch (err) {
        console.log('ERROR: cannot update order')
        throw err;
    }
}
