import React from "react";
import ReactSlider from "react-slider";

interface SliderProps {
  minPrice: number;
  maxPrice: number;
  priceRange: number[];
  onPriceChange: (value: number[]) => void;
}

const Slider: React.FC<SliderProps> = ({
  minPrice,
  maxPrice,
  priceRange,
  onPriceChange,
}) => {
  return (
    <div className="w-full md:w-2/3">
      <ReactSlider
        className="horizontal-slider h-3 bg-gray-300 rounded-md"
        thumbClassName="example-thumb h-4 w-4 rounded-full bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 cursor-pointer shadow-lg"
        trackClassName="example-track bg-blue-400 h-3 rounded-md"
        min={minPrice}
        max={maxPrice}
        value={priceRange}
        pearling
        minDistance={10}
        onChange={(value) => onPriceChange(value as number[])}
      />
      <div className="w-full flex justify-between px-2 mt-2">
        <span className="text-lg font-medium text-gray-700">
          {priceRange[0]} лв.
        </span>
        <span className="text-lg font-medium text-gray-700">
          {priceRange[1]} лв.
        </span>
      </div>
    </div>
  );
};

export default Slider;
