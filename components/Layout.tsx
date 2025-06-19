import Head from 'next/head';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
}

export default function Layout({ children, title = 'Trebound × TravelPerk' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Strategic partnership analysis and business transformation roadmap" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <main className="relative">
          {children}
        </main>
        
        <footer className="bg-slate-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Trebound × TravelPerk</h3>
                <p className="text-slate-300 leading-relaxed">
                  Strategic partnership analysis and transformation roadmap for sustainable business travel.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Documents</h4>
                <ul className="space-y-2 text-slate-300">
                  <li><a href="/trebound_travelperk_business_plan" className="hover:text-white transition-colors">Business Plan</a></li>
                  <li><a href="/travelperk_business_model_analysis" className="hover:text-white transition-colors">Market Analysis</a></li>
                  <li><a href="/trebound_execution_roadmap" className="hover:text-white transition-colors">Execution Roadmap</a></li>
                  <li><a href="/implementation_toolkit" className="hover:text-white transition-colors">Implementation Toolkit</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-slate-300">
                  For more information about this strategic partnership analysis.
                </p>
              </div>
            </div>
            <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
              <p>&copy; 2024 Trebound Strategic Analysis. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
} 