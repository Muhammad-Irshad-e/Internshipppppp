import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const AddJob = () => {
  return (
    
      <div>
      <Box sx={{ width: 450, p: 2, mx: 'auto',mt:0, bgcolor: 'white', boxShadow: 24, borderRadius: 2 }}>
          <Typography variant='h6'>Add Job</Typography>
          <TextField fullWidth variant='outlined' label="Job title" sx={{ my: 1 }} />
          <TextField fullWidth multiline rows={3} variant='outlined' label="Description" sx={{ my: 1 }} />
          <TextField fullWidth multiline rows={3} variant='outlined' label="Requirements" sx={{ my: 1 }} />
          <TextField fullWidth variant='outlined' label="Location" sx={{ my: 1 }} />
          <TextField fullWidth variant='outlined' type='number' label="Salary" sx={{ my: 1 }} />
          <select style={{ width: '100%', padding: '10px', marginBottom: '10px' }} className='focus:outline-blue-500'>
            <option>Type</option>
            <option value="part-time">Part-time</option>
            <option value="full-time">Full-time</option>
          </select>
          <br />
          <Button variant='contained' fullWidth >Submit</Button>
        </Box>
        </div>

  )
}

export default AddJob
