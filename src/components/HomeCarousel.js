import React from "react";
import { Carousel } from "react-bootstrap";
import pic1 from "./chinatown.jpg";
import pic2 from "./downtown.jpg";
import pic3 from "./kyoto.jpg";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic1}
          alt="First slide"
          style={styles.carousel}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic2}
          alt="Second slide"
          style={styles.carousel}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={pic3}
          alt="Third slide"
          style={styles.carousel}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;

let styles = {
  carousel: {
    height: 400
  }
};
