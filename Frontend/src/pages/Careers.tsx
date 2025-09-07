import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Clock, DollarSign, Send, Upload } from 'lucide-react';

interface JobOpening {
  id: number;
  title: string;
  department: string;
  type: string;
  location: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  message: string;
}

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const jobOpenings: JobOpening[] = [
    {
      id: 1,
      title: "Manager",
      department: "Operations",
      type: "Full-time",
      location: "Chanlakhel, Kathmandu",
      salary: "Competitive",
      description: "Lead and oversee daily operations of our retreat center, ensuring exceptional guest experiences and staff management.",
      requirements: [
        "Bachelor's degree in Hospitality Management or related field",
        "5+ years management experience in hospitality industry",
        "Strong leadership and communication skills",
        "Fluent in English and Nepali",
        "Experience with retreat or wellness centers preferred"
      ],
      responsibilities: [
        "Manage daily operations and staff coordination",
        "Ensure guest satisfaction and service quality",
        "Oversee budgeting and financial planning", 
        "Develop and implement operational policies",
        "Coordinate with different departments"
      ]
    },
    {
      id: 2,
      title: "HR Specialist",
      department: "Human Resources",
      type: "Full-time",
      location: "Kathmandu Office",
      salary: "Rs. 40,000 - 60,000",
      description: "Manage recruitment, employee relations, and HR policies for our growing hospitality team.",
      requirements: [
        "Bachelor's degree in Human Resources or related field",
        "3+ years HR experience",
        "Knowledge of Nepal labor laws",
        "Strong interpersonal skills",
        "Experience with HR software preferred"
      ],
      responsibilities: [
        "Recruit and onboard new employees",
        "Manage employee relations and policies",
        "Handle payroll and benefits administration",
        "Conduct training and development programs",
        "Ensure compliance with labor regulations"
      ]
    },
    {
      id: 3,
      title: "Housekeeping In-charge",
      department: "Housekeeping",
      type: "Full-time", 
      location: "Chanlakhel Retreat",
      salary: "Rs. 25,000 - 35,000",
      description: "Supervise housekeeping operations to maintain pristine cleanliness standards throughout our retreat facilities.",
      requirements: [
        "High school diploma or equivalent",
        "2+ years housekeeping experience",
        "Leadership and organizational skills",
        "Attention to detail",
        "Physical ability to perform cleaning tasks"
      ],
      responsibilities: [
        "Supervise housekeeping staff and schedules",
        "Ensure cleanliness standards are maintained",
        "Manage inventory of cleaning supplies",
        "Coordinate room preparation and maintenance",
        "Train new housekeeping staff"
      ]
    },
    {
      id: 4,
      title: "Waiter/Waitress",
      department: "Food & Beverage",
      type: "Full-time",
      location: "Chanlakhel Retreat",
      salary: "Rs. 20,000 - 25,000",
      description: "Provide exceptional dining service to guests while maintaining the peaceful atmosphere of our retreat.",
      requirements: [
        "High school diploma preferred",
        "1+ years restaurant experience",
        "Good communication skills",
        "Friendly and professional demeanor",
        "Basic English communication"
      ],
      responsibilities: [
        "Serve meals and beverages to guests",
        "Maintain dining area cleanliness",
        "Take orders and handle payment",
        "Assist with food preparation when needed",
        "Ensure guest satisfaction with dining experience"
      ]
    },
    {
      id: 5,
      title: "Front Desk Receptionist",
      department: "Guest Services",
      type: "Full-time",
      location: "Chanlakhel Retreat", 
      salary: "Rs. 22,000 - 28,000",
      description: "Be the first point of contact for guests, providing warm hospitality and efficient service.",
      requirements: [
        "High school diploma or higher",
        "Customer service experience preferred",
        "Excellent communication skills in English and Nepali",
        "Computer literacy",
        "Professional appearance and manner"
      ],
      responsibilities: [
        "Check-in and check-out guests",
        "Handle reservations and inquiries",
        "Provide information about services and local attractions",
        "Manage phone calls and correspondence",
        "Assist with billing and payments"
      ]
    },
    {
      id: 6,
      title: "Security Guard",
      department: "Security",
      type: "Full-time",
      location: "Chanlakhel Retreat",
      salary: "Rs. 18,000 - 22,000",
      description: "Ensure safety and security of guests and property while maintaining a welcoming atmosphere.",
      requirements: [
        "Security training certification preferred",
        "Good physical condition",
        "Alert and responsible attitude",
        "Basic communication skills",
        "Night shift availability"
      ],
      responsibilities: [
        "Monitor premises and guest safety",
        "Conduct regular security rounds",
        "Control access to property",
        "Handle emergency situations",
        "Maintain security logs and reports"
      ]
    },
    {
      id: 7,
      title: "Gardener",
      department: "Maintenance",
      type: "Full-time",
      location: "Chanlakhel Retreat",
      salary: "Rs. 15,000 - 20,000",
      description: "Maintain our beautiful gardens and outdoor spaces that contribute to the peaceful retreat atmosphere.",
      requirements: [
        "Experience in gardening and landscaping",
        "Knowledge of plants and garden maintenance",
        "Physical ability for outdoor work",
        "Understanding of organic gardening preferred",
        "Reliability and attention to detail"
      ],
      responsibilities: [
        "Maintain gardens and landscaping",
        "Plant and care for flowers, trees, and vegetables",
        "Operate gardening tools and equipment",
        "Manage irrigation and plant health",
        "Keep outdoor areas clean and attractive"
      ]
    },
    {
      id: 8,
      title: "Cleaner",
      department: "Housekeeping",
      type: "Full-time",
      location: "Chanlakhel Retreat",
      salary: "Rs. 12,000 - 16,000", 
      description: "Maintain cleanliness throughout the retreat facilities to ensure a pristine environment for our guests.",
      requirements: [
        "Basic education",
        "Previous cleaning experience preferred",
        "Attention to detail",
        "Physical ability for cleaning tasks",
        "Reliable and punctual"
      ],
      responsibilities: [
        "Clean guest rooms and common areas",
        "Maintain restrooms and facilities",
        "Handle laundry and linens",
        "Dispose of waste properly",
        "Follow cleaning schedules and standards"
      ]
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Application submitted:', formData);
    alert('Thank you for your application! We will review it and contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: ''
    });
  };

  const handleJobClick = (jobId: number) => {
    setSelectedJob(selectedJob === jobId ? null : jobId);
  };

  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>, jobTitle: string) => {
    e.stopPropagation();
    setFormData({...formData, position: jobTitle});
    const applicationForm = document.getElementById('application-form');
    if (applicationForm) {
      applicationForm.scrollIntoView({behavior: 'smooth'});
    }
  };

  const benefits: Benefit[] = [
    {
      icon: Users,
      title: "Positive Environment",
      description: "Work in a peaceful, spiritual setting that promotes personal well-being and growth"
    },
    {
      icon: DollarSign,
      title: "Competitive Benefits",
      description: "Fair compensation, health benefits, and opportunities for advancement"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible scheduling and time off policies that respect your personal needs"
    },
    {
      icon: MapPin,
      title: "Great Location",
      description: "Beautiful workplace in nature with easy access to Kathmandu city"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy to-maroon text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" {...fadeInUp}>
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Be part of a meaningful mission to provide transformative hospitality experiences while 
              growing your career in Nepal's thriving wellness tourism industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-navy mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a team that values personal growth, cultural preservation, and creating meaningful experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-maroon hover:text-white transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <benefit.icon className="w-12 h-12 text-maroon group-hover:text-white mx-auto mb-4 transition-colors" />
                <h3 className="text-lg font-semibold text-navy group-hover:text-white mb-3 transition-colors">{benefit.title}</h3>
                <p className="text-gray-600 group-hover:text-gray-200 transition-colors">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-navy mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600">
              Explore opportunities to be part of our growing team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => handleJobClick(job.id)}
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-2">{job.title}</h3>
                  <p className="text-maroon font-semibold mb-2">{job.department}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location.split(',')[0]}
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-maroon font-semibold">{job.salary}</span>
                    <span className="text-navy font-medium cursor-pointer hover:text-maroon transition-colors">
                      {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                    </span>
                  </div>
                </div>

                {selectedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-200 p-6 bg-gray-50"
                  >
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Requirements:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {job.requirements.map((req, idx) => (
                            <li key={idx}>• {req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-navy mb-2">Responsibilities:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx}>• {resp}</li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={(e) => handleApplyClick(e, job.title)}
                        className="w-full bg-maroon hover:bg-red-800 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300"
                      >
                        Apply for this Position
                      </button>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-navy mb-4">Apply Now</h2>
            <p className="text-xl text-gray-600">
              Send us your application and join our team at Pure Land Hospitality
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-lg p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-2">
                  Position Applied For *
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                >
                  <option value="">Select a position</option>
                  {jobOpenings.map(job => (
                    <option key={job.id} value={job.title}>{job.title}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                Relevant Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                placeholder="Describe your relevant work experience..."
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                placeholder="Tell us why you want to work with Pure Land Hospitality..."
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Resume/CV *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-maroon transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-maroon hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Submit Application
              </button>
            </div>
          </motion.form>

          <motion.div
            className="mt-8 bg-navy text-white rounded-lg p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-golden mb-3">Application Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="font-semibold">1. Application Review</span>
                <p className="text-gray-300">We review all applications within 5-7 business days</p>
              </div>
              <div>
                <span className="font-semibold">2. Interview Process</span>
                <p className="text-gray-300">Selected candidates will be contacted for interviews</p>
              </div>
              <div>
                <span className="font-semibold">3. Final Decision</span>
                <p className="text-gray-300">Successful candidates will receive job offers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-r from-maroon to-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Questions About Careers?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact our HR team for more information about career opportunities at Pure Land Hospitality
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+9779766883351" 
                className="bg-golden hover:bg-yellow-600 text-navy px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Call HR Team
              </a>
              <a 
                href="mailto:careers@purelandhospitality.com" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Email Careers
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;