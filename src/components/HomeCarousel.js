import React from "react";
import { Carousel } from "react-bootstrap";
import pic1 from "./carousel_delivery.png";
import pic2 from "./carousel_update.png";
import pic3 from "./carousel_cookies.png";

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={pic1} alt="delivery" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pic2} alt="update" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={pic3} alt="cookies" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
