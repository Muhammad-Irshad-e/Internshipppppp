import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


 const Intro=()=> {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 ">
      
      <header className="relative h-96 bg-cover bg-center flex flex-col items-center justify-center text-white text-center p-8 bg-[url('job-a-darkened.jpeg')]  " >
        <h1 className="text-4xl font-bold">Job Board WordPress Themes</h1>
        <p className="mt-2 text-lg">Your job search starts and ends with us.</p>
        <a href="#feature">
        <button   className="mt-4 bg-blue-700 p-4 rounded-xl">Discover More</button></a>
      </header>
      
      {/* About Section */}
      <section className="py-12 px-6" id="feature">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">About</h2>
        <p className="text-center mb-6">Jobify is your go-to platform for finding the best jobs in tech, design, and more.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-center">
          {/* Card 1 */}
          <Card className="bg-white shadow-lg rounded-none overflow-hidden border-2 border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl max-w-xs mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-700">Advanced Job Search</h3>
              <p className="text-gray-600 mt-4">
                Easily find jobs that match your skills and preferences with our powerful search filters and smart recommendations.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="bg-white shadow-lg rounded-none overflow-hidden border-2 border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl max-w-xs mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-700">Instant Job Alerts</h3>
              <p className="text-gray-600 mt-4">
                Get notified as soon as new jobs are posted that match your criteria. Never miss out on a great opportunity again.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="bg-white shadow-lg rounded-none overflow-hidden border-2 border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl max-w-xs mx-auto">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-blue-700">Company Profiles</h3>
              <p className="text-gray-600 mt-4">
                Explore detailed company profiles, including reviews, salaries, and more, to make an informed decision about your next job.
              </p>
            </CardContent>
          </Card>

          {/* Card 4 */}
          <Card className="bg-white shadow-lg rounded-none overflow-hidden border-2 border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl max-w-xs mx-auto">
  <CardContent className="p-6">
    <h3 className="text-xl font-semibold text-blue-700">Easy Application</h3>
    <p className="text-gray-600 mt-4">
      Apply for jobs quickly with just a few clicks using our easy application process.
    </p>
  </CardContent>
</Card>
        </div>
      </section>
      <footer className="bg-blue-700 text-white text-center py-6 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-bold">JOBIFY </div>
            <div className="space-x-4 mt-2 md:mt-0">
              <a href="/" className="text-gray-100 hover:text-white">Home</a>
              <a href="/signup" className="text-gray-100 hover:text-white">Sign up</a>
              <a href="/login" className="text-gray-100 hover:text-white">Login</a>
            </div>
          </div>
          <p className="mt-4 text-gray-100">&copy; 2025 Jobify . All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
export default Intro