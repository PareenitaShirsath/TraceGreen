import React from 'react';
import { Leaf, Home, Car, Utensils, ShoppingBasket, Lightbulb, Recycle } from 'lucide-react';

const Tips: React.FC = () => {
  const tipCategories = [
    {
      icon: <Home className="h-6 w-6 text-green-500" />,
      title: 'Home Energy',
      tips: [
        'Switch to LED light bulbs, which use up to 80% less energy than traditional bulbs',
        'Unplug electronics when not in use to avoid phantom energy usage',
        'Install a programmable thermostat to optimize heating and cooling',
        'Improve home insulation to reduce heating and cooling needs',
        'Consider renewable energy sources like solar panels',
        'Use energy-efficient appliances with ENERGY STAR ratings',
        'Wash clothes in cold water and hang dry when possible'
      ]
    },
    {
      icon: <Car className="h-6 w-6 text-green-500" />,
      title: 'Transportation',
      tips: [
        'Use public transportation, carpool, or rideshare when possible',
        'Combine errands to reduce the number of trips',
        'Walk or bike for short distances',
        'Consider an electric or hybrid vehicle for your next car purchase',
        'Keep your vehicle well-maintained for optimal fuel efficiency',
        'Avoid unnecessary idling, which wastes fuel',
        'Consider telecommuting or working from home when possible'
      ]
    },
    {
      icon: <Utensils className="h-6 w-6 text-green-500" />,
      title: 'Food & Diet',
      tips: [
        'Reduce meat consumption, especially red meat',
        'Choose locally grown and seasonal foods to reduce transportation emissions',
        'Plan meals to reduce food waste',
        'Compost food scraps instead of sending them to landfills',
        'Grow your own herbs or vegetables if possible',
        'Choose foods with minimal packaging',
        'Support sustainable farming practices by buying organic when possible'
      ]
    },
    {
      icon: <ShoppingBasket className="h-6 w-6 text-green-500" />,
      title: 'Consumption',
      tips: [
        'Follow the "reduce, reuse, recycle" hierarchy',
        'Buy second-hand items when possible',
        'Invest in quality products that last longer',
        'Repair items instead of replacing them',
        'Choose products with less packaging or recyclable packaging',
        'Borrow or rent items you use infrequently',
        'Donate or sell items you no longer need instead of discarding them'
      ]
    },
    {
      icon: <Recycle className="h-6 w-6 text-green-500" />,
      title: 'Waste Reduction',
      tips: [
        'Recycle properly according to local guidelines',
        'Use reusable bags, bottles, and containers',
        'Compost organic waste',
        'Avoid single-use plastics',
        'Choose products with recyclable or biodegradable packaging',
        'Repurpose items before recycling or discarding',
        'Participate in community clean-up events'
      ]
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-green-500" />,
      title: 'Lifestyle Changes',
      tips: [
        'Support environmental policies and initiatives',
        'Educate others about climate change and carbon footprints',
        'Invest in carbon offset programs for unavoidable emissions',
        'Plant trees or support reforestation efforts',
        'Choose eco-friendly recreation activities',
        'Support businesses with sustainable practices',
        'Calculate your carbon footprint regularly to track progress'
      ]
    }
  ];

  return (
    <div>
      <div className="flex items-center mb-6">
        <Leaf className="h-8 w-8 text-green-500 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">Tips to Reduce Your Carbon Footprint</h2>
      </div>
      
      <p className="text-gray-600 mb-8">
        Making small changes in your daily habits can significantly reduce your carbon footprint. 
        Here are some practical tips organized by category to help you live more sustainably.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tipCategories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold ml-2 text-gray-800">{category.title}</h3>
            </div>
            <ul className="space-y-3">
              {category.tips.map((tip, tipIndex) => (
                <li key={tipIndex} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-green-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Did You Know?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-md shadow-sm">
            <p className="text-gray-700">
              <span className="font-bold">1 ton of CO₂</span> is equivalent to driving approximately 2,500 miles in an average car.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <p className="text-gray-700">
              <span className="font-bold">Eating vegetarian</span> just one day a week can save the equivalent of driving 1,160 miles.
            </p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-sm">
            <p className="text-gray-700">
              <span className="font-bold">A single tree</span> can absorb up to 48 pounds of CO₂ per year.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tips;