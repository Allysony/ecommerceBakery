import React, { Component } from "react";

import Header from "./Header";

class ProductPage extends Component {
  render() {
    return (
      <div className="ProductPage">
        <Header />
        <p>
          {
            this.props.state.productdata.products[
              this.props.state.productdata.products.findIndex(
                product => product.pid === this.props.state.pid
              )
            ].name
          }
        </p>
      </div>
    );
  }
}

export default ProductPage;
