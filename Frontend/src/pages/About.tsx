import { motion } from 'framer-motion';
import { MapPin, Heart, Users, Award } from 'lucide-react';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy to-maroon text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center" {...fadeInUp}>
            <h1 className="text-5xl font-bold mb-6">About Pure Land Hospitality</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              A sanctuary where ancient wisdom meets modern comfort, offering transformative experiences 
              in the heart of Nepal's spiritual landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-navy mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Pure Land Hospitality Pvt. Ltd. was founded with a vision to create a unique sanctuary 
                  where guests can experience the profound peace and wisdom of Buddhist philosophy while 
                  enjoying modern comfort and authentic Nepalese hospitality.
                </p>
                <p>
                  Located in the serene surroundings of Chanlakhel, Dakshinkali Municipality, our retreat 
                  center offers a perfect escape from the hustle and bustle of modern life. Here, ancient 
                  traditions meet contemporary amenities to provide an unparalleled experience of spiritual 
                  renewal and cultural immersion.
                </p>
                <p>
                  We believe that true hospitality goes beyond providing accommodation—it's about creating 
                  meaningful connections, fostering personal growth, and offering a space where every guest 
                  can find their own path to peace and enlightenment.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Buddhist temple in mountains" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-navy mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by Buddhist principles and Nepalese traditions, we uphold values that create 
              meaningful experiences for all our guests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Compassion",
                description: "We approach every interaction with genuine care and understanding, creating a welcoming environment for all."
              },
              {
                icon: Users,
                title: "Community",
                description: "Building meaningful connections between guests, staff, and the local community for mutual growth and understanding."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "Commitment to the highest standards in hospitality, ensuring every detail contributes to an exceptional experience."
              },
              {
                icon: MapPin,
                title: "Authenticity",
                description: "Preserving and sharing the rich cultural heritage of Nepal while embracing sustainable practices."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <value.icon className="w-12 h-12 text-maroon mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-navy mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategically located to offer both tranquil retreat experiences and convenient access to Kathmandu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Retreat Location */}
            <motion.div
              className="bg-gradient-to-br from-maroon to-red-800 text-white rounded-lg p-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-golden">Retreat Center</h3>
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-golden mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Chanlakhel, Dakshinkali Municipality</p>
                  <p>Ward No. 1, Kathmandu, Nepal</p>
                </div>
              </div>
              <p className="text-gray-200 mb-6">
                Nestled in the peaceful hills of Dakshinkali, our retreat center offers stunning views of the 
                Kathmandu valley and provides the perfect setting for meditation, wellness programs, and 
                spiritual renewal away from urban distractions.
              </p>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-golden mb-2">Features:</h4>
                <ul className="text-sm text-gray-200 space-y-1">
                  <li>• Meditation halls and yoga spaces</li>
                  <li>• Comfortable guest accommodations</li>
                  <li>• Organic garden and peaceful grounds</li>
                  <li>• Traditional architecture with modern amenities</li>
                </ul>
              </div>
            </motion.div>

            {/* Contact Office */}
            <motion.div
              className="bg-gradient-to-br from-navy to-blue-800 text-white rounded-lg p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-golden">Contact Office</h3>
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-golden mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Maharajgunj Chhapath, Ganeshbasti</p>
                  <p>Kathmandu, Ward No – 4</p>
                </div>
              </div>
              <p className="text-gray-200 mb-6">
                Our city office provides convenient access for bookings, consultations, and business inquiries. 
                Located in the heart of Kathmandu, we're easily accessible for meetings with potential guests, 
                investors, and partners.
              </p>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold text-golden mb-2">Services:</h4>
                <ul className="text-sm text-gray-200 space-y-1">
                  <li>• Booking and reservation assistance</li>
                  <li>• Investment consultations</li>
                  <li>• Event planning services</li>
                  <li>• Corporate partnerships</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-r from-golden/10 to-maroon/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold text-navy mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              "To provide a transformative sanctuary where guests can reconnect with their inner peace, 
              experience authentic Nepalese culture, and find renewal through the wisdom of ancient traditions 
              combined with modern comfort and exceptional hospitality."
            </p>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <p className="text-lg text-gray-600 italic">
                "In the stillness of Pure Land, discover the richness of your own spirit and the beauty 
                of Nepal's timeless wisdom."
              </p>
              <p className="text-maroon font-semibold mt-4">- Pure Land Hospitality Team</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;