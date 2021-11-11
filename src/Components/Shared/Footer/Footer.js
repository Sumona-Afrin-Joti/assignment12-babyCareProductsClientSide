import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>

          <Col md={3}>
            <Stack gap={2}>
              <h5>TOUR BY CATEGORIES</h5>
              <ul className="text-secondary">
                <li>Outdoor Activites</li>
                <li>City Tours</li>
                <li>Cultural & Thematic Tours</li>

                <li>Indulgence & Luxury Tours</li>

                <li>Family Friendly Tours</li>
                <li>Holiday & Seasonal Tours</li>
                <li>Wild & Adventure Tours</li>

              </ul>
            </Stack>
          </Col>

          <Col md={3}>
            <Stack gap={2}>
              <h5>OUR COMPANY</h5>
              <ul className="text-secondary">
                <li>About Us</li>
                <li>Press Releases</li>
                <li>Blog Posts</li>
                <li>Social Connect</li>
                <li>Help Topics</li>
                <li>Site Map</li>
                <li>Policies</li>
              </ul>
            </Stack>
          </Col>

          <Col md={3}>
            <Stack gap={2}>
              <h5>LATEST TWEETS</h5>
              <ul className="text-secondary">
                <li>
                  <Row>
                    <Col md={1} className="pe-0" >
                      <FontAwesomeIcon icon={faTwitter} className="fa-twiter"></FontAwesomeIcon>
                    </Col>
                    <Col md={10} className="pe-0">
                      <small>Best Free Portfolio Joomla Extensions 2020 <a href="#"> https://t.co/65ncpxm7VE</a> </small>
                      <p>about 2 years ago</p>
                    </Col>
                  </Row>
                </li>
                <li> <Row>
                  <Col md={1} className="pe-0">
                    <FontAwesomeIcon icon={faTwitter} className="fa-twiter" ></FontAwesomeIcon>
                  </Col>
                  <Col md={10} className="pe-0">
                    <small>Best Free Portfolio Joomla Extensions 2020 <a href="#"> https://t.co/65ncpxm7VE</a> </small>
                    <p>about 2 years ago</p>
                  </Col>
                </Row></li>
                <li><Row>
                  <Col md={1} className="pe-0">
                    <FontAwesomeIcon icon={faTwitter} className="fa-twiter" ></FontAwesomeIcon>
                  </Col>
                  <Col md={10} className="pe-0">
                    <small>Best Free Portfolio Joomla Extensions 2020 <a href="#"> https://t.co/65ncpxm7VE</a> </small>
                    <p>about 2 years ago</p>
                  </Col>
                </Row></li>

              </ul>

            </Stack>
          </Col>

          <Col md={3}>
            <Stack gap={2}>
              <h5>ABOUT AVENTURA</h5>
              <ul className="text-secondary">
                <li>Travel makes you realize that no matter how much you know, there’s always more to learn.</li>
                <li className="mt-4">Address : 12 Main Street Pt. London Phone : +44 3656 4567 contact@aventura.com</li>
              </ul>
            </Stack>
          </Col>
        </Row>

      </Container>
      <hr></hr>

      <Container>

        <Row className="copy-right-section" style={{ display: "flex", justifyContent: 'center' }} >

          <Col md={4} xs={12} className="p-0 d-flex justify-content-center mt-5">
            <small>Copyright 2021 Aventura. All Right Reserved</small>
          </Col>

          <Col md={4} xs={12} className=" p-0 d-flex justify-content-md-end justify-content-center mt-5">
            <Stack direction="horizontal" gap={3} >
              <div className="footer-div">
                <FontAwesomeIcon icon={faFacebookF} className="footer-icon" ></FontAwesomeIcon>
              </div>
              <div className="footer-div">
                <FontAwesomeIcon icon={faTwitter} className="footer-icon" ></FontAwesomeIcon>
              </div>

              <div className="footer-div">
                <FontAwesomeIcon icon={faInstagram} className="footer-icon" ></FontAwesomeIcon>
              </div >
              <div className="footer-div">
                <FontAwesomeIcon icon={faYoutube} className="footer-icon" ></FontAwesomeIcon>
              </div>

            </Stack>
          </Col>

        </Row>
      </Container>

    </div >
  );
};

export default Footer;
