import { useEffect, useState } from 'react';
import * as React from 'react';
import { Table, Container, Typography, CircularProgress, IconButton, Tooltip, } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';
import DeleteIcon from '@mui/icons-material/Delete';



const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();


  useEffect(() => {

    fetch(`https://floating-river-34453.herokuapp.com/orders`)
      .then(res => res.json())
      .then(data => {
        const orders = data.filter(pd => pd.email === user.email);
        setMyOrders(orders);

      })
  }, [myOrders]);


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
  return (
    <Container>

      {
        myOrders.length === 0 ? <p>You Didn't Order Yet </p> : <>
          <TableContainer component={Paper}>
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
                {myOrders.map((row) => (
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
                    <TableCell align="right"><Tooltip title="Delete">
                      <IconButton>
                        <DeleteIcon onClick={() => handleDelete(row._id)} />
                      </IconButton>
                    </Tooltip></TableCell>
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

export default MyOrders;
