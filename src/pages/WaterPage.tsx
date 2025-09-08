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
      {/* ===== HERO SECTION ===== */}
      <section className="relative w-full h-[30vh] md:h-[45vh] min-h-[200px]">
        <img 
          src="https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg"
          alt="אטרקציות מים באוגנדה"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="container mx-auto max-w-screen-xl">
            <div className="mb-3">
              <span className="inline-flex items-center gap-2 bg-amber-500 text-black px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                <span>💧</span>
                אטרקציות מים
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
              אטרקציות מים באוגנדה
            </h1>
            <h2 className="text-base md:text-lg text-amber-300 font-medium mb-3 drop-shadow-lg">
              גלו את המגוון המרהיב של אטרקציות המים - ממפלים עוצמתיים ועד אגמים שקטים
            </h2>
          </div>
        </div>
      </section>

      <div className="py-8">
        <div className="container mx-auto px-4">
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
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredWater.map((item) => (
                <div
                  key={item.id}
                  className="category-card transition-all duration-300 hover:shadow-lg"
                >
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="card-content">

                    <h3 className="mb-2 text-lg font-semibold font-sans">
                      {highlightText(item.name || "", searchQuery)}
                    </h3>
                    
                    {item.description && (
                      <p className="mb-3 text-sm font-sans text-muted">
                        {highlightText(
                          item.description.length > 200 
                            ? item.description.slice(0, 200) + "..." 
                            : item.description, 
                          searchQuery
                        )}
                      </p>
                    )}


                    <div className="card-footer">
                      <Link
                        to={`/attraction/${item.slug}`}
                        className="btn-discover"
                      >
                        גלה עוד
                      </Link>
                    </div>
                  </div>
                </div>
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