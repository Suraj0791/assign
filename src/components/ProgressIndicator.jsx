import React from 'react';

const ProgressIndicator = ({ steps, currentStep }) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="flex space-x-2">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentStep ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;