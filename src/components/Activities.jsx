// components/Activities.js
import React from "react";
import BackButton from "./BackButton";

const Activities = ({
  selectedActivities,
  onActivityToggle,
  selectedMood,
  onNext,
  onBack,
}) => {
  const moods = [
    { id: "angry", label: "Angry", emoji: "😠", color: "bg-red-500" },
    { id: "sad", label: "Sad", emoji: "😢", color: "bg-blue-500" },
    { id: "neutral", label: "Neutral", emoji: "😐", color: "bg-gray-400" },
    { id: "content", label: "Content", emoji: "😊", color: "bg-yellow-500" },
    { id: "happy", label: "Happy", emoji: "😄", color: "bg-green-500" },
    { id: "awe", label: "Awe", emoji: "😍", color: "bg-purple-500" },
  ];

  const activities = [
    "Exercise",
    "Work",
    "Social",
    "Community",
    "Events",
    "Home",
    "Play",
    "Sports",
    "Arts",
    "Cooking",
    "Comparing",
    "Music",
    "Journal",
    "TV/ Show",
    "Stretching",
    "Called a loved one",
    "Reading",
    "Study",
    "Nature",
    "Comedy",
    "Hobbies",
    "Playing with Pets",
    "Treating Yourself",
    "Doom scrolling",
    "Overworking",
    "Substance Use",
    "Comparing",
    "Family",
  ];

  const moodData = moods.find((m) => m.id === selectedMood) || moods[0];

  return (
    <div className="text-center space-y-8 relative">
      <BackButton onClick={onBack} />
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        What did you do today?
      </h2>
      <p className="text-gray-600 text-lg mb-8">Choose upto 5 activities</p>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-3 max-w-4xl mx-auto mb-8">
        {activities.map((activity) => (
          <button
            key={activity}
            onClick={() => onActivityToggle(activity)}
            className={`px-4 py-3 rounded-full border-2 transition-all duration-200 text-sm ${
              selectedActivities.includes(activity)
                ? "bg-green-500 text-white border-green-500"
                : "bg-white border-gray-300 hover:border-gray-400"
            }`}
          >
            {activity}
          </button>
        ))}
      </div>

      <div className="flex items-center space-x-4 justify-center mb-8">
        <span className="text-gray-700 font-medium">Angry</span>
        <div className="flex space-x-2">
          <span className="text-sm text-gray-600">Annoyed</span>
          <span className="text-sm text-gray-600">•</span>
          <span className="text-sm text-gray-600">Fed up</span>
        </div>
        <div
          className={`w-12 h-12 ${moodData.color} rounded-2xl flex items-center justify-center text-2xl`}
        >
          {moodData.emoji}
        </div>
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

export default Activities;
