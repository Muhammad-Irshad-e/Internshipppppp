import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Login() {
  return (
   
        <div style={{
        textAlign: 'center',
        width:400,
        margin:'auto',
        borderRadius:20,
        boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.5) 0px 15px 35px -5px',

    }}>
          <br /><br />

      <Typography variant="h4">Login</Typography>
        <br />
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <br /> <br />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <br /> <br />
        <Link to='/admindb'>
        <Button variant="contained" >Login</Button>
        </Link>
        <br /> <br />
        <Typography variant="subtitle2" sx={{display:'inline-block'}}>
            Don't have an Account?&nbsp;&nbsp;&nbsp;
          </Typography>
        <Link to='/signup' underline="hover" style={{color:'#1976d2'}}>
            Register
        </Link>
        <br /><br />
        </div>
       
   

  )
}

export default Login