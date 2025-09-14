import React, { useEffect, useRef, useState } from "react";

interface GoogleMapProps {
  lat: number;
  lng: number;
  zoom: number;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ lat, lng, zoom }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapError, setMapError] = useState(false);

  useEffect(() => {
    const initMap = () => {
      if (mapRef.current && window.google) {
        try {
          new window.google.maps.Map(mapRef.current, {
            center: { lat, lng },
            zoom,
          });
        } catch (error) {
          console.error('Google Maps error:', error);
          setMapError(true);
        }
      }
    };

    if (window.google) {
      initMap();
    } else {
      // Fallback: show placeholder
      setMapError(true);
    }
  }, [lat, lng, zoom]);

  if (mapError) {
    return (
      <div className="w-full h-96 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
        <div className="text-center text-gray-600">
          <div className="text-2xl mb-2">🗺️</div>
          <p className="font-semibold">מפה תתווסף כאן</p>
          <p className="text-sm mt-1">Google Maps API</p>
        </div>
      </div>
    );
  }

  return <div ref={mapRef} className="w-full h-96 rounded-2xl border" />;
};

export default GoogleMap;
