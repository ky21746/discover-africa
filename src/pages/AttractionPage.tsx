// src/pages/AttractionPage.tsx
import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";

// ====== DATA ======
import { gorillasChimps } from "../content/categories/gorillas-chimps";

type Attraction = {
  id?: string;
  slug?: string;
  name: string;
  category?: string;
  region?: string;
  duration?: string;
  difficulty?: string;
  bestSeason?: string;
  permitCost?: string;
  description?: string;
  summary?: string;
  gallery?: string[];
  image?: string;
  wildlife?: string[];
  howToGetThere?: string[];
  accommodation?: string[];
  healthSafety?: string[];
  whatToBring?: string[];
};

const allAttractions: Attraction[] = [...gorillasChimps];

// מיפוי קטגוריות לשמות בעברית
const categoryNames: Record<string, string> = {
  "gorillas-chimps": "גורילות ושימפנזים",
  "safari": "ספארי",
  "adventure": "הרפתקאות",
  "culture": "תרבות ומסורת",
};

// ===== UI helpers =====
const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-gray-50 rounded-lg p-3">
    <div className="text-gray-500 text-xs">{label}</div>
    <div className="font-medium">{value}</div>
  </div>
);

const InfoCard: React.FC<
  React.PropsWithChildren<{ title: string; className?: string }>
> = ({ title, className = "", children }) => (
  <section className={`bg-white border rounded-2xl p-5 md:p-6 shadow-sm ${className}`}>
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    <div className="text-[17px] leading-relaxed text-gray-800">{children}</div>
  </section>
);

// קומפוננט Breadcrumb
const Breadcrumb: React.FC<{ category?: string; attractionName: string }> = ({ 
  category, 
  attractionName 
}) => (
  <nav className="bg-gray-50 border-b">
    <div className="container mx-auto max-w-screen-xl px-4 py-3">
      <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600">
        <Link to="/" className="hover:text-primary-600 transition-colors">
          בית
        </Link>
        <span className="text-gray-400">/</span>
        <Link to="/categories" className="hover:text-primary-600 transition-colors">
          קטגוריות
        </Link>
        {category && (
          <>
            <span className="text-gray-400">/</span>
            <Link 
              to={`/category/${category}`} 
              className="hover:text-primary-600 transition-colors"
            >
              {categoryNames[category] || category}
            </Link>
          </>
        )}
        <span className="text-gray-400">/</span>
        <span className="text-gray-900 font-medium">{attractionName}</span>
      </div>
    </div>
  </nav>
);

// slug normalizer
const normalize = (s?: string) =>
  (s ?? "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\u0590-\u05FF\-]/g, "")
    .replace(/-+/g, "-");

const AttractionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const a = useMemo(() => {
    if (!id) return undefined;
    const target = normalize(id);
    return allAttractions.find((x) => {
      const ns = normalize(x.slug);
      const ni = normalize(x.id);
      const nn = normalize(x.name);
      return target === ns || target === ni || target === nn;
    });
  }, [id]);

  const [expanded, setExpanded] = useState(false);

  if (!a) {
    return (
      <div dir="rtl" className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-3">האטרקציה לא נמצאה</h1>
        <p className="text-gray-600 mb-6">
          בדקו שהקישור תואם את ה־slug/שם/מזהה של האטרקציה.
        </p>
        <Link to="/categories" className="btn-secondary">חזרה לקטגוריות</Link>
      </div>
    );
  }

  // תמונת HERO
  const heroImage =
    a.gallery?.[0] ??
    a.image ??
    "https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg";

  // "במבט מהיר"
  const quickStats = [
    { label: "מיקום", value: a.region ?? "דרום־מערב אוגנדה" },
    { label: "אופי הטרק", value: a.duration ?? "משתנה לפי מיקום המשפחה" },
    { label: "עונות מומלצות", value: a.bestSeason ?? "יונ–ספט, דצמ–פבר (יבשות)" },
    { label: "רישיון", value: a.permitCost ?? "להזמין חודשים מראש" },
  ];

  const tips: string[] = [
    ...(a.permitCost ? [`רישיון ${a.permitCost} — להזמין חודשים מראש.`] : []),
    ...(a.healthSafety ?? []),
    ...(a.whatToBring ?? []),
  ];

  const introFull = a.description ?? a.summary ?? "";
  const introShort = introFull.length > 320 ? introFull.slice(0, 320) + "…" : introFull;

  return (
    <div dir="rtl" className="fade-in">
      {/* ===== HERO: תמונה + כותרת בלבד ===== */}
      <section className="relative w-full h-[42vh] md:h-[56vh]">
        <img
          src={heroImage}
          alt={a.name}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <div className="container mx-auto max-w-screen-xl">
            <h1 className="text-3xl md:text-5xl font-bold">{a.name}</h1>
          </div>
        </div>
      </section>

      {/* ===== BREADCRUMB ===== */}
      <Breadcrumb category={a.category} attractionName={a.name} />

      {/* ===== BODY ===== */}
      <div className="container mx-auto max-w-screen-xl px-4 py-8 md:py-10 space-y-6">
        {/* במבט מהיר */}
        <section className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-3">במבט מהיר</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[16px]">
            {quickStats.map((s, i) => (
              <Stat key={i} label={s.label} value={s.value} />
            ))}
          </div>
        </section>

        {/* גריד ראשי: ימין תוכן, שמאל מפה/גלריה/עוד פרימטים */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          {/* ===== תוכן ===== */}
          <section className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm">
            {/* פתיח בלי תמונה */}
            <div className="space-y-2">
              {introFull && (
                <p className="text-[17px] leading-relaxed">
                  {expanded ? introFull : introShort}
                </p>
              )}
              {introFull && introFull.length > 320 && (
                <button
                  onClick={() => setExpanded((v) => !v)}
                  className="text-primary-600 hover:underline mt-2 text-sm"
                >
                  {expanded ? "קרא פחות" : "קרא עוד"}
                </button>
              )}
            </div>

            <div className="h-4" />

            {/* קוביות אינפו – אחת מתחת לשנייה */}
            <div className="grid grid-cols-1 gap-4">
              {(a.duration || a.difficulty) && (
                <InfoCard title="חוויית הטרק">
                  <ul className="list-disc pr-5 space-y-1">
                    {a.duration && <li>אורך ההליכה {a.duration}.</li>}
                    {a.difficulty && <li>דרגת קושי: {a.difficulty}.</li>}
                    <li>בהגעה למשפחה — שעה צפייה שקטה: משחקי גורים, אינטראקציות וסילברבקים.</li>
                  </ul>
                </InfoCard>
              )}

              {a.wildlife && a.wildlife.length > 0 && (
                <InfoCard title="מה עוד תראו בדרך?">
                  <ul className="list-disc pr-5 space-y-1">
                    {a.wildlife.map((w, i) => (
                      <li key={i}>{w}</li>
                    ))}
                  </ul>
                </InfoCard>
              )}

              {(a.bestSeason || (a.howToGetThere?.length ?? 0) > 0) && (
                <InfoCard title="תכנון הטיול">
                  <div className="space-y-3">
                    {a.bestSeason && (
                      <div>
                        <strong>עונות מומלצות:</strong> {a.bestSeason}
                      </div>
                    )}
                    {a.howToGetThere && a.howToGetThere.length > 0 && (
                      <div>
                        <strong>איך להגיע:</strong>
                        <ul className="list-disc pr-5 mt-1 space-y-1">
                          {a.howToGetThere.map((x, i) => (
                            <li key={i}>{x}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </InfoCard>
              )}

              {a.accommodation && a.accommodation.length > 0 && (
                <InfoCard title="לינה באזור">
                  <ul className="list-disc pr-5 space-y-1">
                    {a.accommodation.map((acc, i) => (
                      <li key={i}>{acc}</li>
                    ))}
                  </ul>
                </InfoCard>
              )}

              {tips.length > 0 && (
                <InfoCard title="טיפים חשובים">
                  <ul className="list-disc pr-5 space-y-1">
                    {tips.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </InfoCard>
              )}
            </div>
          </section>

          {/* ===== עמודה שמאלית ===== */}
          <div className="space-y-6">
            {/* מפה */}
            <section className="rounded-2xl overflow-hidden border bg-white">
              <iframe
                title={`מפה – ${a.name}`}
                className="w-full h-72"
                loading="lazy"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=29.4%2C-1.3%2C30.2%2C-0.7&layer=mapnik&marker=-1.05%2C29.75`}
              />
            </section>

            {/* גלריה עד 4 תמונות */}
            {a.gallery && a.gallery.length > 0 && (
              <section className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm">
                <h2 className="text-xl font-bold mb-3">גלריה</h2>
                <div className="grid grid-cols-2 gap-3">
                  {a.gallery.slice(0, 4).map((src, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border bg-white">
                      <img
                        src={src}
                        alt={`${a.name} ${i + 1}`}
                        className="w-full h-36 md:h-40 object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* עוד פרימטים וחוויות */}
            <section className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm">
              <h2 className="text-xl font-bold mb-3">עוד פרימטים וחוויות</h2>
              <div className="space-y-4 text-[17px]">
                <div className="space-y-1">
                  <div className="font-semibold">שימפנזים בקיבאלה</div>
                  <div className="text-gray-500">סיור בוקר/צהריים ביער גשם; גיל 12+</div>
                </div>
                <hr className="border-gray-200" />
                <div className="space-y-1">
                  <div className="font-semibold">גורילות במגהינגה</div>
                  <div className="text-gray-500">חלופה שקטה לבווינדי; נוף וולקני</div>
                </div>
                <Link to="/contact" className="btn-secondary w-full inline-flex justify-center">
                  נתפור לכם מסלול סביב פרימטים
                </Link>
              </div>
            </section>
          </div>
        </div>

        {/* CTA תחתון בלבד */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link to="/contact" className="btn-primary w-full sm:w-auto text-center">
            בדיקת זמינות / תכנון אישי
          </Link>
          <Link
            to={a.category === "gorillas-chimps" ? "/category/gorillas-chimps" : "/categories"}
            className="btn-secondary w-full sm:w-auto text-center"
          >
            עוד חוויות דומות
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AttractionPage;