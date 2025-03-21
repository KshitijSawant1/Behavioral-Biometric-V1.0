import React, { useState } from "react";
import PatternLock from "react-pattern-lock";
import "../App.css";

const PatternLockComponent = () => {
  const [pattern, setPattern] = useState([]);

  const handleFinish = () => {
    alert(`Pattern Entered: ${pattern.join(" → ")}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-[350px] border border-gray-400">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Draw Your Pattern
        </h1>

        {/* Pattern Lock Box */}
        <div className="flex justify-center bg-white p-4 rounded-lg shadow-md border border-gray-300">
          <PatternLock
            width={280} // Width of the pattern lock
            pointSize={18} // Size of each dot
            size={3} // 3x3 grid
            path={pattern} // Stores pattern input
            onChange={setPattern} // Updates the pattern as the user draws
            onFinish={handleFinish} // Triggers when the pattern is completed
            connectorThickness={4} // Makes the connecting lines thicker
            connectorRoundedCorners={true} // Rounded connecting lines
            className="custom-pattern-lock"
          />
        </div>

        {/* Pattern Display */}
        <div className="mt-4 p-3 bg-gray-200 text-gray-900 rounded-md text-lg text-center">
          Pattern: {pattern.length > 0 ? pattern.join(" → ") : "None"}
        </div>

        {/* Reset Button */}
        <div className="mt-4 flex justify-center">
          <button
            className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md"
            onClick={() => setPattern([])}
          >
            Reset Pattern
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatternLockComponent;
