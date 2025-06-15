import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BackButton from "./BackButton";

const Calendar = ({ onBack, onComplete, isSubmitting }) => {
  const daysInMonth = 30;
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  const moodColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-gray-400",
    "bg-yellow-500",
    "bg-green-500",
    "bg-purple-500",
  ];
  const moods = [
    { id: "angry", label: "Terrible", emoji: "😠", color: "bg-red-500" },
    { id: "sad", label: "Down", emoji: "😢", color: "bg-blue-500" },
    { id: "neutral", label: "Puzzled", emoji: "😐", color: "bg-gray-400" },
    {
      id: "content",
      label: "Affectionate",
      emoji: "😊",
      color: "bg-yellow-500",
    },
    { id: "happy", label: "Joyful", emoji: "😄", color: "bg-green-500" },
    { id: "awe", label: "Amazed", emoji: "😍", color: "bg-purple-500" },
  ];

  return (
    <div className="space-y-8 relative">
      <BackButton onClick={onBack} />
      <div className="flex items-center justify-between mb-8">
        <div />
        <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
          November
        </h2>
        <div />
      </div>
      <div className="rounded-3xl p-0 max-w-4xl mx-auto bg-transparent shadow-none">
        <div className="flex items-center justify-between mb-4 px-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="flex-1 grid grid-cols-7 gap-2">
            {weekDays.map((day) => (
              <div
                key={day}
                className="text-center font-semibold text-gray-600 py-2 text-lg tracking-wide"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {day}
              </div>
            ))}
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-4 mb-8 px-2">
          {monthDays.map((day) => (
            <div
              key={day}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-md ${
                moodColors[day % moodColors.length]
              }`}
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700 }}
            >
              {String(day).padStart(2, "0")}
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-6 mt-2 mb-2">
          {moods.map((mood) => (
            <div
              key={mood.id}
              className="flex flex-col items-center min-w-[60px]"
            >
              <div
                className={`w-10 h-10 ${mood.color} rounded-2xl flex items-center justify-center text-xl mb-1 shadow`}
              >
                {mood.emoji}
              </div>
              <span
                className="text-xs text-gray-700 font-semibold"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {mood.label}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-4">
        <button
          onClick={onComplete}
          disabled={isSubmitting}
          className={`px-8 py-3 rounded-full font-semibold transition-all duration-200 transform text-lg tracking-wide shadow-md ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700 hover:scale-105"
          } text-white`}
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          {isSubmitting ? "Submitting..." : "Complete Check-in"}
        </button>
      </div>
    </div>
  );
};

export default Calendar;
