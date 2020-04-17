import React from "react";
import { Card } from "react-bootstrap";

function ProductPreview(props) {
  return (
    <Card>
      {/*<Card.Img variant="top" src={require(`${props.image}`)} /> <--need to fix image pass-through*/}
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductPreview;
