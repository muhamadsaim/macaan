import React from "react";

// Reusable InfoCard Component
const StatCard = ({ metrics }) => {
  return (
    <div className="bg-[#F2F5FB] flex flex-wrap justify-between items-center shadow-md rounded-lg p-6 space-y-4 md:space-y-0 md:flex-nowrap">
      {metrics.map((metric, index) => (
        <div key={index} className="flex flex-col items-center w-full md:w-auto">
          <span className="text-xs text-[#0F314B] font-medium mb-1">
            {metric.label}
          </span>
          <span className="text-blue-600 text-sm font-semibold">
            {metric.value}
          </span>
        </div>
      ))}
    </div>
  );
};

// Default Export
export default StatCard;
