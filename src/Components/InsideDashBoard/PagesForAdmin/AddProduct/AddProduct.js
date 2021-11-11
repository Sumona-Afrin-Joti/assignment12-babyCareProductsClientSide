import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Col, Container, Row } from 'react-bootstrap';

const Review = () => {
  const { register, reset, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data)
    fetch("https://floating-river-34453.herokuapp.com/products", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('review added successfully');
          reset();
        }
      })


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
                  <input required placeholder=" product img url" className="w-100 form-control mb-3" {...register("img", { required: true })} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input required placeholder="product name" className="w-100 form-control mb-3" {...register("product_name", { required: true })} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <textarea required placeholder="product details" className="w-100 form-control mb-3" {...register("description", { required: true })} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input required placeholder=" product brand" className="w-100 form-control mb-3" {...register("Brand", { required: true })} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input required placeholder=" product price" className="w-100 form-control mb-3" {...register("price", { required: true })} />
                </Col>
              </Row>
              <Button className="button" type="submit">
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
