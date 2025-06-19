import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

const BusinessPartnerPresentation = () => {
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

  const statsData = [
    { value: "₹167 Cr", label: "Annual Travel Spend Goldmine", subtitle: "Across 550+ existing clients" },
    { value: "30-60x", label: "Expected ROI", subtitle: "Over 5 years" },
    { value: "₹2.8L Cr", label: "Indian Market Size", subtitle: "Growing at 10.1% CAGR" },
    { value: "18 months", label: "Competitive Window", subtitle: "Before major players enter" }
  ];

  const milestones = [
    { phase: "6 Months", achievement: "MVP Launch & Beta Testing", value: "₹20L+ Revenue" },
    { phase: "12 Months", achievement: "100+ Active Clients", value: "₹4.1 Cr Revenue" },
    { phase: "18 Months", achievement: "Market Leadership", value: "₹20+ Cr Revenue" },
    { phase: "36 Months", achievement: "Exit Readiness", value: "₹800+ Cr Valuation" }
  ];

  const competitiveAdvantages = [
    {
      icon: "🎯",
      title: "Existing Client Base",
      description: "550+ companies with established relationships",
      detail: "4.2 years average relationship, 87% retention rate"
    },
    {
      icon: "🏆",
      title: "Unique Integration",
      description: "Only platform offering travel + team building",
      detail: "15-20% premium pricing due to unique value proposition"
    },
    {
      icon: "🇮🇳",
      title: "Local Expertise",
      description: "10+ years of Indian market experience",
      detail: "Deep understanding of compliance, culture, and business practices"
    },
    {
      icon: "⚡",
      title: "Proven Excellence",
      description: "99.2% client satisfaction track record",
      detail: "2,500+ events delivered with zero major failures"
    }
  ];

  const riskMitigation = [
    {
      risk: "Technology Integration Complexity",
      probability: "70%",
      impact: "High",
      mitigation: "Hire experienced CTO, partner with integration providers, phased approach",
      residualRisk: "24%"
    },
    {
      risk: "TravelPerk India Entry",
      probability: "80%",
      impact: "Medium-High",
      mitigation: "First-mover advantage, unique differentiation, local expertise",
      residualRisk: "24%"
    },
    {
      risk: "Client Conversion Rate",
      probability: "40%",
      impact: "Critical",
      mitigation: "Risk-free trials, incentive programs, success stories",
      residualRisk: "18%"
    }
  ];

  const accordionSections = [
    {
      id: "market-dynamics",
      title: "Market Dynamics & Opportunity",
      content: {
        points: [
          "Global corporate travel market: $1.37 trillion, growing at 8.1% annually",
          "Indian market: ₹2.8 lakh crores, growing at 10.1% CAGR",
          "Software segment: $10.6 billion globally, 15%+ annual growth",
          "SMB segment underserved by major players (Concur, TravelPerk)",
          "Digital transformation accelerated by COVID-19"
        ],
        details: "The corporate travel market is experiencing unprecedented digital transformation. Traditional travel management companies are losing market share to modern SaaS platforms, creating a massive opportunity for innovative solutions targeting the underserved SMB segment."
      }
    },
    {
      id: "competitive-landscape",
      title: "Competitive Landscape Analysis",
      content: {
        points: [
          "TravelPerk: $2.7B valuation, 13.5x revenue multiple (success blueprint)",
          "SAP Concur: Enterprise-focused, $300K+ minimum contracts",
          "Indian players: Fragmented, limited SaaS offerings",
          "MakeMyTrip Corporate: Consumer-focused, limited corporate features",
          "Local TMCs: 60% market share but no technology platform"
        ],
        details: "The competitive landscape shows a clear gap in the SMB segment. While enterprise solutions are mature and expensive, and consumer platforms lack corporate features, Trebound can capture the underserved middle market with superior technology and service."
      }
    },
    {
      id: "financial-projections",
      title: "Financial Projections & Unit Economics",
      content: {
        points: [
          "Year 1: ₹4.1 Cr revenue (100 clients, 18% conversion rate)",
          "Year 2: ₹20.5 Cr revenue (400 clients, 73% of existing base)",
          "Year 3: ₹66 Cr revenue (1,000 clients including new acquisitions)",
          "Customer LTV: ₹42L+ (including team building integration)",
          "LTV:CAC ratio: 26:1 (excellent for SaaS business)"
        ],
        details: "Conservative financial projections based on proven unit economics from existing relationships. Revenue model combines 60% subscription, 35% transaction fees, and 5% value-added services."
      }
    },
    {
      id: "implementation-roadmap",
      title: "Implementation Roadmap",
      content: {
        points: [
          "Phase 1 (Months 1-6): Team assembly, MVP development, beta testing",
          "Phase 2 (Months 7-12): Market launch, client onboarding, feature refinement",
          "Phase 3 (Months 13-18): Growth acceleration, Series A funding, market expansion",
          "Key milestones: 20 beta clients, 100 paying clients, 400 active clients",
          "Technology stack: React/Node.js, AWS cloud, API-first architecture"
        ],
        details: "Detailed 18-month roadmap with specific milestones, team requirements, and technology decisions. Phased approach reduces risk while ensuring rapid market entry."
      }
    }
  ];

  return (
    <>
      <Head>
        <title>Trebound Corporate Travel Transformation - Business Partner Presentation</title>
        <meta name="description" content="Complete business partner presentation for Trebound's corporate travel transformation opportunity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-7xl font-bold text-white mb-6"
              >
                Trebound Corporate Travel
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent block">
                  Transformation
                </span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              >
                Complete Business Partner Presentation: Capturing a ₹167 Crore Annual Travel Spend Goldmine
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  View Investment Opportunity
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                  Download Presentation
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Executive Summary Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-slate-800 mb-1">{stat.label}</div>
                  <div className="text-sm text-slate-600">{stat.subtitle}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                The Strategic Opportunity
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Perfect market timing meets proven business model in the largest untapped corporate travel opportunity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Market Dynamics</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-800">Global Market:</strong>
                      <span className="text-slate-600"> $1.37 trillion, growing at 8.1% post-COVID</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-800">Indian Market:</strong>
                      <span className="text-slate-600"> ₹2.8 lakh crores, growing at 10.1% CAGR</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-800">Software Segment:</strong>
                      <span className="text-slate-600"> $10.6 billion globally, growing at 15%+ annually</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong className="text-slate-800">Competitive Gap:</strong>
                      <span className="text-slate-600"> No player offers integrated travel + team building</span>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-6">Financial Opportunity</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-semibold text-slate-800">Year 1 Target</span>
                    <span className="text-green-600 font-bold">₹4.1 Crores</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-semibold text-slate-800">Year 3 Projection</span>
                    <span className="text-blue-600 font-bold">₹66 Crores</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="font-semibold text-slate-800">Total Investment</span>
                    <span className="text-purple-600 font-bold">₹24.7 Crores</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                    <span className="font-semibold text-slate-800">Expected Exit</span>
                    <span className="text-orange-600 font-bold">₹800-1,500 Cr</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
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
                Our Strategic Advantages
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Unique competitive moats that ensure market leadership and exceptional returns
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {competitiveAdvantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{advantage.title}</h3>
                  <p className="text-slate-600 mb-3">{advantage.description}</p>
                  <p className="text-sm text-slate-500">{advantage.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Detailed Analysis Accordion */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Detailed Analysis
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                In-depth analysis of market dynamics, competitive landscape, and strategic implementation
              </p>
            </motion.div>

            <div className="space-y-4">
              {accordionSections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl"
                >
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                  >
                    <h3 className="text-xl font-bold text-slate-800">{section.title}</h3>
                    <div className={`transform transition-transform duration-300 ${
                      activeAccordion === section.id ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {activeAccordion === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-6"
                    >
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="mb-4">
                          <h4 className="font-semibold text-slate-800 mb-3">Key Points:</h4>
                          <ul className="space-y-2">
                            {section.content.points.map((point, pointIndex) => (
                              <li key={pointIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-slate-600">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">Analysis:</h4>
                          <p className="text-slate-600">{section.content.details}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Financial Projections Timeline */}
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Strategic Milestones
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Clear path to market leadership and exceptional investor returns
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-500 to-blue-500 h-full rounded-full"></div>
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-xl">
                      <div className="text-2xl font-bold text-green-600 mb-2">{milestone.phase}</div>
                      <div className="text-lg font-semibold text-slate-800 mb-2">{milestone.achievement}</div>
                      <div className="text-blue-600 font-bold">{milestone.value}</div>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Risk Analysis */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Risk Analysis & Mitigation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive risk assessment with proven mitigation strategies
              </p>
            </motion.div>

            <div className="space-y-4">
              {riskMitigation.map((risk, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl overflow-hidden shadow-xl"
                >
                  <button
                    onClick={() => toggleAccordion(`risk-${index}`)}
                    className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <h3 className="text-xl font-bold text-slate-800">{risk.risk}</h3>
                      <div className="flex space-x-2">
                        <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">{risk.probability}</span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">{risk.impact}</span>
                      </div>
                    </div>
                    <div className={`transform transition-transform duration-300 ${
                      activeAccordion === `risk-${index}` ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  {activeAccordion === `risk-${index}` && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-6"
                    >
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold text-slate-800 mb-2">Mitigation Strategy:</h4>
                        <p className="text-slate-600 mb-4">{risk.mitigation}</p>
                        <div className="flex items-center">
                          <span className="text-sm text-slate-600 mr-2">Residual Risk:</span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-semibold">
                            {risk.residualRisk}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-white mb-6"
              >
                Ready to Partner with Trebound?
              </motion.h2>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl text-green-100 mb-8 max-w-3xl mx-auto"
              >
                Join us in capturing the ₹167 Crore travel spend opportunity with 30-60x expected returns
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Schedule Partnership Discussion
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                  Download Full Presentation
                </button>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
              >
                <div>
                  <div className="text-3xl font-bold text-white">18 months</div>
                  <div className="text-green-100">Competitive window</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">550+ clients</div>
                  <div className="text-green-100">Existing relationships</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">10+ years</div>
                  <div className="text-green-100">Market expertise</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Trebound</h3>
                <p className="text-gray-300 mb-4">
                  Transforming corporate travel through innovative technology and exceptional service.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Executive Summary</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Market Analysis</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Financial Projections</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Risk Assessment</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Email: partners@trebound.com</p>
                  <p>Phone: +91 98765 43210</p>
                  <p>Address: Mumbai, India</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Trebound. All rights reserved. Confidential business presentation.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BusinessPartnerPresentation; 