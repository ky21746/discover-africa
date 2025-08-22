import React from "react";

const SkipToContent: React.FC = () => (
  <a
    href="#main-content"
    className="
      sr-only 
      focus:not-sr-only 
      fixed top-4 left-4 
      bg-white text-blue-600 
      font-medium px-4 py-2 
      rounded-lg shadow-lg 
      transition-all duration-200 
      z-50 
      focus:outline-none focus:ring-2 focus:ring-blue-500
    "
  >
    דלג לתוכן
  </a>
);

export default SkipToContent;