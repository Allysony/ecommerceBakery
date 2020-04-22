import React, { Component } from "react";

import ProductPreview from "./components/ProductPreview";
import thumb from "./components/cupcake.png";

class Products extends Component {
  handleUpdate(pid) {
    console.log(pid);
    this.props.action(pid);
  }
  render() {
    let products = this.props.state.productdata.products;
    let cupcakes = products.filter(p => p.category === "Cupcakes");
    console.log(this.props.state.productdata);
    return (
      <div className="Products">
        <h1>Cupcakes</h1>
        {cupcakes.map(product => (
          <ProductPreview
            pid={product.pid}
            name={product.name}
            price={product.price}
            image={thumb}
            action={pid => this.handleUpdate(pid)}
          />
        ))}
        <h1>Cookies</h1>
        {products.map(product => (
          <ProductPreview
            pid={product.pid}
            name={product.name}
            price={product.price}
            image={thumb}
            action={pid => this.handleUpdate(pid)}
          />
        ))}
        <h1>Cakes!</h1>
        {products.map(product => (
          <ProductPreview
            pid={product.pid}
            name={product.name}
            price={product.price}
            image={thumb}
            action={pid => this.handleUpdate(pid)}
          />
        ))}
        <h1>Pies</h1>
        {products.map(product => (
          <ProductPreview
            pid={product.pid}
            name={product.name}
            price={product.price}
            image={thumb}
            action={pid => this.handleUpdate(pid)}
          />
        ))}
      </div>
    );
  }
}

Products.defaultProps = {
  productdata: []
};

export default Products;
