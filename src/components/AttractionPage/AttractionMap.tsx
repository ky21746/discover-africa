import React from "react";
import { AttractionWithMock } from "../../types";
import GoogleMap from "../GoogleMap";

interface AttractionMapProps {
  attraction: AttractionWithMock;
}

const AttractionMap: React.FC<AttractionMapProps> = ({ attraction }) => {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-xl font-bold text-[#4B361C] mb-4 text-center">מפה</h3>
      <div className="flex-1">
        <GoogleMap lat={-1.05} lng={29.75} zoom={8} />
      </div>
    </div>
  );
};

export default AttractionMap;
