import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { 
  Star, 
  Users, 
  Clock, 
  Play, 
  Video, 
  Calendar,
  BookOpen,
  Award,
  CheckCircle,
  ArrowRight,
  Download,
  Share2
} from 'lucide-react'

const CourseDetail = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')

  // Mock course data - in real app this would come from API
  const course = {
    id: parseInt(id),
    title: "BBA - Business Administration",
    category: "Business",
    price: 1199,
    duration: "3 Years",
    students: 1250,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
    live: true,
    instructor: "Dr. Sarah Johnson",
    instructorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    instructorTitle: "Professor of Business Management",
    description: "Comprehensive BBA program covering all aspects of modern business administration including marketing, finance, operations, and strategic management.",
    highlights: [
      "Live interactive sessions with industry experts",
      "Real-world case studies and projects",
      "Industry networking opportunities",
      "Internship placement assistance",
      "Career counseling and guidance",
      "Flexible learning schedule"
    ],
    curriculum: [
      {
        semester: "Semester 1",
        subjects: ["Business Communication", "Principles of Management", "Business Mathematics", "Economics Fundamentals"]
      },
      {
        semester: "Semester 2",
        subjects: ["Marketing Management", "Financial Accounting", "Business Law", "Organizational Behavior"]
      },
      {
        semester: "Semester 3",
        subjects: ["Human Resource Management", "Operations Management", "Business Statistics", "Corporate Finance"]
      },
      {
        semester: "Semester 4",
        subjects: ["Strategic Management", "International Business", "Business Research Methods", "Entrepreneurship"]
      }
    ],
    requirements: [
      "10+2 or equivalent qualification",
      "Basic computer knowledge",
      "Good communication skills",
      "Dedication to learning"
    ],
    outcomes: [
      "Comprehensive understanding of business principles",
      "Practical skills in business management",
      "Industry-ready professional capabilities",
      "Networking with business professionals"
    ]
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BookOpen },
    { id: 'curriculum', name: 'Curriculum', icon: Calendar },
    { id: 'instructor', name: 'Instructor', icon: Users },
    { id: 'reviews', name: 'Reviews', icon: Star }
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Course Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-64 md:h-80 object-cover"
            />
            {course.live && (
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span>LIVE CLASSES</span>
              </div>
            )}
            <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
              <Share2 className="w-5 h-5 text-gray-600" />
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Course Info */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <span className="text-sm text-primary-600 font-semibold bg-primary-50 px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
                    {course.title}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{course.rating} Rating</p>
                  </div>
                  
                  <div className="text-center">
                    <Users className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">{course.students.toLocaleString()} Students</p>
                  </div>
                  
                  <div className="text-center">
                    <Clock className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">{course.duration}</p>
                  </div>
                  
                  <div className="text-center">
                    <Video className="w-6 h-6 text-red-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Live Classes</p>
                  </div>
                </div>

                {/* Course Highlights */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Course Highlights</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {course.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enrollment Card */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 sticky top-8">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary-600 mb-2">₹{course.price}</div>
                    <div className="text-sm text-gray-600">One-time payment</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Course Duration</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Live Sessions</span>
                      <span className="font-medium text-green-600">Included</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Certificate</span>
                      <span className="font-medium text-green-600">Included</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Lifetime Access</span>
                      <span className="font-medium text-green-600">Yes</span>
                    </div>
                  </div>

                  <button className="w-full btn-primary text-lg py-3 flex items-center justify-center space-x-2 mb-4">
                    <Play className="w-5 h-5" />
                    <span>Enroll Now</span>
                  </button>

                  <button className="w-full btn-secondary py-3 flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Download Brochure</span>
                  </button>

                  <div className="text-center mt-4">
                    <p className="text-xs text-gray-500">
                      30-Day Money Back Guarantee
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Tabs */}
        <div className="bg-white rounded-2xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.name}</span>
                  </button>
                )
              })}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">What You'll Learn</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {course.outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
                  <div className="space-y-2">
                    {course.requirements.map((req, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-gray-700">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Curriculum Tab */}
            {activeTab === 'curriculum' && (
              <div className="space-y-4">
                {course.curriculum.map((semester, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-3">{semester.semester}</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {semester.subjects.map((subject, subIndex) => (
                        <div key={subIndex} className="flex items-center space-x-2 text-gray-700">
                          <BookOpen className="w-4 h-4 text-primary-500" />
                          <span>{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Instructor Tab */}
            {activeTab === 'instructor' && (
              <div className="flex items-start space-x-6">
                <img
                  src={course.instructorImage}
                  alt={course.instructor}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.instructor}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.instructorTitle}</p>
                  <p className="text-gray-700 leading-relaxed">
                    Dr. Sarah Johnson is a distinguished professor with over 15 years of experience 
                    in business education. She has worked with top corporations and has published 
                    numerous research papers in leading business journals.
                  </p>
                  <div className="mt-4 flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="text-sm text-gray-600">5,000+ Students</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-600">15+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{course.rating}</div>
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(course.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">Based on {course.students} reviews</p>
                </div>

                <div className="space-y-4">
                  {/* Mock reviews */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <div className="font-medium text-gray-900">Rahul Sharma</div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      "Excellent course with practical insights. The live sessions are very interactive 
                      and the instructors are highly knowledgeable."
                    </p>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                      <div>
                        <div className="font-medium text-gray-900">Priya Patel</div>
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      "Great learning experience! The course content is well-structured and the 
                      industry projects helped me understand real-world applications."
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
            Join thousands of students who have already transformed their careers with our 
            comprehensive BBA program. Enroll now and get lifetime access to all course materials.
          </p>
          <button className="btn-accent text-lg px-8 py-4 flex items-center mx-auto space-x-2">
            <span>Enroll Now for ₹{course.price}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail