
import { Menu, Award, MessageCircle, CircleDollarSign } from 'lucide-react';
import Footer from '../components/Footer'
import DelhiBazaarCard from '../components/Cards.jsx/DelhiBazaar';
import DhanKuberCard from '../components/Cards.jsx/DhanKuber';
import DisawarCard from '../components/Cards.jsx/Disawar';
import FaridabadCard from '../components/Cards.jsx/Faridabad';
import GaliCard from '../components/Cards.jsx/GaliCard';
import ShreeGaneshCard from '../components/Cards.jsx/ShreeGanesh';
import { useState } from 'react';


const Home = () => {
    const [results] = useState([
    { game: 'Game Play Timing', time: '12:00 AM', result: '48' },
    { game: 'Kalyan Morning', time: '(09:00 AM-03:30 AM)', result: '' },
    { game: 'Sridevi', time: '04:00 AM', result: '73' },
    { game: '', time: '04:00 AM', result: '668-0' },
    { game: 'Kalyan', time: '03:00 PM', result: '30' },
    { game: 'Madhur Day', time: '06:01 PM', result: '49' },
    { game: 'Faridabad', time: '06:15 PM', result: '31' },
    { game: '(06:00 AM-08:30 PM)', time: '', result: '' },
    { game: 'Main Bazar', time: '08:36 PM', result: '72' },
    { game: '(09:30 AM-08:35 PM)', time: '', result: '' }
  ]);
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-4 flex items-center justify-between">
        <button className="p-2">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold">SATTAKING</h1>
        <div className="flex items-center space-x-1">
            <CircleDollarSign size={20} />
            <span className="text-lg font-bold">0.00</span>
        </div>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-2 gap-3 p-4">
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-blue-500">
          <p className="text-gray-600 text-sm mb-1">Wallet Balance</p>
          <p className="text-2xl font-bold text-gray-800">0.00</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border-l-4 border-orange-500">
          <p className="text-gray-600 text-sm mb-1">Win Amount</p>
          <p className="text-2xl font-bold text-gray-800">0</p>
        </div>
      </div>

      {/* Market Cards */}
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FaridabadCard />
            <DelhiBazaarCard />
            <GaliCard />
            <DisawarCard />
            {/* <DhanKuberCard /> */}
            {/* <ShreeGaneshCard /> */}
        </div>
      </div>

      {/* Today Results Header */}
      {/* <div className="bg-gradient-to-r from-orange-500 to-orange-400 mx-4 rounded-lg p-3 flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Award className="text-white" size={20} />
          <span className="text-white font-semibold">Today Results</span>
        </div>
        <a href={`https://wa.me/9111955042`} className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-semibold hover:bg-green-600 transition">
          <MessageCircle size={18} />
          <span>9111955042</span>
        </a>
      </div> */}

      {/* Results Table */}
      <div className="mx-4 mb-4">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {/* Table Header */}
          {/* <div className="grid grid-cols-4 bg-gradient-to-r from-orange-400 to-orange-300 text-white font-semibold text-sm">
            <div className="p-3 text-center">Game Play Timing</div>
            <div className="p-3 text-center">Open Time</div>
            <div className="p-3 text-center">Close Time</div>
            <div className="p-3 text-center">Total Result</div>
          </div> */}

          {/* Table Body */}
          {/* {results.map((item, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-4 border-b border-gray-200 text-sm ${
                index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
              }`}
            >
              <div className="p-3 text-center text-gray-700 font-medium">
                {item.game}
              </div>
              <div className="p-3 text-center text-gray-600">
                {item.time && !item.time.includes('AM-') && !item.time.includes('AM)') ? item.time : ''}
              </div>
              <div className="p-3 text-center text-gray-600">
                {item.time.includes('AM-') || item.time.includes('AM)') ? item.time : ''}
              </div>
              <div className="p-3 text-center">
                <span className={`font-bold ${item.result ? 'text-red-600' : 'text-gray-400'}`}>
                  {item.result || '-'}
                </span>
              </div>
            </div>
          ))} */}
        </div>
      </div>

      {/* Bottom Navigation or Additional Content */}
      {/* <div className="h-20"></div> */}
      <Footer/>
    </div>
  );
}

export default Home