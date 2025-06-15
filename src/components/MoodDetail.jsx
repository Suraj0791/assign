// components/MoodDetail.js
import React from "react";
import { motion } from "framer-motion";
import BackButton from "./BackButton";

const MoodDetail = ({
  selectedMood,
  moodIntensity,
  onIntensityChange,
  selectedStages,
  onStageToggle,
  onBack,
  onNext,
}) => {
  const moodConfig = {
    angry: {
      label: "Angry",
      emoji: "😠",
      color: "bg-red-500",
      stages: [
        "Irritated",
        "Annoyed",
        "Frustrated",
        "Fed Up",
        "Grumpy",
        "Touchy",
      ],
      description:
        "Anger is a natural emotion that can help us identify problems and take action.",
    },
    sad: {
      label: "Sad",
      emoji: "😢",
      color: "bg-blue-500",
      stages: ["Down", "Disappointment", "Listless", "Apathy", "Disheartened"],
      description:
        "Sadness is a complex emotion that helps us process loss and change.",
    },
    neutral: {
      label: "Neutral",
      emoji: "😐",
      color: "bg-gray-400",
      stages: ["Calm", "Balanced", "Centered", "Present", "Mindful"],
      description: "Neutrality is a state of balance and awareness.",
    },
    content: {
      label: "Content",
      emoji: "😊",
      color: "bg-yellow-500",
      stages: ["Satisfied", "Comfortable", "At Ease", "Peaceful", "Grateful"],
      description: "Contentment is a state of peaceful satisfaction.",
    },
    happy: {
      label: "Happy",
      emoji: "😄",
      color: "bg-green-500",
      stages: ["Joyful", "Excited", "Cheerful", "Delighted", "Thrilled"],
      description: "Happiness is a state of well-being and joy.",
    },
    awe: {
      label: "Awe",
      emoji: "😍",
      color: "bg-purple-500",
      stages: ["Amazed", "Inspired", "Wonderstruck", "Enchanted", "Mesmerized"],
      description: "Awe is a feeling of reverential respect mixed with wonder.",
    },
  };

  const currentMood = moodConfig[selectedMood] || moodConfig.neutral;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center space-y-4 md:space-y-8 relative px-2 md:px-0"
    >
      <BackButton onClick={onBack} />
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-2xl md:text-3xl font-bold text-gray-800 mb-1 md:mb-2"
      >
        {currentMood.label} is a complex emotion
      </motion.h2>

      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-gray-600 text-base md:text-lg mb-4 md:mb-8"
      >
        {currentMood.description}
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="flex justify-center mb-4 md:mb-8"
      >
        <div
          className={`w-16 h-16 md:w-24 md:h-24 ${currentMood.color} rounded-3xl flex items-center justify-center text-3xl md:text-4xl shadow-lg`}
        >
          {currentMood.emoji}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-md mx-auto mb-4 md:mb-8"
      >
        <div className="flex justify-between text-xs md:text-sm text-gray-600 mb-1 md:mb-2">
          <span>Slightly {currentMood.label}</span>
          <span>Very {currentMood.label}</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={moodIntensity}
          onChange={(e) => onIntensityChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          style={{
            background: `linear-gradient(to right, ${currentMood.color.replace(
              "bg-",
              "#"
            )} 0%, ${currentMood.color.replace(
              "bg-",
              "#"
            )} ${moodIntensity}%, #e5e7eb ${moodIntensity}%, #e5e7eb 100%)`,
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-4 md:mb-8"
      >
        <p className="text-gray-700 font-medium mb-2 md:mb-4 text-sm md:text-base">
          What stage is your {currentMood.label.toLowerCase()} in?
        </p>
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center max-w-lg mx-auto">
          {currentMood.stages.map((stage) => (
            <motion.button
              key={stage}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onStageToggle(stage)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full border-2 transition-all duration-200 text-sm md:text-base ${
                selectedStages.includes(stage)
                  ? `${currentMood.color} text-white border-transparent`
                  : "bg-white border-gray-300 hover:border-gray-400"
              }`}
            >
              {stage}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex space-x-2 md:space-x-4 justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="bg-white border-2 border-purple-600 text-purple-600 px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-base md:text-lg transition-all duration-200 hover:bg-purple-50"
        >
          Add Emotion
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNext}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-base md:text-lg transition-all duration-200"
        >
          Continue
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default MoodDetail;
