// components/Reminders.js
import React from "react";
import { Clock } from "lucide-react";
import BackButton from "./BackButton";

const Reminders = ({
  reminderTime,
  onTimeChange,
  selectedDays,
  onDayToggle,
  onNext,
  onBack,
  onSkip,
}) => {
  const days = [
    { id: "sun", label: "Sun" },
    { id: "mon", label: "Mon" },
    { id: "tue", label: "Tue" },
    { id: "wed", label: "Wed" },
    { id: "thu", label: "Thu" },
    { id: "fri", label: "Fri" },
    { id: "sat", label: "Sat" },
    { id: "all", label: "All" },
  ];

  return (
    <div
      className="bg-white rounded-3xl max-w-5xl mx-auto relative pt-16 pb-16 min-h-[600px] flex flex-col items-center justify-center shadow-lg"
      style={{ boxShadow: "0 8px 32px 0 rgba(31,38,135,0.18)" }}
    >
      <BackButton onClick={onBack} />
      <button
        className="absolute left-1/2 -translate-x-1/2 -top-8 bg-[#AEB6C1] text-white px-8 py-3 rounded-2xl font-semibold text-lg shadow-lg border-2 border-[#AEB6C1]"
        style={{ zIndex: 20, fontFamily: "Montserrat, sans-serif" }}
      >
        <Clock className="inline-block w-5 h-5 mr-2 align-middle" /> Set
        Reminder
      </button>
      <button
        className="absolute top-6 right-6 text-gray-600 hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-full px-4 py-2"
        onClick={onSkip}
        aria-label="Skip to next step"
      >
        Skip
      </button>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 mt-8">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 mb-8 md:mb-0">
          <div
            className="text-5xl md:text-6xl font-bold text-[#009688] mb-2 tracking-wider"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {String(reminderTime.hour).padStart(2, "0")}:
            {String(reminderTime.minute).padStart(2, "0")}
          </div>
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => onTimeChange({ ...reminderTime, ampm: "am" })}
              className={`px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200 ${
                reminderTime.ampm === "am"
                  ? "bg-[#009688] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              am
            </button>
            <button
              onClick={() => onTimeChange({ ...reminderTime, ampm: "pm" })}
              className={`px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200 ${
                reminderTime.ampm === "pm"
                  ? "bg-[#009688] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              pm
            </button>
          </div>
          <div className="relative w-56 h-56 md:w-64 md:h-64 mx-auto">
            <div className="absolute inset-0 border-[10px] border-[#2ED47A] rounded-full"></div>
            <div className="absolute inset-6 bg-white rounded-full flex items-center justify-center">
              <div className="text-center relative w-full h-full">
                {[12, 3, 6, 9].map((num) => (
                  <div
                    key={num}
                    className={`absolute text-lg font-bold text-[#009688] ${
                      num === 12
                        ? "top-2 left-1/2 -translate-x-1/2"
                        : num === 3
                        ? "right-2 top-1/2 -translate-y-1/2"
                        : "hidden"
                    } ${
                      num === 6 ? "bottom-2 left-1/2 -translate-x-1/2" : ""
                    } ${num === 9 ? "left-2 top-1/2 -translate-y-1/2" : ""}`}
                  >
                    {num}
                  </div>
                ))}
                <div className="w-2 h-20 bg-[#009688] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom rotate-0"></div>
                <div className="w-1 h-12 bg-[#009688] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom rotate-90"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <h3
            className="text-3xl font-bold text-gray-800 mb-6 tracking-wide"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Select Days
          </h3>
          <div className="grid grid-cols-4 grid-rows-2 gap-x-10 gap-y-8 mb-8">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => onDayToggle(day.label)}
                className={`w-20 h-20 md:w-24 md:h-24 rounded-full border-2 text-xl font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 ${
                  selectedDays.includes(day.label) ||
                  (day.label === "All" && selectedDays.length === 7)
                    ? "bg-[#009688] text-white border-[#009688]"
                    : "bg-white border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {day.label}
              </button>
            ))}
          </div>
          <button
            onClick={onNext}
            className="w-full max-w-xs bg-[#145A32] hover:bg-[#117A65] text-white py-4 rounded-2xl font-semibold text-xl transition-all duration-200 transform hover:scale-105 mt-2 shadow-lg"
            style={{
              fontFamily: "Montserrat, sans-serif",
              letterSpacing: "0.04em",
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reminders;
