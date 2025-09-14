// src/components/GoogleMap.tsx
import React from "react";
import { GoogleMap as GMap, LoadScript, Marker } from "@react-google-maps/api";

interface GoogleMapProps {
  lat?: number;
  lng?: number;
  zoom?: number;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ lat, lng, zoom = 8 }) => {
  const defaultCenter = { lat: -1.05, lng: 29.75 }; // ברירת מחדל - אוגנדה
  const center = lat && lng ? { lat, lng } : defaultCenter;

  return (
    <LoadScript googleMapsApiKey="AIzaSyBIpVuULr0sVtJR8WFjoDKbd354X04cszI">
      <GMap
        mapContainerStyle={{ width: "100%", height: "100%", borderRadius: "12px" }}
        center={center}
        zoom={zoom}
      >
        <Marker position={center} />
      </GMap>
    </LoadScript>
  );
};

export default GoogleMap;
