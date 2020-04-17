import React from "react";
import { CardDeck } from "react-bootstrap";

import Header from "./components/Header";
import ProductPreview from "./components/ProductPreview";
import thumb from "./components/cupcake.png";

function Products() {
  return (
    <div className="Products">
      <Header />
      <p>Products!</p>
      <CardDeck>
        <ProductPreview name="Red Velvet" price="$3.60" image="./cupcake.png" />
        <ProductPreview name="Red Velvet" price="$3.60" image={thumb} />
        <ProductPreview name="Red Velvet" price="$3.60" image={thumb} />
      </CardDeck>
    </div>
  );
}

export default Products;
