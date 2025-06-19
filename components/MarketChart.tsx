interface MarketChartProps {
  title: string;
  data: {
    year: string;
    value: number;
    label: string;
  }[];
  color?: string;
}

export default function MarketChart({ title, data, color = 'bg-blue-500' }: MarketChartProps) {
  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">{title}</h3>
      
      <div className="space-y-4">
        {data.map((item, index) => {
          const percentage = (item.value / maxValue) * 100;
          
          return (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-16 text-sm font-medium text-slate-600">
                {item.year}
              </div>
              
              <div className="flex-1 relative">
                <div className="h-8 bg-slate-100 rounded-lg overflow-hidden">
                  <div 
                    className={`h-full ${color} rounded-lg transition-all duration-1000 ease-out`}
                    style={{ 
                      width: `${percentage}%`,
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-between px-3">
                  <span className="text-sm font-medium text-white mix-blend-difference">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-white mix-blend-difference">
                    ${item.value}T
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 text-sm text-slate-500">
        Market size projection based on industry analysis and growth trends
      </div>
    </div>
  );
} 