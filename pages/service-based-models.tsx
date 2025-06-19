import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ServiceBasedModels = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setActiveService(activeService === id ? null : id);
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

  const serviceModels = [
    {
      id: 'travel-consulting',
      title: 'Travel Consulting Services',
      icon: '⭐',
      priority: 'IMMEDIATE OPPORTUNITY',
      revenue: '₹35-60L annually',
      margin: '60-70%',
      investment: '₹4-6L',
      color: 'from-blue-500 to-cyan-600',
      description: 'Strategic consulting and ongoing advisory services leveraging industry expertise',
      services: [
        'Strategic Consulting: Travel policy development (₹50,000-3,00,000)',
        'Ongoing Advisory: Monthly consultation (₹15,000-75,000/month)',
        'Crisis Management: 24/7 travel emergency support (₹25,000-1,00,000/month)',
        'Compliance Consulting: Policy compliance and audit (₹30,000-1,50,000)'
      ],
      implementation: {
        timeline: '6-8 weeks to launch',
        team: '2-3 senior consultants',
        certification: 'GBTA certification (₹1,00,000)',
        target: '10-15 corporate accounts'
      }
    },
    {
      id: 'dmc-services',
      title: 'Destination Management Company (DMC) Services',
      icon: '🌍',
      priority: 'SCALABLE OPPORTUNITY',
      revenue: '₹40-70L annually',
      margin: '25-35%',
      investment: '₹3-5L',
      color: 'from-green-500 to-emerald-600',
      description: 'Comprehensive destination management leveraging 450+ venue network',
      services: [
        'Inbound DMC: International clients to India (₹2,000-8,000 per person)',
        'Outbound DMC: Indian corporates abroad (₹3,000-12,000 per person)',
        'Program Design: Custom experiences (15-20% of total cost)',
        'Ground Services: Transportation, guides, logistics (25-35% markup)'
      ],
      implementation: {
        timeline: '2-3 months setup',
        team: '2-3 dedicated DMC specialists',
        certification: 'ADMEI membership',
        target: '15-20 programs annually'
      }
    },
    {
      id: 'wellness-retreats',
      title: 'Corporate Wellness Retreats',
      icon: '🌿',
      priority: 'PREMIUM POSITIONING',
      revenue: '₹35-60L annually',
      margin: '40-50%',
      investment: '₹4-8L',
      color: 'from-teal-500 to-green-600',
      description: 'High-end wellness programs combining activities with mental health focus',
      services: [
        'Executive Wellness: Leadership team retreats (₹15,000-35,000 per person)',
        'Team Wellness: Stress management programs (₹8,000-15,000 per person)',
        'Hybrid Programs: Activities + wellness (₹10,000-20,000 per person)',
        'Virtual Wellness: Online programs (₹2,000-5,000 per person)'
      ],
      implementation: {
        timeline: '3-4 months development',
        team: 'Wellness practitioner partnerships',
        certification: 'Wellness retreat planning certification',
        target: '12-18 retreat programs'
      }
    },
    {
      id: 'training-programs',
      title: 'Travel Training & Education Programs',
      icon: '📚',
      priority: 'KNOWLEDGE MONETIZATION',
      revenue: '₹25-45L annually',
      margin: '65-75%',
      investment: '₹3-6L',
      color: 'from-purple-500 to-violet-600',
      description: 'Comprehensive training and certification programs for travel professionals',
      services: [
        'Corporate Travel Management: 4-6 week certification (₹25,000-50,000)',
        'Event Planning Professional: Weekend intensives (₹8,000-18,000)',
        'Travel Technology: Software training (₹5,000-12,000)',
        'Custom Corporate Training: In-house programs (₹1-4 lakhs)'
      ],
      implementation: {
        timeline: '4-6 months curriculum',
        team: 'Existing team as trainers',
        certification: 'IATA, GBTA partnerships',
        target: '40-60 participants, 8-12 corporate'
      }
    },
    {
      id: 'partnership-models',
      title: 'Partnership-Driven Revenue Models',
      icon: '🤝',
      priority: 'ZERO CAPITAL OPPORTUNITY',
      revenue: '₹20-40L annually',
      margin: '70-80%',
      investment: '₹1-2L',
      color: 'from-indigo-500 to-blue-600',
      description: 'Revenue sharing and white label partnerships with strategic businesses',
      services: [
        'White Label Services: Provide services under partner brands',
        'Revenue Sharing: Joint client acquisition (15-25% share)',
        'Referral Programs: Commission-based referrals (5-15%)',
        'Joint Ventures: Collaborative service delivery (30-50% share)'
      ],
      implementation: {
        timeline: '1-3 months setup',
        team: 'Dedicated partner relationship management',
        certification: 'Partnership agreements',
        target: '8-12 active partnerships'
      }
    },
    {
      id: 'subscription-services',
      title: 'Subscription-Based Travel Services',
      icon: '🔄',
      priority: 'RECURRING REVENUE MODEL',
      revenue: '₹35-75L annually',
      margin: '70-80%',
      investment: '₹2-4L',
      color: 'from-orange-500 to-red-600',
      description: 'Recurring revenue through tiered subscription advisory services',
      services: [
        'Basic Advisory: Monthly insights (₹15,000/month)',
        'Premium Support: Quarterly reviews (₹35,000/month)',
        'Enterprise Solution: Dedicated consultant (₹75,000/month)',
        'Crisis Management: Emergency support (₹25,000/month)'
      ],
      implementation: {
        timeline: '2-3 months platform',
        team: 'Content creation and support systems',
        certification: 'Client portal development',
        target: '15-25 corporate subscribers'
      }
    }
  ];

  const priorityPhases = [
    {
      priority: 'High Priority',
      timeline: 'Launch Months 1-3',
      services: ['Travel Consulting Services', 'Partnership Programs', 'Wellness Retreat Pilots'],
      investment: '₹6-10L',
      revenue: '₹15-30L'
    },
    {
      priority: 'Medium Priority',
      timeline: 'Launch Months 4-6',
      services: ['DMC Services', 'Subscription Services', 'Training Programs'],
      investment: '₹8-12L',
      revenue: '₹25-50L'
    },
    {
      priority: 'Long-term Development',
      timeline: 'Months 7-12',
      services: ['Data Analytics Services', 'International Expansion', 'Advanced Partnerships'],
      investment: '₹4-8L',
      revenue: '₹40-80L'
    }
  ];

  return (
    <>
      <Head>
        <title>Service-Based Business Models Analysis - Trebound</title>
        <meta name="description" content="High-margin service opportunities that transform existing capabilities into profitable offerings" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900">
        {/* Navigation */}
        <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-white font-bold text-xl">
                ← Back to Strategy Suite
              </Link>
              <div className="text-white/80">Service-Based Models</div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-500/20"></div>
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
                🎯
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Service-Based
                <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent block">
                  Business Models
                </span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-pink-100 mb-8 max-w-4xl mx-auto"
              >
                High-margin service opportunities that transform existing capabilities into scalable, profitable offerings
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-400 mb-2">₹215-400L</div>
                  <div className="text-pink-200">Annual Revenue Range</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">45-65%</div>
                  <div className="text-pink-200">Blended Margins</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-400 mb-2">₹12-18L</div>
                  <div className="text-pink-200">Total Investment</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Service Models Grid */}
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
                Service Portfolio Analysis
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Six comprehensive service-based revenue streams with operational frameworks and revenue models
              </p>
            </motion.div>

            <div className="space-y-8">
              {serviceModels.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={`bg-gradient-to-r ${service.color} rounded-2xl shadow-xl overflow-hidden`}
                >
                  <button
                    onClick={() => toggleService(service.id)}
                    className="w-full p-8 text-left flex items-center justify-between hover:bg-black/5 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="text-5xl">{service.icon}</div>
                      <div>
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
                          <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-semibold">
                            {service.priority}
                          </span>
                        </div>
                        <p className="text-white/90 text-lg mb-3">{service.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                          <div className="text-yellow-200 font-bold">{service.revenue}</div>
                          <div className="text-green-200 font-bold">{service.margin} margin</div>
                          <div className="text-blue-200 font-bold">{service.investment} investment</div>
                        </div>
                      </div>
                    </div>
                    <div className={`transform transition-transform duration-300 text-white ${
                      activeService === service.id ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {activeService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-8"
                    >
                      <div className="bg-white/10 rounded-lg p-6">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-bold text-white mb-4">Service Portfolio:</h4>
                            <ul className="space-y-2">
                              {service.services.map((svc, svcIndex) => (
                                <li key={svcIndex} className="flex items-start text-white/90">
                                  <div className="w-2 h-2 bg-white/60 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-sm">{svc}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-white mb-4">Implementation Details:</h4>
                            <div className="space-y-2 text-white/90 text-sm">
                              <div><strong>Timeline:</strong> {service.implementation.timeline}</div>
                              <div><strong>Team:</strong> {service.implementation.team}</div>
                              <div><strong>Requirements:</strong> {service.implementation.certification}</div>
                              <div><strong>Target:</strong> {service.implementation.target}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Priority Matrix */}
        <section className="py-20 bg-gradient-to-br from-slate-100 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Implementation Priority Matrix
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Strategic phasing for optimal resource allocation and maximum impact
              </p>
            </motion.div>

            <div className="space-y-8">
              {priorityPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 shadow-xl"
                >
                  <div className="grid md:grid-cols-4 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">{phase.priority}</h3>
                      <div className="text-pink-600 font-semibold">{phase.timeline}</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-3">Services</h4>
                      <div className="space-y-1">
                        {phase.services.map((service, sIndex) => (
                          <div key={sIndex} className="flex items-center text-slate-600 text-sm">
                            <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                            {service}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-3">Investment</h4>
                      <div className="text-2xl font-bold text-orange-600">{phase.investment}</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-3">Expected Revenue</h4>
                      <div className="text-2xl font-bold text-green-600">{phase.revenue}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Summary */}
        <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
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
                Service-Based Revenue Potential
              </motion.h2>
              
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
              >
                {[
                  { label: 'Combined Revenue Range', value: '₹215-400L', desc: 'Year 1 all services' },
                  { label: 'Blended Margin', value: '45-65%', desc: 'Service-based margins' },
                  { label: 'Investment Required', value: '₹12-18L', desc: 'Staged deployment' },
                  { label: 'Revenue per Employee', value: '₹25L+', desc: 'Productivity target' }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-pink-200 font-semibold mb-1">{metric.label}</div>
                    <div className="text-pink-300 text-sm">{metric.desc}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/hybrid-business-model">
                  <button className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    View Hybrid Model
                  </button>
                </Link>
                <Link href="/">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300">
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
                <h3 className="text-2xl font-bold mb-4">Service-Based Models</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive analysis of high-margin service opportunities for sustainable business transformation.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Service Categories</h4>
                <ul className="space-y-2">
                  <li className="text-gray-300">Travel Consulting</li>
                  <li className="text-gray-300">DMC Services</li>
                  <li className="text-gray-300">Wellness Retreats</li>
                  <li className="text-gray-300">Training Programs</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Financial Highlights</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Revenue: ₹215-400L annually</p>
                  <p>Margins: 45-65% blended</p>
                  <p>Investment: ₹12-18L</p>
                  <p>Timeline: 12 months</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Trebound Service-Based Business Models. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ServiceBasedModels; 