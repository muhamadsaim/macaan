import React from 'react';
import CheckCircle from "../../public/assets/checkCircle.svg"
import CrossCircle from "../../public/assets/crossCircle.svg"
import RefreshCircle from "../../public/assets/refreshCircle.svg"

const DocumentAnswer = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 md:p-6 my-4 md:my-6 w-full max-w-3xl mx-auto">
      {/* Document Answer Section */}
      <div className="p-3 md:p-4 bg-gray-50 border rounded-lg mb-4">
        <div className="flex flex-wrap items-center justify-between gap-2 w-full">
          <h3 className="text-md md:text-lg font-semibold w-full md:w-auto">Document Answer</h3>
          <div className="flex items-center gap-2 text-xs md:text-sm w-full md:w-auto justify-between md:justify-end">
            <span className="flex items-center gap-1 ">
              <CheckCircle size={16} /> 88%
            </span>
            <span className="flex items-center gap-1">
              <CrossCircle size={16} /> 12%
            </span>
            <span className="flex items-center gap-1 text-blue-600">
              <RefreshCircle size={16} />
            </span>
          </div>
        </div>
        <p className="text-gray-700 mt-2 md:mt-4 text-xs md:text-base break-words leading-relaxed">
          Order to help you locate the correct parts and repair information, we will need more information about the problem you are facing. Please submit a new question with more details, and we will be happy to help you. Looking forward to hearing from you!
        </p>
      </div>

      {/* Archived Questions Section */}
      <div>
        <div className="flex flex-wrap items-center justify-between mb-3 md:mb-4">
          <h3 className="text-md md:text-lg font-semibold">Archived Questions</h3>
          <span className="text-blue-500 text-xs md:text-sm">88% Similar</span>
        </div>

        {/* Archived Question List */}
        <div className="space-y-3 md:space-y-4">
          {/* Archived Question Item */}
          <div className="p-3 md:p-4 bg-gray-50 border rounded-lg">
            <p className="font-semibold mb-1 text-xs md:text-base">
              Q: <span className="font-normal">Order to help you locate the correct parts and repair</span>
            </p>
            <p className="font-semibold mb-1 text-xs md:text-base">
              A: <span className="font-normal">Information, we will need more information about the problem you are facing. Please submit a new question with more details, and we will be happy to help you.</span>
            </p>
          </div>

          {/* Archived Questions Preview List */}
          <div className="space-y-2">
            {Array(5).fill("").map((_, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 md:p-3 bg-gray-100 rounded-lg cursor-pointer"
              >
                <span className="text-gray-700 font-semibold text-xs md:text-sm">
                  Q: Order to help you locate the correct ...
                </span>
                <button className="text-blue-500 font-medium text-sm md:text-sm">+</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentAnswer;
