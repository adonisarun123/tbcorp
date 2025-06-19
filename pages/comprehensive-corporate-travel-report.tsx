import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ComprehensiveCorporateTravelReportPage = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const keyFindings = [
    {
      title: "Market Size & Growth",
      value: "$1.48 Trillion",
      description: "Global corporate travel market size with 8-12% annual growth",
      icon: "📈"
    },
    {
      title: "SME Market Gap",
      value: "80% Underserved",
      description: "Small and medium enterprises lack enterprise-grade solutions",
      icon: "🎯"
    },
    {
      title: "Technology Disruption",
      value: "13% NDC Adoption",
      description: "New Distribution Capability creating competitive advantages",
      icon: "⚡"
    },
    {
      title: "Sustainability Mandate",
      value: "CSRD Compliance",
      description: "ESG reporting requirements driving market demand",
      icon: "🌱"
    }
  ];

  const marketSections = [
    {
      title: "Market Landscape & Opportunity Assessment",
      content: [
        "Global spending: $1.48 trillion (surpassing 2019 peak)",
        "Growth rate: 8-12% annually",
        "Projected to exceed $2.0 trillion by 2028",
        "Recovery complete across most regions",
        "Quality over quantity travel trends"
      ]
    },
    {
      title: "Competitive Landscape Analysis",
      content: [
        "Traditional TMCs: Amex GBT ($2.4B revenue), BCD Travel, CWT",
        "Tech Disruptors: Navan ($9B valuation), TravelPerk ($2.7B valuation)",
        "Technology gaps in SME segment",
        "Platform modernization needs across industry",
        "Market consolidation trends"
      ]
    },
    {
      title: "Technology Disruption & Innovation",
      content: [
        "AI adoption: 44% expect significant impact within 5 years",
        "Agentic AI: Autonomous task completion and decision-making",
        "NDC growth: 146% year-over-year in corporate segment",
        "Platform architecture modernization",
        "Integration technology advances"
      ]
    },
    {
      title: "Regulatory Environment & ESG",
      content: [
        "CSRD: Mandatory sustainability reporting for large EU companies",
        "Scope 3 emissions tracking including business travel",
        "Supply chain due diligence requirements",
        "Carbon footprint measurement standardization",
        "Global regulatory alignment trends"
      ]
    },
    {
      title: "Market Gaps & Entry Opportunities",
      content: [
        "SME Segment: 80% of businesses underserved",
        "Unmanaged Travel: 40% of market lacks structure",
        "Industry Verticals: Healthcare, legal, consulting specialized needs",
        "Regional Markets: Emerging economies growth potential",
        "Technology Integration: API-first platform demand"
      ]
    }
  ];

  const strategicRecommendations = [
    {
      title: "SME-Focused Integrated Platform",
      description: "Target small and medium enterprises with AI-powered, integrated travel and expense platform",
      highlights: ["$15-50 per employee per month", "2-4% transaction fees", "Consumer-grade UX", "Sustainability tracking"]
    },
    {
      title: "Technology Infrastructure Provider",
      description: "B2B2B platform providing white-label solutions to existing TMCs and financial platforms",
      highlights: ["API-first architecture", "Revenue sharing model", "Platform licensing", "Integration services"]
    },
    {
      title: "Vertical Specialist Platform",
      description: "Industry-specific compliance and workflow solutions for targeted sectors",
      highlights: ["Healthcare compliance", "Legal industry focus", "Premium pricing", "Specialized features"]
    }
  ];

  return (
    <>
      <Head>
        <title>Comprehensive Corporate Travel Report - Strategic Analysis</title>
        <meta name="description" content="Complete strategic analysis of the $1.48 trillion global corporate travel market with competitive landscape and growth opportunities" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center mb-6">
                <Link href="/" className="text-blue-200 hover:text-white transition-colors mr-4">
                  ← Back to Strategy Suite
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center mb-6">
                <span className="text-5xl mr-4">📊</span>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Comprehensive Corporate Travel Report
                  </h1>
                  <p className="text-xl text-blue-100 max-w-3xl">
                    Strategic analysis of the $1.48 trillion global corporate travel market with competitive landscape assessment and growth opportunities
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Executive Summary */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Executive Summary</h2>
                <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  The global corporate travel industry presents a compelling $1.48 trillion opportunity for new entrants, 
                  driven by post-pandemic recovery, technological disruption, and evolving customer expectations. 
                  Significant gaps in the SME segment, technology integration, and sustainability compliance 
                  present attractive market entry points.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {keyFindings.map((finding, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    <span className="text-4xl mb-4 block">{finding.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{finding.title}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{finding.value}</div>
                    <p className="text-sm text-gray-600">{finding.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Market Analysis Sections */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Analysis Deep Dive</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive analysis of market dynamics, competitive landscape, and strategic opportunities
              </p>
            </motion.div>

            <div className="space-y-4">
              {marketSections.map((section, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                    <span className={`transform transition-transform duration-200 ${activeAccordion === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <div className="border-t border-gray-100 pt-4">
                        <ul className="space-y-2">
                          {section.content.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="text-blue-500 mr-3 mt-1">•</span>
                              <span className="text-gray-700">{item}</span>
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

        {/* Strategic Recommendations */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Recommendations</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Three primary business model approaches for market entry and sustainable growth
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {strategicRecommendations.map((recommendation, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{recommendation.title}</h3>
                    <p className="text-gray-600 mb-6">{recommendation.description}</p>
                    <div className="space-y-2">
                      {recommendation.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                          <span className="text-sm text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-white mb-4">
                Ready to Enter the Corporate Travel Market?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Leverage this comprehensive analysis to build your market entry strategy
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/trebound-financial-projections">
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
                    View Financial Projections
                  </button>
                </Link>
                <Link href="/implementation-toolkit">
                  <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                    Implementation Toolkit
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
                  ← Back to Strategy Suite
                </Link>
              </div>
              <div className="text-gray-400 text-sm">
                Comprehensive Corporate Travel Report • Strategic Analysis 2024
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ComprehensiveCorporateTravelReportPage; 