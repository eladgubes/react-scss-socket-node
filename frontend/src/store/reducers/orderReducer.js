const initialState = {
    orders: [],
    currOrder: null
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_ORDERS':
            return { ...state, orders: action.user };

        case 'REMOVE_ORDER':
            return {
                ...state,
                users: state.orders.filter(user => user._id !== action.userId)
            };

        case 'ADD_ORDER':
            return { ...state, orders: [...state.orders, action.order] };

        case 'SET_ORDER':
            return { ...state, currOrder: action.order };

        default:
            return state;
    }
}
