import React from 'react';

interface SparkChartProps {
  data: number[];
  title?: string;
  color?: string;
}

const SparkChart: React.FC<SparkChartProps> = ({ 
  data, 
  title = "Chart", 
  color = "bg-blue-500" 
}) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  return (
    <div className="my-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      {title && (
        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          {title}
        </h4>
      )}
      <div className="flex items-end space-x-1 h-16">
        {data.map((value, index) => {
          const height = ((value - min) / range) * 100;
          return (
            <div
              key={index}
              className={`${color} rounded-t transition-all duration-300 hover:opacity-80 flex-1 min-w-0`}
              style={{ height: `${Math.max(height, 5)}%` }}
              title={`Value: ${value}`}
            />
          );
        })}
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-2">
        <span>Min: {min}</span>
        <span>Max: {max}</span>
      </div>
    </div>
  );
};

export default SparkChart; 