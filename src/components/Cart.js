import React, { Component } from "react";
import Header from "./Header";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  validateCCNum() {
    var visaRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastRegex = /^(?:5[1-5][0-9]{14})$/;
    var amexRegex = /^(?:3[47][0-9]{13})$/;
    var discRegex = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;

    var creditNum = document.getElementById("cc-num");

    var isVisa = visaRegex.test(creditNum);
    var isMast = mastRegex.test(creditNum);
    var isAmex = amexRegex.test(creditNum);
    var isDisc = discRegex.test(creditNum);

    if (isVisa || isMast || isAmex || isDisc) {
      alert("Valid card");
    } else {
      alert("Please enter a valid credit card number.");
    }
  }
  handleSubmit() {
    this.validateCCNum();
  }
  render() {
    return (
      <div className="Cart">
        <Header />
        <p>Cart!</p>
        <form onSubmit={this.handleSubmit} method="get">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <input
            type="tel"
            name="telephone"
            placeholder="888 888 8888"
            pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
            maxlength="12"
            required
          />
          <input
            type="text"
            name="card-num"
            placeholder="Credit card number"
            id="cc-num"
            required
          />
          <select name="ship-method">
            <option value="ground" selected>
              Standard Ground - $15.00
            </option>
            <option value="two-day">2-Day Delivery - $35.00</option>
            <option value="one-day">Overnight Delivery - $55.00</option>
          </select>
          <input type="submit" value="Submit order" />
        </form>
      </div>
    );
  }
}

export default Cart;
