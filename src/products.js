import React from "react";
import Header from "./components/Header";
import ProductPreview from "./components/ProductPreview";
import { CardDeck } from "react-bootstrap";
import cupcake from "./components/cupcake.png"

const product = ProductPreview("blah", "$0.00", cupcake);
function Products() {
  return (
    <div className="Products">
      <Header />
      <p>Products!</p>
      <CardDeck>
        {product}
        {product}
        {product}
      </CardDeck>
    </div>
  );
}

export default Products;
