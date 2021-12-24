import React from 'react';
import { useForm } from "react-hook-form";
import { Col, Container, Row } from 'react-bootstrap';
import { Button } from '@mui/material';

const Review = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    const { description, imageFile, defaultPrice, priceTwo, priceThree, sizeOne, sizeTwo, sizeThree, stockOne, stockTwo, stockThree } = data;


    const img = imageFile[0]

    const formData = new FormData();
    formData.append('img', img);
    formData.append('description', description);
    formData.append('price', parseFloat(defaultPrice));



    formData.append('size1', JSON.stringify({
      size: sizeOne,
      price: parseFloat(defaultPrice),
      stock: stockOne
    }));
    formData.append('size2', JSON.stringify({
      size: sizeTwo,
      price: parseFloat(priceTwo),
      stock: stockTwo
    }));
    formData.append('size3', JSON.stringify({
      size: sizeThree,
      price: parseFloat(priceThree),
      stock: stockThree
    }));
    // const newData = {

    //   description,
    //   price: parseFloat(defaultPrice),
    //   size1: {
    //     size: sizeOne,
    //     price: parseFloat(defaultPrice),
    //     stock: stockOne
    //   },
    //   size2: {
    //     size: sizeTwo,
    //     price: parseFloat(priceTwo),
    //     stock: stockTwo
    //   },
    //   size3: {
    //     size: sizeThree,
    //     price: parseFloat(priceThree),
    //     stock: stockThree
    //   }

    // }

    fetch('http://localhost:5000/products', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  };
  return (
    <div>
      <Container className="my-5">
        <Row>
          <Col md={3} >

          </Col>
          <Col md={6} >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col>
                  <input
                    required
                    accept="image/*"
                    type="file" className="mb-3"
                    {...register("imageFile", { required: true })} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input required placeholder="product name" className="w-100 form-control mb-3" {...register("description", { required: true })} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input required placeholder=" product price" className="w-100 form-control mb-3" {...register("defaultPrice", { required: true })} />
                </Col>
              </Row>

              <div>

                <h3>Field For Size One</h3>

                <Row>
                  <Col>
                    <input required placeholder="price for size one" className="w-100 form-control mb-3" {...register("priceOne", { required: true })} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input required placeholder=" size for one" className="w-100 form-control mb-3" {...register("sizeOne", { required: true })} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input required placeholder=" stock for one" className="w-100 form-control mb-3" {...register("stockOne", { required: true })} />
                  </Col>
                </Row>
                <h3>Field For Size Two</h3>

                <Row>
                  <Col>
                    <input required placeholder="price for size two" className="w-100 form-control mb-3" {...register("priceTwo", { required: true })} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input required placeholder=" size for two" className="w-100 form-control mb-3" {...register("sizeTwo", { required: true })} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input required placeholder=" stock for two" className="w-100 form-control mb-3" {...register("stockTwo", { required: true })} />
                  </Col>
                </Row>
                <h3>Field For Size Three</h3>

                <Row>
                  <Col>
                    <input required placeholder="price for size three" className="w-100 form-control mb-3" {...register("priceThree", { required: true })} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input required placeholder=" size for three" className="w-100 form-control mb-3" {...register("sizeThree", { required: true })} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input required placeholder=" stockThree" className="w-100 form-control mb-3" {...register("stockThree", { required: true })} />
                  </Col>
                </Row>

              </div>

              <Button style={{ backgroundColor: "#E0647A", border: 'none' }} className="button buttonHover" type="submit">
                Add Product
              </Button>
            </form>
          </Col>
          <Col md={3} >

          </Col>
        </Row>

      </Container>
    </div>

  );
};

export default Review;
