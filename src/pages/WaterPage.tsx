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
    <div className="py-8 fade-in" dir="rtl">
      <div className="container mx-auto px-4">
        {/* כותרת ותיאור */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold font-sans">
            אטרקציות מים באוגנדה
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted font-sans">
            גלו את המגוון המרהיב של אטרקציות המים - ממפלים עוצמתיים ועד אגמים שקטים
          </p>
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
                  <div className="mb-2 flex items-center gap-2">
                    {item.region && (
                      <span className="highlight-tag">
                        {item.region}
                      </span>
                    )}
                    {item.duration && (
                      <span className="highlight-tag">
                        {item.duration}
                      </span>
                    )}
                    {item.difficulty && (
                      <span className="highlight-tag" style={{background: '#CAA131'}}>
                        {item.difficulty}
                      </span>
                    )}
                  </div>

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

                  {Array.isArray(item.highlights) && item.highlights.length > 0 && (
                    <div className="highlights">
                      <div className="highlights-title">מה תראו:</div>
                      <div className="flex flex-wrap gap-1">
                        {item.highlights.slice(0, 3).map((highlight, i) => (
                          <span
                            key={i}
                            className="highlight-tag"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
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
  );
};

export default WaterPage;