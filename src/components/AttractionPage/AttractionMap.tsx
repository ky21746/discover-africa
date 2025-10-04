import React from "react";
import { AttractionWithMock } from "../../types";
import GoogleMapComponent from "../GoogleMap";

interface AttractionMapProps {
  attraction: AttractionWithMock;
}

const AttractionMap: React.FC<AttractionMapProps> = ({ attraction }) => {
  const coordinates = attraction.coordinates ?? { lat: -1.05, lng: 29.75 };

  return (
    <div className="w-full h-[400px] md:h-full">
      <GoogleMapComponent lat={coordinates.lat} lng={coordinates.lng} zoom={8} />
    </div>
  );
};

export default AttractionMap;
