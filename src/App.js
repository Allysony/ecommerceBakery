import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Products from "./products";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";

import productdata from "./productdata.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productdata: productdata,
      pid: 101
    };
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
              render={props => <ProductPage {...props} state={this.state} />}
            />
            <Route path="/cart" component={Cart} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
