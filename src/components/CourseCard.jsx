import React from 'react'
import { Link } from 'react-router-dom'
import { Star, Users, Clock, Play, Video } from 'lucide-react'

const CourseCard = ({ course }) => {
  return (
    <div className="card group hover:scale-105 transition-transform duration-300">
      {/* Course Image */}
      <div className="relative mb-4">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        
        {/* Live Badge */}
        {course.live && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span>LIVE</span>
          </div>
        )}
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <Play className="w-8 h-8 text-primary-600 ml-1" />
          </div>
        </div>
        
        {/* Course Icon */}
        <div className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-lg">
          {course.icon}
        </div>
      </div>

      {/* Course Content */}
      <div className="space-y-3">
        {/* Category */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-primary-600 font-semibold bg-primary-50 px-3 py-1 rounded-full">
            {course.category}
          </span>
          {course.live && (
            <div className="flex items-center space-x-1 text-red-500">
              <Video className="w-4 h-4" />
              <span className="text-sm font-semibold">Live</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
          {course.title}
        </h3>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
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
          <span className="text-sm text-gray-600">
            {course.rating} ({course.students > 1000 ? `${(course.students / 1000).toFixed(1)}k` : course.students} reviews)
          </span>
        </div>

        {/* Price and Enroll Button */}
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-2xl font-bold text-primary-600">₹{course.price}</span>
              <span className="text-sm text-gray-500 ml-2">/course</span>
            </div>
            {course.live && (
              <span className="text-xs text-red-600 font-semibold bg-red-50 px-2 py-1 rounded">
                Live Classes
              </span>
            )}
          </div>
          
          <Link
            to={`/course/${course.id}`}
            className="w-full btn-primary text-center py-3 flex items-center justify-center space-x-2"
          >
            <Play className="w-4 h-4" />
            <span>Enroll Now</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseCard