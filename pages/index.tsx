import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from '@components/Layout';
import Card from '@components/Card';
import { getAllDocs } from '@lib/docs';
import type { GetStaticProps } from 'next';

interface Doc {
  slug: string;
  title: string;
  excerpt: string;
}

interface Props {
  docs: Doc[];
}

const Index = () => {
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

  const strategies = [
    {
      id: 'digital-revenue',
      title: 'Digital Revenue Strategies',
      description: 'Technology-enabled solutions that create scalable revenue streams without significant capital investment',
      highlights: ['₹150-300L Annual Revenue', '70-85% Margins', 'SaaS Solutions', 'Content Monetization'],
      color: 'from-blue-500 to-cyan-600',
      icon: '💻',
      route: '/digital-revenue-strategies'
    },
    {
      id: 'hybrid-business',
      title: 'Hybrid Business Model Framework',
      description: 'Transform from traditional travel booking into a comprehensive Corporate Travel Solutions Ecosystem',
      highlights: ['Revenue Cascade Model', '45-65% Blended Margins', '₹500L+ Revenue Potential', 'Three-Tier Structure'],
      color: 'from-green-500 to-emerald-600',
      icon: '🏗️',
      route: '/hybrid-business-model'
    },
    {
      id: 'implementation',
      title: 'Implementation Strategy & Financial Projections',
      description: 'Detailed 12-month roadmap with 90-day sprint phases for business transformation',
      highlights: ['₹25-35L Investment', '400-800% ROI', '12-Month Timeline', 'Month 4 Break-even'],
      color: 'from-purple-500 to-violet-600',
      icon: '📊',
      route: '/implementation-strategy'
    },
    {
      id: 'low-capital',
      title: 'Low-Capital Expansion Opportunities',
      description: 'High-potential expansion opportunities leveraging existing assets with minimal capital investment',
      highlights: ['₹150-350L Revenue', 'Minimal Investment', 'Service-Based Growth', 'Partnership-Driven'],
      color: 'from-orange-500 to-red-600',
      icon: '🚀',
      route: '/low-capital-expansion'
    },
    {
      id: 'service-based',
      title: 'Service-Based Business Models Analysis',
      description: 'High-margin service opportunities that transform existing capabilities into profitable offerings',
      highlights: ['40-70% Margins', '₹200-400L Revenue', 'Knowledge Monetization', 'Consulting Services'],
      color: 'from-pink-500 to-rose-600',
      icon: '🎯',
      route: '/service-based-models'
    }
  ];

  const businessPartnerCard = {
    id: 'business-partner',
    title: 'Business Partner Presentation',
    description: 'Comprehensive investor presentation for the ₹167 Crore travel spend opportunity',
    highlights: ['30-60x Expected ROI', '₹800-1,500 Cr Exit Value', '18-Month Window', '550+ Existing Clients'],
    color: 'from-indigo-500 to-blue-600',
    icon: '🤝',
    route: '/business-partner-presentation'
  };

  return (
    <>
      <Head>
        <title>Trebound Strategic Transformation - Complete Strategy Suite</title>
        <meta name="description" content="Comprehensive strategic analysis and implementation roadmap for Trebound's transformation into a market-leading corporate travel solutions provider" />
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
                className="text-6xl md:text-8xl font-bold text-white mb-6"
              >
                Trebound
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent block">
                  Strategic Transformation
                </span>
              </motion.h1>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
              >
                Complete strategic analysis and implementation roadmap for transforming into a market-leading corporate travel solutions provider
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto"
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">₹500L+</div>
                  <div className="text-gray-300">Revenue Potential</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">400-800%</div>
                  <div className="text-gray-300">Expected ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">12 Months</div>
                  <div className="text-gray-300">Implementation Timeline</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Business Partner Presentation - Featured Card */}
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
                Featured Presentation
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive business partner presentation for investors and strategic partners
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="max-w-4xl mx-auto"
            >
              <Link href={businessPartnerCard.route}>
                <div className="group cursor-pointer">
                  <div className={`bg-gradient-to-br ${businessPartnerCard.color} rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 border border-white/20`}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-6xl">{businessPartnerCard.icon}</div>
                      <div className="px-4 py-2 bg-white/20 rounded-full text-white font-semibold">
                        Investor Ready
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-yellow-200 transition-colors">
                      {businessPartnerCard.title}
                    </h3>
                    
                    <p className="text-white/90 text-lg mb-6 leading-relaxed">
                      {businessPartnerCard.description}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {businessPartnerCard.highlights.map((highlight, index) => (
                        <div key={index} className="bg-white/10 rounded-lg p-3 text-center">
                          <div className="text-white font-semibold text-sm">{highlight}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 flex items-center text-white/80 group-hover:text-white transition-colors">
                      <span className="mr-2">View Presentation</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Strategy Cards */}
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
                Strategic Analysis Suite
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive analysis covering all aspects of Trebound's transformation journey
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {strategies.map((strategy, index) => (
                <motion.div
                  key={strategy.id}
                  variants={fadeInUp}
                  className="group"
                >
                  <Link href={strategy.route}>
                    <div className="h-full cursor-pointer">
                      <div className={`bg-gradient-to-br ${strategy.color} rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20`}>
                        <div className="flex items-center justify-between mb-6">
                          <div className="text-4xl">{strategy.icon}</div>
                          <div className={`w-3 h-3 rounded-full bg-white/30 group-hover:bg-white/60 transition-colors`}></div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-200 transition-colors">
                          {strategy.title}
                        </h3>
                        
                        <p className="text-white/90 mb-6 leading-relaxed">
                          {strategy.description}
                        </p>
                        
                        <div className="space-y-2 mb-6">
                          {strategy.highlights.map((highlight, hIndex) => (
                            <div key={hIndex} className="flex items-center text-white/80">
                              <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                              <span className="text-sm font-medium">{highlight}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                          <span className="mr-2">Explore Strategy</span>
                          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Corporate Travel & Business Intelligence Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Corporate Travel & Business Intelligence
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive market research, competitive analysis, and strategic business intelligence for the corporate travel industry
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                {
                  title: "Comprehensive Corporate Travel Report",
                  description: "Complete strategic analysis of the $1.48 trillion global corporate travel market",
                  gradient: "from-blue-600 to-cyan-600",
                  icon: "📊",
                  href: "/comprehensive-corporate-travel-report",
                  insights: ["Market Analysis", "Competitive Landscape", "Growth Opportunities"]
                },
                {
                  title: "Corporate Travel Companies Analysis",
                  description: "Detailed profiles and strategic analysis of major corporate travel companies",
                  gradient: "from-green-600 to-emerald-600",
                  icon: "🏢",
                  href: "/corporate-travel-companies",
                  insights: ["Company Profiles", "Business Models", "Market Positioning"]
                },
                {
                  title: "Market Analysis & Opportunities",
                  description: "In-depth market analysis and emerging opportunities in corporate travel",
                  gradient: "from-purple-600 to-violet-600",
                  icon: "📈",
                  href: "/corporate-travel-market-analysis",
                  insights: ["Market Size", "Growth Trends", "Opportunities"]
                },
                {
                  title: "TravelPerk Business Model Study",
                  description: "Deep dive analysis of TravelPerk's successful business model and strategies",
                  gradient: "from-orange-600 to-red-600",
                  icon: "🎯",
                  href: "/travelperk-business-model",
                  insights: ["Revenue Model", "Growth Strategy", "Success Factors"]
                },
                {
                  title: "Trebound Current State Assessment",
                  description: "Comprehensive assessment of Trebound's current position and pivot feasibility",
                  gradient: "from-pink-600 to-rose-600",
                  icon: "🔍",
                  href: "/trebound-current-state",
                  insights: ["Current Analysis", "Strengths", "Opportunities"]
                },
                {
                  title: "Financial Projections & Investment",
                  description: "Detailed financial projections and investment requirements analysis",
                  gradient: "from-indigo-600 to-blue-600",
                  icon: "💰",
                  href: "/trebound-financial-projections",
                  insights: ["Revenue Forecasts", "Investment Needs", "ROI Analysis"]
                },
                {
                  title: "Execution Roadmap",
                  description: "Comprehensive execution roadmap for transformation to corporate travel SaaS",
                  gradient: "from-teal-600 to-green-600",
                  icon: "🗺️",
                  href: "/trebound-execution-roadmap",
                  insights: ["Implementation Plan", "Milestones", "Timeline"]
                },
                {
                  title: "Go-to-Market Strategy",
                  description: "Strategic go-to-market plan for corporate travel business launch",
                  gradient: "from-cyan-600 to-blue-600",
                  icon: "🚀",
                  href: "/trebound-gtm-strategy",
                  insights: ["Market Entry", "Customer Acquisition", "Growth Strategy"]
                },
                {
                  title: "Strategic Roadmap",
                  description: "Long-term strategic roadmap for sustainable growth and market leadership",
                  gradient: "from-violet-600 to-purple-600",
                  icon: "🎯",
                  href: "/trebound-strategic-roadmap",
                  insights: ["Strategic Vision", "Growth Phases", "Market Leadership"]
                },
                {
                  title: "Implementation Toolkit",
                  description: "Complete toolkit with tools, processes, and technical implementation guides",
                  gradient: "from-emerald-600 to-teal-600",
                  icon: "🛠️",
                  href: "/implementation-toolkit",
                  insights: ["Tech Stack", "Development Tools", "Processes"]
                },
                {
                  title: "Pivot Strategy Framework",
                  description: "Strategic framework for successful pivot from team building to corporate travel",
                  gradient: "from-red-600 to-pink-600",
                  icon: "🔄",
                  href: "/trebound-pivot-strategy",
                  insights: ["Pivot Framework", "Risk Mitigation", "Success Factors"]
                },
                {
                  title: "Complete Business Plan",
                  description: "Comprehensive business plan for TravelPerk-style corporate travel platform",
                  gradient: "from-amber-600 to-orange-600",
                  icon: "📋",
                  href: "/trebound-business-plan",
                  insights: ["Business Model", "Market Strategy", "Financial Plan"]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <Link href={item.href}>
                    <div className="cursor-pointer h-full">
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                        <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
                        <div className="p-6 h-[calc(100%-8px)] flex flex-col justify-between">
                          <div>
                            <div className="flex items-center mb-4">
                              <span className="text-3xl mr-3">{item.icon}</span>
                              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {item.title}
                              </h3>
                            </div>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.insights.map((insight, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                {insight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Corporate Travel & Business Intelligence Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Corporate Travel & Business Intelligence
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive market analysis and strategic insights for the corporate travel industry
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Comprehensive Corporate Travel Report",
                  description: "Complete strategic analysis of the $1.48 trillion global corporate travel market with competitive landscape and growth opportunities",
                  gradient: "from-blue-600 to-cyan-600",
                  icon: "📊",
                  href: "/comprehensive-corporate-travel-report",
                  insights: ["Market Analysis", "Competitive Landscape", "Growth Opportunities"]
                },
                {
                  title: "Corporate Travel Companies Analysis",
                  description: "Detailed profiles and strategic analysis of major corporate travel management companies across traditional TMCs and tech disruptors",
                  gradient: "from-green-600 to-emerald-600",
                  icon: "🏢",
                  href: "/corporate-travel-companies",
                  insights: ["Company Profiles", "Competitive Intelligence", "Market Positioning"]
                },
                {
                  title: "Corporate Travel Market Analysis",
                  description: "In-depth market analysis and emerging opportunities in the $1.48 trillion corporate travel industry",
                  gradient: "from-purple-600 to-violet-600",
                  icon: "📈",
                  href: "/corporate-travel-market-analysis",
                  insights: ["Market Research", "Trend Analysis", "Opportunities"]
                },
                {
                  title: "TravelPerk Business Model Analysis",
                  description: "Deep dive into TravelPerk's successful business model and growth strategy",
                  gradient: "from-teal-600 to-cyan-600",
                  icon: "🧭",
                  href: "/travelperk-business-model-analysis",
                  insights: ["Business Model", "Growth Strategy", "Success Factors"]
                },
                {
                  title: "Implementation Toolkit",
                  description: "Comprehensive toolkit for implementing corporate travel transformation strategies",
                  gradient: "from-indigo-600 to-blue-600",
                  icon: "🛠️",
                  href: "/implementation-toolkit",
                  insights: ["Implementation", "Tools", "Frameworks"]
                },
                {
                  title: "Corporate Travel Deep Analysis",
                  description: "Advanced analysis and insights into corporate travel market dynamics",
                  gradient: "from-gray-600 to-slate-600",
                  icon: "🔍",
                  href: "/corporate-travel-deep-analysis",
                  insights: ["Deep Analysis", "Market Dynamics", "Strategic Insights"]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <Link href={item.href}>
                    <div className="cursor-pointer h-full">
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                        <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
                        <div className="p-6 h-[calc(100%-8px)] flex flex-col justify-between">
                          <div>
                            <div className="flex items-center mb-4">
                              <span className="text-3xl mr-3">{item.icon}</span>
                              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {item.title}
                              </h3>
                            </div>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.insights.map((insight, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                {insight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Trebound Strategic Intelligence Section */}
        <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-red-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
                Trebound Strategic Intelligence
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Comprehensive strategic analysis and transformation roadmap for Trebound
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "Current State Assessment",
                  description: "Comprehensive analysis of Trebound's current position and market opportunities",
                  gradient: "from-red-600 to-pink-600",
                  icon: "🔍",
                  href: "/trebound-current-state-assessment",
                  insights: ["Current Analysis", "Market Position", "Opportunities"]
                },
                {
                  title: "Pivot Strategy",
                  description: "Strategic pivot plan for Trebound's transformation into corporate travel",
                  gradient: "from-pink-600 to-rose-600",
                  icon: "🔄",
                  href: "/trebound-pivot-strategy",
                  insights: ["Pivot Strategy", "Transformation", "Execution"]
                },
                {
                  title: "Strategic Roadmap",
                  description: "Comprehensive roadmap for Trebound's strategic transformation",
                  gradient: "from-orange-600 to-red-600",
                  icon: "🗺️",
                  href: "/trebound-strategic-roadmap",
                  insights: ["Strategic Planning", "Roadmap", "Milestones"]
                },
                {
                  title: "Execution Roadmap",
                  description: "Detailed execution plan and timeline for transformation",
                  gradient: "from-gray-600 to-slate-600",
                  icon: "🚀",
                  href: "/trebound-execution-roadmap",
                  insights: ["Execution Plan", "Timeline", "Implementation"]
                },
                {
                  title: "Financial Projections",
                  description: "Comprehensive financial analysis and 5-year projections",
                  gradient: "from-teal-600 to-cyan-600",
                  icon: "💰",
                  href: "/trebound-financial-projections",
                  insights: ["Financial Analysis", "Projections", "ROI"]
                },
                {
                  title: "Go-to-Market Strategy",
                  description: "Comprehensive go-to-market strategy for launching the platform",
                  gradient: "from-amber-600 to-orange-600",
                  icon: "🎯",
                  href: "/trebound-gtm-strategy",
                  insights: ["GTM Strategy", "Launch Plan", "Market Entry"]
                },
                {
                  title: "TravelPerk Business Plan",
                  description: "Comprehensive business plan for Trebound's TravelPerk-inspired model",
                  gradient: "from-blue-600 to-indigo-600",
                  icon: "📋",
                  href: "/trebound-travelperk-business-plan",
                  insights: ["Business Plan", "Model Design", "Strategy"]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <Link href={item.href}>
                    <div className="cursor-pointer h-full">
                      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                        <div className={`h-2 bg-gradient-to-r ${item.gradient}`}></div>
                        <div className="p-6 h-[calc(100%-8px)] flex flex-col justify-between">
                          <div>
                            <div className="flex items-center mb-4">
                              <span className="text-3xl mr-3">{item.icon}</span>
                              <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {item.title}
                              </h3>
                            </div>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.insights.map((insight, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                                {insight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Key Insights Section */}
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
                Key Strategic Insights
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Critical findings that drive our transformation strategy
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { icon: '📈', title: 'Market Opportunity', value: '₹2.8L Cr', desc: 'Indian corporate travel market size' },
                { icon: '🎯', title: 'Competitive Edge', value: '550+', desc: 'Existing client relationships' },
                { icon: '💰', title: 'Margin Improvement', value: '3% → 65%', desc: 'From booking to services' },
                { icon: '⚡', title: 'ROI Timeline', value: '2-4 months', desc: 'Investment payback period' }
              ].map((insight, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="text-4xl mb-4">{insight.icon}</div>
                  <div className="text-2xl font-bold text-slate-800 mb-2">{insight.value}</div>
                  <div className="text-lg font-semibold text-slate-600 mb-2">{insight.title}</div>
                  <div className="text-sm text-slate-500">{insight.desc}</div>
                </motion.div>
              ))}
            </motion.div>
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
                Ready to Transform Trebound?
              </motion.h2>
              
              <motion.p
                variants={fadeInUp}
                className="text-xl text-green-100 mb-8 max-w-3xl mx-auto"
              >
                From traditional travel booking to comprehensive corporate travel solutions ecosystem
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/business-partner-presentation">
                  <button className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    View Investor Presentation
                  </button>
                </Link>
                <Link href="/implementation-strategy">
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
                    Explore Implementation
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
                <h3 className="text-2xl font-bold mb-4">Trebound Strategic Suite</h3>
                <p className="text-gray-300 mb-4">
                  Comprehensive strategic analysis for transforming corporate travel solutions.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Strategic Documents</h4>
                <ul className="space-y-2">
                  <li><Link href="/digital-revenue-strategies" className="text-gray-300 hover:text-white transition-colors">Digital Revenue Strategies</Link></li>
                  <li><Link href="/hybrid-business-model" className="text-gray-300 hover:text-white transition-colors">Hybrid Business Model</Link></li>
                  <li><Link href="/implementation-strategy" className="text-gray-300 hover:text-white transition-colors">Implementation Strategy</Link></li>
                  <li><Link href="/business-partner-presentation" className="text-gray-300 hover:text-white transition-colors">Business Partner Presentation</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Key Metrics</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Revenue Potential: ₹500L+ annually</p>
                  <p>Expected ROI: 400-800%</p>
                  <p>Implementation: 12 months</p>
                  <p>Market Opportunity: ₹2.8L Cr</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Trebound Strategic Transformation Suite. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const docs = getAllDocs();
  return {
    props: { docs },
  };
}; 