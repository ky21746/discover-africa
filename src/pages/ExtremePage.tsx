// src/pages/ExtremePage.tsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/Common/SearchBar";
import { extreme } from "../content/categories/extreme";
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
    <div className="py-8 fade-in" dir="rtl">
      <div className="container mx-auto px-4">
        {/* כותרת ותיאור */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold font-sans">
            אקסטרים באוגנדה
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted font-sans">
            חוויות אתגריות וספורט אקסטרים - רפטינג, באנג'י, טיפוס הרים ועוד
          </p>
        </div>

        {/* חיפוש */}
        <div className="mb-8">
          <SearchBar
            onSearch={setSearchQuery}
            placeholder="חפשו חוויות אקסטרים..."
          />
        </div>

        {/* כרטיסי אטרקציות */}
        {filteredAttractions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAttractions.map((attraction: Attraction) => (
              <Link
                key={attraction.id}
                to={`/attraction/${attraction.slug}`}
                className="group block bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 right-4 text-white">
                    <span className="bg-[#CAA131] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {attraction.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#4B361C] mb-2 group-hover:text-[#CAA131] transition-colors">
                    {attraction.name}
                  </h3>
                  <p className="text-[#666] mb-3 line-clamp-2">
                    {attraction.subtitle}
                  </p>
                  
                  
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
  );
};

export default ExtremePage;