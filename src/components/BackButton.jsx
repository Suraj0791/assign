import React from "react";
import { ArrowLeft } from "lucide-react";

const BackButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-3 left-3 z-10 flex items-center space-x-1 bg-white/80 hover:bg-white/90 backdrop-blur-md rounded-full px-2 py-1 shadow border border-gray-200 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
    style={{
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 600,
      fontSize: "0.95rem",
    }}
    aria-label="Back"
    tabIndex={0}
    onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
    onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    <ArrowLeft className="w-4 h-4 text-purple-600" />
    <span className="text-purple-600 text-sm">Back</span>
  </button>
);

export default BackButton;
