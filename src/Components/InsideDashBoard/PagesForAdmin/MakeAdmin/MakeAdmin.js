import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";

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
          console.log(data)
          if (data.modifiedCount > 0 || data.upsertedCount > 0) {
            alert('admin made successfully')

          }
          reset()
        })

      console.log(data)
    }


  };
  return (
    <div >

      <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="Enter Email" {...register("email")} required />
          <button type="submit">Make Admin</button>
        </form>
      </Box>

    </div>

  );
};

export default MakeAdmin;
