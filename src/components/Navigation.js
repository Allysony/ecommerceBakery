import React from "react";

import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  );
}

export default Navigation;
