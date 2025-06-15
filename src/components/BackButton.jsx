import React from "react";
import { ArrowLeft } from "lucide-react";

const BackButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-6 left-6 z-10 flex items-center space-x-2 bg-white/70 hover:bg-white/90 backdrop-blur-md rounded-full px-4 py-2 shadow-md border border-gray-200 transition-all duration-200"
    style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600 }}
    aria-label="Back"
  >
    <ArrowLeft className="w-5 h-5 text-purple-600" />
    <span className="text-purple-600 text-base">Back</span>
  </button>
);

export default BackButton;
