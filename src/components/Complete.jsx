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
      className="text-center space-y-8"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Illustration and congratulatory message */}
      <div className="flex flex-col items-center space-y-4">
        <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center text-5xl mx-auto">
          <span role="img" aria-label="celebrate">
            🎉
          </span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2 mt-2">
          Great job completing your session!
        </h2>
        <p className="text-gray-600 text-lg max-w-xl mx-auto mb-2">
          Want to make this a habit? Set a reminder for next time.
        </p>
      </div>
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
        <button
          className="bg-white border-2 border-green-600 text-green-700 px-8 py-3 rounded-full font-semibold text-lg shadow hover:bg-green-50 transition-all duration-200"
          onClick={onReset}
        >
          Set Reminder
        </button>
        <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-full font-semibold text-lg shadow transition-all duration-200">
          View Analytics
        </button>
      </div>
      {/* Recommendations */}
      <div className="text-left mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4 ml-2">
          My Recommendations
        </h3>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {recommendations.map((rec, idx) => (
            <div
              key={idx}
              className={`min-w-[220px] rounded-2xl p-4 ${rec.color} shadow flex flex-col justify-between`}
            >
              <div className="font-semibold text-base text-gray-800 mb-2">
                {rec.title}
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-600 mb-2">
                <span className="bg-white rounded-full px-2 py-1 shadow border border-gray-200">
                  {rec.type}
                </span>
                <span>{rec.duration}</span>
              </div>
              <div className="flex justify-end">
                <button className="text-green-700 font-bold text-sm hover:underline">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-2">
          <button className="text-gray-600 hover:text-purple-700 font-semibold text-sm px-4 py-2 rounded transition-all duration-200">
            Explore other features
          </button>
        </div>
      </div>
      {/* Error state fallback */}
      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8"
        >
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">❌</span>
          </div>
          <h2 className="text-2xl font-bold text-red-700 mb-2">
            Check-in Failed
          </h2>
          <p className="text-gray-600 text-lg mb-4 max-w-md mx-auto">
            There was an error submitting your check-in. Please try again.
          </p>
          <button
            onClick={onReset}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200"
          >
            Try Again
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Complete;
