// components/MoodDetail.js
import React from 'react';

const MoodDetail = ({ 
  selectedMood, 
  moodIntensity, 
  onIntensityChange, 
  selectedStages, 
  onStageToggle, 
  onBack, 
  onNext 
}) => {
  const moods = [
    { id: 'angry', label: 'Angry', emoji: '😠', color: 'bg-red-500' },
    { id: 'sad', label: 'Sad', emoji: '😢', color: 'bg-blue-500' },
    { id: 'neutral', label: 'Neutral', emoji: '😐', color: 'bg-gray-400' },
    { id: 'content', label: 'Content', emoji: '😊', color: 'bg-yellow-500' },
    { id: 'happy', label: 'Happy', emoji: '😄', color: 'bg-green-500' },
    { id: 'awe', label: 'Awe', emoji: '😍', color: 'bg-purple-500' }
  ];

  const angerStages = ['Irritated', 'Annoyed', 'Frustrated', 'Fed Up', 'Grumpy', 'Touchy'];
  const sadnessStages = ['Down', 'Disappointment', 'Listless', 'Apathy', 'Disheartened'];

  const moodData = moods.find(m => m.id === selectedMood) || moods[0];
  const stages = selectedMood === 'angry' ? angerStages : sadnessStages;
  const moodTitle = selectedMood === 'angry' ? 'Anger' : 'Sadness';

  return (
    <div className="text-center space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">{moodTitle} is a complex emotion</h2>
      <p className="text-gray-600 text-lg mb-8">
        Identifying your emotions is the first step to releasing them
      </p>
      
      <div className="flex justify-center mb-8">
        <div className={`w-24 h-24 ${moodData.color} rounded-3xl flex items-center justify-center text-4xl shadow-lg`}>
          {moodData.emoji}
        </div>
      </div>
      
      <div className="max-w-md mx-auto mb-8">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Slightly {moodData.label}</span>
          <span>Very {moodData.label}</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={moodIntensity}
          onChange={(e) => onIntensityChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, ${moodData.color.replace('bg-', '#')} 0%, ${moodData.color.replace('bg-', '#')} ${moodIntensity}%, #e5e7eb ${moodIntensity}%, #e5e7eb 100%)`
          }}
        />
      </div>
      
      <div className="mb-8">
        <p className="text-gray-700 font-medium mb-4">What stage is your {moodTitle.toLowerCase()} in?</p>
        <div className="flex flex-wrap gap-3 justify-center max-w-lg mx-auto">
          {stages.map((stage) => (
            <button
              key={stage}
              onClick={() => onStageToggle(stage)}
              className={`px-4 py-2 rounded-full border-2 transition-all duration-200 ${
                selectedStages.includes(stage)
                  ? `${moodData.color} text-white border-transparent`
                  : 'bg-white border-gray-300 hover:border-gray-400'
              }`}
            >
              {stage}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex space-x-4 justify-center">
        <button 
          onClick={onBack}
          className="bg-white border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:bg-purple-50"
        >
          Add Emotion
        </button>
        <button 
          onClick={onNext}
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default MoodDetail;