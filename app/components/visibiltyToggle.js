"use client"
import React, { useState } from "react";

const VisibilityToggle = () => {
  // State to manage visibility
  const [isPublic, setIsPublic] = useState(true);

  // Toggle function to change visibility state
  const toggleVisibility = () => {
    setIsPublic((prev) => !prev);
  };

  return (
    <div className="flex flex-col  items-center gap-3">
      {/* Label for Visibility Toggle */}
      <span className="text-sm font-medium text-gray-600">Change Visibility</span>

      {/* Toggle Switch */}
      <div className="flex items-center gap-3">
      <div
        onClick={toggleVisibility}
        className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 ${
          isPublic ? "bg-blue-600" : "bg-gray-400"
        }`}
      >
        {/* Switch Circle */}
        <div
          className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
            isPublic ? "transform translate-x-6" : "transform translate-x-0"
          }`}
        />
      </div>

      {/* Visibility Status Label */}
      <span
        className={`text-sm font-medium ${
          isPublic ? "text-blue-600" : "text-gray-600"
        }`}
      >
        {isPublic ? "Public" : "Private"}
      </span>
      </div>
  
    </div>
  );
};

export default VisibilityToggle;
