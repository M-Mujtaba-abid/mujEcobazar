
import React, { useState } from "react";

const Range = ({ min, max, getRange }) => {
  const [value, setValue] = useState([min, max]);

  const handleRangeChange = (e, index) => {
    const newValue = [...value];
    newValue[index] = Number(e.target.value); // Update the specific slider value
    setValue(newValue);
    getRange(newValue[0], newValue[1]); // Pass the updated range to parent
  };

  return (
    <div className="mt-10">
      <div className="border h-1 w-[300px]"></div>
      <div className=" w-[300px] border-gray-300 rounded-lg p-4   max-w-md mx-auto">
        <h1 className="font-semibold text-lg mb-4">Price</h1>
        <div className="flex flex-col gap-3">
          {/* Min Range */}
          <label className="flex items-center">
            Min Price:
            <input
              type="range"
              min={min}
              max={max}
              step={10}
              value={value[0]}
              onChange={(e) => handleRangeChange(e, 0)} // Handle min value
              className="w-full mx-5"
            />
            Max Price 
          </label>
          {/* Max Range */}
          {/* <label className="flex items-center">
            Max Price:
            <input
              type="range"
              min={min}
              max={max}
              step={10}
              value={value[1]}
              onChange={(e) => handleRangeChange(e, 1)} // Handle max value
              className="w-full ml-4"
            />
          </label> */}
        </div>
        <div className="flex justify-between mt-4">
          <p className="font-medium text-sm">Selected Range:</p>
          <span className="font-semibold text-sm">
            ${value[0]} - ${value[1]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Range;
