import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

const TreboundGTMStrategyPage = () => {
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

  return (
    <>
      <Head>
        <title>Trebound Go-to-Market Strategy</title>
        <meta name="description" content="Comprehensive go-to-market strategy for Trebound's corporate travel platform" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center mb-6">
                <Link href="/" className="text-orange-200 hover:text-white transition-colors mr-4">
                  ← Back to Strategy Suite
                </Link>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex items-center mb-6">
                <span className="text-5xl mr-4">🚀</span>
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Trebound Go-to-Market Strategy
                  </h1>
                  <p className="text-xl text-orange-100 max-w-3xl">
                    Comprehensive go-to-market strategy for launching Trebound's corporate travel platform
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
                Go-to-market strategy and launch plan coming soon
              </h2>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TreboundGTMStrategyPage; 