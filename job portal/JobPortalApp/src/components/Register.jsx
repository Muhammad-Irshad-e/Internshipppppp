import { Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
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
      <Typography variant="h4">Register</Typography>
      <br />
     
<TextField id="standard-basic" label="Full Name" variant="outlined" required/>
<br /> <br />
<TextField id="standard-basic" label="Emal" variant="outlined" required />
<br /> <br />
<TextField
      label="Mobile Number"
      variant="outlined"
      type="tel"
      required
    /><br /> <br />

<TextField id="standard-basic" label="Password" variant="outlined" required/>
<br /> 
<FormControl>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
       
      </RadioGroup>
    </FormControl>
    <br /> <br />
    <Link to='/userdb'>
    <Button variant="contained" type='submit' >submit</Button>

    </Link>
    <br /> <br />

    </div>
  )
}

export default Register