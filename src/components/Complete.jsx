import React from "react";

const Complete = ({ onReset, apiResponse, error }) => {
  return (
    <div className="text-center space-y-8">
      <div
        className={`w-24 h-24 ${
          error ? "bg-red-100" : "bg-green-100"
        } rounded-full flex items-center justify-center mx-auto mb-8`}
      >
        <span className="text-4xl">{error ? "❌" : "✅"}</span>
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        {error ? "Check-in Failed" : "Check-in Complete!"}
      </h2>
      <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
        {error
          ? "There was an error submitting your check-in. Please try again."
          : "Thank you for taking the time to check in with yourself. Your mood has been recorded."}
      </p>
      {apiResponse && !error && (
        <p className="text-sm text-gray-500">Check-in ID: {apiResponse.id}</p>
      )}
      <button
        onClick={onReset}
        className={`${
          error
            ? "bg-red-600 hover:bg-red-700"
            : "bg-green-600 hover:bg-green-700"
        } text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105`}
      >
        {error ? "Try Again" : "Start New Check-in"}
      </button>
    </div>
  );
};

export default Complete;
