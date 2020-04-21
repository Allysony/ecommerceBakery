import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

class ProductPreview extends Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
  }

  handleClick() {
    console.log(this.props.pid);
    this.props.action(this.props.pid);
  }

  render() {
    console.log(this.props.pid);
    let linkStyle;
    if (this.state.hovered) {
      console.log("TRANSFORM!");
      linkStyle = { transform: "scale(1.5,1.5)" };
    } else {
      linkStyle = {};
      console.log("BYE!");
    }
    return (
      <div>
        <Card style={{ width: "30%", display: "inline-block", margin: "1.5%" }}>
          <Link to="./productpage">
            <Card.Img
              variant="top"
              src={this.props.image}
              style={linkStyle}
              onMouseEnter={() => this.setState({ hovered: true })}
              onMouseLeave={() => this.setState({ hovered: false })}
              onClick={() => this.handleClick()}
            />
          </Link>
          <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>{this.props.price}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ProductPreview;
