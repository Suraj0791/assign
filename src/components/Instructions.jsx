// components/Instructions.js
import React from "react";

const Instructions = ({ onNext }) => {
  return (
    <div className="text-center space-y-4 md:space-y-8 px-2 md:px-0">
      <div className="flex justify-center items-center space-x-1 md:space-x-2 mb-2 md:mb-4">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center">
          <span className="text-xl md:text-2xl">📚</span>
        </div>
        <div className="flex space-x-0.5 md:space-x-1">
          <span className="text-xl md:text-2xl">😊</span>
          <span className="text-xl md:text-2xl">😐</span>
          <span className="text-xl md:text-2xl">😢</span>
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-4">
        Instructions
      </h1>

      <p className="text-gray-600 text-base md:text-lg mb-4 md:mb-8 max-w-md mx-auto">
        Welcome to the Stress scale. This is a quiz to identify our stress
        levels ranging from high to low and navigate through such situations.
      </p>

      <div className="space-y-3 md:space-y-6 text-left max-w-md mx-auto">
        <div className="flex items-start space-x-2 md:space-x-3">
          <span className="text-green-600 text-lg md:text-xl">✓</span>
          <p className="text-gray-700 text-sm md:text-base">
            Read the statements carefully and relate to each of the statements.
          </p>
        </div>

        <div className="flex items-start space-x-2 md:space-x-3">
          <span className="text-blue-600 text-lg md:text-xl">👆</span>
          <p className="text-gray-700 text-sm md:text-base">
            Choose the option which best describes your mood.
          </p>
        </div>
      </div>

      <button
        onClick={onNext}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-base md:text-lg transition-all duration-200 transform hover:scale-105 mt-4 md:mt-8"
      >
        Start Check-in
      </button>
    </div>
  );
};

export default Instructions;
