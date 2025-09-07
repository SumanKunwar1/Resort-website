import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Bed, TrendingUp, Star, Heart, Leaf } from 'lucide-react';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dihev9qxc/image/upload/v1757232462/a-photograph-of-a-tranquil-wellness-reso_TOcnlSzDRjOPveTWi3LTRg_wsKD-7gZRyqBHINAPQG6vA_bdrgt9.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Your Sanctuary for
            <span className="text-golden block mt-2">Peace & Wellness</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover tranquility and spiritual awakening in the heart of Nepal
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/contact" className="bg-maroon hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Schedule Consulatation
            </Link>
            <Link to="/investment" className="bg-transparent border-2 border-white hover:bg-white hover:text-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Invest With Us
            </Link>
            <Link to="/services" className="bg-golden hover:bg-yellow-600 text-navy px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Plan an Event
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-navy mb-4">Why Choose Pure Land?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of spiritual tranquility, modern comfort, and authentic Nepalese hospitality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Spiritual Wellness",
                description: "Guided meditation, mindfulness programs, and self-discovery journeys in a peaceful environment"
              },
              {
                icon: Leaf,
                title: "Natural Serenity", 
                description: "Surrounded by pristine nature and traditional architecture that harmonizes with the landscape"
              },
              {
                icon: Star,
                title: "Premium Hospitality",
                description: "Modern amenities combined with traditional Nepalese warmth and authentic cultural experiences"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <feature.icon className="w-16 h-16 text-maroon mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-navy mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive offerings for your spiritual and celebration needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Retreat Programs",
                description: "Meditation and wellness programs",
                link: "/services#retreat"
              },
              {
                icon: Calendar,
                title: "Event Hosting", 
                description: "Weddings, ceremonies & celebrations",
                link: "/services#events"
              },
              {
                icon: Bed,
                title: "Accommodation",
                description: "Peaceful rooms with modern amenities",
                link: "/booking"
              },
              {
                icon: TrendingUp,
                title: "Investment",
                description: "Cultural & wellness tourism opportunities",
                link: "/investment"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-maroon hover:text-white transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={service.link}>
                  <service.icon className="w-12 h-12 text-maroon group-hover:text-white mx-auto mb-4 transition-colors" />
                  <h3 className="text-lg font-semibold text-navy group-hover:text-white mb-2 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-200 transition-colors">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Highlight */}
      <section className="py-16 bg-gradient-to-r from-navy to-maroon text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold mb-6">Perfect Location in Kathmandu</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-golden mb-2">Retreat Center</h3>
                  <p className="text-gray-200">Chanlakhel, Dakshinkali Municipality – Ward No. 1, Kathmandu</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-golden mb-2">Contact Office</h3>
                  <p className="text-gray-200">Maharajgunj Chhapath, Ganeshbasti, Kathmandu, Ward No – 4</p>
                </div>
                <div className="pt-4">
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center bg-golden hover:bg-yellow-600 text-navy px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Get Directions
                  </Link>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Beautiful view of Kathmandu valley" 
                  className="w-full h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-navy mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you seek spiritual renewal, planning a special event, or looking for investment opportunities, 
              Pure Land Hospitality is here to serve you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/booking" 
                className="bg-maroon hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Your Experience
              </Link>
              <Link 
                to="/contact" 
                className="bg-navy hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;