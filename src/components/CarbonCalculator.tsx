import React, { useState } from 'react';
import { Home, Car, ShoppingBasket, Utensils } from 'lucide-react';

interface CarbonCalculatorProps {
  onCalculate: (data: any) => void;
}

const CarbonCalculator: React.FC<CarbonCalculatorProps> = ({ onCalculate }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    // Home energy
    electricity: 0, // kWh per month
    naturalGas: 0, // therms per month
    heating: 0, // gallons of oil per month
    
    // Transportation
    car: 0, // miles per month
    publicTransport: 0, // trips per month
    flights: 0, // flights per year
    
    // Food
    meat: 0, // servings per week
    dairy: 0, // servings per week
    fruits: 0, // servings per week
    processed: 0, // servings per week
    
    // Consumption
    clothing: 0, // items per month
    electronics: 0, // items per year
    other: 0, // items per month
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value) || 0
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(formData);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Calculate Your Carbon Footprint</h2>
      
      <div className="flex mb-6 border-b">
        <button
          className={`flex items-center space-x-2 px-4 py-3 ${
            activeSection === 'home' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-500'
          }`}
          onClick={() => setActiveSection('home')}
        >
          <Home className="h-5 w-5" />
          <span>Home Energy</span>
        </button>
        <button
          className={`flex items-center space-x-2 px-4 py-3 ${
            activeSection === 'transportation' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-500'
          }`}
          onClick={() => setActiveSection('transportation')}
        >
          <Car className="h-5 w-5" />
          <span>Transportation</span>
        </button>
        <button
          className={`flex items-center space-x-2 px-4 py-3 ${
            activeSection === 'food' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-500'
          }`}
          onClick={() => setActiveSection('food')}
        >
          <Utensils className="h-5 w-5" />
          <span>Food</span>
        </button>
        <button
          className={`flex items-center space-x-2 px-4 py-3 ${
            activeSection === 'consumption' ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-500'
          }`}
          onClick={() => setActiveSection('consumption')}
        >
          <ShoppingBasket className="h-5 w-5" />
          <span>Consumption</span>
        </button>
      </div>
      
      <form onSubmit={handleSubmit}>
        {activeSection === 'home' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Home Energy Usage</h3>
            <p className="text-gray-600 mb-4">Enter your monthly energy consumption</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Electricity (kWh per month)
                </label>
                <input
                  type="number"
                  name="electricity"
                  value={formData.electricity || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Natural Gas (therms per month)
                </label>
                <input
                  type="number"
                  name="naturalGas"
                  value={formData.naturalGas || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Heating Oil (gallons per month)
                </label>
                <input
                  type="number"
                  name="heating"
                  value={formData.heating || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="0"
                />
              </div>
            </div>
          </div>
        )}
        
        {activeSection === 'transportation' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Transportation</h3>
            <p className="text-gray-600 mb-4">Enter your transportation usage</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Car Travel (miles per month)
                </label>
                <input
                  type="number"
                  name="car"
                  value={formData.car || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Public Transportation (trips per month)
                </label>
                <input
                  type="number"
                  name="publicTransport"
                  value={formData.publicTransport || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Flights (per year)
                </label>
                <input
                  type="number"
                  name="flights"
                  value={formData.flights || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="0"
                />
              </div>
            </div>
          </div>
        )}
        
        {activeSection === 'food' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Food Consumption</h3>
            <p className="text-gray-600 mb-4">Enter your weekly food consumption (servings per week)</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meat & Poultry
                </label>
                <input
                  type="number"
                  name="meat"
                  value={formData.meat || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Dairy Products
                </label>
                <input
                  type="number"
                  name="dairy"
                  value={formData.dairy || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fruits & Vegetables
                </label>
                <input
                  type="number"
                  name="fruits"
                  value={formData.fruits || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Processed Foods
                </label>
                <input
                  type="number"
                  name="processed"
                  value={formData.processed || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="0"
                />
              </div>
            </div>
          </div>
        )}
        
        {activeSection === 'consumption' && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-700">Consumption & Lifestyle</h3>
            <p className="text-gray-600 mb-4">Enter your consumption habits</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Clothing & Accessories (items per month)
                </label>
                <input
                  type="number"
                  name="clothing"
                  value={formData.clothing || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Electronics (items per year)
                </label>
                <input
                  type="number"
                  name="electronics"
                  value={formData.electronics || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="0"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Other Goods (items per month)
                </label>
                <input
                  type="number"
                  name="other"
                  value={formData.other || ''}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  min="0"
                />
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Calculate My Footprint
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarbonCalculator;