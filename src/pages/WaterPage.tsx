// src/pages/WaterPage.tsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/Common/SearchBar";
import { water } from "../content/categories/water";

const WaterPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // חיפוש
  const filteredWater = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return water.filter((item) => {
      const name = item.name?.toLowerCase() ?? "";
      const desc = item.description?.toLowerCase() ?? "";
      const subtitle = item.subtitle?.toLowerCase() ?? "";

      return q === "" || name.includes(q) || desc.includes(q) || subtitle.includes(q);
    });
  }, [searchQuery]);

  // הדגשת טקסט בחיפוש
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = String(text).split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="search-highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="fade-in" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white h-[40vh] min-h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg)"
          }}
        />
        
        {/* Transparent bar at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-black/40 border-t-[1.5px] border-[#CAA131]/80">
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center space-y-4 text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">
              אטרקציות מים באוגנדה
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
              גלו את המגוון המרהיב של אטרקציות המים - ממפלים עוצמתיים ועד אגמים שקטים
            </p>
            
            {/* Single CTA Button */}
            <button className="bg-transparent border-2 border-[#CAA131] text-[#CAA131] px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-[#CAA131] hover:text-black">
              צפה בכל האטרקציות
            </button>
          </div>
        </div>
      </section>

      <div className="py-8">
        <div className="container mx-auto px-4">
          {/* בלוק חשוב לדעת */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-[#CAA131]/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-bold text-[#4B361C] mb-4 border-b border-[#CAA131] pb-2 w-fit text-right">
                חשוב לדעת
              </h2>
              <div className="space-y-3 text-right">
                <ul className="text-sm text-[#4B361C] space-y-2 text-right list-none">
                  <li className="relative pr-4 before:content-[''] before:absolute before:right-0 before:top-2 before:w-2 before:h-2 before:bg-[#CAA131] before:rounded-full">רפטינג: רמת קושי <span className="text-[#CAA131] font-semibold">3-5</span> — כושר גופני נדרש</li>
                  <li className="relative pr-4 before:content-[''] before:absolute before:right-0 before:top-2 before:w-2 before:h-2 before:bg-[#CAA131] before:rounded-full">שייט: מתאים לכל הגילאים — ציוד בטיחות מסופק</li>
                  <li className="relative pr-4 before:content-[''] before:absolute before:right-0 before:top-2 before:w-2 before:h-2 before:bg-[#CAA131] before:rounded-full">עונה מומלצת: יוני-ספטמבר ודצמבר-פברואר — מים גבוהים ויציבים</li>
                  <li className="relative pr-4 before:content-[''] before:absolute before:right-0 before:top-2 before:w-2 before:h-2 before:bg-[#CAA131] before:rounded-full">בטיחות: מדריכים מוסמכים וציוד בטיחות מקצועי</li>
                </ul>
              </div>
            </div>
          </div>

          {/* חיפוש */}
          <div className="mb-8">
            <SearchBar
              onSearch={setSearchQuery}
              placeholder="חפשו אטרקציות מים..."
            />
          </div>

          {/* ספירת אטרקציות */}
          <div className="mb-6 text-center">
            <p className="text-sm text-muted">
              נמצאו {filteredWater.length} אטרקציות מים
            </p>
          </div>

          {/* רשת הכרטיסים */}
          {filteredWater.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredWater.map((item) => (
                <Link
                  key={item.id}
                  to={`/attraction/${item.slug}`}
                  className="category-card transition-all duration-300 hover:shadow-lg cursor-pointer"
                >
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="image-overlay">
                      <h3 className="font-sans">
                        {highlightText(item.name || "", searchQuery)}
                      </h3>
                      
                      {item.description && (
                        <p className="font-sans">
                          {highlightText(
                            item.description.length > 50 
                              ? item.description.slice(0, 50) + "." 
                              : item.description, 
                            searchQuery
                          )}
                        </p>
                      )}
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
                לא נמצאו תוצאות, נסו מילה אחרת
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="btn-secondary"
              >
                נקה חיפוש
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaterPage;