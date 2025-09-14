// src/components/MapTest.tsx
import React from "react";
import { GoogleMap as GMap, LoadScript, Marker } from "@react-google-maps/api";

const MapTest: React.FC = () => {
  const center = { lat: -1.05, lng: 29.75 }; // אוגנדה

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">בדיקת מפה</h2>
      <div className="border rounded-lg overflow-hidden">
        <LoadScript googleMapsApiKey="AIzaSyBIpVuULr0sVtJR8WFjoDKbd354X04cszI">
          <GMap
            mapContainerStyle={{ width: "100%", height: "400px" }}
            center={center}
            zoom={8}
          >
            <Marker position={center} />
          </GMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MapTest;
