import React, { useState } from 'react';
import { Calculator, Info, BarChart3, Leaf, Home, Car, ShoppingBasket, Utensils } from 'lucide-react';
import CarbonCalculator from './components/CarbonCalculator';
import Results from './components/Results';
import Tips from './components/Tips';
import About from './components/About';

function App() {
  const [activeTab, setActiveTab] = useState('calculator');
  const [footprintData, setFootprintData] = useState<{
    total: number;
    categories: {
      home: number;
      transportation: number;
      food: number;
      consumption: number;
    };
  } | null>(null);

  const calculateFootprint = (data: any) => {
    // Calculate home energy footprint
    const homeFootprint = 
      (data.electricity * 105) + 
      (data.naturalGas * 105) + 
      (data.heating * 113);
    
    // Calculate transportation footprint
    const transportationFootprint = 
      (data.car * 271) + 
      (data.publicTransport * 92) + 
      (data.flights * 1100);
    
    // Calculate food footprint
    const foodFootprint = 
      (data.meat * 600) + 
      (data.dairy * 400) + 
      (data.fruits * 100) + 
      (data.processed * 450);
    
    // Calculate consumption footprint
    const consumptionFootprint = 
      (data.clothing * 150) + 
      (data.electronics * 300) + 
      (data.other * 200);
    
    // Calculate total footprint
    const totalFootprint = 
      homeFootprint + 
      transportationFootprint + 
      foodFootprint + 
      consumptionFootprint;
    
    setFootprintData({
      total: Math.round(totalFootprint / 1000), // Convert to tons
      categories: {
        home: Math.round(homeFootprint / 1000),
        transportation: Math.round(transportationFootprint / 1000),
        food: Math.round(foodFootprint / 1000),
        consumption: Math.round(consumptionFootprint / 1000)
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-500" />
              <h1 className="text-2xl font-bold text-gray-800">Carbon Footprint Calculator</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex border-b">
            <button
              className={`flex items-center space-x-2 px-6 py-4 ${
                activeTab === 'calculator' ? 'bg-green-500 text-white' : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('calculator')}
            >
              <Calculator className="h-5 w-5" />
              <span>Calculator</span>
            </button>
            <button
              className={`flex items-center space-x-2 px-6 py-4 ${
                activeTab === 'results' ? 'bg-green-500 text-white' : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('results')}
              disabled={!footprintData}
            >
              <BarChart3 className="h-5 w-5" />
              <span>Results</span>
            </button>
            <button
              className={`flex items-center space-x-2 px-6 py-4 ${
                activeTab === 'tips' ? 'bg-green-500 text-white' : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('tips')}
            >
              <Leaf className="h-5 w-5" />
              <span>Tips</span>
            </button>
            <button
              className={`flex items-center space-x-2 px-6 py-4 ${
                activeTab === 'about' ? 'bg-green-500 text-white' : 'hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('about')}
            >
              <Info className="h-5 w-5" />
              <span>About</span>
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'calculator' && <CarbonCalculator onCalculate={calculateFootprint} />}
            {activeTab === 'results' && footprintData && <Results data={footprintData} />}
            {activeTab === 'results' && !footprintData && (
              <div className="text-center py-12">
                <p className="text-gray-500">Please complete the calculator first to see your results.</p>
              </div>
            )}
            {activeTab === 'tips' && <Tips />}
            {activeTab === 'about' && <About />}
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 TraceGreen By Pareenita, Ishita & Amruta</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400"></a>
              <a href="#" className="hover:text-green-400"></a>
              <a href="#" className="hover:text-green-400"></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
