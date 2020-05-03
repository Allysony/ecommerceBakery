import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./products";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import OrderConfirm from "./components/OrderConfirm";

import productdata from "./productdata.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productdata: productdata,
      pid: 101,
      cart: {} // Format: {pid: qty}
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "http://circinus-1.uci.ics.edu:8081/productdata.php"
    }).then(response => {
      console.log(response.data);
      this.setState({ productdata: response.data });
    });
  }

  changePID(pid) {
    console.log(this.state.pid);
    console.log(pid);
    this.setState(
      {
        pid: pid
      },
      console.log(this.state.pid)
    );
  }

  addToCart(qty) {
    console.log(qty);
    let newCart = { ...this.state.cart };
    console.log(newCart);

    if (newCart[this.state.pid]) {
      newCart[this.state.pid] += qty;
    } else {
      newCart[this.state.pid] = qty;
    }
    this.setState({
      cart: newCart
    });
  }

  render() {
    return (
      <BrowserRouter basename={"/bakeryBuild"}>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route
              path="/products"
              render={props => (
                <Products
                  {...props}
                  state={this.state}
                  action={pid => this.changePID(pid)}
                />
              )}
            />
            <Route
              path="/productpage"
              render={props => (
                <ProductPage
                  {...props}
                  state={this.state}
                  action={qty => this.addToCart(qty)}
                />
              )}
            />
            <Route
              path="/cart"
              render={props => <Cart {...props} state={this.state} />}
            />
            <Route
              path="/orderconfirm"
              render={props => <OrderConfirm {...props} state={this.state} />}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
