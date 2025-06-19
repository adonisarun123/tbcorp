import { getDocBySlug, getAllDocs } from '@lib/docs';
import Layout from '@components/Layout';
import SparkChart from '@components/SparkChart';
import MarketChart from '@components/MarketChart';
import CompanyComparison from '@components/CompanyComparison';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { remark } from 'remark';

import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import { processMarkdownContent } from '@lib/markdown-utils';

interface Props {
  title: string;
  htmlContent: string;
  slug: string;
}

// Sample data for charts based on document type
const getChartData = (slug: string) => {
  switch (slug) {
    case 'trebound_travelperk_business_plan':
      return {
        title: 'Revenue Projection (€M)',
        data: [0.5, 1.2, 2.8, 4.5, 7.2, 10.8, 15.2, 20.5, 26.8, 34.2, 42.5, 52.0],
        color: 'bg-green-500'
      };
    case 'travelperk_business_model_analysis':
      return {
        title: 'Market Penetration (%)',
        data: [2, 5, 8, 12, 18, 25, 33, 42, 52, 63, 75, 88],
        color: 'bg-blue-500'
      };
    case 'trebound_execution_roadmap':
      return {
        title: 'Milestone Progress (%)',
        data: [10, 20, 35, 50, 65, 78, 88, 95, 98, 100, 100, 100],
        color: 'bg-purple-500'
      };
    case 'implementation_toolkit':
      return {
        title: 'Implementation Phases',
        data: [15, 30, 50, 70, 85, 95, 98, 100, 100, 100, 100, 100],
        color: 'bg-orange-500'
      };
    case 'comprehensive_corporate_travel_report':
      return {
        title: 'Market Size ($T)',
        data: [1.0, 1.1, 1.2, 1.3, 1.4, 1.48, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1],
        color: 'bg-emerald-500'
      };
    case 'corporate_travel_companies_list':
      return {
        title: 'Company Analysis Coverage',
        data: [5, 12, 18, 25, 32, 40, 48, 55, 62, 68, 75, 80],
        color: 'bg-cyan-500'
      };
    case 'corporate_travel_deep_analysis':
      return {
        title: 'Analysis Depth Score',
        data: [20, 35, 50, 65, 75, 82, 88, 92, 95, 97, 98, 100],
        color: 'bg-violet-500'
      };
    case 'corporate_travel_market_analysis':
      return {
        title: 'Market Recovery (%)',
        data: [40, 50, 60, 70, 78, 85, 90, 93, 95, 98, 100, 101],
        color: 'bg-rose-500'
      };
    case 'trebound_current_state_assessment':
      return {
        title: 'Feasibility Score (/10)',
        data: [6.5, 7.0, 7.5, 8.0, 8.2, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5],
        color: 'bg-green-500'
      };
    case 'trebound_financial_projections':
      return {
        title: 'Revenue Growth (₹ Crores)',
        data: [2, 8, 15, 25, 40, 60, 85, 120, 160, 200, 250, 300],
        color: 'bg-teal-500'
      };
    case 'trebound_gtm_strategy':
      return {
        title: 'Market Penetration (%)',
        data: [0, 5, 10, 18, 28, 40, 55, 70, 82, 90, 95, 98],
        color: 'bg-cyan-500'
      };
    case 'trebound_pivot_strategy':
      return {
        title: 'Market Opportunity ($B)',
        data: [10.6, 12.2, 14.1, 16.3, 18.8, 21.7, 25.0, 28.8, 33.2, 38.2, 44.0, 50.6],
        color: 'bg-blue-500'
      };
    case 'trebound_strategic_roadmap':
      return {
        title: 'Strategic Milestones (%)',
        data: [10, 20, 35, 50, 65, 75, 85, 92, 96, 98, 99, 100],
        color: 'bg-indigo-500'
      };
    default:
      return {
        title: 'Growth Metrics',
        data: [10, 25, 40, 58, 75, 90, 100, 100, 100, 100, 100, 100],
        color: 'bg-indigo-500'
      };
  }
};

const getDocumentIcon = (slug: string) => {
  switch (slug) {
    case 'trebound_travelperk_business_plan':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      );
    case 'travelperk_business_model_analysis':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case 'trebound_execution_roadmap':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      );
    case 'comprehensive_corporate_travel_report':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      );
    case 'corporate_travel_companies_list':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    case 'corporate_travel_deep_analysis':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      );
    case 'corporate_travel_market_analysis':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'trebound_current_state_assessment':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'trebound_financial_projections':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'trebound_gtm_strategy':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'trebound_pivot_strategy':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      );
    case 'trebound_strategic_roadmap':
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      );
    default:
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      );
  }
};

// Get additional chart data for specific documents
const getAdditionalCharts = (slug: string) => {
  switch (slug) {
    case 'comprehensive_corporate_travel_report':
      return {
        marketData: [
          { year: '2019', value: 1.43, label: 'Pre-pandemic Peak' },
          { year: '2020', value: 0.68, label: 'Pandemic Impact' },
          { year: '2021', value: 0.72, label: 'Early Recovery' },
          { year: '2022', value: 1.05, label: 'Accelerated Growth' },
          { year: '2023', value: 1.30, label: 'Strong Recovery' },
          { year: '2024', value: 1.48, label: 'Record High' },
          { year: '2025', value: 1.65, label: 'Projected Growth' },
          { year: '2028', value: 2.10, label: 'Market Potential' },
        ]
      };
    case 'corporate_travel_companies_list':
      return {
        companyData: [
          { name: 'Amex GBT', revenue: 2.4, valuation: 3.06, type: 'traditional' as const, color: 'bg-blue-500' },
          { name: 'BCD Travel', revenue: 6.3, type: 'traditional' as const, color: 'bg-blue-600' },
          { name: 'CWT', revenue: 0.85, type: 'traditional' as const, color: 'bg-blue-400' },
          { name: 'Navan', revenue: 0.2, valuation: 9.0, type: 'tech' as const, color: 'bg-green-500' },
          { name: 'TravelPerk', revenue: 0.15, valuation: 2.7, type: 'tech' as const, color: 'bg-green-600' },
          { name: 'Spotnana', revenue: 0.05, valuation: 0.4, type: 'platform' as const, color: 'bg-purple-500' },
        ]
      };
    case 'trebound_financial_projections':
      return {
        marketData: [
          { year: 'Year 1', value: 8, label: 'Initial Revenue' },
          { year: 'Year 2', value: 32, label: 'Growth Phase' },
          { year: 'Year 3', value: 85, label: 'Scale Phase' },
          { year: 'Year 4', value: 180, label: 'Expansion' },
          { year: 'Year 5', value: 300, label: 'Market Leader' },
        ]
      };
    case 'trebound_pivot_strategy':
      return {
        marketData: [
          { year: '2024', value: 10.6, label: 'Current Market' },
          { year: '2025', value: 12.2, label: 'Recovery Complete' },
          { year: '2026', value: 14.1, label: 'Growth Acceleration' },
          { year: '2027', value: 16.3, label: 'Digital Transformation' },
          { year: '2028', value: 18.8, label: 'Tech Adoption' },
          { year: '2029', value: 21.7, label: 'Market Maturity' },
          { year: '2030', value: 25.0, label: 'Projected Peak' },
        ]
      };
    default:
      return null;
  }
};

export default function DocPage({ title, htmlContent, slug }: Props) {
  const chartData = getChartData(slug);
  const icon = getDocumentIcon(slug);
  const additionalCharts = getAdditionalCharts(slug);

  return (
    <Layout title={title}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="max-w-4xl">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mr-4">
                {icon}
              </div>
              <div className="text-blue-200 font-medium">
                Strategic Analysis
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              {title}
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
              Comprehensive analysis and strategic insights for transformational business impact
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-400/20 rounded-full blur-xl"></div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Charts */}
          <div className="mb-16 space-y-8">
            <SparkChart 
              data={chartData.data}
              title={chartData.title}
              color={chartData.color}
            />
            
            {additionalCharts?.marketData && (
              <MarketChart 
                title="Global Corporate Travel Market Size"
                data={additionalCharts.marketData}
                color="bg-emerald-500"
              />
            )}
            
            {additionalCharts?.companyData && (
              <CompanyComparison 
                title="Major Corporate Travel Companies Revenue Comparison"
                companies={additionalCharts.companyData}
              />
            )}
          </div>
          
          {/* Document Content */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="p-8 lg:p-12">
              <article
                className="prose prose-slate prose-lg max-w-none
                prose-headings:text-slate-900 
                prose-h2:text-3xl prose-h2:font-bold prose-h2:border-b prose-h2:border-blue-200 prose-h2:pb-4 prose-h2:mb-8
                prose-h3:text-2xl prose-h3:font-semibold prose-h3:text-blue-600 prose-h3:mb-4
                prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-slate-900 prose-strong:bg-yellow-100 prose-strong:px-1 prose-strong:py-0.5 prose-strong:rounded
                prose-ul:space-y-2 prose-li:text-slate-700
                prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                prose-code:bg-slate-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-slate-800
                prose-pre:bg-slate-900 prose-pre:rounded-xl prose-pre:p-6"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Continue Reading</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="/trebound_travelperk_business_plan" className="flex items-center p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Business Plan</div>
                  <div className="text-sm text-slate-600">Strategic partnership framework</div>
                </div>
              </a>
              <a href="/implementation_toolkit" className="flex items-center p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Implementation Guide</div>
                  <div className="text-sm text-slate-600">Practical execution toolkit</div>
                </div>
              </a>
              <a href="/comprehensive_corporate_travel_report" className="flex items-center p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Market Report</div>
                  <div className="text-sm text-slate-600">Comprehensive industry analysis</div>
                </div>
              </a>
              <a href="/corporate_travel_companies_list" className="flex items-center p-4 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Companies Directory</div>
                  <div className="text-sm text-slate-600">Global TMC catalog</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = getAllDocs();
  return {
    paths: docs.map((d) => ({ params: { slug: d.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const doc = getDocBySlug(slug);
  
  // Apply our custom transformations
  const processedContent = processMarkdownContent(doc.content);
  
  const processed = await remark()
    
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(processedContent);
    
  return {
    props: {
      title: doc.title,
      htmlContent: processed.toString(),
      slug,
    },
  };
}; 