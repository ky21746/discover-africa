// src/pages/CategoryPage.tsx
import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Search, Filter, Sparkles } from "lucide-react";

import Card from "../components/Common/Card";
import Breadcrumbs from "../components/Common/Breadcrumbs";
import TripPlannerModal from "../components/TripPlanner/TripPlannerModal";

// ✅ משתמשים ב-TS המעודכן (לא JSON הישן)
import { categories as categoriesData } from "../data/categories";
import { getCategoryParks } from "../data/parks";

// טיפוס לקטגוריות (תואם ל-data/categories.ts)
type LocalCategory = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  coverImage: string;
  tags: string[];
};

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isTripPlannerOpen, setIsTripPlannerOpen] = useState(false);

  const categories = categoriesData;
  const categorySlug = slug ?? "";
  const category = categories.find((cat) => cat.slug === categorySlug);

  // מקור הנתונים — אך ורק מ- data/parks.ts
  const parks = useMemo(() => getCategoryParks(categorySlug), [categorySlug]);

  const allTags = Array.from(
    new Set(
      parks.flatMap((park: any) => (Array.isArray(park.tags) ? park.tags : []))
    )
  );

  const filteredParks = useMemo(() => {
    const q = searchQuery.trim();
    return parks.filter((park: any) => {
      const matchesSearch =
        q === "" ||
        (park.name && park.name.includes(q)) ||
        (park.summary && park.summary.includes(q)) ||
        (park.area && park.area.includes(q));

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => (park.tags || []).includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [parks, searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const highlightText = (text: string, query: string): React.ReactNode => {
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

  if (!category) {
    return (
      <div className="py-20 text-center" dir="rtl">
        <h1 className="mb-4 text-4xl font-bold font-heebo">קטגוריה לא נמצאה</h1>
        <Link to="/categories" className="btn-primary">
          חזרה לקטגוריות
        </Link>
      </div>
    );
  }

  const categoryDescriptions: Record<string, string> = {
    "ספארי":
      "ממורצ׳יסון והמפלים דרך המלכה אליזבת ועד קידפו הפראית — בחרו את חוויית הספארי שמתאימה לכם.",
    "ריטריטים":
      "יוגה, מדיטציה, נשימה ורוגע סביב אגמים, יערות והרים — הפסקה אמיתית לנשמה.",
  };

  return (
    <>
      <div className="py-12 fade-in" dir="rtl">
        <div className="container mx-auto px-4">
          <Breadcrumbs
            items={[
              { label: "בית", path: "/" },
              { label: "קטגוריות", path: "/categories" },
              { label: category.name },
            ]}
          />

          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl font-heebo">
              {category.name} באוגנדה
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-muted font-assistant">
              {categoryDescriptions[category.name] ?? category.shortDescription}
            </p>
          </div>

          {/* Smart Agent Banner */}
          <div className="mb-8 rounded-2xl bg-primary p-6 text-center text-white">
            <h3 className="mb-2 text-xl font-bold font-heebo">לא בטוחים מה לבחור?</h3>
            <p className="mb-4 font-assistant">
              התחילו עם הסוכן החכם שלנו לתכנון מסלול מותאם אישית
            </p>
            <button
              onClick={() => setIsTripPlannerOpen(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-primary transition-colors hover:bg-gray-100"
            >
              <Sparkles className="h-5 w-5" />
              התחל תכנון מסלול
            </button>
          </div>

          {/* Search + Filters */}
          <div className="mb-8">
            <div className="mx-auto mb-6 max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="חיפוש לפי פארק/חוויה…"
                  className="form-input pl-12"
                />
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              </div>
            </div>

            {allTags.length > 0 && (
              <div className="text-center">
                <div className="mb-4 flex items-center justify-center gap-2">
                  <Filter className="h-5 w-5 text-muted" />
                  <span className="font-medium text-muted">סינון לפי:</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        selectedTags.includes(tag)
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Results Count */}
          <div className="mb-6 text-center">
            <p className="text-muted">נמצאו {filteredParks.length} אפשרויות</p>
          </div>

          {/* Grid */}
          {filteredParks.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredParks.map((park: any) => (
                <Card key={park.slug} className="transition-all duration-300 hover:shadow-lg">
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${park.image})` }}
                  />
                  <div className="card-content">
                    <div className="mb-3 flex items-center gap-2">
                      {park.area ? (
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600">
                          {park.area}
                        </span>
                      ) : null}
                      {park.cost_est ? (
                        <span className="rounded-full bg-primary px-2 py-1 text-xs text-white">
                          {park.cost_est}
                        </span>
                      ) : null}
                      {park.family ? (
                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-600">
                          למשפחות
                        </span>
                      ) : null}
                    </div>

                    <h3 className="mb-3 text-xl font-semibold font-heebo">
                      {highlightText(park.name, searchQuery)}
                    </h3>

                    {park.summary ? (
                      <p className="mb-4 font-assistant text-muted">
                        {highlightText(park.summary, searchQuery)}
                      </p>
                    ) : null}

                    {Array.isArray(park.highlights) && park.highlights.length > 0 ? (
                      <div className="mb-4">
                        <div className="mb-2 text-sm text-muted">מה תראו:</div>
                        <div className="flex flex-wrap gap-1">
                          {park.highlights.slice(0, 3).map((h: string, i: number) => (
                            <span key={i} className="rounded bg-surface px-2 py-1 text-xs">
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    <div className="card-footer">
                      <Link to={`/category/${categorySlug}/${park.slug}`} className="btn-primary w-full">
                        גלה עוד
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center">
              <p className="mb-4 text-xl text-muted">לא נמצאו תוצאות תואמות, נסו סינון אחר</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTags([]);
                }}
                className="btn-secondary"
              >
                נקה סינונים
              </button>
            </div>
          )}
        </div>
      </div>

      <TripPlannerModal
        isOpen={isTripPlannerOpen}
        onClose={() => setIsTripPlannerOpen(false)}
      />
    </>
  );
};

export default CategoryPage;