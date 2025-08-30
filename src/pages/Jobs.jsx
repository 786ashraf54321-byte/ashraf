import React, { useState } from 'react'
import { Search, Filter, MapPin, Clock, DollarSign, Building, Briefcase } from 'lucide-react'
import JobCard from '../components/JobCard'

const Jobs = () => {
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'mumbai', name: 'Mumbai' },
    { id: 'bangalore', name: 'Bangalore' },
    { id: 'delhi', name: 'Delhi' },
    { id: 'hyderabad', name: 'Hyderabad' },
    { id: 'chennai', name: 'Chennai' },
    { id: 'pune', name: 'Pune' }
  ]

  const jobTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'full-time', name: 'Full-time' },
    { id: 'part-time', name: 'Part-time' },
    { id: 'contract', name: 'Contract' },
    { id: 'internship', name: 'Internship' },
    { id: 'remote', name: 'Remote' }
  ]

  const allJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "TechCorp",
      location: "Mumbai, India",
      type: "Full-time",
      salary: "₹15-25 LPA",
      posted: "2 days ago",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop&crop=face",
      experience: "3-5 years",
      skills: ["React", "Node.js", "TypeScript"]
    },
    {
      id: 2,
      title: "Data Scientist",
      company: "DataFlow",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹20-35 LPA",
      posted: "1 week ago",
      logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      experience: "2-4 years",
      skills: ["Python", "Machine Learning", "SQL"]
    },
    {
      id: 3,
      title: "Product Manager",
      company: "InnovateTech",
      location: "Delhi, India",
      type: "Full-time",
      salary: "₹18-30 LPA",
      posted: "3 days ago",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      experience: "4-6 years",
      skills: ["Product Strategy", "Agile", "User Research"]
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "DesignStudio",
      location: "Hyderabad, India",
      type: "Full-time",
      salary: "₹12-20 LPA",
      posted: "5 days ago",
      logo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face",
      experience: "2-4 years",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping"]
    },
    {
      id: 5,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Pune, India",
      type: "Full-time",
      salary: "₹16-28 LPA",
      posted: "1 day ago",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      experience: "3-5 years",
      skills: ["AWS", "Docker", "Kubernetes"]
    },
    {
      id: 6,
      title: "Marketing Specialist",
      company: "GrowthCorp",
      location: "Chennai, India",
      type: "Full-time",
      salary: "₹8-15 LPA",
      posted: "4 days ago",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=60&fit=crop&crop=face",
      experience: "1-3 years",
      skills: ["Digital Marketing", "SEO", "Social Media"]
    },
    {
      id: 7,
      title: "Frontend Developer",
      company: "WebSolutions",
      location: "Mumbai, India",
      type: "Remote",
      salary: "₹10-18 LPA",
      posted: "2 days ago",
      logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      experience: "1-3 years",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 8,
      title: "Business Analyst",
      company: "AnalyticsPro",
      location: "Bangalore, India",
      type: "Full-time",
      salary: "₹12-22 LPA",
      posted: "1 week ago",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      experience: "2-4 years",
      skills: ["SQL", "Excel", "Business Intelligence"]
    }
  ]

  const filteredJobs = allJobs.filter(job => {
    const matchesLocation = selectedLocation === 'all' || job.location.toLowerCase().includes(selectedLocation)
    const matchesType = selectedType === 'all' || job.type.toLowerCase() === selectedType
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesLocation && matchesType && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Find Your Dream Job
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover thousands of job opportunities from top companies. 
            Apply with one click and get connected with hiring managers.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs, companies, skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Location Filter */}
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Job Type Filter */}
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-gray-400" />
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {jobTypes.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Job Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Briefcase className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{allJobs.length}</h3>
            <p className="text-gray-600">Active Jobs</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Building className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {new Set(allJobs.map(job => job.company)).size}
            </h3>
            <p className="text-gray-600">Companies</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {new Set(allJobs.map(job => job.location.split(',')[0])).size}
            </h3>
            <p className="text-gray-600">Cities</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <DollarSign className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">₹25L</h3>
            <p className="text-gray-600">Avg Salary</p>
          </div>
        </div>

        {/* Job Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No jobs found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Create your professional profile, upload your resume, and get discovered by top employers. 
            Start your career journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-3">
              Upload Resume
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              Create Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Jobs