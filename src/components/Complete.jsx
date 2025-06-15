import React from "react";
import { motion } from "framer-motion";

const Complete = ({ onReset, apiResponse, error }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center space-y-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`w-24 h-24 ${
          error ? "bg-red-100" : "bg-green-100"
        } rounded-full flex items-center justify-center mx-auto mb-8`}
      >
        <motion.span
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl"
        >
          {error ? "❌" : "✅"}
        </motion.span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-3xl font-bold text-gray-800 mb-4"
      >
        {error ? "Check-in Failed" : "Check-in Complete!"}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-600 text-lg mb-8 max-w-md mx-auto"
      >
        {error
          ? "There was an error submitting your check-in. Please try again."
          : "Thank you for taking the time to check in with yourself. Your mood has been recorded."}
      </motion.p>
      {apiResponse && !error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm text-gray-500"
        >
          Check-in ID: {apiResponse.id}
        </motion.p>
      )}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onReset}
        className={`${
          error
            ? "bg-red-600 hover:bg-red-700"
            : "bg-green-600 hover:bg-green-700"
        } text-white px-8 py-3 rounded-full font-semibold transition-all duration-200`}
      >
        {error ? "Try Again" : "Start New Check-in"}
      </motion.button>
    </motion.div>
  );
};

export default Complete;
