import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HybridBusinessModel = () => {
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

  const businessTiers = [
    {
      id: 'tier-1',
      title: 'Tier 1: Foundation Layer',
      subtitle: 'Strategic Hotel Bookings',
      icon: '🏨',
      role: 'Client Acquisition Engine & Relationship Builder',
      margin: '8-12%',
      value: '₹8-25 lakhs client lifetime value',
      color: 'from-blue-500 to-cyan-600',
      details: [
        'Improved margins from current 3% to 8-12%',
        'Strategic value as door opener for high-margin services',
        'Client lifetime value of ₹8-25 lakhs over 3-5 years',
        'Foundation for comprehensive travel solutions'
      ]
    },
    {
      id: 'tier-2',
      title: 'Tier 2: Service Layer',
      subtitle: 'High-Margin Professional Services',
      icon: '🎯',
      role: 'Primary Profit Generator',
      margin: '45-65%',
      value: '₹200-400L annually',
      color: 'from-green-500 to-emerald-600',
      details: [
        'Travel consulting, DMC, wellness retreats, training',
        'Primary profit generator with 45-65% margins',
        'Revenue potential of ₹200-400 lakhs annually',
        'Service portfolio expansion opportunities'
      ]
    },
    {
      id: 'tier-3',
      title: 'Tier 3: Digital Layer',
      subtitle: 'Scalable Technology Solutions',
      icon: '💻',
      role: 'Growth Multiplier & Competitive Advantage',
      margin: '75-85%',
      value: '₹280-640L annually',
      color: 'from-purple-500 to-violet-600',
      details: [
        'SaaS platforms, content, marketplace, APIs',
        'Highest margin tier at 75-85%',
        'Revenue potential of ₹280-640 lakhs annually',
        'Scalable technology solutions for competitive advantage'
      ]
    }
  ];

  const cascadeModel = [
    {
      stage: 'Hotel Booking Client',
      margin: '3% margin',
      description: 'Traditional booking service as entry point',
      arrow: true
    },
    {
      stage: 'Travel Consulting Service',
      margin: '40-60% margin',
      description: 'Strategic transition to high-value consulting',
      arrow: true
    },
    {
      stage: 'Comprehensive Travel Solutions',
      margin: '45-65% margin',
      description: 'Full-service travel management partnership',
      arrow: true
    },
    {
      stage: 'SaaS Platform Subscription',
      margin: '75-85% margin',
      description: 'Digital platform for ongoing revenue',
      arrow: false
    }
  ];

  return (
    <>
      <Head>
        <title>Hybrid Business Model Framework - Trebound Strategic Transformation</title>
        <meta name="description" content="Transform from traditional travel booking into a comprehensive Corporate Travel Solutions Ecosystem" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
        {/* Navigation */}
        <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-white font-bold text-xl">
                ← Back to Strategy Suite
              </Link>
              <div className="text-white/80">Hybrid Business Model Framework</div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-500/20"></div>
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
                🏗️
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Hybrid Business
                <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent block">
                  Model Framework
                </span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto"
              >
                Transform from traditional travel booking into a comprehensive Corporate Travel Solutions Ecosystem through the Revenue Cascade Model
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">₹500L+</div>
                  <div className="text-green-200">Annual Revenue Potential</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">45-65%</div>
                  <div className="text-green-200">Blended Margins</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-400 mb-2">₹30L</div>
                  <div className="text-green-200">New Break-even Point</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Three-Tier Architecture */}
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
                Three-Tier Revenue Structure
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Systematic transformation from low-margin bookings to high-value comprehensive solutions
              </p>
            </motion.div>

            <div className="space-y-8">
              {businessTiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={`bg-gradient-to-r ${tier.color} rounded-2xl shadow-xl overflow-hidden`}
                >
                  <button
                    onClick={() => toggleAccordion(tier.id)}
                    className="w-full p-8 text-left flex items-center justify-between hover:bg-black/5 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="text-5xl">{tier.icon}</div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{tier.title}</h3>
                        <p className="text-white/90 text-lg mb-3">{tier.subtitle}</p>
                        <div className="text-white/80 mb-3">{tier.role}</div>
                        <div className="flex space-x-6">
                          <div className="text-yellow-200 font-bold">{tier.margin} margin</div>
                          <div className="text-green-200 font-bold">{tier.value}</div>
                        </div>
                      </div>
                    </div>
                    <div className={`transform transition-transform duration-300 text-white ${
                      activeAccordion === tier.id ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {activeAccordion === tier.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-8"
                    >
                      <div className="bg-white/10 rounded-lg p-6">
                        <ul className="space-y-3">
                          {tier.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start text-white">
                              <div className="w-2 h-2 bg-white/60 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>{detail}</span>
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

        {/* Revenue Cascade Model */}
        <section className="py-20 bg-gradient-to-br from-slate-100 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Revenue Cascade Model
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Each tier builds on the previous, creating exponential value increase per client relationship
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {cascadeModel.map((stage, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{stage.stage}</h3>
                        <p className="text-slate-600 mb-2">{stage.description}</p>
                        <div className="text-lg font-bold text-green-600">{stage.margin}</div>
                      </div>
                      <div className="text-4xl">
                        {index === 0 && '🏨'}
                        {index === 1 && '💼'}
                        {index === 2 && '🎯'}
                        {index === 3 && '💻'}
                      </div>
                    </div>
                  </div>
                  
                  {stage.arrow && (
                    <div className="flex justify-center mb-8">
                      <div className="text-green-600">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Transformation */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
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
                Financial Transformation
              </motion.h2>
              
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
              >
                {[
                  { label: 'Break-even Reduction', value: '₹44L → ₹30L', desc: 'Improved operational efficiency' },
                  { label: 'Blended Margins', value: '45-65%', desc: 'From 3% booking margins' },
                  { label: 'Revenue Potential', value: '₹500L+', desc: 'Annual target achievable' },
                  { label: 'Client Lifetime Value', value: '5x increase', desc: 'Through service expansion' }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-green-200 font-semibold mb-1">{metric.label}</div>
                    <div className="text-green-300 text-sm">{metric.desc}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/implementation-strategy">
                  <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    View Implementation Strategy
                  </button>
                </Link>
                <Link href="/">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
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
                <h3 className="text-2xl font-bold mb-4">Hybrid Business Model</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive framework for transforming Trebound into a market-leading travel solutions ecosystem.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Three-Tier Structure</h4>
                <ul className="space-y-2">
                  <li className="text-gray-300">Foundation Layer: Hotel Bookings</li>
                  <li className="text-gray-300">Service Layer: Professional Services</li>
                  <li className="text-gray-300">Digital Layer: Technology Solutions</li>
                  <li className="text-gray-300">Revenue Cascade Model</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Key Outcomes</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Revenue: ₹500L+ annually</p>
                  <p>Margins: 45-65% blended</p>
                  <p>Break-even: ₹30L (from ₹44L)</p>
                  <p>Client Value: 5x increase</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Trebound Hybrid Business Model Framework. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HybridBusinessModel; 