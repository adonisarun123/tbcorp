import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ImplementationStrategy = () => {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  const togglePhase = (id: string) => {
    setActivePhase(activePhase === id ? null : id);
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

  const implementationPhases = [
    {
      id: 'q1',
      quarter: 'Q1',
      title: 'Foundation Phase',
      timeline: 'Months 1-3',
      revenue: '₹68 lakhs',
      investment: '₹15 lakhs',
      margin: '25% → 40%',
      color: 'from-purple-500 to-violet-600',
      objectives: [
        'Establish service capabilities and operational excellence',
        'Achieve initial client cross-selling success',
        'Build foundation for scalable growth',
        'Validate service-market fit'
      ],
      milestones: [
        'Team restructuring and role optimization',
        'Service development and training initiation',
        'Client communication about expanded capabilities',
        'Service pilot programs with existing clients'
      ]
    },
    {
      id: 'q2',
      quarter: 'Q2',
      title: 'Growth Phase',
      timeline: 'Months 4-6',
      revenue: '₹127 lakhs',
      investment: '₹9 lakhs',
      margin: '35% → 50%',
      color: 'from-blue-500 to-cyan-600',
      objectives: [
        'Achieve break-even and sustainable profitability',
        'Scale service delivery capabilities',
        'Launch digital platform MVP',
        'Expand market presence and partnerships'
      ],
      milestones: [
        'Break-even achievement: Month 4',
        'Service delivery optimization for efficiency',
        'Digital platform MVP launch',
        'Partnership revenue stream activation'
      ]
    },
    {
      id: 'q3',
      quarter: 'Q3',
      title: 'Acceleration Phase',
      timeline: 'Months 7-9',
      revenue: '₹195 lakhs',
      investment: '₹6 lakhs',
      margin: '45% → 55%',
      color: 'from-green-500 to-emerald-600',
      objectives: [
        'Scale digital revenue streams significantly',
        'Expand geographic and service reach',
        'Build market leadership position',
        'Optimize operational efficiency'
      ],
      milestones: [
        'Geographic expansion to additional cities',
        'Digital revenue: 25-30% of total',
        'Advanced service portfolio launch',
        'Brand building and thought leadership'
      ]
    },
    {
      id: 'q4',
      quarter: 'Q4',
      title: 'Optimization Phase',
      timeline: 'Months 10-12',
      revenue: '₹255 lakhs',
      investment: '₹5 lakhs',
      margin: '55% → 65%',
      color: 'from-orange-500 to-red-600',
      objectives: [
        'Achieve target profitability margins',
        'Prepare for Year 2 expansion',
        'Build sustainable competitive advantages',
        'Optimize resource allocation and efficiency'
      ],
      milestones: [
        'Full portfolio optimization',
        'Digital platform maturity',
        'Year 2 strategic planning',
        'Market leadership positioning'
      ]
    }
  ];

  const monthlyProgression = [
    { month: 'Month 1', revenue: '₹18L', phase: 'Transition preparation' },
    { month: 'Month 2', revenue: '₹22L', phase: 'Pilot service launch' },
    { month: 'Month 3', revenue: '₹28L', phase: 'Service expansion' },
    { month: 'Month 4', revenue: '₹35L', phase: 'Break-even achievement' },
    { month: 'Month 5', revenue: '₹42L', phase: 'Service optimization' },
    { month: 'Month 6', revenue: '₹50L', phase: 'Digital platform launch' },
    { month: 'Month 7', revenue: '₹58L', phase: 'Market expansion' },
    { month: 'Month 8', revenue: '₹65L', phase: 'Partnership revenue' },
    { month: 'Month 9', revenue: '₹72L', phase: 'Service maturity' },
    { month: 'Month 10', revenue: '₹78L', phase: 'Full service portfolio' },
    { month: 'Month 11', revenue: '₹85L', phase: 'Digital revenue scaling' },
    { month: 'Month 12', revenue: '₹92L', phase: 'Year-end optimization' }
  ];

  return (
    <>
      <Head>
        <title>Implementation Strategy & Financial Projections - Trebound</title>
        <meta name="description" content="Detailed 12-month roadmap with 90-day sprint phases for business transformation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
        {/* Navigation */}
        <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="text-white font-bold text-xl">
                ← Back to Strategy Suite
              </Link>
              <div className="text-white/80">Implementation Strategy</div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-500/20"></div>
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
                📊
              </motion.div>
              
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Implementation
                <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent block">
                  Strategy
                </span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-purple-100 mb-8 max-w-4xl mx-auto"
              >
                Detailed 12-month roadmap with 90-day sprint phases for comprehensive business transformation
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">₹25-35L</div>
                  <div className="text-purple-200">Total Investment</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">400-800%</div>
                  <div className="text-purple-200">Expected ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-400 mb-2">Month 4</div>
                  <div className="text-purple-200">Break-even Achievement</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Quarterly Implementation Phases */}
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
                12-Month Implementation Roadmap
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Four strategic phases with clear objectives, milestones, and financial targets
              </p>
            </motion.div>

            <div className="space-y-8">
              {implementationPhases.map((phase, index) => (
                <motion.div
                  key={phase.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={`bg-gradient-to-r ${phase.color} rounded-2xl shadow-xl overflow-hidden`}
                >
                  <button
                    onClick={() => togglePhase(phase.id)}
                    className="w-full p-8 text-left flex items-center justify-between hover:bg-black/5 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-6">
                      <div className="text-5xl font-bold text-white bg-white/20 rounded-full w-16 h-16 flex items-center justify-center">
                        {phase.quarter}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">{phase.title}</h3>
                        <p className="text-white/90 text-lg mb-3">{phase.timeline}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-yellow-200 font-bold">Revenue: {phase.revenue}</div>
                          <div className="text-green-200 font-bold">Investment: {phase.investment}</div>
                          <div className="text-blue-200 font-bold">Margin: {phase.margin}</div>
                        </div>
                      </div>
                    </div>
                    <div className={`transform transition-transform duration-300 text-white ${
                      activePhase === phase.id ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {activePhase === phase.id && (
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
                            <h4 className="font-bold text-white mb-4">Strategic Objectives:</h4>
                            <ul className="space-y-2">
                              {phase.objectives.map((objective, objIndex) => (
                                <li key={objIndex} className="flex items-start text-white/90">
                                  <div className="w-2 h-2 bg-white/60 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span>{objective}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-white mb-4">Key Milestones:</h4>
                            <ul className="space-y-2">
                              {phase.milestones.map((milestone, mIndex) => (
                                <li key={mIndex} className="flex items-start text-white/90">
                                  <div className="w-2 h-2 bg-white/60 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span>{milestone}</span>
                                </li>
                              ))}
                            </ul>
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

        {/* Monthly Revenue Progression */}
        <section className="py-20 bg-gradient-to-br from-slate-100 to-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Monthly Revenue Progression
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Clear revenue targets and growth milestones for each month of Year 1
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {monthlyProgression.map((month, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{month.revenue}</div>
                    <div className="text-lg font-semibold text-slate-800 mb-2">{month.month}</div>
                    <div className="text-sm text-slate-600">{month.phase}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Summary */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
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
                Financial Summary & ROI
              </motion.h2>
              
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
              >
                {[
                  { label: 'Year 1 Total Revenue', value: '₹645L', desc: 'Staged revenue growth' },
                  { label: 'Total Investment', value: '₹35L', desc: 'Staged deployment' },
                  { label: 'Year 1 Net Profit', value: '₹170-245L', desc: 'Strong profitability' },
                  { label: 'Payback Period', value: '2.5-3.5 months', desc: 'Rapid return' }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-purple-200 font-semibold mb-1">{metric.label}</div>
                    <div className="text-purple-300 text-sm">{metric.desc}</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/business-partner-presentation">
                  <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    View Business Plan
                  </button>
                </Link>
                <Link href="/">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
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
                <h3 className="text-2xl font-bold mb-4">Implementation Strategy</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive 12-month roadmap for Trebound's strategic transformation with detailed financial projections.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Implementation Phases</h4>
                <ul className="space-y-2">
                  <li className="text-gray-300">Q1: Foundation Phase</li>
                  <li className="text-gray-300">Q2: Growth Phase</li>
                  <li className="text-gray-300">Q3: Acceleration Phase</li>
                  <li className="text-gray-300">Q4: Optimization Phase</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Key Metrics</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Total Revenue: ₹645L (Year 1)</p>
                  <p>Investment: ₹35L staged</p>
                  <p>ROI: 400-800%</p>
                  <p>Break-even: Month 4</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Trebound Implementation Strategy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ImplementationStrategy; 