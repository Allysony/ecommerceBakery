import React from "react";
import Header from "./components/Header";
import ProductPreview from "./components/ProductPreview";
import { CardDeck } from "react-bootstrap";
const product = ProductPreview("blah", "0", "./components/cupcake.png");
function Products() {
  return (
    <div className="Products">
      <Header />
      <p>Products!</p>
      <CardDeck>{product}</CardDeck>
    </div>
  );
}

export default Products;
