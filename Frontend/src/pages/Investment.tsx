import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users, Globe, Award, Shield, Target, BarChart, Leaf, Heart } from 'lucide-react';

const Investment = () => {
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
            <h1 className="text-5xl font-bold mb-6">Investment Opportunities</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Join us in developing Nepal's cultural and wellness tourism sector while generating 
              sustainable returns through our growing hospitality business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Investment Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-navy mb-6">Why Invest in Pure Land Hospitality?</h2>
              <p className="text-xl text-gray-700 mb-6">
                Nepal's wellness tourism market is experiencing unprecedented growth, driven by increasing 
                global interest in spiritual wellness, mindfulness practices, and authentic cultural experiences.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-maroon rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">Growing Market Demand</h3>
                    <p className="text-gray-600">Wellness tourism in Nepal has grown by 40% annually, with increasing international recognition.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-maroon rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">Strategic Location</h3>
                    <p className="text-gray-600">Prime location in Kathmandu valley with easy access and stunning natural surroundings.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-maroon rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">Diversified Revenue Streams</h3>
                    <p className="text-gray-600">Multiple income sources from accommodation, events, wellness programs, and cultural experiences.</p>
                  </div>
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
                src="https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Business growth and investment" 
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Potential */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-navy mb-4">Market Potential</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The wellness tourism sector represents one of the fastest-growing segments of the global tourism industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Market Size",
                value: "$639 Billion",
                description: "Global wellness tourism market value in 2023"
              },
              {
                icon: TrendingUp,
                title: "Annual Growth",
                value: "7.1%",
                description: "Compound annual growth rate (CAGR) through 2030"
              },
              {
                icon: Users,
                title: "Tourist Arrivals",
                value: "1.2M+",
                description: "Annual visitors to Nepal (pre-pandemic levels)"
              },
              {
                icon: BarChart,
                title: "Nepal Tourism Growth",
                value: "15%",
                description: "Expected annual growth in wellness tourism"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <stat.icon className="w-12 h-12 text-maroon mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-navy mb-2">{stat.value}</h3>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{stat.title}</h4>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-navy mb-4">Investment Details</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible investment opportunities designed to accommodate different investor profiles and goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Minimum Investment */}
            <motion.div
              className="bg-gradient-to-br from-maroon to-red-800 text-white rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <DollarSign className="w-16 h-16 text-golden mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Minimum Investment</h3>
              <div className="text-4xl font-bold text-golden mb-4">5,000</div>
              <p className="text-xl mb-4">Share Units</p>
              <p className="text-gray-200 mb-6">
                Accessible entry point for individual investors looking to participate in Nepal's growing tourism sector.
              </p>
              <ul className="text-sm text-gray-200 space-y-2 text-left">
                <li>• Quarterly dividend distributions</li>
                <li>• Voting rights in major decisions</li>
                <li>• Access to investor meetings</li>
                <li>• Annual financial reports</li>
              </ul>
            </motion.div>

            {/* Returns & Benefits */}
            <motion.div
              className="bg-gradient-to-br from-navy to-blue-800 text-white rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Target className="w-16 h-16 text-golden mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Expected Returns</h3>
              <div className="text-4xl font-bold text-golden mb-4">12-15%</div>
              <p className="text-xl mb-4">Annual ROI</p>
              <p className="text-gray-200 mb-6">
                Projected returns based on market analysis and business growth projections.
              </p>
              <ul className="text-sm text-gray-200 space-y-2 text-left">
                <li>• Capital appreciation potential</li>
                <li>• Regular income from operations</li>
                <li>• Tax benefits on tourism investments</li>
                <li>• Portfolio diversification</li>
              </ul>
            </motion.div>

            {/* Investment Security */}
            <motion.div
              className="bg-gradient-to-br from-golden to-yellow-600 text-navy rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Shield className="w-16 h-16 text-navy mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Investment Security</h3>
              <div className="text-4xl font-bold mb-4">AAA</div>
              <p className="text-xl mb-4">Security Rating</p>
              <p className="text-navy/80 mb-6">
                Registered with Nepal's Department of Tourism and Industry with full legal compliance.
              </p>
              <ul className="text-sm text-navy/80 space-y-2 text-left">
                <li>• Government-registered company</li>
                <li>• Transparent financial reporting</li>
                <li>• Professional management team</li>
                <li>• Clear exit strategies</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cultural & Economic Impact */}
      <section className="py-16 bg-gradient-to-r from-navy/5 to-maroon/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-navy mb-4">Cultural & Economic Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your investment contributes to preserving Nepal's cultural heritage while creating sustainable economic opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Job Creation",
                description: "Direct employment for 50+ local residents in hospitality, maintenance, and cultural programs"
              },
              {
                icon: Award,
                title: "Cultural Preservation",
                description: "Supporting traditional arts, crafts, and spiritual practices through authentic cultural experiences"
              },
              {
                icon: Globe,
                title: "Community Development",
                description: "Infrastructure improvements and educational programs benefiting the entire Chanlakhel community"
              },
              {
                icon: Leaf,
                title: "Sustainable Tourism",
                description: "Eco-friendly practices that protect Nepal's natural environment for future generations"
              },
              {
                icon: TrendingUp,
                title: "Economic Growth",
                description: "Contributing to Nepal's GDP through foreign exchange earnings and tax contributions"
              },
              {
                icon: Heart,
                title: "Social Impact",
                description: "Programs supporting local education, healthcare, and women's empowerment initiatives"
              }
            ].map((impact, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <impact.icon className="w-10 h-10 text-maroon mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-3">{impact.title}</h3>
                <p className="text-gray-600">{impact.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Invest */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12" {...fadeInUp}>
            <h2 className="text-4xl font-bold text-navy mb-4">How to Invest</h2>
            <p className="text-xl text-gray-600">
              Simple steps to become a shareholder in Pure Land Hospitality
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "Contact us to discuss your investment goals and learn more about our opportunities",
                action: "Schedule a meeting with our investment team"
              },
              {
                step: "2", 
                title: "Due Diligence",
                description: "Review our business plan, financial projections, and legal documentation",
                action: "Receive comprehensive investment materials"
              },
              {
                step: "3",
                title: "Investment Decision",
                description: "Choose your investment level and complete the subscription agreement",
                action: "Minimum 5,000 share units to start"
              },
              {
                step: "4",
                title: "Share Allocation",
                description: "Complete payment and receive your share certificates and investor documentation",
                action: "Welcome to the Pure Land family!"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-8 flex items-start space-x-6"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-12 h-12 bg-maroon rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">{step.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-navy mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  <p className="text-maroon font-medium">{step.action}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-maroon to-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Ready to Invest in Nepal's Future?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Join us in building a sustainable, profitable business that makes a positive impact on 
              Nepal's cultural tourism industry while generating strong returns for our investors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-golden hover:bg-yellow-600 text-navy px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule Consultation
              </a>
              <a 
                href="mailto:investment@purelandhospitality.com" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-navy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                Request Information
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Investment;