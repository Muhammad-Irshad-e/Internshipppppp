import React, { useState } from 'react'
import { Button, TextField, Typography, Grid, Box, Modal, Divider, List, ListItem, IconButton } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from 'react-router-dom';

const jobs = [
    {
      "id": "1",
      "title": "Senior Front-End Developer",
      "type": "Full-Time",
      "location": "New York, NY",
      "description": "Join our team as a Senior Front-End Developer in the heart of New York City. We are looking for an experienced individual with a passion for cutting-edge technologies and a track record of delivering high-quality web applications.",
      "salary": "$100K - $120K",
      "company": { "name": "Tech Innovations Inc", "contactEmail": "contact@techinnovations.com" }
    },
    {
      "id": "2",
      "title": "UI/UX Designer",
      "type": "Full-Time",
      "location": "San Francisco, CA",
      "description": "Exciting opportunity for a UI/UX Designer to join our dynamic team in San Francisco. We are seeking a creative individual with a keen eye for design and a passion for creating intuitive user interfaces.",
      "salary": "$90K - $110K",
      "company": { "name": "Design Solutions Co", "contactEmail": "contact@designsolutions.com" }
    },
    {
      "id": "3",
      "title": "Full Stack Developer",
      "type": "Full-Time",
      "location": "Austin, TX",
      "description": "Join our team as a Full Stack Developer and work on exciting projects in the heart of Austin. We are seeking a versatile individual with experience in both front-end and back-end development.",
      "salary": "$80K - $100K",
      "company": { "name": "CodeCrafters LLC", "contactEmail": "contact@codecrafters.com" }
    }
  ];

const ManageJobs = () => {
      const [open, setOpen] = useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      const navigate = useNavigate()
      const addOpen = ()=>navigate('addJob')
  return (
    <Box sx={{ p: 3 ,}}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <TextField fullWidth variant='outlined' label="Job Position" />
        </Grid>
        <Grid item>
          <IconButton onClick={handleOpen}>
            Filter <ArrowDropDownIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Button variant='contained'>Search</Button>
        </Grid>
        <Grid item>
          <Button variant='contained' onClick={addOpen}>Add Job</Button>
        </Grid>
      </Grid>
      
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ width: 350, p: 3, mx: 'auto', mt: 10, bgcolor: 'white', boxShadow: 24, borderRadius: 2 }}>
          <Typography variant='h6'>Filter Jobs</Typography>
          <TextField fullWidth variant='outlined' label="Job Position" sx={{ my: 1 }} />
          <TextField fullWidth variant='outlined' label="Location" sx={{ my: 1 }} />
          <select style={{ width: '100%', padding: '10px', marginBottom: '10px' }}>
            <option>Type</option>
            <option value="part-time">Part-time</option>
            <option value="full-time">Full-time</option>
          </select>
          <select style={{ width: '100%', padding: '10px', marginBottom: '10px' }}>
            <option>Salary</option>
            <option value="below-50000">Below 50000</option>
            <option value="above-50000">Above 50000</option>
          </select>
          <Button variant='contained' fullWidth onClick={handleClose}>Filter</Button>
        </Box>
      </Modal>

      <Box sx={{ mt: 4, p: 3, bgcolor: 'white', boxShadow: 3, borderRadius: 2, textAlign: 'left' }}>
        <Typography variant="h5" gutterBottom> Job Listings</Typography>
        <Divider sx={{ mb: 2 }} />
        <List>
          {jobs.map((job) => (
            <ListItem key={job.id} sx={{ mb: 2, p: 2, border: '1px solid #ddd', borderRadius: 2, flexDirection: 'column', alignItems: 'flex-start' }}>
              <Typography variant="h6">{job.title}</Typography>
              <Typography variant="subtitle1" color="textSecondary">{job.company.name}</Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>{job.description}</Typography>
              <Typography color="textSecondary" sx={{ mt: 1 }}>
                <LocationOnIcon sx={{ fontSize: 'small' }} /> {job.location} | {job.type}
              </Typography>
              <Button variant='outlined' sx={{ mt: 2 }} onClick={addOpen} color='primary'>Update</Button>
              <Button variant='outlined' sx={{ mt: 2 }} color='error'>Delete</Button>

              
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
}

export default ManageJobs
