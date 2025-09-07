import { motion } from 'framer-motion';
import { Heart, Calendar, Users, Bed, Utensils, Camera, Leaf, Star } from 'lucide-react';

const Services = () => {
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
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive offerings designed to nurture your mind, body, and spirit while creating 
              unforgettable memories in Nepal's serene landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Retreat & Wellness Programs */}
      <section id="retreat" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center mb-6">
                <Heart className="w-12 h-12 text-maroon mr-4" />
                <h2 className="text-4xl font-bold text-navy">Retreat & Wellness Programs</h2>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Immerse yourself in transformative spiritual and wellness experiences designed to help you 
                find inner peace, clarity, and personal growth.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">Meditation & Mindfulness</h3>
                  <p className="text-gray-600 mb-3">
                    Daily guided meditation sessions, silent retreats, and mindfulness workshops led by 
                    experienced practitioners.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Morning and evening meditation sessions</li>
                    <li>• Walking meditation in peaceful gardens</li>
                    <li>• Personalized meditation instruction</li>
                    <li>• Mindfulness in daily activities</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">Self-Discovery Programs</h3>
                  <p className="text-gray-600 mb-3">
                    Structured programs designed to help you reconnect with your authentic self and 
                    discover your life's purpose.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Personal reflection workshops</li>
                    <li>• Journaling and creative expression</li>
                    <li>• Life coaching sessions</li>
                    <li>• Goal setting and vision planning</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-navy mb-3">Wellness Activities</h3>
                  <p className="text-gray-600 mb-3">
                    Holistic wellness practices that nurture both body and mind in harmony with nature.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Yoga classes for all levels</li>
                    <li>• Therapeutic massage sessions</li>
                    <li>• Nature walks and hiking</li>
                    <li>• Healthy organic meals</li>
                  </ul>
                </div>
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
                alt="Meditation session in peaceful setting" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Hosting */}
      <section id="events" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <div className="flex items-center justify-center mb-6">
              <Calendar className="w-12 h-12 text-maroon mr-4" />
              <h2 className="text-4xl font-bold text-navy">Event Hosting</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Create unforgettable moments for your special occasions in our serene and beautiful setting, 
              perfect for intimate gatherings and meaningful celebrations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Weddings",
                description: "Intimate ceremonies with stunning mountain views and traditional Nepalese blessings",
                features: ["Scenic outdoor venues", "Traditional ceremony arrangements", "Photography assistance", "Catering services"]
              },
              {
                icon: Star,
                title: "Bratabandha",
                description: "Sacred thread ceremony in authentic traditional setting with proper rituals",
                features: ["Traditional ritual setup", "Experienced priests", "Family accommodation", "Cultural guidance"]
              },
              {
                icon: Users,
                title: "Family Gatherings",
                description: "Perfect space for family reunions, anniversaries, and milestone celebrations",
                features: ["Private dining areas", "Accommodation packages", "Activity planning", "Flexible scheduling"]
              },
              {
                icon: Camera,
                title: "Birthday Parties",
                description: "Unique birthday celebrations surrounded by nature and peaceful ambiance",
                features: ["Customized decorations", "Outdoor activities", "Special meal arrangements", "Photo opportunities"]
              },
              {
                icon: Utensils,
                title: "Corporate Retreats",
                description: "Team building and corporate events in inspiring natural surroundings",
                features: ["Meeting facilities", "Team activities", "Wellness programs", "Catering options"]
              },
              {
                icon: Leaf,
                title: "Picnics & Day Events",
                description: "Day-long celebrations with access to gardens, hiking trails, and peaceful spaces",
                features: ["Outdoor spaces", "Picnic arrangements", "Guided activities", "Refreshment services"]
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <event.icon className="w-10 h-10 text-maroon mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {event.features.map((feature, idx) => (
                    <li key={idx}>• {feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Comfortable accommodation room" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center mb-6">
                <Bed className="w-12 h-12 text-maroon mr-4" />
                <h2 className="text-4xl font-bold text-navy">Accommodation</h2>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Rest in peaceful, comfortable rooms designed to complement your spiritual journey, 
                offering modern amenities while maintaining traditional charm.
              </p>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-navy mb-3">Room Features</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>• Comfortable beds with quality linens</div>
                    <div>• Private bathrooms with hot water</div>
                    <div>• Mountain and garden views</div>
                    <div>• Traditional Nepalese décor</div>
                    <div>• Reading areas and meditation spaces</div>
                    <div>• Complimentary Wi-Fi</div>
                  </div>
                </div>

                <div className="bg-maroon/10 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-navy mb-3">Booking Information</h3>
                  <p className="text-gray-600 mb-3">
                    Reservations can be made through email, phone, or authorized travel agencies. 
                    Advance payment is required to confirm your booking.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <span className="bg-maroon text-white px-4 py-2 rounded-lg text-sm">Email Booking</span>
                    <span className="bg-navy text-white px-4 py-2 rounded-lg text-sm">Phone Reservation</span>
                    <span className="bg-golden text-navy px-4 py-2 rounded-lg text-sm">Travel Agency</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gradient-to-r from-navy/5 to-maroon/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-navy mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your experience with our comprehensive range of complementary services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Utensils,
                title: "Organic Cuisine",
                description: "Healthy, locally-sourced meals prepared with traditional methods"
              },
              {
                icon: Camera,
                title: "Photography Services",
                description: "Professional photography for events and personal moments"
              },
              {
                icon: Users,
                title: "Cultural Experiences",
                description: "Traditional music, dance, and cultural learning opportunities"
              },
              {
                icon: Leaf,
                title: "Nature Activities",
                description: "Guided hikes, bird watching, and outdoor meditation"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <service.icon className="w-12 h-12 text-maroon mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-maroon to-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Pure Land?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Whether you're seeking spiritual renewal, planning a special event, or looking for a peaceful retreat, 
              we're here to create an unforgettable experience tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/booking" 
                className="bg-golden hover:bg-yellow-600 text-navy px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Your Stay
              </a>
              <a 
                href="/contact" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Plan Your Event
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;