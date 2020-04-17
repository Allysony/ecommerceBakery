import React from "react";
import {Card} from "react-bootstrap";

function ProductPreview(title, price, image) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductPreview;
