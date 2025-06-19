import Link from 'next/link';

interface Props {
  title: string;
  excerpt: string;
  href: string;
  className?: string;
}

export default function Card({ title, excerpt, href, className = '' }: Props) {
  return (
    <Link href={href} className={`block ${className}`}>
      <div className="p-8 rounded-2xl transition-all duration-300 hover:scale-105 group">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
        
        <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
          className.includes('text-white') 
            ? 'text-white group-hover:text-blue-300' 
            : 'text-slate-900 group-hover:text-blue-600'
        }`}>
          {title}
        </h3>
        
        <p className={`leading-relaxed line-clamp-3 ${
          className.includes('text-white') 
            ? 'text-slate-300' 
            : 'text-slate-600'
        }`}>
          {excerpt}
        </p>
        
        <div className={`mt-6 flex items-center font-medium transition-colors duration-300 ${
          className.includes('text-white') 
            ? 'text-blue-300 group-hover:text-blue-200' 
            : 'text-blue-600 group-hover:text-blue-700'
        }`}>
          <span>Read more</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
} 