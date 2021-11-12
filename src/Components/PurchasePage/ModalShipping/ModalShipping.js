import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ModalShipping = ({ handleOpen, handleClose, open, purchingProduct }) => {

  const history = useHistory();
  const { user } = useAuth();
  console.log('purching product', purchingProduct)

  const { register, reset, handleSubmit } = useForm();


  const onSubmit = data => {
    data.purchsed = purchingProduct;
    data.status = "Pending"

    fetch('https://floating-river-34453.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        swal("Good job!", "Order Done", "success");
        console.log(swal)
        handleClose()
        history.push('/dashboard/myOrders')
        reset();
      });


  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container>
            <Row>
              <Col md={12} >
                <form onSubmit={handleSubmit(onSubmit)}>

                  <Row>
                    <Col>
                      <input className="w-100 form-control mb-3" defaultValue={user.displayName} {...register("name")} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <input className="w-100 form-control mb-3" defaultValue={user.email} {...register("email", { required: true })} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <input required placeholder="Country" className="w-100 form-control mb-3" {...register("country", { required: true })} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <input required placeholder="City" className="w-100 form-control mb-3" {...register("city", { required: true })} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <input required placeholder="Phone" className="w-100 form-control mb-3" {...register("phone", { required: true })} />
                    </Col>
                  </Row>
                  <Button variant="success" type="submit" style={{ backgroundColor: '#EF0081', color: 'white' }} >
                    Place Order
                  </Button>
                </form>
              </Col>
            </Row>

          </Container>
        </Box>
      </Modal>
    </div>
  );
}
export default ModalShipping;
