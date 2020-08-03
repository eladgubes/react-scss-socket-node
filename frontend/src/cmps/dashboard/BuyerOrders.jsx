import React from "react";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import orderService from "../../service/orderService";

export class BuyerOrders extends React.Component {
  state = {
    MyOrders: null,
  };

  componentDidMount() {
    const { user } = this.props;
    // console.log("user", user);
    orderService
      .getOrders({ name: user._id, position: "buyer" })
      .then((MyOrders) => {
        this.setState({ MyOrders });
        // console.log("jobOrders", MyOrders);
      });
  }

  render() {
    const orders = this.state.MyOrders;
    const { getConvertedDate } = this.props;
    return (
      <div className="flex column justify-center">
        <h1>My Orders</h1>
        {orders &&
          orders.map((order, idx) => {
            return (
              <div key={idx} className="order flex">
                <div className="img">
                  <img src={order.seller.profileImg} alt="" />
                </div>
                <div className="details">
                  <p>
                    You made an order from{" "}
                    <span>"{order.seller.fullName}"</span> at{" "}
                    {getConvertedDate(order.createdAt)}
                    <br />
                    for an event at {getConvertedDate(order.eventAt)}
                    <br />
                    the guests number is - {order.guestCount}
                    for a total price of - ${order.price}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
