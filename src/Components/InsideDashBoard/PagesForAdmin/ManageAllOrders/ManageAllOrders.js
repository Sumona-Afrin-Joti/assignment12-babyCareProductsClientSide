import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Table from '@mui/material/Table';
import swal from 'sweetalert';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import DeleteIcon from '@mui/icons-material/Delete';


const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);


  useEffect(() => {
    fetch(`https://floating-river-34453.herokuapp.com/orders`)
      .then(res => res.json())
      .then(data => {
        setAllOrders(data)
      })
  }, [allOrders]);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Do you wanna delete it?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal(" deleted successfully!", {
            icon: "success",
          });

          fetch(`https://floating-river-34453.herokuapp.com/orders/${id}`, {
            method: 'DELETE',
          })
            .then(res => res.json())
            .then(data => {
            })
        } else {
          swal("Your imaginary file is safe!");
        }
      });


  }


  const handleUpdate = (id) => {

    const updatedOrder = { ...allOrders }

    updatedOrder.status = 'Shipped'
    fetch(`https://floating-river-34453.herokuapp.com/orders/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedOrder)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          swal("Good job!", "Order Successfully Shipped!", "success");
        }
      })
  }

  return (
    <Container>
      {
        allOrders.length === 0 ? <p>You Didn't Order Yet </p> : <><TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Order Id</TableCell>
                <TableCell align="right">Product Name</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Subtotal</TableCell>
                <TableCell align="right">User Email</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right"> Action </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allOrders.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row._id}
                  </TableCell>
                  <TableCell align="right">{row.purchsed.description}</TableCell>
                  <TableCell align="right">{row.purchsed.quantity}</TableCell>
                  <TableCell align="right">{row.purchsed.subTotal}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">
                    <Button onClick={() => handleUpdate(row._id)} title="confirm to shipping" className="me-1" variant="success" >

                      <FontAwesomeIcon icon={faCheck} />

                    </Button>
                    <Button title="Delete" variant="danger" onClick={() => handleDelete(row._id)}>

                      <DeleteIcon></DeleteIcon>

                    </Button>

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </>
      }

    </Container>
  );
};

export default ManageAllOrders;
