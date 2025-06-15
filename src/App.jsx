// App.js
import React, { useState, useCallback, memo } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Instructions from "./components/Instructions";
import MoodSelection from "./components/MoodSelection";
import MoodDetail from "./components/MoodDetail";
import Reason from "./components/Reason";
import Activities from "./components/Activities";
import Reminders from "./components/Reminders";
import Calendar from "./components/Calendar";
import Complete from "./components/Complete";
import ProgressIndicator from "./components/ProgressIndicator";

// Memoize components to prevent unnecessary re-renders
const MemoizedInstructions = memo(Instructions);
const MemoizedMoodSelection = memo(MoodSelection);
const MemoizedMoodDetail = memo(MoodDetail);
const MemoizedReason = memo(Reason);
const MemoizedActivities = memo(Activities);
const MemoizedReminders = memo(Reminders);
const MemoizedCalendar = memo(Calendar);
const MemoizedComplete = memo(Complete);

const MoodCheckinApp = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedMood, setSelectedMood] = useState("");
  const [moodIntensity, setMoodIntensity] = useState(50);
  const [selectedStages, setSelectedStages] = useState([]);
  const [reasonText, setReasonText] = useState("");
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [reminderTime, setReminderTime] = useState({
    hour: 3,
    minute: 0,
    ampm: "am",
  });
  const [selectedDays, setSelectedDays] = useState(["Sat"]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);

  const steps = [
    "Instructions",
    "Mood Selection",
    "Mood Detail",
    "Reason",
    "Activities",
    "Reminders",
    "Calendar",
  ];

  const pageVariants = {
    initial: {
      opacity: 0,
      x: 20,
    },
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: -20,
    },
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5,
  };

  // Memoize handlers to prevent unnecessary re-renders
  const handleNext = useCallback(() => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep, steps.length]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep]);

  const handleComplete = useCallback(async () => {
    setIsSubmitting(true);
    setError(null);

    const checkInData = {
      mood: selectedMood,
      intensity: moodIntensity,
      stages: selectedStages,
      reason: reasonText,
      activities: selectedActivities,
      reminder: {
        time: reminderTime,
        days: selectedDays,
      },
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        checkInData
      );
      console.log("Mood check-in submitted successfully:", response.data);
      setApiResponse(response.data);
      setIsComplete(true);
    } catch (error) {
      console.error("Failed to submit mood check-in:", error);
      setError(error.message || "Failed to submit check-in");
    } finally {
      setIsSubmitting(false);
    }
  }, [
    selectedMood,
    moodIntensity,
    selectedStages,
    reasonText,
    selectedActivities,
    reminderTime,
    selectedDays,
  ]);

  const handleReset = useCallback(() => {
    setCurrentStep(0);
    setIsComplete(false);
    setSelectedMood("");
    setSelectedStages([]);
    setReasonText("");
    setSelectedActivities([]);
    setMoodIntensity(50);
    setReminderTime({ hour: 3, minute: 0, ampm: "am" });
    setSelectedDays(["Sat"]);
    setApiResponse(null);
    setError(null);
  }, []);

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <MemoizedComplete
            onReset={handleReset}
            apiResponse={apiResponse}
            error={error}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-200 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="w-full"
          >
            {currentStep === 0 && <MemoizedInstructions onNext={handleNext} />}
            {currentStep === 1 && (
              <MemoizedMoodSelection
                selectedMood={selectedMood}
                onMoodSelect={setSelectedMood}
                onNext={handleNext}
              />
            )}
            {currentStep === 2 && (
              <MemoizedMoodDetail
                selectedMood={selectedMood}
                moodIntensity={moodIntensity}
                onIntensityChange={setMoodIntensity}
                selectedStages={selectedStages}
                onStageToggle={(stage) => {
                  setSelectedStages((prev) =>
                    prev.includes(stage)
                      ? prev.filter((s) => s !== stage)
                      : [...prev, stage]
                  );
                }}
                onBack={handleBack}
                onNext={handleNext}
              />
            )}
            {currentStep === 3 && (
              <MemoizedReason
                reasonText={reasonText}
                onReasonChange={setReasonText}
                selectedMood={selectedMood}
                onBack={handleBack}
                onNext={handleNext}
              />
            )}
            {currentStep === 4 && (
              <MemoizedActivities
                selectedActivities={selectedActivities}
                onActivityToggle={(activity) => {
                  setSelectedActivities((prev) =>
                    prev.includes(activity)
                      ? prev.filter((a) => a !== activity)
                      : prev.length < 5
                      ? [...prev, activity]
                      : prev
                  );
                }}
                selectedMood={selectedMood}
                onNext={handleNext}
              />
            )}
            {currentStep === 5 && (
              <MemoizedReminders
                reminderTime={reminderTime}
                onTimeChange={setReminderTime}
                selectedDays={selectedDays}
                onDayToggle={(day) => {
                  const days = [
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                    "All",
                  ];
                  if (day === "All") {
                    setSelectedDays(
                      selectedDays.includes("All") ? [] : days.slice(0, -1)
                    );
                  } else {
                    setSelectedDays((prev) => {
                      const newDays = prev.includes(day)
                        ? prev.filter((d) => d !== day && d !== "All")
                        : [...prev.filter((d) => d !== "All"), day];

                      if (newDays.length === 7) {
                        return [...newDays, "All"];
                      }
                      return newDays;
                    });
                  }
                }}
                onNext={handleNext}
              />
            )}
            {currentStep === 6 && (
              <MemoizedCalendar
                onBack={handleBack}
                onComplete={handleComplete}
                isSubmitting={isSubmitting}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <ProgressIndicator steps={steps} currentStep={currentStep} />
    </div>
  );
};

export default MoodCheckinApp;
