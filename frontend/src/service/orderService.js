import HttpService from './HttpService';

export default {
    addOrder,
    getOrder,
    getOrders,
    updateOrder,
    approveOrder,
    readOrder,
}


async function addOrder(order) {
    const cuurOrder = await HttpService.post('order/', order)
    return cuurOrder
}


async function getOrders(filterBy) {
    var queryStr = `?name=${filterBy.name}&position=${filterBy.position}`;
    const orders = await HttpService.get(`order${queryStr}`)
    return orders
}




async function getOrder(orderId) {
    const order = await HttpService.get(`order/${orderId}`)
    return order
}


async function updateOrder(order) {
    const cuurOrder = await HttpService.post(`order`, order)
    return cuurOrder
}

async function approveOrder(order,ans){
    order.isApprove = ans
    console.log(order);
    
    // const currOrder = await updateOrder(order)
    // return currOrder
}

async function readOrder(order){
    order.isRead = true
    const currOrder = await updateOrder(order)
    return currOrder
}