import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import ModalShipping from './ModalShipping/ModalShipping';
import './PurchasePage.css';

const PurchasePage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch("https://floating-river-34453.herokuapp.com/products")
      .then(res => res.json())
      .then(data => {
        const matchedProduct = data.find(product => product._id === id);
        setDetails(matchedProduct);
      })
      .catch(error => {

      })
  }, [])


  const { product_name, description, img, price, Brand } = details;

  return (
    <div>
      <Header></Header>
      <Container className="my-5">
        <Row xs={1} md={2} className="my-5 d-flex justify-content-center align-items-center">
          <Col>

            <h2 style={{ fontWeight: "500", marginBottom: "20px" }}>{product_name}</h2>
            <p>{description}</p>

            <h4>Brand : {Brand}</h4>
            <i>Price: {price} </i> <br />
            <Button style={{ backgroundColor: '#EF0081', marginTop: '20px' }} onClick={handleOpen} >Proceed To Purchase</Button>

          </Col>
          <Col className="">
            <div className="d-flex justify-content-center">
              <img width="100%" className=" details-img img-fluid" src={img} alt="" />
            </div>

          </Col>

        </Row>
        <ModalShipping
          handleOpen={handleOpen}
          handleClose={handleClose}
          open={open}
          purchingProduct={details}
        ></ModalShipping>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default PurchasePage;
