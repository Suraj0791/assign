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
      className="bg-white rounded-3xl max-w-5xl mx-auto relative pt-12 pb-12 min-h-[400px] flex flex-col items-center justify-center shadow-lg px-2 md:pt-16 md:pb-16 md:px-8"
      style={{ boxShadow: "0 8px 32px 0 rgba(31,38,135,0.18)" }}
    >
      <BackButton onClick={onBack} />
      <button
        className="absolute left-1/2 -translate-x-1/2 -top-8 bg-[#AEB6C1] text-white px-4 py-2 md:px-8 md:py-3 rounded-2xl font-semibold text-base md:text-lg shadow-lg border-2 border-[#AEB6C1]"
        style={{ zIndex: 20, fontFamily: "Montserrat, sans-serif" }}
      >
        <Clock className="inline-block w-4 h-4 md:w-5 md:h-5 mr-2 align-middle" />{" "}
        Set Reminder
      </button>
      <button
        className="absolute top-4 right-4 md:top-6 md:right-6 text-gray-600 hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-full px-2 py-1 md:px-4 md:py-2"
        onClick={onSkip}
        aria-label="Skip to next step"
      >
        Skip
      </button>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mt-8">
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
          <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto">
            <div className="absolute inset-0 border-[8px] md:border-[10px] border-[#2ED47A] rounded-full"></div>
            <div className="absolute inset-4 md:inset-6 bg-white rounded-full flex items-center justify-center">
              <div className="text-center relative w-full h-full">
                {[12, 3, 6, 9].map((num) => (
                  <div
                    key={num}
                    className={`absolute text-sm md:text-base lg:text-lg font-bold text-[#009688] ${
                      num === 12
                        ? "top-1 md:top-2 left-1/2 -translate-x-1/2"
                        : num === 3
                        ? "right-1 md:right-2 top-1/2 -translate-y-1/2"
                        : "hidden"
                    } ${
                      num === 6
                        ? "bottom-1 md:bottom-2 left-1/2 -translate-x-1/2"
                        : ""
                    } ${
                      num === 9
                        ? "left-1 md:left-2 top-1/2 -translate-y-1/2"
                        : ""
                    }`}
                  >
                    {num}
                  </div>
                ))}
                <div className="w-1 md:w-1.5 lg:w-2 h-12 md:h-16 lg:h-20 bg-[#009688] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom rotate-0"></div>
                <div className="w-0.5 md:w-0.75 lg:w-1 h-8 md:h-10 lg:h-12 bg-[#009688] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full origin-bottom rotate-90"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:w-1/2">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">
            Select Days
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-4 md:mb-8">
            {days.map((day) => (
              <button
                key={day.id}
                onClick={() => onDayToggle(day.label)}
                className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-base md:text-lg font-semibold transition-all duration-200 ${
                  selectedDays.includes(day.label) ||
                  (day.label === "All" && selectedDays.length === 7)
                    ? "bg-[#2ED47A] text-white"
                    : "bg-white border-2 border-gray-200 hover:border-gray-300"
                }`}
                aria-pressed={selectedDays.includes(day.label)}
                aria-label={day.label}
                tabIndex={0}
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
