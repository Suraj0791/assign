// components/Reminders.js
import React from 'react';
import { Clock } from 'lucide-react';

const Reminders = ({ reminderTime, onTimeChange, selectedDays, onDayToggle, onNext }) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'All'];

  return (
    <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto">
      <div className="flex items-center justify-center mb-8">
        <div className="bg-gray-600 text-white px-6 py-3 rounded-2xl flex items-center space-x-2">
          <Clock className="w-5 h-5" />
          <span className="font-medium">Set Remainder</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-center">
          <div className="text-6xl font-bold text-teal-600 mb-4">
            {String(reminderTime.hour).padStart(2, '0')}:{String(reminderTime.minute).padStart(2, '0')}
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <button className="px-4 py-2 bg-gray-100 rounded-lg">am</button>
            <button className="px-4 py-2 bg-gray-100 rounded-lg">pm</button>
          </div>
          
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 border-8 border-green-400 rounded-full"></div>
            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
              <div className="text-center">
                {Array.from({length: 12}, (_, i) => (
                  <div key={i} className={`absolute text-sm ${i === 0 ? 'top-2' : i === 3 ? 'right-2' : i === 6 ? 'bottom-2' : i === 9 ? 'left-2' : 'hidden'}`}>
                    {i === 0 ? '12' : i === 3 ? '3' : i === 6 ? '6' : '9'}
                  </div>
                ))}
                <div className="w-2 h-16 bg-teal-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom rotate-0"></div>
                <div className="w-1 h-12 bg-teal-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom rotate-90"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Select Days</h3>
          <div className="grid grid-cols-4 gap-4 mb-8">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => onDayToggle(day)}
                className={`w-20 h-20 rounded-full border-2 transition-all duration-200 ${
                  selectedDays.includes(day) || (day === 'All' && selectedDays.length === 7)
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white border-gray-300 hover:border-gray-400'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
          
          <button 
            onClick={onNext}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition-all duration-200 transform hover:scale-105"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reminders;