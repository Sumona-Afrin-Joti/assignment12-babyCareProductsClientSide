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
              <h5>Contact Us</h5>
              <ul className="text-secondary">
                <li>648 Jackson Court Centreville, VA 20120</li>
                <li>+000-1234-56789</li>
                <li>support@example.com</li>
              </ul>
            </Stack>
          </Col>

          <Col md={3}>
            <Stack gap={2}>
              <h5>Quick Links</h5>
              <ul className="text-secondary">
                <li>Search</li>
                <li>News</li>
                <li>Faqs</li>
                <li>Contact</li>
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
              <h5>ABOUT Kids Fashion</h5>
              <ul className="text-secondary">
                <li>We have been creating relaxed, comfortable fashion for everyone and every day for more than 10 years</li>
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
            <small>Copyright 2021 Kids Fashion. All Right Reserved</small>
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
