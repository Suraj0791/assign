import React from "react";
import { motion } from "framer-motion";

const recommendations = [
  {
    title: "9 Habits to stay happy",
    type: "Video",
    duration: "7 min",
    color: "bg-green-100",
  },
  {
    title: "9 Habits to stay happy",
    type: "Test",
    duration: "7 min",
    color: "bg-yellow-100",
  },
  {
    title: "9 Habits to stay happy",
    type: "Audio",
    duration: "7 min",
    color: "bg-pink-100",
  },
];

const Complete = ({ onReset, apiResponse, error }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center space-y-4 md:space-y-8 px-2 md:px-0"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Illustration and congratulatory message */}
      <div className="flex flex-col items-center space-y-2 md:space-y-4">
        <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-green-100 flex items-center justify-center text-4xl md:text-5xl mx-auto">
          <span role="img" aria-label="celebrate">
            🎉
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2 mt-1 md:mt-2">
          Great job completing your session!
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-xl mx-auto mb-1 md:mb-2">
          Want to make this a habit? Set a reminder for next time.
        </p>
      </div>
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-4 mb-2 md:mb-4">
        <button
          className="bg-white border-2 border-green-600 text-green-700 px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-base md:text-lg shadow hover:bg-green-50 transition-all duration-200"
          onClick={onReset}
        >
          Set Reminder
        </button>
        <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-base md:text-lg shadow transition-all duration-200">
          View Analytics
        </button>
      </div>
      {/* Recommendations */}
      <div className="text-left mt-4 md:mt-8">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 md:mb-4 ml-2">
          My Recommendations
        </h3>
        <div className="flex space-x-2 md:space-x-4 overflow-x-auto pb-2">
          {recommendations.map((rec, idx) => (
            <div
              key={idx}
              className={`min-w-[180px] md:min-w-[220px] rounded-2xl p-3 md:p-4 ${rec.color} shadow flex flex-col justify-between`}
            >
              <div className="font-semibold text-sm md:text-base text-gray-800 mb-1 md:mb-2">
                {rec.title}
              </div>
              <div className="flex items-center space-x-1 md:space-x-2 text-xs text-gray-600 mb-1 md:mb-2">
                <span className="bg-white rounded-full px-1 py-0.5 md:px-2 md:py-1 shadow border border-gray-200">
                  {rec.type}
                </span>
                <span>{rec.duration}</span>
              </div>
              <div className="flex justify-end">
                <button className="text-green-700 font-bold text-xs md:text-sm hover:underline">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-1 md:mt-2">
          <button className="text-gray-600 hover:text-purple-700 font-semibold text-xs md:text-sm px-2 py-1 md:px-4 md:py-2 rounded transition-all duration-200">
            Explore other features
          </button>
        </div>
      </div>
      {/* Error state fallback */}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 md:mt-8"
        >
          <div className="w-16 h-16 md:w-24 md:h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-4">
            <span className="text-3xl md:text-4xl">❌</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-red-700 mb-1 md:mb-2">
            Check-in Failed
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-2 md:mb-4 max-w-md mx-auto">
            There was an error submitting your check-in. Please try again.
          </p>
          <button
            onClick={onReset}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-base md:text-lg transition-all duration-200"
          >
            Try Again
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Complete;
