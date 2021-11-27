import React from 'react';
import { useForm } from "react-hook-form";
import { Button, Col, Container, Row } from 'react-bootstrap';

const Review = () => {
  const { register, reset, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = data => {

    if (data.rating < 5 || data.rating > 0) {
      fetch("https://floating-river-34453.herokuapp.com/reviews", {
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
    }
    else {
      alert('invalid rating')
    }




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
                  <input required placeholder=" Your img url" className="w-100 form-control mb-3" {...register("reviewers_img", { required: true })} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input required placeholder="Your name" className="w-100 form-control mb-3" {...register("reviewers_name", { required: true })} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <textarea required placeholder="Your review" className="w-100 form-control mb-3" {...register("description", { required: true })} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <input required placeholder=" give rating within 5" className="w-100 form-control mb-3" {...register("rating", { required: true })} />
                </Col>
              </Row>
              <Button style={{ backgroundColor: "#E0647A", border: "none" }} className="button" type="submit">
                Add Review
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
