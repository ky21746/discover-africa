import React from "react";
import { AttractionWithMock } from "../../types";
import GoogleMapComponent from "../GoogleMap";

interface AttractionMapProps {
  attraction: AttractionWithMock;
}

const AttractionMap: React.FC<AttractionMapProps> = ({ attraction }) => {
  const coordinates = attraction.coordinates ?? { lat: -1.05, lng: 29.75 };
  
  // בדיקת מפתח Google Maps בפרודקשן
  console.log("Maps Key in Production:", import.meta.env.VITE_GOOGLE_MAPS_API_KEY);
  console.log("Window Origin:", window.location.origin);
  console.log("Document Referrer:", document.referrer);
  console.log("Current URL:", window.location.href);

  return (
    <div className="h-full">
      <GoogleMapComponent lat={coordinates.lat} lng={coordinates.lng} zoom={8} />
    </div>
  );
};

export default AttractionMap;
