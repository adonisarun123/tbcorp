interface CompanyData {
  name: string;
  revenue: number;
  valuation?: number;
  type: 'traditional' | 'tech' | 'platform';
  color: string;
}

interface CompanyComparisonProps {
  title: string;
  companies: CompanyData[];
}

export default function CompanyComparison({ title, companies }: CompanyComparisonProps) {
  const maxRevenue = Math.max(...companies.map(c => c.revenue));

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'traditional':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        );
      case 'tech':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'platform':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">{title}</h3>
      
      <div className="space-y-6">
        {companies.map((company, index) => {
          const percentage = (company.revenue / maxRevenue) * 100;
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 ${company.color} rounded-lg flex items-center justify-center text-white`}>
                    {getTypeIcon(company.type)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{company.name}</div>
                    <div className="text-sm text-slate-500 capitalize">{company.type} TMC</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="font-bold text-slate-900">${company.revenue}B</div>
                  {company.valuation && (
                    <div className="text-sm text-slate-500">${company.valuation}B valuation</div>
                  )}
                </div>
              </div>
              
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${company.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{ 
                    width: `${percentage}%`,
                    animationDelay: `${index * 150}ms`
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-slate-600">Traditional</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-slate-600">Tech-Forward</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <span className="text-slate-600">Platform</span>
        </div>
      </div>
    </div>
  );
} 