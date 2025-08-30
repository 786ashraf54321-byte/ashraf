import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Building, 
  Calendar,
  Users,
  CheckCircle,
  ArrowRight,
  Share2,
  Bookmark,
  Send,
  Download,
  Eye,
  Briefcase,
  GraduationCap
} from 'lucide-react'

const JobDetail = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState('overview')
  const [isBookmarked, setIsBookmarked] = useState(false)

  // Mock job data - in real app this would come from API
  const job = {
    id: parseInt(id),
    title: "Senior React Developer",
    company: "TechCorp",
    location: "Mumbai, India",
    type: "Full-time",
    salary: "₹15-25 LPA",
    experience: "3-5 years",
    posted: "2 days ago",
    logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=face",
    companySize: "500-1000 employees",
    industry: "Technology",
    description: "We are looking for a Senior React Developer to join our dynamic team and help build cutting-edge web applications. You will be responsible for developing user-facing features, implementing responsive design, and ensuring the best possible performance and user experience.",
    requirements: [
      "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model",
      "Thorough understanding of React.js and its core principles",
      "Experience with popular React.js workflows (such as Flux or Redux)",
      "Familiarity with newer specifications of EcmaScript",
      "Experience with data structure libraries (e.g., Immutable.js)",
      "Knowledge of isomorphic React is a plus",
      "Familiarity with RESTful APIs",
      "Knowledge of modern authorization mechanisms, such as JSON Web Token",
      "Familiarity with modern front-end build pipelines and tools",
      "Experience with common front-end development tools such as Babel, Webpack, NPM, etc."
    ],
    responsibilities: [
      "Develop new user-facing features using React.js",
      "Build reusable code and libraries for future use",
      "Ensure the technical feasibility of UI/UX designs",
      "Optimize applications for maximum speed and scalability",
      "Assure that all user input is validated before submitting to back-end",
      "Collaborate with other team members and stakeholders",
      "Participate in code reviews and technical discussions",
      "Mentor junior developers and share knowledge"
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Flexible working hours and remote work options",
      "Professional development and training opportunities",
      "Health insurance and wellness programs",
      "Modern office with latest technology",
      "Team building activities and events",
      "Career growth and advancement opportunities"
    ],
    skills: ["React", "Node.js", "TypeScript", "JavaScript", "HTML", "CSS", "Git", "REST APIs"],
    education: "Bachelor's degree in Computer Science or related field",
    applicationDeadline: "2024-02-15",
    totalApplications: 45
  }

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Eye },
    { id: 'requirements', name: 'Requirements', icon: CheckCircle },
    { id: 'benefits', name: 'Benefits', icon: Users },
    { id: 'company', name: 'Company', icon: Building }
  ]

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)
  }

  const handleApply = () => {
    // Handle job application logic
    alert('Application submitted successfully!')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Job Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Job Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        {job.title}
                      </h1>
                      <div className="flex items-center space-x-2 text-lg text-gray-600 mb-2">
                        <Building className="w-5 h-5" />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={handleBookmark}
                      className={`p-3 rounded-lg border transition-colors duration-200 ${
                        isBookmarked
                          ? 'border-primary-200 bg-primary-50 text-primary-600'
                          : 'border-gray-200 text-gray-400 hover:border-primary-200 hover:text-primary-600'
                      }`}
                    >
                      <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-3 border border-gray-200 rounded-lg text-gray-400 hover:border-primary-200 hover:text-primary-600 transition-colors duration-200">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Job Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <DollarSign className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Salary</p>
                    <p className="font-semibold text-gray-900">{job.salary}</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Experience</p>
                    <p className="font-semibold text-gray-900">{job.experience}</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Briefcase className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Job Type</p>
                    <p className="font-semibold text-gray-900">{job.type}</p>
                  </div>
                  
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <Users className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Applications</p>
                    <p className="font-semibold text-gray-900">{job.totalApplications}</p>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Posted:</span>
                    <span className="font-medium">{job.posted}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Deadline:</span>
                    <span className="font-medium">{job.applicationDeadline}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Building className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Company Size:</span>
                    <span className="font-medium">{job.companySize}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Briefcase className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">Industry:</span>
                    <span className="font-medium">{job.industry}</span>
                  </div>
                </div>
              </div>

              {/* Application Card */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 sticky top-8">
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-green-600 mb-2">{job.salary}</div>
                    <div className="text-sm text-gray-600">Annual Salary</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Experience</span>
                      <span className="font-medium">{job.experience}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Job Type</span>
                      <span className="font-medium">{job.type}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Location</span>
                      <span className="font-medium">{job.location}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Applications</span>
                      <span className="font-medium">{job.totalApplications}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleApply}
                    className="w-full btn-primary text-lg py-3 flex items-center justify-center space-x-2 mb-4"
                  >
                    <Send className="w-5 h-5" />
                    <span>Apply Now</span>
                  </button>

                  <button className="w-full btn-secondary py-3 flex items-center justify-center space-x-2">
                    <Download className="w-5 h-5" />
                    <span>Save Job</span>
                  </button>

                  <div className="text-center mt-4">
                    <p className="text-xs text-gray-500">
                      {job.totalApplications} people have applied
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Job Tabs */}
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Job Description</h3>
                  <p className="text-gray-700 leading-relaxed">{job.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Education</h3>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <GraduationCap className="w-4 h-4 text-primary-500" />
                    <span>{job.education}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Requirements Tab */}
            {activeTab === 'requirements' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Requirements</h3>
                  <div className="space-y-3">
                    {job.requirements.map((req, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Responsibilities</h3>
                  <div className="space-y-3">
                    {job.responsibilities.map((resp, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Benefits Tab */}
            {activeTab === 'benefits' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits & Perks</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {job.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Company Tab */}
            {activeTab === 'company' && (
              <div className="space-y-6">
                <div className="flex items-start space-x-6">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.company}</h3>
                    <p className="text-gray-600 mb-4">{job.industry} • {job.companySize}</p>
                    <p className="text-gray-700 leading-relaxed">
                      TechCorp is a leading technology company specializing in innovative software solutions. 
                      We are committed to creating cutting-edge products that solve real-world problems 
                      and improve people's lives.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Company Culture</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Innovation-driven environment</li>
                      <li>• Collaborative team culture</li>
                      <li>• Continuous learning opportunities</li>
                      <li>• Work-life balance focus</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Growth Opportunities</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Career advancement paths</li>
                      <li>• Skill development programs</li>
                      <li>• Leadership training</li>
                      <li>• Industry certifications</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="text-xl text-primary-100 mb-6 max-w-2xl mx-auto">
            Don't miss this exciting opportunity to work with cutting-edge technology and grow your career. 
            Apply now and take the first step towards your dream job!
          </p>
          <button
            onClick={handleApply}
            className="btn-accent text-lg px-8 py-4 flex items-center mx-auto space-x-2"
          >
            <span>Apply for {job.title}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default JobDetail