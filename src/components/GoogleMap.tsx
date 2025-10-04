import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface GoogleMapProps {
  lat: number;
  lng: number;
  zoom?: number;
}

const GoogleMapComponent: React.FC<GoogleMapProps> = ({ lat, lng, zoom = 8 }) => {
  const apiKey = "AIzaSyD9GUDvMXOiX-Je_VoVKhE79JyJKzEi47A";

  if (!apiKey) {
    return (
      <div className="p-6 bg-gray-100 rounded-lg text-center">
        <div className="text-gray-600 mb-2">
          🗺️ מפה זמנית לא זמינה
        </div>
        <div className="text-sm text-gray-500">
          המפה תוצג כאן ברגע שהמפתח יוגדר
        </div>
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
