"use client";
import React, { useState } from "react";
import { FiVideo, FiX } from "react-icons/fi";
import Video from "../../public/assets/video.svg"

const ReplySection = () => {
  const [url, setUrl] = useState("");
  const [relatedParts, setRelatedParts] = useState("");
  const [answer, setAnswer] = useState("");

  return (
    <div className="bg-white shadow-md rounded-lg p-4 md:p-6 ">
      {/* Ticket Header */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#F2F5FB] rounded-full flex items-center justify-center text-md md:text-lg  text-[#B3B3B3]">
            MN
          </div>
          <div className="ml-4">
            <h2 className="text-sm md:text-lg ">
              Mudassir Nisar{" "}
              <span className="text-gray-500 text-xs md:text-sm">07/28/2023</span>
            </h2>
            <p className="text-blue-500 font-semibold text-xs md:text-base">This is a new Ticket</p>
          </div>
        </div>
      </div>

      {/* Reply Information Box */}
      <div className="border rounded-lg p-4 mb-6 bg-gray-50">
        <p className="text-gray-700 text-sm md:text-base mb-4">
          Agent at Mar 28, 2024
          <br />
          Hello Mudassir,
          <br />
          Thank you for reaching out.
          <br />
          <br />
          In order to help you locate the correct parts and repair information,
          we will need more information about the problem you are facing. Please
          submit a new question with more details, and we will be happy to help
          you. Looking forward to hearing from you!
        </p>
        <div className="flex flex-wrap items-center gap-4 mb-2">
          <a
            href="#"
            className="flex items-center gap-1 text-blue-500 text-xs md:text-sm"
          >
            <Video />
            Watch video
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-blue-500 text-xs md:text-sm"
          >
            <Video />
            Watch video
          </a>
        </div>
        <p className="text-xs md:text-sm text-gray-500">Related Parts: 123 35</p>
      </div>

      {/* Compose Reply Section */}
      <div>
        <h3 className="font-semibold text-base md:text-lg mb-4">Compose your reply</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* URL Input */}
          <div>
            <label className="block text-xs md:text-sm font-medium mb-2">URL</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm md:text-base focus:border-blue-500"
              placeholder="Enter URL"
            />
            {/* Link Buttons */}
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-100 text-gray-700 px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm flex items-center gap-1">
                Link 1 <FiX className="cursor-pointer" />
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm flex items-center gap-1">
                Link 1 <FiX className="cursor-pointer" />
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm flex items-center gap-1">
                Link 1 <FiX className="cursor-pointer" />
              </span>
            </div>
          </div>

          {/* Related Parts Input */}
          <div>
            <label className="block text-xs md:text-sm font-medium mb-2">Related Parts</label>
            <input
              type="text"
              value={relatedParts}
              onChange={(e) => setRelatedParts(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 text-sm md:text-base focus:border-blue-500"
              placeholder="Enter Related Parts"
            />
            {/* Parts Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-100 text-gray-700 px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm flex items-center gap-1">
                2345 <FiX className="cursor-pointer" />
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm flex items-center gap-1">
                2345 <FiX className="cursor-pointer" />
              </span>
              <span className="bg-gray-100 text-gray-700 px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm flex items-center gap-1">
                2345 <FiX className="cursor-pointer" />
              </span>
            </div>
          </div>
        </div>

        {/* Answer Text Area */}
        <div className="mb-4">
          <label className="block text-xs md:text-sm font-medium mb-2">
            Your answer goes here
          </label>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 text-sm md:text-base focus:border-blue-500"
            rows="4"
            placeholder="Enter your answer"
          ></textarea>
        </div>

        {/* Template Buttons */}
        <div className="flex flex-wrap gap-4 mb-4">
          <button className="bg-gray-100 text-gray-700 px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm">
            Temp 1
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm">
            Temp 1
          </button>
          <button className="bg-gray-100 text-gray-700 px-4 py-1 md:py-2 rounded-lg text-xs md:text-sm">
            Temp 1
          </button>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-4 md:px-6 py-2 text-xs md:text-sm rounded-md hover:bg-blue-700">
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplySection;
