import React from "react";
import { AttractionWithMock } from "../../types";
import GoogleMap from "../GoogleMap";

interface AttractionMapProps {
  attraction: AttractionWithMock;
}

const AttractionMap: React.FC<AttractionMapProps> = ({ attraction }) => {
  const coords = attraction.coordinates;

  if (!coords) {
    return (
      <div className="h-full flex flex-col">
        <h3 className="text-xl font-bold text-[#4B361C] mb-4 text-center">מפה</h3>
        <div className="flex-1 flex items-center justify-center text-gray-600">
          <div className="text-center">
            <div className="text-2xl mb-2">📍</div>
            <p className="font-semibold">לא נמצאו קואורדינטות לאטרקציה זו</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-xl font-bold text-[#4B361C] mb-4 text-center">מפה</h3>
      <div className="flex-1">
        <GoogleMap 
          lat={coords.lat} 
          lng={coords.lng} 
          zoom={10} 
        />
      </div>
    </div>
  );
};

export default AttractionMap;
