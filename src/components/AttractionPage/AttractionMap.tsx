import React from "react";
import { AttractionWithMock } from "../../types";
import GoogleMapComponent from "../GoogleMap";

interface AttractionMapProps {
  attraction: AttractionWithMock;
}

const AttractionMap: React.FC<AttractionMapProps> = ({ attraction }) => {
  const coordinates = attraction.coordinates ?? { lat: -1.05, lng: 29.75 };

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-xl font-bold text-[#4B361C] mb-4 text-center">מפה</h3>
      <div className="flex-1">
        <GoogleMapComponent lat={coordinates.lat} lng={coordinates.lng} zoom={8} />
      </div>
    </div>
  );
};

export default AttractionMap;
