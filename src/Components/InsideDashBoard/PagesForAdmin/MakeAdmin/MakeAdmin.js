import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './MakeAdmin.css';


const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    const procced = window.confirm('do you want to make him/her admin ?');
    if (procced) {
      fetch('https://floating-river-34453.herokuapp.com/users', {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => {
          if (data.modifiedCount > 0 || data.upsertedCount > 0) {
            alert('admin made successfully')

          }
          reset()
        })
    }


  };
  return (
    <Row>
      <Col sm={12} md={3}></Col>
      <Col sm={12} md={6}>
        <div className="makeAdminInputDiv" >
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className="makeAdminInput" placeholder="Enter Email" {...register("email")} required />
            <button className="makeAdminButton" type="submit">Make Admin</button>
          </form>
        </div>
      </Col>
      <Col sm={12} md={3}></Col>
    </Row>


  );
};

export default MakeAdmin;
