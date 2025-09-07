import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Message sent:', formData);
    alert('Thank you for your message! We will get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const faqs: FAQ[] = [
    {
      question: "How do I make a reservation?",
      answer: "You can make reservations through our booking page, by calling us, or sending an email. Advance payment is required to confirm your booking."
    },
    {
      question: "What is included in the retreat programs?",
      answer: "Our retreat programs include accommodation, meals, guided meditation sessions, yoga classes, and access to all facilities. Specific inclusions vary by program."
    },
    {
      question: "Do you provide transportation from Kathmandu?",
      answer: "We can arrange transportation from Kathmandu airport or city center for an additional fee. Please request this when making your reservation."
    },
    {
      question: "What should I bring for a retreat?",
      answer: "We recommend comfortable clothing for meditation and yoga, personal toiletries, and any specific items for your spiritual practice. We provide linens and basic amenities."
    },
    {
      question: "Can you accommodate special dietary requirements?",
      answer: "Yes, we can accommodate vegetarian, vegan, and other dietary requirements with advance notice. Please inform us when making your booking."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Free cancellation up to 7 days before arrival, 50% refund for cancellations 3-7 days prior, no refund within 3 days. Weather-related cancellations are considered case by case."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy to-maroon text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" {...fadeInUp}>
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Get in touch with us to plan your spiritual retreat, book accommodations, 
              or learn more about our investment opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6">Get In Touch</h2>
                <p className="text-gray-600 text-lg mb-8">
                  We're here to help you plan your perfect retreat experience. 
                  Whether you have questions about our services, need assistance with booking, 
                  or want to explore investment opportunities, our team is ready to assist you.
                </p>
              </div>

              {/* Retreat Location */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-maroon rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2">Retreat Center</h3>
                    <p className="text-gray-600 mb-2">
                      Chanlakhel, Dakshinkali Municipality<br />
                      Ward No. 1, Kathmandu, Nepal
                    </p>
                    <p className="text-sm text-gray-500">
                      Our peaceful retreat center surrounded by nature
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Office */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2">Contact Office</h3>
                    <p className="text-gray-600 mb-2">
                      Maharajgunj Chhapath, Ganeshbasti<br />
                      Kathmandu, Ward No — 4
                    </p>
                    <p className="text-sm text-gray-500">
                      Our city office for bookings and consultations
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-golden rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-navy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2">Phone & WhatsApp</h3>
                    <p className="text-gray-600 mb-1">
                      <a href="tel:+9779766883351" className="hover:text-maroon transition-colors">
                        +977 9766883351
                      </a>
                    </p>
                    <p className="text-gray-600 mb-2">
                      <a href="tel:+9779767222801" className="hover:text-maroon transition-colors">
                        +977 9767222801
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">
                      Available for calls and WhatsApp messages
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-maroon rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2">Email</h3>
                    <p className="text-gray-600 mb-1">
                      <a href="mailto:info@purelandhospitality.com" className="hover:text-maroon transition-colors">
                        info@purelandhospitality.com
                      </a>
                    </p>
                    <p className="text-gray-600 mb-1">
                      <a href="mailto:booking@purelandhospitality.com" className="hover:text-maroon transition-colors">
                        booking@purelandhospitality.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">
                      We respond to all emails within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy mb-2">Contact Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 5:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Nepal Standard Time (NST)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-navy mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Room Booking & Reservations</option>
                      <option value="retreat">Retreat Programs & Wellness</option>
                      <option value="events">Event Planning & Hosting</option>
                      <option value="investment">Investment Opportunities</option>
                      <option value="careers">Career Opportunities</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-maroon focus:border-transparent transition-all resize-none"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-maroon hover:bg-red-800 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-4 text-gray-600">
                    <MessageSquare className="w-5 h-5" />
                    <span className="text-sm">
                      Prefer instant messaging? Contact us via WhatsApp at{' '}
                      <a href="https://wa.me/9779766883351" className="text-maroon hover:underline">
                        +977 9766883351
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-navy mb-4">Our Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find us nestled in the peaceful hills of Dakshinkali, just a short drive from Kathmandu city center
            </p>
          </motion.div>

          <motion.div
            className="bg-gray-200 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Placeholder for actual map integration */}
            <div className="aspect-w-16 aspect-h-9 h-96 flex items-center justify-center bg-gradient-to-r from-navy/10 to-maroon/10">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-maroon mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-navy mb-2">Interactive Map</h3>
                <p className="text-gray-600 mb-4">
                  Chanlakhel, Dakshinkali Municipality, Ward No. 1, Kathmandu, Nepal
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-maroon hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-navy mb-2">From Kathmandu Airport</h3>
              <p className="text-gray-600">45 minutes by taxi</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-navy mb-2">From City Center</h3>
              <p className="text-gray-600">30 minutes by car</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-navy mb-2">Public Transport</h3>
              <p className="text-gray-600">Bus to Dakshinkali + 10 min walk</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about Pure Land Hospitality
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-semibold text-navy mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;