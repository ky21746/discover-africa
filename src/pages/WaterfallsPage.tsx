// src/pages/WaterfallsPage.tsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Filter } from "lucide-react";
import Card from "../components/Common/Card";
import SearchBar from "../components/Common/SearchBar";

const WaterfallsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // חיפוש
  const filteredWaterfalls = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return waterfalls.filter((waterfall) => {
      const name = waterfall.name?.toLowerCase() ?? "";
      const desc = waterfall.description?.toLowerCase() ?? "";
      const subtitle = waterfall.subtitle?.toLowerCase() ?? "";

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
            מפלים באוגנדה
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted font-sans">
            גלו את המפלים המרהיבים של אוגנדה - ממורצ'יסון העוצמתי ועד סיפי הציורי
          </p>
        </div>

        {/* חיפוש */}
        <div className="mb-8">
          <SearchBar
            onSearch={setSearchQuery}
            placeholder="חפשו מפלים..."
          />
        </div>

        {/* ספירת מפלים */}
        <div className="mb-6 text-center">
          <p className="text-sm text-muted">
            נמצאו {filteredWaterfalls.length} מפלים
          </p>
        </div>

        {/* רשת הכרטיסים */}
        {filteredWaterfalls.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredWaterfalls.map((waterfall) => (
              <Card
                key={waterfall.id}
                className="hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${waterfall.image})` }}
                />
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-2 font-sans">
                    {highlightText(waterfall.name || "", searchQuery)}
                  </h3>
                  <p className="text-sm text-muted mb-3 font-sans">
                    {highlightText(waterfall.subtitle || "", searchQuery)}
                  </p>



                  <div className="card-footer">
                    <Link
                      to={`/attraction/${waterfall.slug}`}
                      className="btn-primary w-full"
                    >
                      גלו עוד
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted">לא נמצאו מפלים התואמים לחיפוש שלכם</p>
          </div>
        )}

        {/* כפתור חזרה */}
        <div className="text-center mt-12">
          <Link to="/water" className="btn-secondary">
            ← חזרה לאגמים, מפלים ונהרות
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WaterfallsPage;
