import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Media } from "react-bootstrap";

import thumb from "./cupcake.png";

class ProductPage extends Component {
  render() {
    console.log(this.props.state.pid);

    let product = this.props.state.productdata.products[
      this.props.state.productdata.products.findIndex(
        product => product.pid === this.props.state.pid
      )
    ];

    return (
      <div className="ProductPage">
        <Media style={styles.listing}>
          <img width="40%" className="mr-3" src={thumb} alt={product.name} />
          <Media.Body>
            <Link to="./products">{"<"} Products</Link>
            <p></p>
            <p>{product.category}</p>
            <h1>{product.name}</h1>
            <h3>{product.price}</h3>
            <p>Product ID: {product.pid}</p>
            <p>{product.description}</p>
          </Media.Body>
        </Media>
      </div>
    );
  }
}

export default ProductPage;

let styles = {
  listing: {
    margin: "2%"
  }
};
