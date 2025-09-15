import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface GoogleMapProps {
  lat: number;
  lng: number;
  zoom?: number;
}

const GoogleMapComponent: React.FC<GoogleMapProps> = ({ lat, lng, zoom = 8 }) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  
  // בדיקת המפתח של Google Maps
  console.log("Google Maps API Key:", import.meta.env.VITE_GOOGLE_MAPS_API_KEY);

  if (!apiKey) {
    return (
      <div className="p-6 text-red-600 text-center">
        ⚠️ לא נמצא מפתח Google Maps – בדוק את קובץ .env
      </div>
    );
  }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={{ lat, lng }}
        zoom={zoom}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
