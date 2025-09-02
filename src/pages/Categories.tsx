import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Card from "../components/Common/Card";
import SearchBar from "../components/Common/SearchBar";
import { categories } from "../data/categories";

const Categories: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // חיפוש
  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return categories.filter((category) => {
      const name = category.name?.toLowerCase() ?? "";
      const desc = category.shortDescription?.toLowerCase() ?? "";

      return q === "" || name.includes(q) || desc.includes(q);
    });
  }, [categories, searchQuery]);

  // הדגשת טקסט בחיפוש
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));
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
    <div className="py-12 fade-in" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
            גלו את כל הקטגוריות שלנו
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto font-sans">
            בחרו קטגוריה והתעמקו בעולם החוויות – לפי עניין, רמת אתגר ומיקום.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto mb-6">
            <SearchBar placeholder="חפשו קטגוריה..." onSearch={setSearchQuery} />
          </div>
        </div>

        {/* Categories Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <Card
                key={category.id}
                className={`hover:shadow-lg transition-all duration-300 ${
                  category.slug === "mountains" ? "rwenzori-special" : ""
                }`}
              >
                <div
                  className={`card-image ${category.slug}-image`}
                  style={{ backgroundImage: `url(${category.coverImage})` }}
                />
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-2 font-sans">
                    {highlightText(category.name, searchQuery)}
                  </h3>

                  <p className="text-muted mb-4 font-sans">
                    {highlightText(category.shortDescription, searchQuery)}
                  </p>

                  <div className="card-footer">
                    <Link
                      to={category.slug === "water" ? "/water" : `/category/${category.slug}`}
                      className="btn-card w-full"
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
            <p className="text-xl text-muted mb-4">
              לא נמצאו תוצאות, נסו מילה אחרת
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
              }}
              className="btn-secondary"
            >
              נקה חיפוש
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-surface rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-sans">
            לא מצאתם מה שחיפשתם?
          </h2>
          <p className="text-xl text-muted mb-6 font-sans">
            צרו קשר ואנו נתכנן עבורכם חוויה מותאמת אישית
          </p>
          <Link to="/contact" className="btn-primary">
            בואו נתכנן ביחד
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;