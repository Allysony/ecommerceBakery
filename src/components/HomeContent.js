import React from "react";
import bakers from "./bakers.png";
import { Container, Row, Col } from "reactstrap";

function HomeContent() {
  return (
    <Container>
      <Row>
        <Col>
          <div style={styles.bakerstext}>
            <h3>Meet the Bakers</h3>
            <p>Blah blah blah</p>
          </div>
        </Col>
        <Col>
          <img src={bakers} alt="The Bakers" width="400" />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeContent;

let styles = {
  bakerstext: {
    textAlign: "right"
  }
};
