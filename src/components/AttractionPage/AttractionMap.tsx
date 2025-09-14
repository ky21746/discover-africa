import React from "react";
import { AttractionWithMock } from "../../types";

interface AttractionMapProps {
  attraction: AttractionWithMock;
}

const AttractionMap: React.FC<AttractionMapProps> = ({ attraction }) => {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-xl font-bold text-[#4B361C] mb-4 text-center">מפה</h3>
      <div className="flex-1 w-full bg-gray-200 rounded-lg flex items-center justify-center">
        <p className="text-gray-600">מפה תתווסף כאן</p>
      </div>
    </div>
  );
};

export default AttractionMap;
