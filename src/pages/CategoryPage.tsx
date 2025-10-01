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
// ✅ נוסיף את דאטת האטרקציות של מים
import { water } from "../content/categories/water";
import { lakes } from "../content/categories/lakes";
import { rivers } from "../content/categories/rivers";

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
    case "water":
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
  // קטגוריית מים מטפלת בתת-קטגוריות ב-WaterSubcategories

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

  // אם זו קטגוריית מים - קפוץ ל-WaterSubcategories
  if (categorySlug === "water") {
    window.location.href = "/water";
    return null;
  }

  return (
    <div className="fade-in" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white h-[40vh] min-h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: category?.coverImage 
              ? `url(${category.coverImage})`
              : "url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/hero-gorilla.webp?alt=media&token=c67bec83-4363-4104-a102-757f69b351a4)"
          }}
        />
        
        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Content positioned at center bottom */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center space-y-4 text-white drop-shadow-md max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            {displayName} באוגנדה
          </h1>
          {displayDesc && (
            <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
              {displayDesc}
            </p>
          )}
          
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">

        {/* רשת הכרטיסים */}
        {showAttractions ? (
          // ====== כרטיסי אטרקציות (גורילות/שימפנזים, ספארי או מים) ======
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {attractions.map((item: any) => {
              const targetSlug = normalize(item.slug || item.id || item.name);
              
              // Helper function to get image source from gallery item
              const getImageSrc = (item: string | any): string => {
                return typeof item === 'string' ? item : item.src;
              };
              
              const cover =
                item.image ??
                (item.gallery && item.gallery.length > 0 ? getImageSrc(item.gallery[0]) : null) ??
                "https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg";
              const summary = item.subtitle || item.description;

              return (
                <Link
                  key={item.id || item.slug || item.name}
                  to={`/attraction/${targetSlug}`}
                  className="category-card transition-all duration-300 hover:shadow-lg cursor-pointer"
                >
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${cover})` }}
                  >
                    <div className="image-overlay">
                      <h3 className="font-sans">
                        {item.name}
                      </h3>
                      
                      {summary && (
                        <p className="font-sans">
                          {summary}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <div className="btn-discover">
                      קרא עוד
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : filteredParks.length > 0 ? (
          // ====== כרטיסי פארקים רגילים (כמו שהיה) ======
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredParks.map((park: any) => {
              const targetSlug = normalize(park.slug || park.id || park.name);
              return (
                <Link
                  key={park.slug || park.id || park.name}
                  to={`/attraction/${targetSlug}`}
                  className={`category-card transition-all duration-300 hover:shadow-lg cursor-pointer ${
                    categorySlug === "mountains" ? "mountains-special" : ""
                  }`}
                >
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${park.image})` }}
                  >
                    <div className="image-overlay">
                      <h3 className="font-sans">
                        {park.name}
                      </h3>
                      
                      {park.description && (
                        <p className="font-sans">
                          {park.description.length > 50 
                            ? park.description.slice(0, 50) + "." 
                            : park.description}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="card-content">
                    <div className="mb-3 flex items-center gap-2">
                      {park.area && (
                        <span className="highlight-tag">
                          {park.area}
                        </span>
                      )}
                      {park.cost_est && (
                        <span className="highlight-tag" style={{background: '#CAA131'}}>
                          {park.cost_est}
                        </span>
                      )}
                      {park.family && (
                        <span className="highlight-tag" style={{background: '#4B361C'}}>
                          למשפחות
                        </span>
                      )}
                    </div>
                    
                    <div className="btn-discover">
                      קרא עוד
                    </div>
                  </div>
                </Link>
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