import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Filter } from "lucide-react";

import Card from "../components/Common/Card";
import SearchBar from "../components/Common/SearchBar";

// אנחנו מסתמכים על הייצוא השמי מהקובץ שלך
import { categories as categoriesData } from "../data/categories";

// טיפוס אחיד לתצוגה בדף
type LocalCategory = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  coverImage: string;
  tags: string[];
};

// עוזר: מייצר slug משם
const slugify = (s: string) =>
  (s || "")
    .toString()
    .trim()
    .toLowerCase()
    // תומך בעברית/יו״ד-נון וכד' עם Unicode
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "") || "category";

// עוזר: מזהה ייחודי אם אין
const rid = () => Math.random().toString(36).slice(2) + Date.now().toString(36);

// נרמול לפריסה האחידה שהדף צריך
const normalizeCategory = (c: any): LocalCategory => {
  const name = c?.name ?? c?.title ?? "קטגוריה";
  const slug = c?.slug ?? slugify(name);

  return {
    id: String(c?.id ?? slug ?? rid()),
    name,
    slug,
    shortDescription:
      c?.shortDescription ?? c?.description ?? c?.desc ?? "",
    coverImage: c?.coverImage ?? c?.image ?? c?.photo ?? "",
    tags: Array.isArray(c?.tags)
      ? c.tags
      : c?.filter
      ? [String(c.filter)]
      : [],
  };
};

const Categories: React.FC = () => {
  // ממירים את המערך המיובא לצורה אחידה פעם אחת
  const categories = useMemo<LocalCategory[]>(
    () => (Array.isArray(categoriesData) ? categoriesData : [])
      .map(normalizeCategory),
    []
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("כולם");

  // רשימת פילטרים: "כולם" + שמות ייחודיים (ללא כפילויות)
  const filters = useMemo(() => {
    const seen = new Set<string>();
    const namesInOrder = categories
      .map((c) => c.name)
      .filter((n) => (seen.has(n) ? false : (seen.add(n), true)));
    return ["כולם", ...namesInOrder];
  }, [categories]);

  // חיפוש + סינון
  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return categories.filter((category) => {
      const name = category.name?.toLowerCase() ?? "";
      const desc = category.shortDescription?.toLowerCase() ?? "";

      const matchesSearch = q === "" || name.includes(q) || desc.includes(q);
      const matchesFilter =
        selectedFilter === "כולם" || category.name === selectedFilter;

      return matchesSearch && matchesFilter;
    });
  }, [categories, searchQuery, selectedFilter]);

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
    <div className="py-12 fade-in" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heebo">
            גלו את כל הקטגוריות שלנו
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto font-assistant">
            בחרו קטגוריה והתעמקו בעולם החוויות – לפי עניין, רמת אתגר ומיקום.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="mb-8">
          <div className="max-w-2xl mx-auto mb-6">
            <SearchBar placeholder="חפשו קטגוריה..." onSearch={setSearchQuery} />
          </div>

          <div className="flex flex-wrap gap-2 justify-center items-center">
            <div className="flex items-center gap-2 mb-2">
              <Filter className="w-5 h-5 text-muted" />
              <span className="text-muted font-medium">סינון לפי:</span>
            </div>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedFilter === filter
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        {filteredCategories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCategories.map((category) => (
              <Card
                key={category.id}
                className="hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${category.coverImage})` }}
                />
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-2 font-heebo">
                    {highlightText(category.name, searchQuery)}
                  </h3>

                  {Array.isArray(category.tags) && category.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {category.tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="bg-surface rounded px-2 py-0.5 text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-muted mb-4 font-assistant">
                    {highlightText(category.shortDescription, searchQuery)}
                  </p>

                  <div className="card-footer">
                    <Link
                      to={`/category/${category.slug}`}
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
            <p className="text-xl text-muted mb-4">
              לא נמצאו תוצאות, נסו מילה אחרת
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedFilter("כולם");
              }}
              className="btn-secondary"
            >
              נקה סינונים
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 bg-surface rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-heebo">
            לא מצאתם מה שחיפשתם?
          </h2>
          <p className="text-xl text-muted mb-6 font-assistant">
            צרו קשר ואנו נתכנן עבורכם חוויה מותאמת אישית
          </p>
          <Link to="/contact" className="btn-primary px-8 py-4">
            בואו נתכנן ביחד
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;