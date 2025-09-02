// src/pages/RiversPage.tsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Filter } from "lucide-react";
import Card from "../components/Common/Card";
import SearchBar from "../components/Common/SearchBar";
import { rivers } from "../content/categories/rivers";

const RiversPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // חיפוש
  const filteredRivers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return rivers.filter((river) => {
      const name = river.name?.toLowerCase() ?? "";
      const desc = river.description?.toLowerCase() ?? "";
      const subtitle = river.subtitle?.toLowerCase() ?? "";

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
            נהרות באוגנדה
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted font-sans">
            גלו את הנהרות ההיסטוריים של אוגנדה - הנילוס הלבן ומקור הנילוס
          </p>
        </div>

        {/* חיפוש */}
        <div className="mb-8">
          <SearchBar
            onSearch={setSearchQuery}
            placeholder="חפשו נהרות..."
          />
        </div>

        {/* ספירת נהרות */}
        <div className="mb-6 text-center">
          <p className="text-sm text-muted">
            נמצאו {filteredRivers.length} נהרות
          </p>
        </div>

        {/* רשת הכרטיסים */}
        {filteredRivers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {filteredRivers.map((river) => (
              <Card
                key={river.id}
                className="hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${river.image})` }}
                />
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-2 font-sans">
                    {highlightText(river.name || "", searchQuery)}
                  </h3>
                  <p className="text-sm text-muted mb-3 font-sans">
                    {highlightText(river.subtitle || "", searchQuery)}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {river.highlights?.slice(0, 3).map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-surface rounded px-2 py-0.5 text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-3 text-sm">
                    <span className="text-muted">משך: {river.duration}</span>
                    <span className="text-muted">קושי: {river.difficulty}</span>
                  </div>

                  <div className="card-footer">
                    <Link
                      to={`/attraction/${river.slug}`}
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
            <p className="text-lg text-muted">לא נמצאו נהרות התואמים לחיפוש שלכם</p>
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

export default RiversPage;
