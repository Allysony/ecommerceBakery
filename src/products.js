import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import ProductPreview from "./components/ProductPreview";
import ProductPage from "./components/ProductPage";
import thumb from "./components/cupcake.png";
import productdata from "./productdata.json";

class Products extends Component {
  render() {
    let data = require("./productdata.json");
    console.log(this.props.state.productdata);
    return (
      <div className="Products">
        <Header />
        <h1>Cupcakes</h1>
        {this.props.state.productdata.products.map(product => (
          <ProductPreview
            pid={product.pid}
            name={product.name}
            price={product.price}
            image={thumb}
            action={this.props.action()}
          />
        ))}
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
}

{
  /*Products.propTypes = {
  productdata: React.PropTypes.arrayOf(React.PropTypes.object).isRequired
};*/
}

Products.defaultProps = {
  productdata: []
};

export default Products;
