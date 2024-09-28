"use client";
import React, { useState } from "react";

const EscalationForm = () => {
  const [isEscalationVisible, setIsEscalationVisible] = useState(false);
  const [escalationReason, setEscalationReason] = useState("");

  return (
    <div className="bg-white p-4 shadow-md rounded-lg w-full max-w-full md:max-w-sm my-4">
      {/* Unsolvable Question Header */}
      <div className="flex flex-wrap justify-between items-center bg-red-50 border border-red-200 p-3 rounded-lg mb-4">
        <span className="text-red-600 font-medium text-sm md:text-base">Unsolvable Question</span>
        <button
          className="bg-red-600 text-white text-xs md:text-sm py-1 px-4 rounded-md hover:bg-red-500 mt-2 md:mt-0"
          onClick={() => setIsEscalationVisible(!isEscalationVisible)}
        >
          Escalate Ques
        </button>
      </div>

      {/* Escalation Form */}
      
        <div className="border rounded-lg p-3 md:p-4 bg-gray-50">
          <label className="block text-xs md:text-sm font-medium mb-2">
            Reason for Escalation
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:border-blue-400"
            rows={isEscalationVisible ? 2 : 3}
            placeholder="Enter your reason here..."
            value={escalationReason}
            onChange={(e) => setEscalationReason(e.target.value)}
          />

          {/* Form Buttons */}
          <div className="flex flex-wrap justify-end gap-2">
            <button
              className="bg-gray-300 text-gray-700 text-xs md:text-sm py-1 px-4 rounded-md hover:bg-gray-400"
              onClick={() => {
                setEscalationReason("");
                setIsEscalationVisible(false);
              }}
            >
              Cancel
            </button>
            <button
              className="bg-blue-600 text-white text-xs md:text-sm py-1 px-4 rounded-md hover:bg-blue-500"
              onClick={() => {
                alert(`Escalation Reason: ${escalationReason}`);
                setIsEscalationVisible(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
    </div>
  );
};

export default EscalationForm;
