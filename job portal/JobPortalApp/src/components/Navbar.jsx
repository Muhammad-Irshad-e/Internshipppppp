import React from 'react'

import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='m-0 p-0'>
       <nav className="bg-blue-600 text-white py-3 px-6 flex justify-between items-center">
        <div className="text-lg font-bold">JOBIFY</div>
        <div className="space-x-4">
        <Link to='/'>
        <Button variant="text" color="inherit">Home</Button>
        </Link>
        <Link to='/signup'>
          <Button variant="text" color="inherit">Sign Up</Button>
        </Link>
        <Link to='/login'>
          <Button variant="outlined" color="inherit">Login</Button>
        </Link>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
