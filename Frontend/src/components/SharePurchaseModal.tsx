import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Phone, MapPin, Hash, DollarSign, Calendar, CreditCard, TrendingUp } from 'lucide-react';
import emailjs from 'emailjs-com';

interface SharePurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SharePurchaseModal: React.FC<SharePurchaseModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    address: '',
    citizenshipNumber: '',
    issuingDistrict: '',
    numberOfShares: '',
    amountPaid: '',
    paymentDate: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_nrpjlk2';
      const templateId = 'template_wrhjejc'; // Replace with your actual template ID
      const publicKey = '6uTaZNVAqe2im1A5W'; // Replace with your EmailJS public key

      // Prepare template parameters
      const templateParams = {
        to_email: 'dharmaideal@gmail.com',
        from_name: formData.fullName,
        from_email: formData.email,
        subject: 'New Share Purchase Application - Pure Land Hospitality',
        
        // Shareholder Information
        full_name: formData.fullName,
        email: formData.email,
        contact_number: formData.contactNumber,
        address: formData.address,
        citizenship_number: formData.citizenshipNumber,
        issuing_district: formData.issuingDistrict,
        
        // Share Purchase Details
        number_of_shares: formData.numberOfShares,
        amount_paid: formData.amountPaid,
        payment_date: formData.paymentDate,
        
        // Additional Info
        submission_date: new Date().toLocaleDateString(),
        submission_time: new Date().toLocaleTimeString(),
        total_investment: `NPR ${formData.amountPaid}`,
        shares_quantity: `${formData.numberOfShares} shares`
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        alert('Thank you for your interest! Your share purchase application has been submitted successfully. We will process your request and contact you within 24 hours.');
        console.log('Email sent successfully:', response);
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          contactNumber: '',
          address: '',
          citizenshipNumber: '',
          issuingDistrict: '',
          numberOfShares: '',
          amountPaid: '',
          paymentDate: ''
        });
        
        onClose();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error submitting your application. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-maroon to-navy text-white p-6 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="w-8 h-8 text-golden" />
                  <div>
                    <h2 className="text-2xl font-bold">Share Purchase Application</h2>
                    <p className="text-gray-200">Invest in Pure Land Hospitality's Future</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="text-white hover:text-golden transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Shareholder Information Section */}
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-4">
                  <User className="w-5 h-5 text-maroon" />
                  <h3 className="text-xl font-semibold text-navy">Shareholder Information</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                        placeholder="Enter full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                          placeholder="Enter email"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          id="contactNumber"
                          name="contactNumber"
                          value={formData.contactNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                          placeholder="Enter contact number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="citizenshipNumber" className="block text-sm font-medium text-gray-700 mb-2">
                        Citizenship Number *
                      </label>
                      <div className="relative">
                        <Hash className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="citizenshipNumber"
                          name="citizenshipNumber"
                          value={formData.citizenshipNumber}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                          placeholder="Enter citizenship number"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="issuingDistrict" className="block text-sm font-medium text-gray-700 mb-2">
                        Issuing District *
                      </label>
                      <input
                        type="text"
                        id="issuingDistrict"
                        name="issuingDistrict"
                        value={formData.issuingDistrict}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                        placeholder="Enter issuing district"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent transition-all resize-none"
                        placeholder="Enter complete address"
                      />
                    </div>
                  </div>

                  {/* Share Purchase Details Section */}
                  <div className="border-t pt-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <TrendingUp className="w-5 h-5 text-maroon" />
                      <h3 className="text-xl font-semibold text-navy">Share Purchase Details</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="numberOfShares" className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Shares *
                        </label>
                        <div className="relative">
                          <Hash className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="number"
                            id="numberOfShares"
                            name="numberOfShares"
                            value={formData.numberOfShares}
                            onChange={handleInputChange}
                            required
                            min="5000"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                            placeholder="Minimum 5,000"
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Minimum purchase: 5,000 shares</p>
                      </div>

                      <div>
                        <label htmlFor="amountPaid" className="block text-sm font-medium text-gray-700 mb-2">
                          Amount Paid (NPR) *
                        </label>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="number"
                            id="amountPaid"
                            name="amountPaid"
                            value={formData.amountPaid}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                            placeholder="Enter amount paid"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="paymentDate" className="block text-sm font-medium text-gray-700 mb-2">
                          Payment Date *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <input
                            type="date"
                            id="paymentDate"
                            name="paymentDate"
                            value={formData.paymentDate}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Instructions Section */}
                  <div className="border-t pt-6">
                    <div className="flex items-center space-x-2 mb-4">
                      <CreditCard className="w-5 h-5 text-maroon" />
                      <h3 className="text-xl font-semibold text-navy">Payment Instructions</h3>
                    </div>

                    <div className="bg-gradient-to-r from-navy/5 to-maroon/5 rounded-lg p-6">
                      <p className="text-gray-700 mb-4 font-medium">
                        Please transfer the specified amount to the following bank account to complete your share purchase:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div><span className="font-semibold text-navy">Company Name:</span>  Pure Land Hospitality Pvt. Ltd.</div>
                          <div><span className="font-semibold text-navy">Bank Name:</span> NABIL BANK</div>
                          <div><span className="font-semibold text-navy">SWIFT:</span> NARBNPKA</div>
                        </div>
                        <div className="space-y-2">
                          <div><span className="font-semibold text-navy">Account No:</span> 15401017500375</div>
                          <div><span className="font-semibold text-navy">Branch:</span> Thali Branch, Kathmandu, Nepal</div>
                        </div>
                      </div>

                      <div className="mt-4 p-4 bg-golden/10 rounded-lg border border-golden/20">
                        <p className="text-sm text-gray-700">
                          <strong>Note:</strong> After making the payment, please keep the transaction receipt and submit this form. 
                          Our team will verify the payment and process your share allocation within 2-3 business days.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end space-x-4 pt-6">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-300"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-gradient-to-r from-maroon to-navy text-white px-8 py-3 rounded-lg font-semibold hover:from-red-800 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      <TrendingUp size={18} />
                      <span>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SharePurchaseModal;