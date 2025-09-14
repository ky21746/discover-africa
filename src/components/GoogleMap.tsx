import React, { useEffect, useRef } from "react";

interface GoogleMapProps {
  lat: number;
  lng: number;
  zoom: number;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ lat, lng, zoom }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current && window.google) {
      new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom,
      });
    }
  }, [lat, lng, zoom]);

  return <div ref={mapRef} className="w-full h-96 rounded-2xl border" />;
};

export default GoogleMap;
