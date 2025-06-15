// components/Instructions.js
import React from 'react';

const Instructions = ({ onNext }) => {
  return (
    <div className="text-center space-y-8">
      <div className="flex justify-center items-center space-x-2 mb-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <span className="text-2xl">📚</span>
        </div>
        <div className="flex space-x-1">
          <span className="text-2xl">😊</span>
          <span className="text-2xl">😐</span>
          <span className="text-2xl">😢</span>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Instructions</h1>
      
      <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
        Welcome to the Stress scale. This is a quiz to identify our stress levels ranging from high to low and navigate through such situations.
      </p>
      
      <div className="space-y-6 text-left max-w-md mx-auto">
        <div className="flex items-start space-x-3">
          <span className="text-green-600 text-xl">✓</span>
          <p className="text-gray-700">Read the statements carefully and relate to each of the statements.</p>
        </div>
        
        <div className="flex items-start space-x-3">
          <span className="text-blue-600 text-xl">👆</span>
          <p className="text-gray-700">Choose the option which best describes your mood.</p>
        </div>
      </div>
      
      <button 
        onClick={onNext}
        className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 mt-8"
      >
        Start Check-in
      </button>
    </div>
  );
};

export default Instructions;