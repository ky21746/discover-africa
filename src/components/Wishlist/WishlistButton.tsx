// src/pages/AttractionPage.tsx
import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Share2, MapPin, Clock, Users, Camera, Route } from "lucide-react";

// ====== DATA ======
import { gorillasChimps } from "../content/categories/gorillas-chimps";
import { safari } from "../content/categories/safari";

type Attraction = {
  id?: string;
  slug?: string;
  name: string;
  subtitle?: string;
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
  rating?: number;
  reviewCount?: number;
  price?: string;
  highlights?: string[];
  minAge?: number;
  nearby?: string[];
  whyUs?: string[];
  valueAdd?: string[];
};

const allAttractions: Attraction[] = [
  ...gorillasChimps,
  ...safari,
];

// מיפוי קטגוריות לשמות בעברית
const categoryNames: Record<string, string> = {
  "gorillas-chimps": "גורילות ושימפנזים",
  "safari": "ספארי",
  "adventure": "הרפתקאות",
  "culture": "תרבות ומסורת",
};

// ===== UI helpers =====
const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-white">
    <div className="text-white/80 text-xs">{label}</div>
    <div className="font-medium">{value}</div>
  </div>
);

const InfoCard: React.FC<
  React.PropsWithChildren<{ title: string; className?: string }>
> = ({ title, className = "", children }) => (
  <section
    className={`bg-white border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}
  >
    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
      <div className="w-1 h-5 bg-amber-500 rounded-full"></div>
      {title}
    </h3>
    <div className="text-[17px] leading-relaxed text-gray-800">{children}</div>
  </section>
);

// קומפוננט דירוג
const Rating: React.FC<{ rating: number; reviewCount: number }> = ({
  rating,
  reviewCount,
}) => (
  <div className="flex items-center gap-2 text-white">
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < Math.floor(rating)
              ? "fill-yellow-400 text-yellow-400"
              : "text-white/40"
          }`}
        />
      ))}
    </div>
    <span className="font-medium">{rating}</span>
    <span className="text-white/80">({reviewCount} ביקורות)</span>
  </div>
);

// קומפוננט Breadcrumb
const Breadcrumb: React.FC<{ category?: string; attractionName: string }> = ({
  category,
  attractionName,
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
        <span className="text-gray-900 font-medium truncate">{attractionName}</span>
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
    const attraction = allAttractions.find((x) => {
      const ns = normalize(x.slug);
      const ni = normalize(x.id);
      const nn = normalize(x.name);
      return target === ns || target === ni || target === nn;
    });

    if (attraction) {
      return {
        ...attraction,
        rating: 4.8,
        reviewCount: 247,
        price: "מ-$2,400",
      };
    }
    return attraction;
  }, [id]);

  const [expanded, setExpanded] = useState(false);

  if (!a) {
    return (
      <div dir="rtl" className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-3">האטרקציה לא נמצאה</h1>
        <p className="text-gray-600 mb-6">
          בדקו שהקישור תואם את ה־slug/שם/מזהה של האטרקציה.
        </p>
        <Link to="/categories" className="btn-secondary">
          חזרה לקטגוריות
        </Link>
      </div>
    );
  }

  return (
    <div dir="rtl" className="fade-in">
      {/* Breadcrumb */}
      <Breadcrumb category={a.category} attractionName={a.name} />

      {/* HERO */}
      <section className="relative w-full h-[42vh] md:h-[56vh]">
        <img
          src={a.image || a.gallery?.[0]}
          alt={a.name}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold mb-2">
                  {a.name}
                </h1>
                {a.subtitle && (
                  <p className="text-lg md:text-xl text-white/90 mb-3">
                    {a.subtitle}
                  </p>
                )}
                <Rating rating={a.rating || 4.8} reviewCount={a.reviewCount || 247} />
              </div>
              <div className="hidden md:flex items-center gap-3">
                <button className="bg-white/20 backdrop-blur-sm rounded-lg p-3 hover:bg-white/30 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="container mx-auto px-4 py-10 md:py-12 space-y-8">
        {/* במבט מהיר */}
        <section className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-3">במבט מהיר</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            {a.region && <Stat label="מיקום" value={a.region} />}
            {a.duration && <Stat label="משך" value={a.duration} />}
            {a.difficulty && <Stat label="קושי" value={a.difficulty} />}
            {a.bestSeason && <Stat label="עונה מומלצת" value={a.bestSeason} />}
            {a.permitCost && <Stat label="עלות רישיון" value={a.permitCost} />}
            {a.minAge && <Stat label="גיל מינימום" value={`${a.minAge}+`} />}
          </div>
        </section>

        {/* תיאור + צדדי */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm lg:col-span-2">
            <h3 className="text-lg font-bold mb-3">על האטרקציה</h3>
            <div className="text-[17px] leading-relaxed text-gray-800">
              {a.description?.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm">
            <h3 className="font-bold mb-2">פעולות מהירות</h3>
            <div className="space-y-3">
              <Link to="/contact" className="btn-primary w-full text-center">
                בדיקת זמינות
              </Link>
              <Link to="/plan-your-trip" className="btn-secondary w-full text-center">
                תכנון מסלול
              </Link>
            </div>
          </section>
        </div>

        {/* Highlights */}
        {a.highlights && a.highlights.length > 0 && (
          <InfoCard title="מה תראו">
            <ul className="list-disc pr-5 space-y-1">
              {a.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </InfoCard>
        )}

        {/* Wildlife */}
        {a.wildlife && a.wildlife.length > 0 && (
          <InfoCard title="חיות בר">
            <ul className="list-disc pr-5 space-y-1">
              {a.wildlife.map((animal, index) => (
                <li key={index}>{animal}</li>
              ))}
            </ul>
          </InfoCard>
        )}

        {/* How to get there */}
        {a.howToGetThere && a.howToGetThere.length > 0 && (
          <InfoCard title="איך להגיע">
            <ul className="list-disc pr-5 space-y-1">
              {a.howToGetThere.map((method, index) => (
                <li key={index}>{method}</li>
              ))}
            </ul>
          </InfoCard>
        )}

        {/* What to bring */}
        {a.whatToBring && a.whatToBring.length > 0 && (
          <InfoCard title="מה להביא">
            <ul className="list-disc pr-5 space-y-1">
              {a.whatToBring.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </InfoCard>
        )}

        {/* Health & Safety */}
        {a.healthSafety && a.healthSafety.length > 0 && (
          <InfoCard title="בריאות ובטיחות">
            <ul className="list-disc pr-5 space-y-1">
              {a.healthSafety.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </InfoCard>
        )}

        {/* Accommodation */}
        {a.accommodation && a.accommodation.length > 0 && (
          <InfoCard title="לינה באזור">
            <ul className="list-disc pr-5 space-y-1">
              {a.accommodation.map((place, index) => (
                <li key={index}>{place}</li>
              ))}
            </ul>
          </InfoCard>
        )}

        {/* Nearby attractions */}
        {a.nearby && a.nearby.length > 0 && (
          <InfoCard title="אטרקציות קרובות">
            <ul className="list-disc pr-5 space-y-1">
              {a.nearby.map((attraction, index) => (
                <li key={index}>{attraction}</li>
              ))}
            </ul>
          </InfoCard>
        )}

        {/* Why choose us */}
        {a.whyUs && a.whyUs.length > 0 && (
          <InfoCard title="למה לבחור בנו">
            <ul className="list-disc pr-5 space-y-1">
              {a.whyUs.map((reason, index) => (
                <li key={index}>{reason}</li>
              ))}
            </ul>
          </InfoCard>
        )}

        {/* Value add */}
        {a.valueAdd && a.valueAdd.length > 0 && (
          <InfoCard title="ערך מוסף">
            <ul className="list-disc pr-5 space-y-1">
              {a.valueAdd.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </InfoCard>
        )}

        {/* גלריה */}
        {a.gallery && a.gallery.length > 0 && (
          <section>
            <h2 className="text-xl font-bold mb-3">גלריה</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {a.gallery.map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden border bg-white">
                  <img src={src} alt={`${a.name} ${i + 1}`} className="w-full h-40 md:h-44 object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link to="/contact" className="btn-primary w-full sm:w-auto text-center">
            בדיקת זמינות / תכנון אישי
          </Link>
          <Link to="/categories" className="btn-secondary w-full sm:w-auto text-center">
            עוד אטרקציות
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AttractionPage;