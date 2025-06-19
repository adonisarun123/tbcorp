import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

const DigitalRevenueStrategies = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const digitalStrategies = [
    {
      id: 'travel-saas',
      title: 'Travel SaaS Solutions',
      icon: '💻',
      priority: 'PRIMARY OPPORTUNITY',
      revenue: '₹75-120L annually',
      margin: '80-85%',
      description: 'Software-as-a-Service solutions for other travel businesses, leveraging operational expertise',
      details: [
        'Corporate Travel Management System: ₹10,000-50,000/month per client',
        'Event Planning & Booking Platform: ₹15,000-75,000/month',
        'Vendor Management Portal: ₹8,000-30,000/month',
        'Travel Analytics Dashboard: ₹5,000-25,000/month'
      ]
    },
    {
      id: 'content-monetization',
      title: 'Content Monetization & Digital Media',
      icon: '📝',
      priority: 'IMMEDIATE OPPORTUNITY',
      revenue: '₹25-60L annually',
      margin: '75-80%',
      description: 'Multiple digital content revenue streams leveraging travel expertise and client insights',
      details: [
        'Travel Blog & SEO: Destination guides, corporate travel tips',
        'Affiliate Marketing: 2-25% commission on travel product recommendations',
        'Sponsored Content: ₹25,000-1,00,000 per branded article',
        'Premium Newsletter: ₹2,000-5,000/month subscription'
      ]
    },
    {
      id: 'online-courses',
      title: 'Online Course & Certification Platform',
      icon: '🎓',
      priority: 'KNOWLEDGE MONETIZATION',
      revenue: '₹25-50L annually',
      margin: '70-75%',
      description: 'Comprehensive online education platform leveraging travel and event management expertise',
      details: [
        'Corporate Travel Management Certification: ₹25,000-40,000',
        'Event Planning Professional Course: ₹15,000-25,000',
        'Travel Technology Mastery: ₹8,000-15,000',
        'Crisis Management in Travel: ₹12,000-20,000'
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Digital Revenue Strategies - Trebound Strategic Transformation</title>
        <meta name="description" content="Technology-enabled solutions that create scalable revenue streams without significant capital investment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Navigation */}
        <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-white font-bold text-xl">
                ← Back to Strategy Suite
              </Link>
              <div className="text-white/80">Digital Revenue Strategies</div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center"
            >
              <motion.div
                variants={fadeInUp}
                className="text-6xl mb-6"
              >
                💻
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Digital Revenue
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
                  Strategies
                </span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto"
              >
                Technology-enabled solutions that create scalable revenue streams without significant capital investment
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">₹280-640L</div>
                  <div className="text-blue-200">Annual Revenue Potential</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">75-85%</div>
                  <div className="text-blue-200">Blended Margin</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-400 mb-2">₹10-17L</div>
                  <div className="text-blue-200">Total Investment</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Digital Strategies Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Digital Strategy Portfolio
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Six key digital revenue streams leveraging internal development capabilities
              </p>
            </motion.div>

            <div className="space-y-8">
              {digitalStrategies.map((strategy, index) => (
                <motion.div
                  key={strategy.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-gradient-to-r from-slate-50 to-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleAccordion(strategy.id)}
                    className="w-full p-8 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="text-5xl">{strategy.icon}</div>
                      <div>
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="text-2xl font-bold text-slate-800">{strategy.title}</h3>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-semibold">
                            {strategy.priority}
                          </span>
                        </div>
                        <p className="text-slate-600 mb-3">{strategy.description}</p>
                        <div className="flex space-x-6">
                          <div className="text-green-600 font-bold">{strategy.revenue}</div>
                          <div className="text-blue-600 font-bold">{strategy.margin} margin</div>
                        </div>
                      </div>
                    </div>
                    <div className={`transform transition-transform duration-300 ${
                      activeAccordion === strategy.id ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {activeAccordion === strategy.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-8"
                    >
                      <div className="bg-slate-50 rounded-lg p-6">
                        <h4 className="font-bold text-slate-800 mb-4">Revenue Streams:</h4>
                        <ul className="space-y-2">
                          {strategy.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-slate-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Summary */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-white mb-8"
              >
                Financial Summary & Projections
              </motion.h2>
              
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
              >
                {[
                  { label: 'Year 1 Digital Revenue', value: '₹280-640L', desc: 'Combined portfolio potential' },
                  { label: 'Blended Margin', value: '75-85%', desc: 'High-margin digital products' },
                  { label: 'Total Investment', value: '₹10-17L', desc: 'Staged deployment' },
                  { label: 'Payback Period', value: '2-4 months', desc: 'Rapid return on investment' }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-blue-200 font-semibold mb-1">{metric.label}</div>
                    <div className="text-blue-300 text-sm">{metric.desc}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/implementation-strategy">
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    View Implementation Strategy
                  </button>
                </Link>
                <Link href="/">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                    Back to Strategy Suite
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Digital Revenue Strategies</h3>
                <p className="text-gray-300 mb-4">
                  Transforming Trebound through scalable technology solutions and digital innovation.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Key Strategies</h4>
                <ul className="space-y-2">
                  <li className="text-gray-300">Travel SaaS Solutions</li>
                  <li className="text-gray-300">Content Monetization</li>
                  <li className="text-gray-300">Online Courses</li>
                  <li className="text-gray-300">Data Intelligence</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Financial Highlights</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Revenue Potential: ₹280-640L</p>
                  <p>Margins: 75-85%</p>
                  <p>Investment: ₹10-17L</p>
                  <p>Timeline: 12 months</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Trebound Digital Revenue Strategies. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default DigitalRevenueStrategies; 