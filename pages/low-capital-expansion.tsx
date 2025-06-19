import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LowCapitalExpansion = () => {
  const [activeOpportunity, setActiveOpportunity] = useState<string | null>(null);

  const toggleOpportunity = (id: string) => {
    setActiveOpportunity(activeOpportunity === id ? null : id);
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

  const expansionOpportunities = [
    {
      id: 'corporate-travel',
      title: 'Corporate Travel Management Services',
      icon: '⭐',
      priority: 'PRIMARY RECOMMENDATION',
      revenue: '₹30-50L annually',
      margin: '30-40%',
      investment: '₹3-5L',
      timeline: '3-4 months',
      color: 'from-blue-500 to-cyan-600',
      description: 'Transform into comprehensive corporate travel management company',
      services: [
        'Corporate Travel Policy Consulting: ₹50,000-2,00,000 per engagement',
        'Travel Expense Management: ₹15,000-50,000/month per client',
        'Vendor Negotiation Services: 15-20% commission on savings',
        'Travel Risk Management: ₹25,000-75,000/month'
      ]
    },
    {
      id: 'dmc-services',
      title: 'Destination Management Company (DMC) Services',
      icon: '🌍',
      priority: 'HIGH POTENTIAL',
      revenue: '₹25-40L annually',
      margin: '25-35%',
      investment: '₹2-4L',
      timeline: '2-3 months',
      color: 'from-green-500 to-emerald-600',
      description: 'Leverage 450+ venue network and local expertise for B2B partners',
      services: [
        'Event Design & Planning: 15-20% of event budget',
        'Local Logistics Coordination: 25-35% markup',
        'Vendor Management: 10-15% commission',
        'Cultural Experience Design: 40-60% margin'
      ]
    },
    {
      id: 'white-label',
      title: 'White Label B2B Travel Services',
      icon: '🤝',
      priority: 'PARTNERSHIP OPPORTUNITY',
      revenue: '₹20-35L annually',
      margin: '60-70%',
      investment: '₹1-3L',
      timeline: '1-2 months',
      color: 'from-purple-500 to-violet-600',
      description: 'Provide white label travel services to other businesses',
      services: [
        'White Label Booking Platform: Partner brand integration',
        'Corporate Event Management: HR consulting partnerships',
        'SME Travel Management: Accounting firm partnerships',
        'Technology Services: Platform access for smaller agencies'
      ]
    },
    {
      id: 'wellness-retreats',
      title: 'Corporate Wellness Retreats & Programs',
      icon: '🌿',
      priority: 'GROWING MARKET',
      revenue: '₹30-45L annually',
      margin: '35-45%',
      investment: '₹4-6L',
      timeline: '3-4 months',
      color: 'from-teal-500 to-green-600',
      description: 'Specialized corporate wellness retreats combining venue expertise with wellness programming',
      services: [
        'Wellness Retreat Planning: ₹8,000-15,000 per person',
        'Team Building + Wellness: ₹5,000-12,000 per person',
        'Executive Wellness Programs: ₹15,000-30,000 per person',
        'Subscription Wellness: ₹2,000-5,000 per person/month'
      ]
    },
    {
      id: 'content-monetization',
      title: 'Travel Content Monetization & Digital Revenue',
      icon: '💻',
      priority: 'SCALABLE OPPORTUNITY',
      revenue: '₹18-35L annually',
      margin: '70-80%',
      investment: '₹1-2L',
      timeline: '2-3 months',
      color: 'from-orange-500 to-red-600',
      description: 'Monetize travel expertise through content creation and digital services',
      services: [
        'Travel Blog & Content: Destination guides, corporate tips',
        'Affiliate Marketing: 2-25% commission partnerships',
        'Online Training Courses: ₹5,000-25,000 per enrollment',
        'Digital Consultation: ₹2,000-5,000 per hour'
      ]
    },
    {
      id: 'subscription-consultation',
      title: 'Subscription-Based Travel Consultation',
      icon: '🔄',
      priority: 'RECURRING REVENUE',
      revenue: '₹30-50L annually',
      margin: '65-75%',
      investment: '₹2-3L',
      timeline: '2-3 months',
      color: 'from-indigo-500 to-blue-600',
      description: 'Subscription-based travel advisory services for ongoing value delivery',
      services: [
        'Monthly Travel Advisory: ₹15,000-50,000/month insights',
        'Quarterly Strategic Reviews: Policy and vendor analysis',
        'Exclusive Access Program: Priority booking and rates',
        'Crisis Management Subscription: 24/7 emergency support'
      ]
    }
  ];

  const implementationPhases = [
    {
      phase: 'Phase 1: Quick Wins',
      timeline: 'Months 1-3',
      opportunities: ['Corporate Travel Management', 'White Label Partnerships', 'Content Monetization'],
      investment: '₹6-10L',
      revenue: '₹25-45L'
    },
    {
      phase: 'Phase 2: Capability Building',
      timeline: 'Months 4-6',
      opportunities: ['DMC Services', 'Wellness Programs', 'Subscription Services'],
      investment: '₹8-12L',
      revenue: '₹40-70L'
    },
    {
      phase: 'Phase 3: Optimization',
      timeline: 'Months 7-12',
      opportunities: ['Training Programs', 'Data Analytics', 'Market Expansion'],
      investment: '₹4-8L',
      revenue: '₹60-100L'
    }
  ];

  return (
    <>
      <Head>
        <title>Low-Capital Expansion Opportunities - Trebound Strategic Transformation</title>
        <meta name="description" content="High-potential expansion opportunities leveraging existing assets with minimal capital investment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        {/* Navigation */}
        <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-white font-bold text-xl">
                ← Back to Strategy Suite
              </Link>
              <div className="text-white/80">Low-Capital Expansion</div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-500/20"></div>
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
                🚀
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Low-Capital
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent block">
                  Expansion
                </span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-orange-100 mb-8 max-w-4xl mx-auto"
              >
                High-potential expansion opportunities leveraging existing assets and capabilities with minimal capital investment
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2">₹150-350L</div>
                  <div className="text-orange-200">Annual Revenue Potential</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">45-60%</div>
                  <div className="text-orange-200">Blended Margins</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-pink-400 mb-2">₹18-25L</div>
                  <div className="text-orange-200">Total Investment</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Expansion Opportunities */}
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
                8 High-Potential Opportunities
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Service-based, partnership-driven, and digital revenue streams requiring minimal upfront investment
              </p>
            </motion.div>

            <div className="space-y-8">
              {expansionOpportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={`bg-gradient-to-r ${opportunity.color} rounded-2xl shadow-xl overflow-hidden`}
                >
                  <button
                    onClick={() => toggleOpportunity(opportunity.id)}
                    className="w-full p-8 text-left flex items-center justify-between hover:bg-black/5 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="text-5xl">{opportunity.icon}</div>
                      <div>
                        <div className="flex items-center space-x-4 mb-2">
                          <h3 className="text-2xl md:text-3xl font-bold text-white">{opportunity.title}</h3>
                          <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full font-semibold">
                            {opportunity.priority}
                          </span>
                        </div>
                        <p className="text-white/90 text-lg mb-3">{opportunity.description}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="text-yellow-200 font-bold">Revenue: {opportunity.revenue}</div>
                          <div className="text-green-200 font-bold">Margin: {opportunity.margin}</div>
                          <div className="text-blue-200 font-bold">Investment: {opportunity.investment}</div>
                          <div className="text-purple-200 font-bold">Timeline: {opportunity.timeline}</div>
                        </div>
                      </div>
                    </div>
                    <div className={`transform transition-transform duration-300 text-white ${
                      activeOpportunity === opportunity.id ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {activeOpportunity === opportunity.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-8"
                    >
                      <div className="bg-white/10 rounded-lg p-6">
                        <h4 className="font-bold text-white mb-4">Service Portfolio:</h4>
                        <ul className="space-y-3">
                          {opportunity.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="flex items-start text-white/90">
                              <div className="w-2 h-2 bg-white/60 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span>{service}</span>
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

        {/* Implementation Strategy */}
        <section className="py-20 bg-gradient-to-br from-slate-100 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Implementation Strategy & Prioritization
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Phased approach to expansion with clear priorities and resource allocation
              </p>
            </motion.div>

            <div className="space-y-8">
              {implementationPhases.map((phase, index) => (
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
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">{phase.phase}</h3>
                      <div className="text-orange-600 font-semibold">{phase.timeline}</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-3">Opportunities</h4>
                      <div className="space-y-1">
                        {phase.opportunities.map((opp, oppIndex) => (
                          <div key={oppIndex} className="flex items-center text-slate-600 text-sm">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                            {opp}
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
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
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
                Financial Summary & Returns
              </motion.h2>
              
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
              >
                {[
                  { label: 'Conservative Revenue', value: '₹150-200L', desc: 'Year 1 potential' },
                  { label: 'Optimistic Revenue', value: '₹250-350L', desc: 'Year 1 potential' },
                  { label: 'Blended Margin', value: '45-60%', desc: 'Service-based margins' },
                  { label: 'Total Investment', value: '₹18-25L', desc: '12-month deployment' }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-orange-200 font-semibold mb-1">{metric.label}</div>
                    <div className="text-orange-300 text-sm">{metric.desc}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/service-based-models">
                  <button className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    View Service Models
                  </button>
                </Link>
                <Link href="/">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300">
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
                <h3 className="text-2xl font-bold mb-4">Low-Capital Expansion</h3>
                <p className="text-gray-300 mb-4">
                  Strategic opportunities for revenue diversification while maintaining hotel bookings as client acquisition engine.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Key Opportunities</h4>
                <ul className="space-y-2">
                  <li className="text-gray-300">Corporate Travel Management</li>
                  <li className="text-gray-300">DMC Services</li>
                  <li className="text-gray-300">White Label Partnerships</li>
                  <li className="text-gray-300">Wellness Retreats</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Key Benefits</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Revenue: ₹200-350L potential</p>
                  <p>Margins: 45-60% blended</p>
                  <p>Investment: ₹18-25L total</p>
                  <p>Timeline: 12 months</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Trebound Low-Capital Expansion Strategy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LowCapitalExpansion; 