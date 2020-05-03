import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Media } from "react-bootstrap";

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = { qty: 0 };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleClick() {
    this.props.action(parseInt(this.state.qty));
    alert("Added to cart!");
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    console.log(this.props.state);

    let product = this.props.state.productdata[
      this.props.state.productdata.findIndex(
        product => product.pid === this.props.state.pid
      )
    ];

    return (
      <div className="ProductPage">
        <Media style={styles.listing}>
          <img
            width="40%"
            className="mr-3"
            src={product.imgurl}
            alt={product.name}
          />
          <Media.Body>
            <Link to="./products">{"<"} Products</Link>
            <p></p>
            <p>{product.category}</p>
            <h1>{product.name}</h1>
            <h3>${(product.price / 100.0).toFixed(2)}</h3>
            <p>Product ID: {product.pid}</p>
            <input
              type="number"
              name="qty"
              value={this.state.qty}
              onChange={this.handleInputChange}
            />
            <button onClick={() => this.handleClick()}>Add to Cart</button>
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
