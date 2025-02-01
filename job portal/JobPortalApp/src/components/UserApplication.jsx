import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const rows = [
    {
      fullName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      cv: 'https://example.com/cv/johndoe.pdf',
      jobId: '101',
      jobTitle: 'Software Engineer',
    },
    {
      fullName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      cv: 'https://example.com/cv/janesmith.pdf',
      jobId: '102',
      jobTitle: 'Product Manager',
    },
    // Add more application objects as needed
  ];

const UserApplication = () => {

  return (
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">CV</TableCell>
            <TableCell align="center">Job Id</TableCell>
            <TableCell align="center">Job Title</TableCell>
            <TableCell align="center">Actions</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="center">{row.lastName}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.cv}</TableCell>
              <TableCell align="center">{row.jobId}</TableCell>
              <TableCell align="center">{row.jobTitle}</TableCell>
              <TableCell align="center">
                <Button variant='outlined' color='success' sx={{mr:1}}>Approve</Button>
                <Button variant='outlined' color='error'>Reject</Button>

              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default UserApplication
