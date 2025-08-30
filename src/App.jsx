import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Jobs from './pages/Jobs'
import Courses from './pages/Courses'
import Profile from './pages/Profile'
import CourseDetail from './pages/CourseDetail'
import JobDetail from './pages/JobDetail'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/job/:id" element={<JobDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App