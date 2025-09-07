
import { motion } from 'framer-motion';
import { Heart, Phone, Mail, MapPin, Calendar } from 'lucide-react';

const Booking = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy to-maroon text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <div className="mb-8">
              <Heart className="w-16 h-16 text-golden mx-auto mb-6" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-golden">
              Namaste
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-8 text-gray-100">
              Welcome to Pure Land Hospitality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center space-y-8"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                We Are Preparing Something Special
              </h2>
              
              <div className="bg-white rounded-2xl shadow-xl p-12 border border-golden border-opacity-20">
                <motion.div variants={fadeInUp} className="space-y-8">
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                    Thank you from the depths of our hearts for your beautiful interest in 
                    <span className="text-maroon font-semibold"> Pure Land Hospitality</span>. 
                    Your presence here fills us with gratitude and joy.
                  </p>
                  
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    We are currently nurturing and crafting an extraordinary retreat experience 
                    in the serene landscapes of Chanlakhel, where ancient wisdom meets modern comfort. 
                    Like a lotus that takes time to bloom into its full beauty, we are thoughtfully 
                    preparing every detail to ensure your journey with us becomes truly transformative.
                  </p>
                  
                  <div className="bg-gradient-to-r from-golden to-yellow-400 rounded-xl p-8 text-navy">
                    <p className="text-lg md:text-xl font-medium">
                      We would be deeply honored to welcome you into our spiritual sanctuary 
                      once we begin our sacred mission of service. Your peace and comfort 
                      are at the heart of everything we are creating.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Coming Soon Features */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-maroon bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-maroon" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">Mindful Hospitality</h3>
                <p className="text-gray-600">
                  Every detail crafted with love and intention to nurture your spiritual well-being
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-golden bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-golden" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">Sacred Location</h3>
                <p className="text-gray-600">
                  Nestled in nature's embrace, where tranquility and beauty converge
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-navy bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-navy" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">Transformative Experiences</h3>
                <p className="text-gray-600">
                  Thoughtfully curated programs for inner peace and cultural immersion
                </p>
              </div>
            </motion.div>

            {/* Stay Connected */}
            <motion.div variants={fadeInUp} className="mt-16">
              <div className="bg-gradient-to-br from-navy to-maroon text-white rounded-2xl p-12">
                <h3 className="text-3xl font-bold text-golden mb-8">Stay Connected</h3>
                <p className="text-xl text-gray-200 mb-8">
                  We would love to keep you informed about our journey and notify you 
                  when we're ready to welcome you home.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center space-y-3">
                    <Phone className="w-8 h-8 text-golden" />
                    <div>
                      <p className="font-semibold text-golden">Call Us</p>
                      <p className="text-gray-200">+977 9766883351</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-3">
                    <Mail className="w-8 h-8 text-golden" />
                    <div>
                      <p className="font-semibold text-golden">Email</p>
                      <p className="text-gray-200">hello@purelandhospitality.com</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center space-y-3">
                    <MapPin className="w-8 h-8 text-golden" />
                    <div>
                      <p className="font-semibold text-golden">Location</p>
                      <p className="text-gray-200">Chanlakhel, Kathmandu</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Gratitude Message */}
            <motion.div variants={fadeInUp} className="mt-12">
              <div className="bg-white rounded-xl p-8 border border-golden border-opacity-30">
                <p className="text-lg text-gray-700 italic">
                  "In the meantime, may your path be filled with peace, your heart with joy, 
                  and your spirit with the knowing that something beautiful awaits you here at Pure Land."
                </p>
                <p className="text-maroon font-semibold mt-4">
                  — With love and gratitude, The Pure Land Family
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Booking;