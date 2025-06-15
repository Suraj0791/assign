// components/Reason.js
import React from "react";
import BackButton from "./BackButton";

const moodConfig = {
  angry: {
    label: "Angry",
    emoji: "😠",
    color: "bg-red-500",
    stages: ["Annoyed", "Fed up", "Tired"],
  },
  sad: {
    label: "Sad",
    emoji: "😢",
    color: "bg-blue-500",
    stages: ["Down", "Disappointment", "Listless"],
  },
  neutral: {
    label: "Neutral",
    emoji: "😐",
    color: "bg-gray-400",
    stages: ["Puzzled", "Calm", "Centered"],
  },
  content: {
    label: "Content",
    emoji: "😊",
    color: "bg-yellow-500",
    stages: ["Satisfied", "Comfortable", "At Ease"],
  },
  happy: {
    label: "Happy",
    emoji: "😄",
    color: "bg-green-500",
    stages: ["Joyful", "Excited", "Cheerful"],
  },
  awe: {
    label: "Awe",
    emoji: "😍",
    color: "bg-purple-500",
    stages: ["Amazed", "Inspired", "Wonderstruck"],
  },
};

const Reason = ({
  reasonText,
  onReasonChange,
  selectedMoods = [],
  onBack,
  onNext,
  onSkip,
}) => {
  const isMulti = selectedMoods.length > 1;
  return (
    <div className="text-center space-y-8 relative">
      <BackButton onClick={onBack} />
      <div className="flex items-center justify-between mb-8">
        <button className="text-gray-600 hover:text-gray-800" onClick={onSkip}>
          Skip
        </button>
      </div>
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        {isMulti
          ? "What is making you feel these ways?"
          : "What is making you feel this way?"}
      </h2>
      <div className="max-w-2xl mx-auto mb-8">
        <textarea
          placeholder={
            isMulti
              ? "We feel this way because..."
              : "I feel this way because..."
          }
          value={reasonText}
          onChange={(e) => onReasonChange(e.target.value)}
          className="w-full h-64 p-6 bg-white border-2 border-gray-200 rounded-2xl resize-none focus:outline-none focus:border-purple-400 text-gray-700"
        />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
        {selectedMoods.map((moodId) => {
          const mood = moodConfig[moodId] || moodConfig.neutral;
          return (
            <div
              key={moodId}
              className="flex flex-col items-center space-y-2 min-w-[120px]"
            >
              <span
                className={`w-12 h-12 ${mood.color} rounded-2xl flex items-center justify-center text-2xl mb-1`}
              >
                {mood.emoji}
              </span>
              <span className="text-gray-700 font-medium">{mood.label}</span>
              <div className="flex flex-wrap gap-1 justify-center">
                {mood.stages.map((stage, idx) => (
                  <span
                    key={stage + idx}
                    className="text-xs text-gray-600 bg-gray-100 rounded-full px-2 py-1"
                  >
                    {stage}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={onNext}
        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
      >
        Complete
      </button>
    </div>
  );
};

export default Reason;
