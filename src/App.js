import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Products from "./products";
import Cart from "./components/Cart";
import { Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter basename={'/bakeryBuild'}>
      <div>

          <ul className="nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">products</Link></li>
              <li><Link to="/cart">cart</Link></li>
          </ul>

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
