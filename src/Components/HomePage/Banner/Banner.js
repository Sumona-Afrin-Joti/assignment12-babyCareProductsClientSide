import React from 'react';
import { Carousel, Col, Row } from 'react-bootstrap';
import './Banner.css';
import Fade from 'react-reveal/Fade';

const Banner = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item className="banner1">

        <Carousel.Caption className="caption1" >
          <Fade right>
            <Row>

              <Col md={6}>
              </Col>
              <Col md={6}>

                <h5 >Natural & Safe</h5>
                <p>The Skin of babies is very delicate as well as sensitive so you should pamper the babies skin with the best baby products. Baby Products are specially designed for the tender skin of your babies</p>

                <button className="sliderButton">Baby Cream</button>
                <button className="sliderButton">Shop Now</button>
              </Col>
            </Row>
          </Fade>
        </Carousel.Caption>



      </Carousel.Item>
      <Carousel.Item className="banner2">

        <Carousel.Caption className="caption2" >
          <Fade left>
            <Row>

              <Col md={6}>
                <h5>Extra Soft</h5>
                <p>The Skin of babies is very delicate as well as sensitive so you should pamper the babies skin with the best baby products. Baby Products are specially designed for the tender skin of your babies</p>

                <button className="sliderButton">Baby Cream</button>
                <button className="sliderButton">Shop Now</button>
              </Col>
              <Col md={6}>

              </Col>
            </Row>
          </Fade>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="banner3">

        <Carousel.Caption className="caption3" >
          <Fade left>
            <Row>

              <Col md={6}>
                <h5>Gentel Care</h5>
                <p>The Skin of babies is very delicate as well as sensitive so you should pamper the babies skin with the best baby products. Baby Products are specially designed for the tender skin of your babies</p>

                <button className="sliderButton">Baby Cream</button>
                <button className="sliderButton">Shop Now</button>
              </Col>
              <Col md={6}>

              </Col>
            </Row>
          </Fade>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
