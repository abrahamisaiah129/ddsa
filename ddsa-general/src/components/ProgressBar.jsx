import React from "react";

const ProgressBar = ({ step, totalSteps }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const progressStep = index + 1;
        return (
          <div
            key={index}
            className={`flex-1 h-2 mx-1 rounded-full ${
              step >= progressStep ? "bg-purple-600" : "bg-gray-300"
            }`}
          ></div>
        );
      })}
    </div>
  );
};

export default ProgressBar;
