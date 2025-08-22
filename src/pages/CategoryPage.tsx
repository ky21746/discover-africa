// src/pages/CategoryPage.tsx
import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Filter } from "lucide-react";
import Card from "../components/Common/Card";
import { categories as categoriesData } from "../data/categories";
import { getCategoryParks } from "../data/parks";
import { safari } from "../content/categories/safari";

// ✅ נוסיף את דאטת האטרקציות של גורילות/שימפנזים
import { gorillasChimps } from "../content/categories/gorillas-chimps";

type LocalCategory = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  coverImage: string;
  tags: string[];
};

const nameBySlug: Record<string, string> = {
  safari: "ספארי",
  "gorillas-chimps": "גורילות ושימפנזים",
  primates: "גורילות ושימפנזים",
  water: "אגמים, מפלים ונהרות",
  mountains: "הרים וטרקים",
  culture: "תרבות ומורשת",
  extreme: "אקסטרים",
  families: "משפחות",
  luxury: "יוקרה",
  retreats: "ריטריטים",
};

const descBySlug: Record<string, string> = {
  safari: "ממורצ׳יסון דרך המלכה אליזבת ועד קידפו — בחרו את חוויית הספארי שלכם.",
  "gorillas-chimps": "מפגשים מודרכים עם גורילות ושימפנזים בסביבתן הטבעית.",
  primates: "מפגשים מודרכים עם גורילות ושימפנזים בסביבתן הטבעית.",
  water: "שייט רגוע, רפטינג בנילוס ותצפיות מים באגמים ובמפלים.",
  mountains: "רוונזורי, סיפי ואלגון — מהליכות ועד טרקים מאתגרים.",
  culture: "קמפלה, מורשת בגנדה ומופעי ריקוד ומוזיקה.",
  extreme: "רפטינג, בנג'י ופעילויות אדרנלין.",
  families: "חוויות נגישות שמתאימות לכל הגילאים.",
  luxury: "לינה פרימיום, טיסות פנימיות ושירות אישי.",
  retreats: "יוגה, מדיטציה ורוגע סביב אגמים ויערות.",
};

const parksKeyBySlug = (slug: string) => {
  switch (slug) {
    case "gorillas-chimps":
    case "primates":
      return "wildlife";
    case "extreme":
      return "water";
    default:
      return slug;
  }
};

// slug בטוח
const normalize = (s?: string) =>
  (s ?? "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\u0590-\u05FF\-]/g, "")
    .replace(/-+/g, "-");

const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const categorySlug = slug ?? "";

  const isPrimates =
    categorySlug === "gorillas-chimps" || categorySlug === "primates";
  const isSafari = categorySlug === "safari";

  const categories = categoriesData as LocalCategory[];
  const category = categories.find((c) => c.slug === categorySlug);

  const displayName = category?.name ?? nameBySlug[categorySlug] ?? "קטגוריה";
  const displayDesc =
    category?.shortDescription ?? descBySlug[categorySlug] ?? "";

  // === דאטה לכרטיסים ===
  const parksCategoryKey = parksKeyBySlug(categorySlug);
  const parks = useMemo(
    () => (isPrimates || isSafari ? [] : getCategoryParks(parksCategoryKey)),
    [isPrimates, isSafari, parksCategoryKey]
  );

  // כאשר זו קטגוריית גורילות/שימפנזים – נשתמש ב־gorillasChimps
  const primateAttractions = useMemo(() => gorillasChimps, []);
  // קטגוריית ספארי – נשתמש ב־safari
  const safariAttractions = useMemo(() => safari, []);

  // בחירה דינמית: האם מציגים אטרקציות (פרימטים/ספארי) או parks
  const showAttractions = isPrimates || isSafari;
  const attractions = useMemo(() => {
    if (isPrimates) return primateAttractions;
    if (isSafari) return safariAttractions;
    return [];
  }, [isPrimates, isSafari, primateAttractions, safariAttractions]);

  // === תגים/פילטרים עובדים רק עבור parks (לאטרקציות אין תגים ב־data) ===
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const allTags = useMemo(() => {
    if (showAttractions) return []; // אין תגים לאטרקציות
    return Array.from(
      new Set(
        parks.flatMap((p: any) => (Array.isArray(p.tags) ? p.tags : []))
      )
    );
  }, [parks, showAttractions]);

  const filteredParks = useMemo(() => {
    if (showAttractions) return []; // לא רלוונטי כשמציגים אטרקציות
    if (selectedTags.length === 0) return parks;
    return parks.filter((p: any) =>
      selectedTags.some((t) => (p.tags || []).includes(t))
    );
  }, [parks, selectedTags, showAttractions]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="py-8 fade-in" dir="rtl">
      <div className="container mx-auto px-4">
        {/* כותרת ותיאור */}
        <div className="mb-4 text-center">
          <h1 className="mb-2 text-3xl md:text-4xl font-bold font-sans">
            {displayName} באוגנדה
          </h1>
          {displayDesc && (
            <p className="mx-auto max-w-3xl text-base md:text-lg text-muted font-sans">
              {displayDesc}
            </p>
          )}
        </div>

        {/* פילטר תגים – רק לשאר הקטגוריות */}
        {!showAttractions && allTags.length > 0 && (
          <div className="mb-3 text-center">
            <div className="mb-2 flex items-center justify-center gap-2 text-sm">
              <Filter className="h-4 w-4 text-muted" />
              <span className="font-medium text-muted">סינון לפי:</span>
            </div>
            <div className="flex flex-wrap justify-center gap-1">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`rounded-full px-3 py-1 text-xs md:text-sm font-medium transition-colors ${
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

        {/* ספירת פריטים */}
        <div className="mb-3 text-center">
          <p className="text-sm text-muted">
            נמצאו {showAttractions ? attractions.length : filteredParks.length} אפשרויות
          </p>
        </div>

        {/* רשת הכרטיסים */}
        {showAttractions ? (
          // ====== כרטיסי אטרקציות (גורילות/שימפנזים או ספארי) ======
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {attractions.map((item: any) => {
              const targetSlug = normalize(item.slug || item.id || item.name);
              const cover =
                item.gallery?.[0] ??
                item.image ??
                "https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg";
              const summary =
                item.description?.length > 140
                  ? item.description.slice(0, 140) + "…"
                  : item.description;

              return (
                <Card
                  key={item.id || item.slug || item.name}
                  className="transition-all duration-300 hover:shadow-lg"
                >
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${cover})` }}
                  />
                  <div className="card-content">
                    <h3 className="mb-2 text-lg font-semibold font-sans">
                      {item.name}
                    </h3>

                    {summary && (
                      <p className="mb-3 text-sm font-sans text-muted">
                        {summary}
                      </p>
                    )}

                    {Array.isArray(item.highlights) &&
                      item.highlights.length > 0 && (
                        <div className="mb-3">
                          <div className="mb-1 text-xs text-muted">מה תראו:</div>
                          <div className="flex flex-wrap gap-1">
                            {item.highlights.slice(0, 3).map((h: string, i: number) => (
                              <span
                                key={i}
                                className="rounded bg-surface px-2 py-0.5 text-[11px]"
                              >
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    <div className="card-footer">
                      <Link
                        to={`/attraction/${targetSlug}`}
                        className="btn-primary w-full"
                      >
                        גלה עוד
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : filteredParks.length > 0 ? (
          // ====== כרטיסי פארקים רגילים (כמו שהיה) ======
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredParks.map((park: any) => {
              const targetSlug = normalize(park.slug || park.id || park.name);
              return (
                <Card
                  key={park.slug || park.id || park.name}
                  className="transition-all duration-300 hover:shadow-lg"
                >
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${park.image})` }}
                  />
                  <div className="card-content">
                    <div className="mb-2 flex items-center gap-2">
                      {park.area && (
                        <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] text-gray-600">
                          {park.area}
                        </span>
                      )}
                      {park.cost_est && (
                        <span className="rounded-full bg-primary px-2 py-0.5 text-[11px] text-white">
                          {park.cost_est}
                        </span>
                      )}
                      {park.family && (
                        <span className="rounded-full bg-green-100 px-2 py-0.5 text-[11px] text-green-700">
                          למשפחות
                        </span>
                      )}
                    </div>

                    <h3 className="mb-2 text-lg font-semibold font-sנס text-muted">
                      {park.name}
                    </h3>

                    {park.summary && (
                      <p className="mb-3 text-sm font-sans text-muted">
                        {park.summary}
                      </p>
                    )}

                    {Array.isArray(park.highlights) &&
                      park.highlights.length > 0 && (
                        <div className="mb-3">
                          <div className="mb-1 text-xs text-muted">מה תראו:</div>
                          <div className="flex flex-wrap gap-1">
                            {park.highlights.slice(0, 3).map((h: string, i: number) => (
                              <span
                                key={i}
                                className="rounded bg-surface px-2 py-0.5 text-[11px]"
                              >
                                {h}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                    <div className="card-footer">
                      <Link
                        to={`/attraction/${targetSlug}`}
                        className="btn-primary w-full"
                      >
                        גלה עוד
                      </Link>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="py-10 text-center">
            <p className="mb-4 text-lg text-muted">אין תוצאות להצגה כרגע</p>
            {!showAttractions && (
              <button onClick={() => setSelectedTags([])} className="btn-secondary">
                נקה סינונים
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;