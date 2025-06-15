import React from "react";

const BackButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed top-2 left-2 z-50 flex items-center justify-center w-5 h-5 md:w-7 md:h-7 rounded-full bg-white/90 border border-gray-400 shadow-sm text-[14px] md:text-[18px] font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
    style={{ color: "#6B21A8", fontFamily: "Montserrat, sans-serif" }}
    aria-label="Back"
    tabIndex={0}
    onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
    onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
  >
    ←
  </button>
);

export default BackButton;
