import { combineReducers } from 'redux';
import userReducer from './userReducer'
import navBarReducer from './navBarReducer'
import orderReducer from './orderReducer'

const rootReducer = combineReducers({
  orders: orderReducer,
  user: userReducer,
  navBar: navBarReducer,
})

export default rootReducer;