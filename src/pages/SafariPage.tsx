// src/pages/SafariPage.tsx
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Filter } from "lucide-react";
import Card from "../components/Common/Card";
import SearchBar from "../components/Common/SearchBar";
import { safari } from "../content/categories/safari";

const SafariPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // חיפוש
  const filteredSafari = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return safari.filter((item) => {
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
            ספארי באוגנדה
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted font-sans">
            גלו את חוויית הספארי המרהיבה של אוגנדה - ממורצ'יסון ועד המלכה אליזבת
          </p>
        </div>

        {/* חיפוש */}
        <div className="mb-8">
          <SearchBar
            onSearch={setSearchQuery}
            placeholder="חפשו ספארי..."
          />
        </div>

        {/* ספירת ספארי */}
        <div className="mb-6 text-center">
          <p className="text-sm text-muted">
            נמצאו {filteredSafari.length} אפשרויות ספארי
          </p>
        </div>

        {/* רשת הכרטיסים */}
        {filteredSafari.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSafari.map((item) => (
              <Card
                key={item.id}
                className="hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-2 font-sans">
                    {highlightText(item.name || "", searchQuery)}
                  </h3>
                  <p className="text-sm text-muted mb-3 font-sans">
                    {highlightText(item.subtitle || "", searchQuery)}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {item.highlights?.slice(0, 3).map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-surface rounded px-2 py-0.5 text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-3 text-sm">
                    <span className="text-muted">משך: {item.duration}</span>
                    <span className="text-muted">קושי: {item.difficulty}</span>
                  </div>

                  <Link
                    to={`/attraction/${item.slug}`}
                    className="btn-primary w-full text-center"
                  >
                    גלה עוד
                  </Link>
                </div>
              </Card>
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

export default SafariPage;