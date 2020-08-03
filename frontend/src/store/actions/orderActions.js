import orderService from '../../service/orderService'



export function loadOrders() {
    return async dispatch => {
        try {
            const orders = await orderService.query();
            dispatch(_setOrders(orders));

        } catch (err) {
            console.log('OrderActions: err in loadOrders', err);
            throw err
        }
    };
}


function _setOrders(orders) {
    return {
        type: 'SET_ORDERS',
        orders
    };
}












export function addOrder(order) {
    return async dispatch => {
        try {
            const addedOrder = await orderService.addOrder(order);
            dispatch(_addOrder(addedOrder));
        } catch (err) {
            console.log('OrderActions: err in addOrder', err);
        }
    };
}
export function removeOrder(orderId) {
    return async dispatch => {
        try {
            const newOrdersList = await orderService.removeOrder(orderId);
            dispatch(_setOrders(newOrdersList));
        } catch (err) {
            console.log('OrderActions: err in addOrder', err);
        }
    };
}
export function loadMyBuyerOrders(userId) {
    return async dispatch => {
        try {
            const newOrdersList = await orderService.loadMyBuyerOrders(userId);
            dispatch(_setOrders(newOrdersList));
        } catch (err) {
            console.log('OrderActions: err in addOrder', err);
        }
    };
}
export function loadMySellerOrders(userId) {
    return async dispatch => {
        try {
            const orders = await orderService.loadMySellerOrders(userId);
            dispatch(_setOrders(orders));
        } catch (err) {
            console.log('OrderActions: err in addOrder', err);
        }
    };
}
export function loadOrder(orderId) {
    return async dispatch => {
        try {
            const order = await orderService.getOrderById(orderId);
            dispatch(_setOrder(order));
        } catch (err) {
            console.log('OrderActions: err in addOrder', err);
            throw err
        }
    };
}

export function orderAns(order,ans) {
    console.log(order,ans);
    
    return async dispatch => {
        console.log('starttttttttttttttttttd');
            const CurrOrder = await orderService.approveOrder(order);
            console.log(CurrOrder);
            dispatch(_setOrder(CurrOrder));
    };
}





function _setOrder(order) {
    return {
        type: 'SET_ORDER',
        order
    };
}

function _addOrder(order) {
    return {
        type: 'ADD_ORDER',
        order
    };
}
