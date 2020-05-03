import React, { Component } from "react";

class OrderConfirm extends Component {
  render() {
    console.log(this.props.location.state.data);
    let shipinfo = this.props.location.state.data[0];
    let orderItems = this.props.location.state.data.slice(1);
    return (
      <div>
        <p>Order confirmed {shipinfo.name}!</p>
        <p>Order ID: {shipinfo.oid}</p>
        <p>Email: {shipinfo.email}</p>
        <p>Credit number: {shipinfo.crednum}</p>
        <p>
          Shipping address: {shipinfo.address}, {shipinfo.zip}
        </p>
        <p>Shipping method: {shipinfo.shipmethod}</p>
        {orderItems.map(item => (
          <div>
            <p>Product: {item.pid}</p>
            <p>Quantity: {item.orderqty}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default OrderConfirm;
