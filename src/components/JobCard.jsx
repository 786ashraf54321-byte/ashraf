import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Clock, DollarSign, Building } from 'lucide-react'

const JobCard = ({ job }) => {
  return (
    <div className="card hover:shadow-xl transition-shadow duration-300 group">
      {/* Header */}
      <div className="flex items-start space-x-4 mb-4">
        <img
          src={job.logo}
          alt={job.company}
          className="w-12 h-12 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
            {job.title}
          </h3>
          <div className="flex items-center space-x-2 text-gray-600">
            <Building className="w-4 h-4" />
            <span className="font-medium">{job.company}</span>
          </div>
        </div>
      </div>

      {/* Job Details */}
      <div className="space-y-3 mb-6">
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{job.type}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-1 text-green-600 font-semibold">
          <DollarSign className="w-4 h-4" />
          <span>{job.salary}</span>
        </div>
        
        <div className="text-xs text-gray-500">
          Posted {job.posted}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <Link
          to={`/job/${job.id}`}
          className="flex-1 btn-primary text-center py-2"
        >
          View Details
        </Link>
        <button className="btn-secondary py-2 px-4">
          Quick Apply
        </button>
      </div>
    </div>
  )
}

export default JobCard