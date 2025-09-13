// src/pages/ExtremePage.tsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/Common/SearchBar";
import { Attraction } from "../types";

const ExtremePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // פילטר אטרקציות לפי חיפוש
  const filteredAttractions = useMemo(() => {
    if (!searchQuery.trim()) return extreme;
    
    const query = searchQuery.toLowerCase();
    return extreme.filter((attraction: Attraction) =>
      attraction.name.toLowerCase().includes(query) ||
      attraction.subtitle.toLowerCase().includes(query) ||
      attraction.description.toLowerCase().includes(query) ||
      attraction.highlights.some(highlight => highlight.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="fade-in" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white h-[45vh] min-h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FExtreme%20adventures%2Fextremeadventures-card.webp?alt=media&token=cc084dbb-9efc-4e72-8453-d96c51d4a5d0)"
          }}
        />
        
        {/* Transparent bar at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-black/40 border-t-[1.5px] border-[#CAA131]/80">
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center space-y-4 text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">
              אקסטרים באוגנדה
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
              חוויות אתגריות וספורט אקסטרים - רפטינג, באנג'י, טיפוס הרים ועוד
            </p>
            
          </div>
        </div>
      </section>

      <div className="py-8">
        <div className="container mx-auto px-4">

        {/* כרטיסי אטרקציות */}
        {filteredAttractions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAttractions.map((attraction: Attraction) => (
              <Link
                key={attraction.id}
                to="/under-construction"
                className="category-card transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${attraction.image})` }}
                >
                  <div className="image-overlay">
                    <h3 className="font-sans">
                      {attraction.name}
                    </h3>
                    
                    <p className="font-sans">
                      {attraction.subtitle && attraction.subtitle.length > 50 
                        ? attraction.subtitle.slice(0, 50) + "." 
                        : attraction.subtitle}
                    </p>
                  </div>
                </div>
                
                <div className="card-content">
                  <div className="btn-discover">
                    קרא עוד
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted mb-4">
              לא נמצאו חוויות אקסטרים המתאימות לחיפוש
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="btn-primary"
            >
              נקה חיפוש
            </button>
          </div>
        )}

        {/* כפתור חזרה */}
        <div className="mt-8 text-center">
          <Link to="/categories" className="btn-secondary">
            ← חזרה לקטגוריות
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ExtremePage;