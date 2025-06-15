// components/Reason.js
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const Reason = ({ reasonText, onReasonChange, selectedMood, onBack, onNext }) => {
  const moods = [
    { id: 'angry', label: 'Angry', emoji: '😠', color: 'bg-red-500' },
    { id: 'sad', label: 'Sad', emoji: '😢', color: 'bg-blue-500' },
    { id: 'neutral', label: 'Neutral', emoji: '😐', color: 'bg-gray-400' },
    { id: 'content', label: 'Content', emoji: '😊', color: 'bg-yellow-500' },
    { id: 'happy', label: 'Happy', emoji: '😄', color: 'bg-green-500' },
    { id: 'awe', label: 'Awe', emoji: '😍', color: 'bg-purple-500' }
  ];

  const moodData = moods.find(m => m.id === selectedMood) || moods[0];

  return (
    <div className="text-center space-y-8">
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
        <button className="text-gray-600 hover:text-gray-800">Skip</button>
      </div>
      
      <h2 className="text-3xl font-bold text-gray-800 mb-8">What is making you feel this way?</h2>
      
      <div className="max-w-2xl mx-auto mb-8">
        <textarea
          placeholder="I feel this way because....."
          value={reasonText}
          onChange={(e) => onReasonChange(e.target.value)}
          className="w-full h-64 p-6 bg-white border-2 border-gray-200 rounded-2xl resize-none focus:outline-none focus:border-purple-400 text-gray-700"
        />
      </div>
      
      <div className="flex items-center space-x-4 justify-center mb-8">
        <span className="text-gray-700 font-medium">Angry</span>
        <div className="flex space-x-2">
          <span className="text-sm text-gray-600">Annoyed</span>
          <span className="text-sm text-gray-600">•</span>
          <span className="text-sm text-gray-600">Fed up</span>
          <span className="text-sm text-gray-600">•</span>
          <span className="text-sm text-gray-600">Tired</span>
        </div>
        <div className={`w-12 h-12 ${moodData.color} rounded-2xl flex items-center justify-center text-2xl`}>
          {moodData.emoji}
        </div>
      </div>
      
      <button 
        onClick={onNext}
        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
      >
        Complete
      </button>
    </div>
  );
};

export default Reason;