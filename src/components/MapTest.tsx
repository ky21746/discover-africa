// src/components/MapTest.tsx
import React from "react";
import GoogleMapComponent from "./GoogleMap";

const MapTest: React.FC = () => {
  const center = { lat: -1.05, lng: 29.75 }; // אוגנדה

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">בדיקת מפה</h2>
      <div className="border rounded-lg w-full h-[400px] md:h-[500px]">
        <GoogleMapComponent lat={center.lat} lng={center.lng} zoom={8} />
      </div>
    </div>
  );
};

export default MapTest;
