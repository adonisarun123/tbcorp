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

interface Props {
  title: string;
  htmlContent: string;
  slug: string;
}

// ... existing code for getChartData, getDocumentIcon, getAdditionalCharts functions ...

export default function DocPage({ title, htmlContent, slug }: Props) {
  const chartData = getChartData(slug);
  const icon = getDocumentIcon(slug);
  const additionalCharts = getAdditionalCharts(slug);

  return (
    <Layout title={title}>
      {/* ... existing JSX remains the same ... */}
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
  
  // Simple approach: just remove first H1 and convert to HTML
  const processedContent = doc.content.replace(/^#\s+.*$/m, '');
  
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