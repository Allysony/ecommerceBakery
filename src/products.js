import React from "react";
import { CardDeck } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import ProductPreview from "./components/ProductPreview";
import thumb from "./components/cupcake.png";


function Products() {
  return (
    <div className="Products">
      <Header />
        <h1>Cupcakes</h1>
            <ProductPreview name="Red Velvet" price="$3.60" image={thumb} />
            <ProductPreview name="Red Velvet" price="$3.60" image={thumb} />
            <ProductPreview name="Red Velvet" price="$3.60" image={thumb} />
            <ProductPreview name="Red Velvet" price="$3.60" image={thumb} />

        <h1>Cookies</h1>

            <ProductPreview name="Red Velvet" price="$3.60" image={thumb} />
            <ProductPreview name="Red Velvet" price="$3.60" image={thumb} />
            <ProductPreview name="Red Velvet" price="$3.60" image={thumb} />

        <h1>Cakes!</h1>
            <ProductPreview name="Red Velvet" price="$3.60" image={thumb} />
            <ProductPreview name="Red Velvet" price="$3.60" image={thumb} />
            <ProductPreview name="Red Velvet" price="$3.60" image={thumb} />

        <h1>Pies</h1>
            <ProductPreview name="Red Velvet" price="$3.60" image={thumb} />
            <ProductPreview name="Red Velvet" price="$3.60" image={thumb} />
            <ProductPreview name="Red Velvet" price="$3.60" image={thumb} />
    </div>
  );
}

export default Products;
