import React, { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      telephone: "",
      ccNum: "",
      address: "",
      zip: "",
      shipMethod: "ground"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  validateCcNum() {
    const visaRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    const mastRegex = /^(?:5[1-5][0-9]{14})$/;
    const amexRegex = /^(?:3[47][0-9]{13})$/;
    const discRegex = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

    const creditNum = this.state.ccNum;

    const isVisa = visaRegex.test(creditNum);
    const isMast = mastRegex.test(creditNum);
    const isAmex = amexRegex.test(creditNum);
    const isDisc = discRegex.test(creditNum);

    if (isVisa || isMast || isAmex || isDisc) {
      return true;
    } else {
      return false;
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.validateCcNum()) {
      let subject = `Vanilla J's Order from ${this.state.fullName}`;
      let body =
        "Customer Details%0D%0A" +
        `Name: ${this.state.fullName}%0D%0A` +
        `Email: ${this.state.email}%0D%0A` +
        `Phone: ${this.state.telephone}%0D%0A` +
        `Address: ${this.state.address}, ${this.state.zip}%0D%0A` +
        `Credit Card: ${this.state.ccNum}%0D%0A` +
        `Shipping Method: ${this.state.shipMethod}`;
      window.location = `mailto:orders@vanillajsbakery.com?subject=${subject}&body=${body}`;
    } else {
      alert("Please enter a valid credit card number.");
    }
  }
  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="Cart">
        <h1>Cart</h1>
        <h5>Customer details</h5>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="fullName"
            value={this.state.fullName}
            onChange={this.handleInputChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            placeholder="Email address"
            required
          />
          <input
            type="tel"
            name="telephone"
            value={this.state.telephone}
            pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
            maxLength="12"
            onChange={this.handleInputChange}
            placeholder="888 888 8888"
            required
          />
          <input
            type="text"
            name="ccNum"
            value={this.state.ccNum}
            id="ccNum"
            onChange={this.handleInputChange}
            placeholder="Credit card number"
            required
          />
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleInputChange}
            placeholder=" Address"
            required
          />
          <input
            type="text"
            name="zip"
            value={this.state.zip}
            onChange={this.handleInputChange}
            pattern="[0-9]{5}"
            placeholder="ZIP code"
          />

          <select
            name="shipMethod"
            value={this.state.shipMethod}
            onChange={this.handleInputChange}
          >
            <option value="ground">Standard Ground - $15.00</option>
            <option value="two-day">2-Day Delivery - $35.00</option>
            <option value="one-day">Overnight Delivery - $55.00</option>
          </select>
          <input type="submit" value="Submit order" />
        </form>
        <h5>Order details</h5>
        <form onSubmit={this.handleSubmit}>
          <textarea
            name="order"
            value={this.state.order}
            onChange={this.handleInputChange}
            placeholder="Enter order"
          />
        </form>
      </div>
    );
  }
}

export default Cart;
