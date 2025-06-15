// components/MoodSelection.js
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackButton from "./BackButton";

const MoodSelection = ({
  selectedMood,
  selectedMoods,
  onMoodSelect,
  onNext,
  onBack,
  showBack,
}) => {
  const moods = [
    { id: "angry", label: "Angry", emoji: "😠", color: "bg-red-500" },
    { id: "sad", label: "Sad", emoji: "😢", color: "bg-blue-500" },
    { id: "neutral", label: "Neutral", emoji: "😐", color: "bg-gray-400" },
    { id: "content", label: "Content", emoji: "😊", color: "bg-yellow-500" },
    { id: "happy", label: "Happy", emoji: "😄", color: "bg-green-500" },
    { id: "awe", label: "Awe", emoji: "😍", color: "bg-purple-500" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center space-y-4 md:space-y-8 px-2 md:px-6 lg:px-8 relative"
    >
      {showBack && <BackButton onClick={onBack} />}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-4"
      >
        How are you feeling today?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-base md:text-lg lg:text-xl text-gray-600 mb-4 md:mb-8 max-w-2xl mx-auto"
      >
        No matter how you're feeling, it's okay. We're here to support you.
      </motion.p>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-8 max-w-4xl mx-auto mb-4 md:mb-8"
      >
        {moods.map((mood) => (
          <motion.button
            key={mood.id}
            variants={item}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onMoodSelect(mood.id)}
            className={`p-3 md:p-4 lg:p-6 rounded-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
              selectedMoods && selectedMoods.includes(mood.id)
                ? `${
                    mood.color
                  } text-white shadow-lg ring-2 ring-offset-2 ring-opacity-50 ring-${
                    mood.color.split("-")[1]
                  }-400`
                : "bg-white border-2 border-gray-200 hover:border-gray-300"
            }`}
            aria-pressed={selectedMoods && selectedMoods.includes(mood.id)}
            aria-label={mood.label}
            tabIndex={0}
          >
            <motion.div
              className="text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-2"
              animate={
                selectedMoods && selectedMoods.includes(mood.id)
                  ? { scale: [1, 1.2, 1] }
                  : {}
              }
              transition={{ duration: 0.3 }}
            >
              {mood.emoji}
            </motion.div>
            <div className="text-xs md:text-sm lg:text-base font-medium">
              {mood.label}
            </div>
          </motion.button>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-xs md:text-sm lg:text-base text-gray-600 mb-4 md:mb-8 max-w-xl mx-auto"
      >
        Choose the feeling that is closest to how you are feeling
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        disabled={!selectedMood}
        className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 disabled:transform-none disabled:cursor-not-allowed shadow-md hover:shadow-lg"
      >
        Complete
      </motion.button>
    </motion.div>
  );
};

export default MoodSelection;
