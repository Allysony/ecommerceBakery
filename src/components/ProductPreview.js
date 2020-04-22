import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";

class ProductPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {hovered: false};
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
      linkStyle = {
        "-webkit-animation": "App-logo-spin 4s linear infinite",
        "-moz-animation": "App-logo-spin 4s linear infinite",
        animation: "App-logo-spin 4s linear infinite"
      };
    } else {
      linkStyle = {};
      console.log("BYE!");
    }
    return (
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
    );
  }
}

export default ProductPreview;
