import { getDocBySlug, getAllDocs } from '@lib/docs';
import Layout from '@components/Layout';
import SparkChart from '@components/SparkChart';
import type { GetStaticPaths, GetStaticProps } from 'next';

interface Props {
  title: string;
  htmlContent: string;
  slug: string;
}

function getChartData(slug: string) {
  const chartConfigs = {
    'corporate_travel_market_analysis': {
      data: [12, 19, 3, 5, 2, 3, 7, 15, 22, 18, 25, 30]
    },
    'travelperk_business_model_analysis': {
      data: [8, 12, 15, 18, 22, 25, 28, 32, 35, 38, 42, 45]
    },
    'trebound_financial_projections': {
      data: [100, 120, 140, 180, 220, 280, 350, 420, 500, 580, 680, 800]
    }
  };
  
  return chartConfigs[slug as keyof typeof chartConfigs];
}

function getDocumentIcon(slug: string) {
  const icons = {
    'corporate_travel_market_analysis': '📊',
    'travelperk_business_model_analysis': '🏢',
    'trebound_financial_projections': '💰',
    'trebound_strategic_roadmap': '🗺️',
    'trebound_gtm_strategy': '🚀',
    'implementation_toolkit': '🛠️',
    'trebound_execution_roadmap': '📋',
  };
  
  return icons[slug as keyof typeof icons] || '📄';
}

export default function DocPage({ title, htmlContent, slug }: Props) {
  const chartData = getChartData(slug);
  const documentIcon = getDocumentIcon(slug);

  return (
    <Layout title={title}>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">{documentIcon}</span>
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          </div>
          
          {chartData && (
            <div className="mb-6">
              <SparkChart data={chartData.data} />
            </div>
          )}
        </div>

        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-table:text-sm"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const docs = getAllDocs();
  const paths = docs.map((doc) => ({
    params: { slug: doc.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const doc = getDocBySlug(slug);
  
  // Ultra-simple approach: just convert markdown to HTML without complex processing
  const { marked } = await import('marked');
  
  // Configure marked with basic options
  marked.setOptions({
    gfm: true,
    breaks: true
  });
  
  // Simple preprocessing: remove first H1 and highlight numbers
  let processedContent = doc.content.replace(/^#\s+.*$/m, '');
  processedContent = processedContent.replace(
    /\b(\d+(?:,\d{3})*(?:\.\d+)?)(k|m|b|%|K|M|B)?\b/g,
    '<strong>$1$2</strong>'
  );
  
  const htmlContent = await marked(processedContent);
    
  return {
    props: {
      title: doc.title,
      htmlContent,
      slug,
    },
  };
}; 