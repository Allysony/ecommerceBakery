import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import thumb from "./cupcake.png";

function ProductPreview(title, price, image) {
  return (
    <Card>
      <Card.Img variant="top" src={thumb} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductPreview;
