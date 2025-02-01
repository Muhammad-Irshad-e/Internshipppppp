import { Button, IconButton, TextField, Typography, Grid, Box, Modal, Divider, List, ListItem, styled } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React, { useState } from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const BrowseJob = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [apply, setApply] = useState(false);
  const applyOpen = () => setApply(true);
  const applyClose = () => setApply(false);
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
      </Grid>
      
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ width: 350, p: 3, mx: 'auto', mt: 10, bgcolor: 'white', boxShadow: 24, borderRadius: 2 }}>
          <Typography variant='h6'>Filter Jobs</Typography>
          <TextField fullWidth variant='outlined' label="Job Position" sx={{ my: 1 }} />
          <TextField fullWidth variant='outlined' label="Location" sx={{ my: 1 }} />
          <select style={{ width: '100%', padding: '10px', marginBottom: '10px' }} className='focus:outline-blue-500'>
            <option>Type</option>
            <option value="part-time">Part-time</option>
            <option value="full-time">Full-time</option>
          </select>
          <select style={{ width: '100%', padding: '10px', marginBottom: '10px' }} className='focus:outline-blue-500'>
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
              <Button variant='outlined' sx={{ mt: 2 }} onClick={applyOpen}>Apply</Button>
              <Modal open={apply} onClose={applyClose}>
        <Box sx={{ width: 350, p: 3, mx: 'auto', mt: 10, bgcolor: 'white', boxShadow: 24, borderRadius: 2 }}>
          <Typography variant='h6'>Apply For  Job</Typography>
          <TextField fullWidth variant='outlined' label="First Name" sx={{ my: 1 }} />
          <TextField fullWidth variant='outlined' label="Last Name" sx={{ my: 1 }} />
          <TextField fullWidth variant='outlined' label="Email" sx={{ my: 1 }} />
          <Button
      component="label" role={undefined} variant="outlined"  tabIndex={-1}  fullWidth startIcon={<FileUploadIcon />}  sx={{ my: 1 }} >
      Upload CV
      <VisuallyHiddenInput type="file"  onChange={(event) => console.log(event.target.files)}  multiple  />   
       </Button>
          
          <Button variant='contained' fullWidth onClick={applyClose}>Submit</Button>
        </Box>
      </Modal>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default BrowseJob;
