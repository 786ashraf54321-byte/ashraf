import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Play, 
  Users, 
  TrendingUp, 
  Award,
  Briefcase,
  GraduationCap,
  FileText,
  Video,
  Clock
} from 'lucide-react'
import CourseCard from '../components/CourseCard'
import JobCard from '../components/JobCard'

const Home = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "BBA - Business Administration",
      category: "Business",
      price: 1199,
      duration: "3 Years",
      students: 1250,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      live: true,
      icon: <GraduationCap className="w-6 h-6 text-primary-600" />
    },
    {
      id: 2,
      title: "BCA - Computer Applications",
      category: "Technology",
      price: 1199,
      duration: "3 Years",
      students: 2100,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=250&fit=crop",
      live: true,
      icon: <GraduationCap className="w-6 h-6 text-primary-600" />
    },
    {
      id: 3,
      title: "B.Tech - Computer Science",
      category: "Engineering",
      price: 1199,
      duration: "4 Years",
      students: 1800,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      live: true,
      icon: <GraduationCap className="w-6 h-6 text-primary-600" />
    },
    {
      id: 4,
      title: "AI & Machine Learning",
      category: "Technology",
      price: 1199,
      duration: "2 Years",
      students: 950,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
      live: true,
      icon: <GraduationCap className="w-6 h-6 text-primary-600" />
    }
  ]

  const featuredJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      location: "Mumbai, India",
      type: "Full-time",
      salary: "₹15-25 LPA",
      posted: "2 days ago",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "DataFlow",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹20-35 LPA",
      posted: "1 week ago",
      logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      id: 3,
      title: "Product Manager",
      company: "InnovateTech",
      location: "Delhi, India",
      type: "Full-time",
      salary: "₹18-30 LPA",
      posted: "3 days ago",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    }
  ]

  const stats = [
    { label: "Active Jobs", value: "2,500+", icon: Briefcase, color: "text-blue-600" },
    { label: "Course Enrollments", value: "15,000+", icon: GraduationCap, color: "text-green-600" },
    { label: "Companies", value: "500+", icon: Users, color: "text-purple-600" },
    { label: "Success Rate", value: "95%", icon: TrendingUp, color: "text-orange-600" }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Your Career Journey
                <span className="block text-accent-300">Starts Here</span>
              </h1>
              <p className="text-xl text-primary-100 max-w-lg">
                Discover thousands of job opportunities and enroll in professional courses to advance your career. Connect with top employers and industry experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/jobs" className="btn-accent text-lg px-8 py-4 flex items-center justify-center">
                  Find Jobs
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/courses" className="btn-secondary text-lg px-8 py-4 flex items-center justify-center">
                  Explore Courses
                  <Play className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop"
                  alt="Career Success"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Success Stories</p>
                    <p className="font-semibold text-gray-900">10,000+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Live Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enroll in our live interactive courses designed by industry experts. Start your learning journey today!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/courses" className="btn-primary text-lg px-8 py-3">
              View All Courses
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Resume Builder Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-accent-600" />
                  </div>
                  <span className="text-accent-600 font-semibold">Resume Builder</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Create a Professional Resume in Minutes
                </h2>
                <p className="text-xl text-gray-600">
                  Stand out from the crowd with our AI-powered resume builder. Choose from professional templates and get expert tips.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-accent-600">₹299</span>
                  <span className="text-gray-500 line-through">₹599</span>
                  <span className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm font-semibold">
                    50% OFF
                  </span>
                </div>
                <button className="btn-accent text-lg px-8 py-4 flex items-center">
                  Build Resume Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=400&fit=crop"
                  alt="Resume Builder"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-semibold text-gray-900">5 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Job Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover exciting career opportunities from top companies across various industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/jobs" className="btn-primary text-lg px-8 py-3">
              View All Jobs
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home