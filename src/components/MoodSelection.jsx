// components/MoodSelection.js
import React from 'react';

const MoodSelection = ({ selectedMood, onMoodSelect, onNext }) => {
  const moods = [
    { id: 'angry', label: 'Angry', emoji: '😠', color: 'bg-red-500' },
    { id: 'sad', label: 'Sad', emoji: '😢', color: 'bg-blue-500' },
    { id: 'neutral', label: 'Neutral', emoji: '😐', color: 'bg-gray-400' },
    { id: 'content', label: 'Content', emoji: '😊', color: 'bg-yellow-500' },
    { id: 'happy', label: 'Happy', emoji: '😄', color: 'bg-green-500' },
    { id: 'awe', label: 'Awe', emoji: '😍', color: 'bg-purple-500' }
  ];

  return (
    <div className="text-center space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">How are you feeling today?</h2>
      <p className="text-gray-600 text-lg mb-8">
        No matter how you're feeling, it's okay. We're here to support you.
      </p>
      
      <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-8">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => onMoodSelect(mood.id)}
            className={`p-6 rounded-2xl transition-all duration-200 transform hover:scale-105 ${
              selectedMood === mood.id 
                ? `${mood.color} text-white shadow-lg` 
                : 'bg-white border-2 border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="text-4xl mb-2">{mood.emoji}</div>
            <div className="text-sm font-medium">{mood.label}</div>
          </button>
        ))}
      </div>
      
      <p className="text-gray-600 mb-8">Choose the feeling that is closest to how you are feeling</p>
      
      <button 
        onClick={onNext}
        disabled={!selectedMood}
        className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
      >
        Complete
      </button>
    </div>
  );
};

export default MoodSelection;