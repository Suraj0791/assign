import React from "react";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import BackButton from "./BackButton";

const Calendar = ({ onBack, onComplete, isSubmitting }) => {
  const daysInMonth = 30;
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const moodColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-gray-400",
    "bg-yellow-500",
    "bg-green-500",
    "bg-purple-500",
  ];

  const moods = [
    { id: "angry", label: "Angry", emoji: "😠", color: "bg-red-500" },
    { id: "sad", label: "Sad", emoji: "😢", color: "bg-blue-500" },
    { id: "neutral", label: "Neutral", emoji: "😐", color: "bg-gray-400" },
    { id: "content", label: "Content", emoji: "😊", color: "bg-yellow-500" },
    { id: "happy", label: "Happy", emoji: "😄", color: "bg-green-500" },
    { id: "awe", label: "Awe", emoji: "😍", color: "bg-purple-500" },
  ];

  return (
    <div className="space-y-8 relative">
      <BackButton onClick={onBack} />
      <div className="flex items-center justify-between mb-8">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="bg-white rounded-3xl p-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h2 className="text-2xl font-bold text-gray-800">November</h2>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4">
          {["M", "T", "W", "T", "F", "S", "S"].map((day) => (
            <div
              key={day}
              className="text-center font-medium text-gray-600 py-2"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 mb-8">
          {monthDays.map((day) => (
            <button
              key={day}
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-medium ${
                moodColors[Math.floor(Math.random() * moodColors.length)]
              }`}
            >
              {String(day).padStart(2, "0")}
            </button>
          ))}
        </div>

        <div className="flex justify-center space-x-8">
          {moods.map((mood) => (
            <div key={mood.id} className="text-center">
              <div
                className={`w-12 h-12 ${mood.color} rounded-2xl flex items-center justify-center text-2xl mb-2`}
              >
                {mood.emoji}
              </div>
              <span className="text-sm text-gray-600">{mood.label}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-end mt-8">
          <div className="text-right">
            <div className="text-sm text-gray-600 mb-2">High</div>
            <div className="text-sm text-gray-600 mb-2">Medium</div>
            <div className="text-sm text-gray-600 mb-2">Low</div>
            <div className="text-sm text-gray-600">0</div>
            <div className="w-8 h-16 bg-gradient-to-t from-red-200 to-red-500 rounded mt-2"></div>
            <div className="text-sm text-gray-600 mt-2">Terrible</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onComplete}
          disabled={isSubmitting}
          className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 transform ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700 hover:scale-105"
          } text-white`}
        >
          {isSubmitting ? "Submitting..." : "Complete Check-in"}
        </button>
      </div>
    </div>
  );
};

export default Calendar;
