import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CorporateTravelCompaniesPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('traditional');

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

  const companyCategories = {
    traditional: {
      title: "Traditional Global TMCs",
      description: "Established travel management companies with global presence",
      companies: [
        {
          name: "American Express Global Business Travel",
          position: "Market leader with $2.4B revenue",
          strengths: ["Global scale (140+ countries)", "Enterprise relationships", "Integrated platform", "Strong financial backing"],
          vulnerabilities: ["Legacy system integration", "High-cost for SME", "Slow innovation cycles"],
          marketShare: "Leading position"
        },
        {
          name: "BCD Travel",
          position: "Top 5 global TMC with strong European presence",
          strengths: ["Global operations (100+ countries)", "Advito consulting arm", "Strong client retention"],
          vulnerabilities: ["Technology modernization needs", "Competition from tech platforms"],
          marketShare: "Major player"
        },
        {
          name: "CWT (Carlson Wagonlit Travel)",
          position: "Being acquired by Amex GBT for $570M",
          strengths: ["Industry-specific expertise", "myCWT digital platform", "Global presence (95+ countries)"],
          vulnerabilities: ["Financial restructuring", "Integration uncertainty"],
          marketShare: "Consolidating"
        }
      ]
    },
    tech: {
      title: "Technology-Forward Disruptors",
      description: "New generation platforms prioritizing user experience and innovation",
      companies: [
        {
          name: "Navan (TripActions)",
          position: "Fastest-growing integrated platform ($9B valuation)",
          strengths: ["Superior UX (99/100 G2 rating)", "Integrated travel/expense/payments", "AI-powered automation"],
          vulnerabilities: ["Limited enterprise penetration", "Scaling global operations", "Profitability pressure"],
          marketShare: "Rapid growth"
        },
        {
          name: "TravelPerk",
          position: "European leader expanding globally ($2.7B valuation)",
          strengths: ["FlexiPerk flexibility features", "Strong sustainability focus (GreenPerk)", "24/7 customer support"],
          vulnerabilities: ["US market penetration challenges", "Enterprise feature gaps"],
          marketShare: "European strength"
        },
        {
          name: "Spotnana",
          position: "Infrastructure platform powering other solutions",
          strengths: ["Modern API-first architecture", "No GDS conflicts", "Platform scalability"],
          vulnerabilities: ["B2B2B model complexity", "Early stage customer base"],
          marketShare: "Infrastructure layer"
        }
      ]
    },
    integrated: {
      title: "Integrated Financial Platforms",
      description: "Companies combining expense management with travel capabilities",
      companies: [
        {
          name: "Brex",
          position: "Financial platform with travel management",
          strengths: ["Corporate cards integration", "Startup ecosystem strength", "Comprehensive financial platform"],
          vulnerabilities: ["Limited travel-specific features", "Enterprise adoption challenges"],
          marketShare: "Fintech focus"
        },
        {
          name: "Ramp",
          position: "Spend management platform",
          strengths: ["Spend optimization focus", "Automation capabilities", "Growing platform"],
          vulnerabilities: ["Travel feature development needed", "Market competition"],
          marketShare: "Emerging player"
        },
        {
          name: "SAP Concur",
          position: "Leading travel and expense management platform",
          strengths: ["Enterprise market dominance", "Extensive TMC partnerships", "Integrated platform"],
          vulnerabilities: ["Complex implementation", "User experience challenges"],
          marketShare: "Enterprise standard"
        }
      ]
    }
  };

  const marketInsights = [
    {
      title: "Market Consolidation",
      value: "M&A Activity",
      description: "Amex GBT acquiring CWT, TravelPerk acquiring Yokoy",
      icon: "🔄"
    },
    {
      title: "Technology Shift",
      value: "API-First",
      description: "Modern architecture enabling better integrations",
      icon: "⚡"
    },
    {
      title: "Customer Expectations",
      value: "Consumer-Grade UX",
      description: "Self-service platforms with human backup support",
      icon: "👥"
    },
    {
      title: "Market Opportunity",
      value: "SME Underserved",
      description: "80% of businesses lack enterprise-grade solutions",
      icon: "🎯"
    }
  ];

  return (
    <>
      <Head>
        <title>Corporate Travel Companies Analysis</title>
        <meta name="description" content="Detailed analysis of major corporate travel management companies" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100">
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center mb-6">
                <Link href="/" className="text-green-200 hover:text-white transition-colors mr-4">
                  ← Back to Strategy Suite
                </Link>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex items-center mb-6">
                <span className="text-5xl mr-4">🏢</span>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Corporate Travel Companies Analysis
                  </h1>
                  <p className="text-xl text-green-100 max-w-3xl">
                    Comprehensive analysis of major global corporate travel companies and their competitive positioning
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Detailed company analysis and market intelligence coming soon
              </h2>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CorporateTravelCompaniesPage; 