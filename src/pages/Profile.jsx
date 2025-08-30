import React, { useState } from 'react'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  FileText, 
  Upload, 
  Edit, 
  Save,
  X,
  Download,
  Eye,
  Trash2
} from 'lucide-react'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    location: "Mumbai, India",
    title: "Senior Software Developer",
    company: "TechCorp",
    experience: "5 years",
    education: "B.Tech Computer Science",
    skills: ["React", "Node.js", "Python", "AWS", "Docker"],
    bio: "Passionate software developer with expertise in modern web technologies and cloud solutions. Always eager to learn and contribute to innovative projects."
  })

  const [resumes, setResumes] = useState([
    {
      id: 1,
      name: "John_Doe_Resume_2024.pdf",
      size: "2.4 MB",
      uploaded: "2 days ago",
      isPrimary: true
    },
    {
      id: 2,
      name: "John_Doe_CV_Updated.pdf",
      size: "1.8 MB",
      uploaded: "1 week ago",
      isPrimary: false
    }
  ])

  const [newResume, setNewResume] = useState(null)
  const [showUploadModal, setShowUploadModal] = useState(false)

  const handleProfileUpdate = () => {
    setIsEditing(false)
    // Here you would typically save to backend
  }

  const handleResumeUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      setNewResume({
        id: Date.now(),
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
        uploaded: "Just now",
        isPrimary: false
      })
      setShowUploadModal(false)
      // Here you would typically upload to backend
    }
  }

  const setPrimaryResume = (id) => {
    setResumes(resumes.map(resume => ({
      ...resume,
      isPrimary: resume.id === id
    })))
  }

  const deleteResume = (id) => {
    setResumes(resumes.filter(resume => resume.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Professional Profile
          </h1>
          <p className="text-lg text-gray-600">
            Manage your profile, upload resumes, and showcase your skills to employers
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Info Card */}
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Basic Information</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
                >
                  {isEditing ? <X className="w-4 h-4" /> : <Edit className="w-4 h-4" />}
                  <span>{isEditing ? 'Cancel' : 'Edit'}</span>
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                        className="input-field"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 text-gray-900">
                        <User className="w-4 h-4 text-gray-400" />
                        <span>{profile.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                        className="input-field"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 text-gray-900">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span>{profile.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => setProfile({...profile, phone: e.target.value})}
                        className="input-field"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 text-gray-900">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span>{profile.phone}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profile.location}
                        onChange={(e) => setProfile({...profile, location: e.target.value})}
                        className="input-field"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 text-gray-900">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span>{profile.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <div className="pt-4 border-t border-gray-200">
                    <button
                      onClick={handleProfileUpdate}
                      className="btn-primary flex items-center space-x-2"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Professional Info Card */}
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Professional Information</h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                    <div className="flex items-center space-x-2 text-gray-900">
                      <Briefcase className="w-4 h-4 text-gray-400" />
                      <span>{profile.title}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <span className="text-gray-900">{profile.company}</span>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                    <span className="text-gray-900">{profile.experience}</span>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                    <div className="flex items-center space-x-2 text-gray-900">
                      <GraduationCap className="w-4 h-4 text-gray-400" />
                      <span>{profile.education}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                  <p className="text-gray-900 leading-relaxed">{profile.bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Section */}
          <div className="space-y-6">
            {/* Resume Upload Card */}
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Resume Management</h2>
              
              <div className="space-y-4">
                <button
                  onClick={() => setShowUploadModal(true)}
                  className="w-full btn-primary flex items-center justify-center space-x-2 py-3"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload New Resume</span>
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Resume Builder Service</p>
                  <div className="bg-accent-50 rounded-lg p-4 border border-accent-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-accent-800">Professional Resume</span>
                      <span className="text-lg font-bold text-accent-600">₹299</span>
                    </div>
                    <p className="text-xs text-accent-700 mb-3">AI-powered resume builder with expert templates</p>
                    <button className="w-full btn-accent text-sm py-2">
                      Build Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume List */}
            <div className="card">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Your Resumes</h3>
              <div className="space-y-3">
                {resumes.map((resume) => (
                  <div
                    key={resume.id}
                    className={`p-3 rounded-lg border ${
                      resume.isPrimary ? 'border-primary-200 bg-primary-50' : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-gray-400" />
                        <span className="text-sm font-medium text-gray-900 truncate">
                          {resume.name}
                        </span>
                      </div>
                      {resume.isPrimary && (
                        <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                          Primary
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                      <span>{resume.size}</span>
                      <span>{resume.uploaded}</span>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 btn-secondary text-xs py-1 flex items-center justify-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>View</span>
                      </button>
                      <button className="flex-1 btn-secondary text-xs py-1 flex items-center justify-center space-x-1">
                        <Download className="w-3 h-3" />
                        <span>Download</span>
                      </button>
                      {!resume.isPrimary && (
                        <>
                          <button
                            onClick={() => setPrimaryResume(resume.id)}
                            className="flex-1 btn-primary text-xs py-1"
                          >
                            Set Primary
                          </button>
                          <button
                            onClick={() => deleteResume(resume.id)}
                            className="px-2 py-1 text-red-600 hover:bg-red-50 rounded text-xs"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Upload Resume</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Drag and drop your resume here, or click to browse
                </p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeUpload}
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="btn-primary cursor-pointer inline-block"
                >
                  Choose File
                </label>
              </div>
              <div className="mt-4 flex space-x-3">
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile