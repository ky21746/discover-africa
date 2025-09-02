// src/pages/ExtremePage.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/Common/SearchBar";

const ExtremePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

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

        {/* תוכן זמני */}
        <div className="text-center py-12">
          <p className="text-xl text-muted mb-4">
            עמוד זה בהכנה - בקרוב יוצגו כאן חוויות אקסטרים מרהיבות
          </p>
          <p className="text-lg text-muted mb-6">
            רפטינג בנילוס, באנג'י, טיפוס הרים, ספארי אתגרי ועוד
          </p>
          <Link to="/categories" className="btn-primary">
            חזרה לקטגוריות
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExtremePage;