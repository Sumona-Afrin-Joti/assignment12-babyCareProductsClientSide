import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import ModalShipping from './ModalShipping/ModalShipping';
import './PurchasePage.css';

const PurchasePage = () => {
  const { id } = useParams();
  let [details, setDetails] = useState({});
  const { description, img, price } = details;
  const [dependentPrice, setDependentPrice] = useState(price);
  const [open, setOpen] = React.useState(false);
  let [inputValue, setInputValue] = useState(1)
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const subTotal = dependentPrice * inputValue;

  useEffect(() => {
    fetch("https://floating-river-34453.herokuapp.com/products")
      .then(res => res.json())
      .then(data => {
        const matchedProduct = data.find(product => product._id === id);
        setDetails(matchedProduct);
        setDependentPrice(matchedProduct.price)
      })
      .catch(error => {

      })
  }, []);

  const handleDecrease = () => {
    if (inputValue > 1) {
      inputValue = inputValue - 1;
      setInputValue(inputValue)
    }

  }

  const handleIncrease = () => {
    inputValue = inputValue + 1;
    setInputValue(inputValue)
  };

  details.quantity = inputValue;
  details.subTotal = subTotal;


  return (
    <div>
      <Header></Header>
      {
        !dependentPrice ? <div style={{ textAlign: "center" }} ><CircularProgress color="inherit"></CircularProgress></div> : <Container className="my-5">
          <Row xs={1} md={2} className="my-5 d-flex justify-content-center align-items-center">

            <Col className="">
              <div className="d-flex justify-content-center">
                <img width="100%" className=" details-img img-fluid" src={img} alt="" />
              </div>

            </Col>
            <Col>
              <h3>{description}</h3>
              <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo pharetras loremos.Donec pretium egestas sapien et mollis. Sample Unordered List Comodous in tempor ullamcorper miaculis Pellentesque vitae neque mollis urna mattis...</p>
              <i>Price: {dependentPrice} </i> <br />
              <div className="size">
                Size: <button onClick={() => setDependentPrice(price)}>10g</button>
                <button onClick={() => setDependentPrice(35)}>20g</button>
                <button onClick={() => setDependentPrice(40)}>25g</button>
              </div>
              <p>Brand: First Step</p>

              <p> Quantity: <span>
                <button onClick={handleDecrease} className="decreaseButton">-</button>

                <input className="input" value={inputValue} style={{ width: "30px", textAlign: "center" }} type="text" />
                <button onClick={handleIncrease} className="increaseButton">+</button></span> </p>
              <p>Subtotal: ${subTotal}.00 </p>

              <Button style={{ backgroundColor: '#E0647A', marginTop: '20px' }} onClick={handleOpen} >Proceed To Purchase</Button>

            </Col>

          </Row>
          <ModalShipping
            handleOpen={handleOpen}
            handleClose={handleClose}
            open={open}
            purchingProduct={details}
          ></ModalShipping>
        </Container>
      }

      <Footer></Footer>
    </div>
  );
};

export default PurchasePage;
