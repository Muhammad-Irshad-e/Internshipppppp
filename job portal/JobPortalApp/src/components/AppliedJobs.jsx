import React from 'react'


  
const AppliedJobs = () => {
  
  return (
    <div>
       <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-bold mb-4">Applied Job Listings</h2>
      <ul>
        
          <li
            
            className="p-4 border-b last:border-none flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">Frontend Developer</h3>
              <p className="text-gray-600">Tech Corp - Remote</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${ "bg-yellow-100 text-yellow-700"  }`}
            >
              Pending
            </span>
          </li>
         <li
            
            className="p-4 border-b last:border-none flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">Backend Engineer</h3>
              <p className="text-gray-600">Innovate Inc - New York, NY</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${ "bg-green-100 text-green-700"  }`}
            >
              Approved
            </span>
          </li>
          <li
            
            className="p-4 border-b last:border-none flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">Product Manager</h3>
              <p className="text-gray-600">Startup Hub - San Francisco, CA</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${ "bg-red-100 text-red-700"  }`}
            >
              Rejected
            </span>
          </li>
      </ul>
    </div>
    </div>
  )
}

export default AppliedJobs
