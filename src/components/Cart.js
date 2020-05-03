import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

import axios from "axios";

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
      shipMethod: "ground",
      cart: this.props.state.cart,
      subtotal: 0,
      taxrate: 0,
      total: 0,
      confirmed: false,
      confirmeddata: ""
    };

    this.shipping = {
      ground: 1500,
      "two-day": 3500,
      "one-day": 5500
    };

    this.calculateCart = this.calculateCart.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  calculateCart() {
    let newtotal =
      this.state.subtotal +
      this.state.subtotal * this.state.taxrate +
      this.shipping[this.state.shipMethod];
    console.log(newtotal);
    this.setState({ total: newtotal });
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://circinus-1.uci.ics.edu:8081/taxrates.php"
    }).then(response => {
      console.log(response.data);
      this.taxrates = response.data;
    });

    let newsubtotal = this.state.subtotal;
    for (const [pid, qty] of Object.entries(this.state.cart)) {
      let product = this.props.state.productdata[
        this.props.state.productdata.findIndex(product => product.pid === pid)
      ];
      let subsubtotal = product.price * qty;
      newsubtotal = newsubtotal + subsubtotal;
    }
    this.setState({ subtotal: newsubtotal }, this.calculateCart);
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
      axios({
        method: "POST",
        data: this.state,
        url: "http://circinus-1.uci.ics.edu:8081/ordersubmit.php",
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      }).then(response => {
        console.log(response.data);
        this.setState({ confirmeddata: response.data });
        this.setState({ confirmed: true });
      });
    } else {
      alert("Please enter a valid credit card number.");
    }
  }
  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      () => {
        if (this.state.zip.length > 3) {
          let newRate = this.taxrates[this.state.zip];
          if (newRate) {
            console.log("new rate!");
            this.setState({ taxrate: newRate }, this.calculateCart);
          }
        } else {
          this.calculateCart();
        }
      }
    );
  }

  render() {
    if (this.state.confirmed) {
      console.log("Go to confirmation");
      return (
        <Redirect
          to={{
            pathname: "/orderconfirm",
            state: { data: this.state.confirmeddata }
          }}
        />
      );
    }
    return (
      <div className="Cart">
        <h1>Cart</h1>
        <h3>Customer details</h3>
        <form onSubmit={this.handleSubmit} style={styles.form} method="post">
          <input
            type="text"
            name="fullName"
            value={this.state.fullName}
            onChange={this.handleInputChange}
            placeholder="Name"
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            placeholder="Email address"
            style={styles.input}
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
            style={styles.input}
            required
          />
          <input
            type="text"
            name="ccNum"
            value={this.state.ccNum}
            id="ccNum"
            onChange={this.handleInputChange}
            placeholder="Credit card number"
            style={styles.input}
            required
          />
          <input
            type="text"
            name="address"
            value={this.state.address}
            onChange={this.handleInputChange}
            placeholder=" Address"
            style={styles.input}
            required
          />
          <input
            type="text"
            name="zip"
            value={this.state.zip}
            onChange={this.handleInputChange}
            pattern="[0-9]{5}"
            placeholder="ZIP code"
            style={styles.input}
            required
          />

          <select
            name="shipMethod"
            value={this.state.shipMethod}
            onChange={this.handleInputChange}
            style={styles.input}
          >
            <option value="ground">Standard Ground - $15.00</option>
            <option value="two-day">2-Day Delivery - $35.00</option>
            <option value="one-day">Overnight Delivery - $55.00</option>
          </select>
        </form>
        <h3>Order details</h3>
        <ListGroup horizontal>
          <ListGroup.Item>Item Name</ListGroup.Item>
          <ListGroup.Item>Quantity</ListGroup.Item>
          <ListGroup.Item>Price</ListGroup.Item>
          <ListGroup.Item>Subtotal</ListGroup.Item>
        </ListGroup>
        {Object.entries(this.state.cart).map(([pid, qty]) => {
          let product = this.props.state.productdata[
            this.props.state.productdata.findIndex(
              product => product.pid === pid
            )
          ];

          return (
            <ListGroup horizontal>
              <ListGroup.Item>{product.name}</ListGroup.Item>
              <ListGroup.Item>{qty}</ListGroup.Item>
              <ListGroup.Item>
                ${(product.price / 100.0).toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                ${((product.price * qty) / 100.0).toFixed(2)}
              </ListGroup.Item>
            </ListGroup>
          );
        })}
        <p>Subtotal: ${(this.state.subtotal / 100.0).toFixed(2)}</p>
        <p>
          Tax: $
          {((this.state.subtotal * this.state.taxrate) / 100.0).toFixed(2)}
        </p>
        <p>
          Shipping: ${(this.shipping[this.state.shipMethod] / 100.0).toFixed(2)}
        </p>
        <p>Total: ${(this.state.total / 100.0).toFixed(2)}</p>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <input type="submit" value="Submit order" style={styles.input} />
        </form>
      </div>
    );
  }
}

export default Cart;

let styles = {
  form: {
    margin: "10px"
  },
  input: {
    display: "block"
  }
};
