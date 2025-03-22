import React, { useState } from "react";
import { imacModels } from "../Data/index";

const IMac = () => {
  const [selectedColor, setSelectedColor] = useState("green");
  const [visibleLabel, setVisibleLabel] = useState("green");
  // No changes made to the logic

  const getCurrentModel = () =>
    imacModels.find((model) => model.label.toLowerCase() === selectedColor);

  return (
    <div className="h-full grid grid-cols-2 grid-rows-2 md:gap-4 gap-1 bg-white relative">
      <div className="h-full col-span-1 row-span-2 flex flex-col items-center md:justify-center justify-start pt-8 bg-gray-50">
        <img
          src={getCurrentModel().images.side}
          alt="iMac photo"
          className="2xl:max-w-full xl:max-w-36 max-w-24"
        />
      </div>
      <div className="bg-gray-50 col-span-1 row-span-1 flex items-center justify-center p-4">
        <img
          src={getCurrentModel().images.front}
          alt="iMac photo"
          className="2xl:max-w-full xl:max-w-52 lg:max-w-48"
        />
      </div>
      <div className="bg-gray-50 col-span-1 row-span-1 flex items-center justify-center p-4">
        <img
          src={getCurrentModel().images.back}
          alt="iMac photo"
          className="2xl:max-w-full xl:max-w-52 lg:max-w-48"
        />
      </div>
      <div className="absolute md:top-1/2 top-3/4 md:left-4 left-12 transform-translate-y-1/2 flex flex-col md:space-y-2 space-y-1 bg-gray-50">
        {imacModels.map((model, index) => (
          <div className="flex items-center space-x-2" key={index}>
            <button
              style={{ backgroundColor: model.bg }}
              className={`2xl:w-8 md:w-5 w-4 2xl:h-8 md:h-5 h-4 rounded-full flex items-center justify-center ${
                selectedColor === model.label.toLowerCase() &&
                "border-2 border-blue-500"
              }`}
              onClick={() => {
                console.log(`Selected color: ${model.label.toLowerCase()}`);
                setSelectedColor(model.label.toLowerCase());

                setVisibleLabel(model.label);
              }}
            ></button>
            {visibleLabel === model.label && (
              <span className="text-sm">{model.label}</span>
            )}
          </div>
        ))}
        <button className="text-sm mt-4 w-min py-1 px-3 bg-blue-400 rounded-full text-white">
          Shop
        </button>
      </div>
    </div>
  );
};

export default IMac;
