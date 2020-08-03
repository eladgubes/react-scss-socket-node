import React from "react";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import orderService from "../../service/orderService";

export class SellerOrders extends React.Component {
  state = {
    jobOrders: null,
  };

  componentDidMount() {
    const { user } = this.props;
    // console.log("user", user);
    orderService
      .getOrders({ name: user._id, position: "seller" })
      .then((jobOrders) => {
        this.setState({ jobOrders });
        // console.log("jobOrders", jobOrders);
      });
  }


  render() {
    const orders = this.state.jobOrders;
    const { getConvertedDate } = this.props;
    return (
      <div className="flex column justify-center">
        <h1>Job Offers</h1>
        {orders &&
          orders.map((order, idx) => {
            return (
              <div key={idx} className="order flex">
                <div className="img">
                  <img src={order.buyer.profileImg} alt="" />
                </div>
                <div className="details">
                  <p>
                    You received an order from{" "}
                    <span>"{order.buyer.fullName}"</span> at{" "}
                    {getConvertedDate(order.createdAt)}
                    <br />
                    for an event at {getConvertedDate(order.eventAt)}
                    <br />
                    the guests number is - {order.guestCount}
                  </p>
                  <div className="price-accept flex justify-center space-between">
                    <p>for a total price of - ${order.price}</p>
                    <div className="deal-options flex">
                      <button onClick={() => this.props.onOrderAns(order, false)} className="flex center"><ClearIcon /></button>
                      <button onClick={() => this.props.onOrderAns(order, true)} className="flex center"><DoneIcon /></button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
