import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Products from "./products";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import { Link } from "react-router-dom";

import productdata from "./productdata.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productdata: productdata,
      pid: 103
    };
    this.changePID = this.changePID.bind(this);
  }

  changePID(id) {
    this.setState({
      pid: id
    });
  }

  render() {
    return (
      <BrowserRouter basename={"/bakeryBuild"}>
        <div>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
            <li>
              <Link to="/cart">cart</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/" component={Home} exact />
            <Route
              path="/products"
              render={props => (
                <Products
                  {...props}
                  state={this.state}
                  action={this.changePID()}
                />
              )}
            />
            <Route
              path="/productpage"
              render={props => <ProductPage {...props} state={this.state} />}
            />
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
