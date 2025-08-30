import React, { useState } from 'react'
import { Search, Filter, GraduationCap, Video, Clock, Users, Star } from 'lucide-react'
import CourseCard from '../components/CourseCard'

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'All Courses', icon: GraduationCap },
    { id: 'business', name: 'Business', icon: GraduationCap },
    { id: 'technology', name: 'Technology', icon: GraduationCap },
    { id: 'engineering', name: 'Engineering', icon: GraduationCap },
    { id: 'design', name: 'Design', icon: GraduationCap },
    { id: 'marketing', name: 'Marketing', icon: GraduationCap },
    { id: 'finance', name: 'Finance', icon: GraduationCap }
  ]

  const allCourses = [
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
    },
    {
      id: 5,
      title: "Digital Marketing Masterclass",
      category: "Marketing",
      price: 1199,
      duration: "6 Months",
      students: 3200,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      live: true,
      icon: <GraduationCap className="w-6 h-6 text-primary-600" />
    },
    {
      id: 6,
      title: "UI/UX Design Fundamentals",
      category: "Design",
      price: 1199,
      duration: "8 Months",
      students: 1800,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
      live: true,
      icon: <GraduationCap className="w-6 h-6 text-primary-600" />
    },
    {
      id: 7,
      title: "Financial Analysis & Planning",
      category: "Finance",
      price: 1199,
      duration: "1 Year",
      students: 950,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      live: true,
      icon: <GraduationCap className="w-6 h-6 text-primary-600" />
    },
    {
      id: 8,
      title: "Data Science & Analytics",
      category: "Technology",
      price: 1199,
      duration: "1.5 Years",
      students: 1500,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      live: true,
      icon: <GraduationCap className="w-6 h-6 text-primary-600" />
    }
  ]

  const filteredCourses = allCourses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category.toLowerCase() === selectedCategory
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from a wide range of professional courses designed to accelerate your career growth. 
            All courses include live interactive sessions with industry experts.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Course Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <GraduationCap className="w-6 h-6 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{allCourses.length}</h3>
            <p className="text-gray-600">Total Courses</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Video className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{allCourses.filter(c => c.live).length}</h3>
            <p className="text-gray-600">Live Courses</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {allCourses.reduce((sum, course) => sum + course.students, 0).toLocaleString()}
            </h3>
            <p className="text-gray-600">Total Students</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {(allCourses.reduce((sum, course) => sum + course.rating, 0) / allCourses.length).toFixed(1)}
            </h3>
            <p className="text-gray-600">Avg Rating</p>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}

        {/* Pricing Info */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Affordable Learning for Everyone
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            All our professional courses are priced at just ₹1,199 with live interactive sessions, 
            expert mentorship, and lifetime access to course materials.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Video className="w-5 h-5 text-red-500" />
              <span>Live Classes</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span>Flexible Schedule</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-green-500" />
              <span>Expert Mentors</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span>Certificate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses