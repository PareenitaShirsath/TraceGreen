import React from 'react';
import { BarChart3, AlertTriangle, ThumbsUp, Leaf } from 'lucide-react';

interface ResultsProps {
  data: {
    total: number;
    categories: {
      home: number;
      transportation: number;
      food: number;
      consumption: number;
    };
  };
}

const Results: React.FC<ResultsProps> = ({ data }) => {
  // Average global carbon footprint is about 4 tons per year
  const globalAverage = 4;
  
  // Determine the status based on the total footprint
  const getStatus = () => {
    if (data.total <= globalAverage * 0.5) {
      return {
        icon: <ThumbsUp className="h-8 w-8 text-green-500" />,
        title: 'Excellent!',
        description: 'Your carbon footprint is significantly below the global average.',
        color: 'text-green-500'
      };
    } else if (data.total <= globalAverage) {
      return {
        icon: <Leaf className="h-8 w-8 text-green-400" />,
        title: 'Good',
        description: 'Your carbon footprint is below the global average.',
        color: 'text-green-400'
      };
    } else if (data.total <= globalAverage * 1.5) {
      return {
        icon: <AlertTriangle className="h-8 w-8 text-yellow-500" />,
        title: 'Above Average',
        description: 'Your carbon footprint is above the global average.',
        color: 'text-yellow-500'
      };
    } else {
      return {
        icon: <AlertTriangle className="h-8 w-8 text-red-500" />,
        title: 'High',
        description: 'Your carbon footprint is significantly above the global average.',
        color: 'text-red-500'
      };
    }
  };
  
  const status = getStatus();
  
  // Calculate the percentage for each category
  const total = data.total;
  const homePercent = Math.round((data.categories.home / total) * 100) || 0;
  const transportationPercent = Math.round((data.categories.transportation / total) * 100) || 0;
  const foodPercent = Math.round((data.categories.food / total) * 100) || 0;
  const consumptionPercent = Math.round((data.categories.consumption / total) * 100) || 0;
  
  // Get the highest contributing category
  const highestCategory = Object.entries(data.categories).reduce(
    (max, [category, value]) => (value > max.value ? { category, value } : max),
    { category: '', value: 0 }
  );
  
  // Get recommendations based on the highest category
  const getRecommendations = () => {
    switch (highestCategory.category) {
      case 'home':
        return [
          'Switch to energy-efficient appliances',
          'Use LED light bulbs',
          'Improve home insulation',
          'Consider renewable energy sources'
        ];
      case 'transportation':
        return [
          'Use public transportation more often',
          'Consider carpooling or ride-sharing',
          'Walk or bike for short distances',
          'Consider an electric or hybrid vehicle'
        ];
      case 'food':
        return [
          'Reduce meat consumption',
          'Buy local and seasonal produce',
          'Reduce food waste',
          'Try plant-based alternatives'
        ];
      case 'consumption':
        return [
          'Buy second-hand items when possible',
          'Repair instead of replace',
          'Choose products with less packaging',
          'Invest in quality items that last longer'
        ];
      default:
        return [
          'Reduce energy consumption',
          'Use public transportation',
          'Eat more plant-based foods',
          'Consume mindfully'
        ];
    }
  };
  
  const recommendations = getRecommendations();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Carbon Footprint Results</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <div className="flex items-center mb-4">
          {status.icon}
          <h3 className={`text-xl font-bold ml-2 ${status.color}`}>{status.title}</h3>
        </div>
        <p className="text-gray-700 mb-4">{status.description}</p>
        
        <div className="flex items-center justify-center mb-4">
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-800">{data.total}</div>
            <div className="text-gray-500">tons CO₂e per year</div>
          </div>
        </div>
        
        <div className="flex items-center mb-2">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-green-500 h-4 rounded-full" style={{ width: `${Math.min(100, (data.total / globalAverage) * 50)}%` }}></div>
          </div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>0</span>
          <span>Global Average: {globalAverage} tons</span>
          <span>{globalAverage * 2}+</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Breakdown by Category</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Home Energy</span>
                <span className="text-gray-700">{data.categories.home} tons ({homePercent}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${homePercent}%` }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Transportation</span>
                <span className="text-gray-700">{data.categories.transportation} tons ({transportationPercent}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: `${transportationPercent}%` }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Food</span>
                <span className="text-gray-700">{data.categories.food} tons ({foodPercent}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${foodPercent}%` }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">Consumption</span>
                <span className="text-gray-700">{data.categories.consumption} tons ({consumptionPercent}%)</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: `${consumptionPercent}%` }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Personalized Recommendations</h3>
          <p className="text-gray-600 mb-4">
            Based on your results, your highest impact category is <span className="font-semibold">{highestCategory.category}</span>. 
            Here are some ways to reduce your footprint:
          </p>
          <ul className="space-y-2">
            {recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start">
                <Leaf className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">What's Next?</h3>
        <p className="text-gray-700 mb-4">
          Your carbon footprint is a starting point for understanding your environmental impact. 
          Consider setting reduction goals and tracking your progress over time.
        </p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Set Reduction Goals
          </button>
          <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Share Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;