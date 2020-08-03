// // import React from 'react';
// // import { Link } from 'react-router-dom'
// // import orderService from '../../service/orderService'
// // import { BuyerOrders } from './BuyerOrders'
// // import { SellerOrders } from './SellerOrders'
// // import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
// // import LocalMallIcon from '@material-ui/icons/LocalMall';
// // import SocketService from '../../service/SocketService'
// // export class Orders extends React.Component {

// // //     state = {
// // //         user: null,
// // //         myOrders: null,
// // //         jobOrders: null,
// // //         currState: null
// // //     }

// //     componentDidMount() {

// //         const user = this.props.user;
// //         // const currState = this.props.currState;
// //         orderService.getOrders({ name: user._id, position: 'buyer' })
// //             .then(myOrders => {
// //                 this.setState({ myOrders })
// //             })
// //         orderService.getOrders({ name: user._id, position: 'seller' })
// //             .then(jobOrders => {
// //                 this.setState({ jobOrders }, () => {
// //                     const ordersState = this.props.ordersState
// //                     this.setPositionState(ordersState)
// //                 })
// //             })
// //         SocketService.on('setOrder', (order) => {
// //             orderService.getOrders({ name: user._id, position: 'buyer' })
// //                 .then(myOrders => {
// //                     this.setState({ myOrders })
// //                 })
// //             orderService.getOrders({ name: user._id, position: 'seller' })
// //                 .then(jobOrders => {
// //                     this.setState({ jobOrders }, () => {
// //                         const ordersState = this.props.ordersState
// //                         this.setPositionState(ordersState)
// //                     })
// //                 })

// //         })
// //     }
// // }
//     // setPositionState = (position = 'buyer') => {
//     //     const { getConvertedDate } = this.props
//     //     const { myOrders } = this.state
//     //     const { jobOrders } = this.state
//     //     switch (position) {
//     //         case 'buyer':
//     //             // userService.getOrders(user._id, position)
//     //             //     .then(orders => {
//     //             this.setState({ currState: <BuyerOrders getConvertedDate={getConvertedDate} orders={myOrders} /> })
//     //             // })
//     //             break;
//     //         case 'seller':
//     //             // userService.getOrders(user._id, position)
//     //             //     .then(orders => {
//     //             this.setState({ currState: <SellerOrders getConvertedDate={getConvertedDate} orders={jobOrders} /> })
//     //             // })
//     //             break;
// //     componentDidMount() {
// //         const user = this.props.user;
// //         // const currState = this.props.currState;
// //         orderService.getOrders({ name: user._id, position: 'buyer' })
// //             .then(myOrders => {
// //                 this.setState({ myOrders })
// //             })
// //         orderService.getOrders({ name: user._id, position: 'seller' })
// //             .then(jobOrders => {
// //                 this.setState({ jobOrders }, () => {
// //                     const ordersState = this.props.ordersState
// //                     this.setPositionState(ordersState)
// //                 })
// //             })
// //     }

// //     setPositionState = (position = 'buyer') => {
// //         const {getConvertedDate} = this.props
// //         const { myOrders } = this.state
// //         const { jobOrders } = this.state
// //         switch (position) {
// //             case 'buyer':
// //                 // userService.getOrders(user._id, position)
// //                 //     .then(orders => {
// //                 this.setState({ currState: <BuyerOrders getConvertedDate={getConvertedDate} orders={myOrders} /> })
// //                 // })
// //                 break;
// //             case 'seller':
// //                 // userService.getOrders(user._id, position)
// //                 //     .then(orders => {
// //                 this.setState({ currState: <SellerOrders getConvertedDate={getConvertedDate} orders={jobOrders} /> })
// //                 // })
// //                 break;

// //             default:
// //                 break;
// //         }
// //     }

//     // render() {
//     //     const { currState } = this.state
//     //     return (
//     //         <div className="orders">
//     //             <div className="buttons flex">
//     //                 <button className="flex justify-center" to="/dashboard/orders/buyer" onClick={() => this.setPositionState('buyer')}><LocalMallIcon style={{ color: 'white' }} /> <p>My Orders</p></button>
//     //                 <button className="flex justify-center" to="/dashboard/orders/seller" onClick={() => this.setPositionState('seller')}><MonetizationOnIcon style={{ color: 'white' }} /> <p>Job Offers</p></button>
//     //             </div>
//                 /* <Link to="/dashboard/orders/buyer" onClick={() => this.setPositionState('buyer')}>My Orders</Link>
//                 <Link to="/dashboard/orders/seller" onClick={() => this.setPositionState('seller')}>Job Orders</Link> */
//                 /* <section className="grid">
//                     {currState && currState}
//                 </section>
//             </div>
//         )
//     }


