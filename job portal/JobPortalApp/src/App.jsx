import './App.css'
import Userdb from './components/Userdb'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Admindb from './components/Admindb'
import Register from './components/Register'
import AppliedJobs from './components/AppliedJobs'
import Userprofile from './components/Userprofile'
import BrowseJob from './components/BrowseJob'
import ManageJobs from './components/ManageJobs'
import AddJob from './components/AddJob'
import UserApplication from './components/UserApplication'
import Intro from './components/Intro'

function App() {
  return (
    <>
      <Navbar /><br />
      <Routes>
        
        <Route path='/signup' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Intro/>} />
        <Route path='/userdb' element={<Userdb />}>
          <Route index element={<h3>Welcome to your dashboard!</h3>} /> {/* Default view */}
          <Route path="appliedjobs" element={<AppliedJobs />} />
          <Route path="userprofile" element={<Userprofile />} />
          <Route path='browse' element={<BrowseJob/>} />
        </Route>
        <Route path='/admindb' element={<Admindb />} >
           <Route path="managejobs" element={<ManageJobs/>} />
           <Route path="addJob" element={<AddJob/>} />
           <Route path="applications" element={<UserApplication/>} />


        </Route>
      </Routes>
    </>
  )
}

export default App
