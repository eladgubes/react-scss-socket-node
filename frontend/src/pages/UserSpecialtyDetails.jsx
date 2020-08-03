import React from 'react';
import orderService from '../service/orderService'

export class UserSpecialtyDetails extends React.Component {

    state = {
        orders: null,
        specialty: null
    }

    componentDidMount() {
        const specialty = this.props.match.params.specialtyId
        orderService.loadOrdersBySpecialtyId(specialty)
            .then(orders => {
                // console.log('orders', orders);
                this.setState({ orders, specialty: orders[0].specialty })
            })
    }

    render() {
        const { orders, specialty } = this.state
        return (
            specialty && <div className="userSpecialtyDetails">
                <div className="curr-specialty flex center column">
                    <h1>{specialty.title}</h1>
                    <img src={specialty.imgUrl} alt="" />
                </div>
                <h3>Orders</h3>
                {orders && orders.map((order, idx) => {
                    return (
                        <div key={idx} className="order">
                            <h5>{order.buyer.fullName}</h5>
                            <img src={order.buyer.profileImg} alt="" />
                            <h5>{order.guestCount}</h5>
                        </div>
                    )
                })}
            </div>
        )
    }
}