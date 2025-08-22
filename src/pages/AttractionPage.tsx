// src/pages/AttractionPage.tsx
import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Share2, Heart, MapPin, Clock, Users, Camera, Route, Plus } from "lucide-react";

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
  highlights?: string[];
  minAge?: number;
  nearby?: string[];
  whyUs?: string[];
  valueAdd?: string[];
  // Mock data for demo
  rating?: number;
  reviewCount?: number;
  price?: string;
};

const allAttractions: Attraction[] = [...gorillasChimps, ...safari];

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
  <section className={`bg-white border rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}>
    <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
      <div className="w-1 h-5 bg-amber-500 rounded-full"></div>
      {title}
    </h3>
    <div className="text-[17px] leading-relaxed text-gray-800">{children}</div>
  </section>
);

// קומפוננט דירוג
const Rating: React.FC<{ rating: number; reviewCount: number }> = ({ rating, reviewCount }) => (
  <div className="flex items-center gap-2 text-white">
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-white/40'}`} 
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
    
    // Add mock data for demo
    if (attraction) {
      return {
        ...attraction,
        rating: 4.8,
        reviewCount: 247,
        price: "מ-$2,400"
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
        <Link to="/categories" className="btn-secondary">חזרה לקטגוריות</Link>
      </div>
    );
  }

  // תמונת HERO
  const heroImage =
    a.gallery?.[0] ??
    a.image ??
    "https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg";

  // Map coordinates for different attractions
  const getMapCoordinates = (attractionId: string) => {
    const coordinates = {
      'gorillas-bwindi': { lat: -1.05, lng: 29.75, bbox: '29.4,-1.3,30.2,-0.7' },
      'gorillas-mgahinga': { lat: -1.23, lng: 29.63, bbox: '29.4,-1.4,29.9,-1.0' },
      'chimps-kibale': { lat: 0.57, lng: 30.36, bbox: '30.1,0.3,30.6,0.8' }
    };
    return coordinates[attractionId as keyof typeof coordinates] || coordinates['gorillas-bwindi'];
  };

  const mapCoords = getMapCoordinates(a.id || a.slug || '');

  // "במבט מהיר" - עכשיו במידע Hero
  const quickStats = [
    { label: "מיקום", value: a.region ?? "דרום־מערב אוגנדה" },
    { label: "משך", value: a.duration ?? "3-6 שעות" },
    { label: "קושי", value: a.difficulty ?? "בינוני-גבוה" },
    { label: "מחיר", value: a.price ?? "מ-$800" },
  ];

  const tips: string[] = [
    ...(a.permitCost ? [`רישיון ${a.permitCost} — להזמין חודשים מראש.`] : []),
    ...(a.healthSafety ?? []),
    ...(a.whatToBring ?? []),
  ];

  const introFull = a.description ?? a.summary ?? "";
  const introShort = introFull.length > 280 ? introFull.slice(0, 280) + "…" : introFull;

  return (
    <div dir="rtl" className="fade-in">
      {/* ===== ENHANCED HERO SECTION ===== */}
      <section className="relative w-full h-[70vh] md:h-[75vh]">
        {/* Background Image - Mobile Optimized */}
        <div 
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            backgroundPosition: 'center 30%' // Better framing for mobile
          }}
        />
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        
        {/* Secondary Action Buttons - Top Right */}
        <div className="absolute top-6 left-6 flex gap-3 z-[5]">
          <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <Camera className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content - Mobile Optimized */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="container mx-auto max-w-screen-xl">
            {/* Category Badge */}
            <div className="mb-3">
              <span className="inline-flex items-center gap-2 bg-amber-500 text-black px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                <MapPin className="w-4 h-4" />
                {categoryNames[a.category || ""] || a.category}
              </span>
            </div>

            {/* Title & Rating - Mobile Optimized */}
            <div className="mb-4">
              <h1 className="text-2xl md:text-5xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                {a.name}
              </h1>
              {a.subtitle && (
                <h2 className="text-base md:text-xl text-amber-300 font-medium mb-3 drop-shadow-lg">
                  {a.subtitle}
                </h2>
              )}
              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-2 inline-block">
                <Rating rating={a.rating || 4.8} reviewCount={a.reviewCount || 247} />
              </div>
            </div>

            {/* Quick Stats Grid - Hidden on Small Mobile */}
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {quickStats.map((stat, i) => (
                <Stat key={i} label={stat.label} value={stat.value} />
              ))}
            </div>

            {/* Mobile Stats Bar - Only on Small Screens */}
            <div className="sm:hidden mb-6">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg p-3">
                <div className="flex justify-between items-center text-white text-sm">
                  <div className="text-center">
                    <div className="font-bold">{a.duration ?? "3-6 שעות"}</div>
                    <div className="text-white/80 text-xs">משך</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold">{a.difficulty ?? "בינוני"}</div>
                    <div className="text-white/80 text-xs">קושי</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-amber-300">{a.price ?? "מ-$800"}</div>
                    <div className="text-white/80 text-xs">מחיר</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Desktop in row, Mobile in column */}
            <div className="flex flex-col md:flex-row gap-3 w-full">
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-6 rounded-xl text-base md:text-lg transition-all transform hover:scale-105 shadow-xl w-full md:flex-1">
                �� הזמן עכשיו - החל מ-{a.price}
              </button>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium py-3 px-4 md:px-6 rounded-xl transition-all border border-white/30 w-full md:flex-1">
                <Users className="w-4 h-4 inline ml-2" />
                בדוק זמינות
              </button>
              <button className="bg-transparent border-2 border-white/50 hover:border-white text-white font-medium py-3 px-4 md:px-6 rounded-xl transition-all w-full md:flex-1 flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" />
                הוסף למסלול
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BREADCRUMB ===== */}
      <Breadcrumb category={a.category} attractionName={a.name} />

      {/* ===== STICKY CTA BAR (Mobile) ===== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50">
        <div className="flex gap-3">
          <button className="flex-1 bg-amber-500 text-black font-bold py-3 rounded-lg">
            הזמן עכשיו {a.price}
          </button>
          <button className="w-12 h-12 border-2 border-amber-500 text-amber-500 rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* ===== BODY ===== */}
      <div className="container mx-auto max-w-screen-xl px-4 py-8 md:py-10 space-y-6 mb-20 md:mb-0">
        
        {/* הדרכה ל-Wishlist */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-4">
          <div className="bg-amber-500 text-white rounded-full p-2 flex-shrink-0">
            <Route className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-amber-800">בונה מסלול חכם</h3>
            <p className="text-amber-700 text-sm">הוסף חוויות למסלול שלך ואנחנו נבנה לך תכנית טיול מושלמת עם מחירים ומפת נסיעה</p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-xs bg-amber-200 text-amber-800 px-2 py-1 rounded-full font-medium">חדש!</span>
          </div>
        </div>

        {/* גריד ראשי: ימין תוכן, שמאל סיידבר */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          {/* ===== תוכן ראשי ===== */}
          <div className="space-y-6">
            {/* תיאור ראשי */}
            <section className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm">
              <div className="space-y-4">
                {a.subtitle && (
                  <h2 className="text-xl font-bold text-primary-600 mb-3">{a.subtitle}</h2>
                )}
                
                {introFull && (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-[17px] leading-relaxed text-gray-800">
                      {expanded ? introFull : introShort}
                    </p>
                    {introFull.length > 280 && (
                      <button
                        onClick={() => setExpanded((v) => !v)}
                        className="text-amber-600 hover:text-amber-700 font-medium mt-2 flex items-center gap-1"
                      >
                        {expanded ? "קרא פחות" : "קרא עוד"} 
                        <span className="text-xs">→</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </section>

            {/* קוביות מידע */}
            <div className="grid grid-cols-1 gap-4">
              {(a.duration || a.difficulty) && (
                <InfoCard title="פרטי החוויה">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      {a.duration && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-amber-500" />
                          <span>משך: {a.duration}</span>
                        </div>
                      )}
                      {a.difficulty && (
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-amber-500" />
                          <span>דרגת קושי: {a.difficulty}</span>
                        </div>
                      )}
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg">
                      <p className="text-sm text-amber-800">
                        <strong>שעה זהב:</strong> בהגעה למשפחת הגורילות תקבלו שעה מלאה לצפייה שקטה במשחקי גורים, אינטראקציות וסילברבק מרשים.
                      </p>
                    </div>
                  </div>
                </InfoCard>
              )}

              {a.wildlife && a.wildlife.length > 0 && (
                <InfoCard title="מה עוד תגלו בדרך">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {a.wildlife.map((w, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-800">{w}</span>
                      </div>
                    ))}
                  </div>
                </InfoCard>
              )}

              {tips.length > 0 && (
                <InfoCard title="חשוב לדעת">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                    <ul className="space-y-2">
                      {tips.slice(0, 3).map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-blue-800">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </InfoCard>
              )}
            </div>
          </div>

          {/* ===== סיידבר ===== */}
          <div className="space-y-6">
            {/* מפה */}
            <section className="rounded-2xl overflow-hidden border bg-white shadow-sm">
              <div className="p-4 bg-gray-50 border-b">
                <h3 className="font-bold flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  מיקום
                </h3>
              </div>
              <iframe
                title={`מפה – ${a.name}`}
                className="w-full h-64"
                loading="lazy"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${mapCoords.bbox}&layer=mapnik&marker=${mapCoords.lat}%2C${mapCoords.lng}`}
              />
              <div className="p-3 bg-gray-50 text-sm text-gray-600">
                <MapPin className="w-4 h-4 inline ml-1" />
                {a.region}
              </div>
            </section>

            {/* גלריה משופרת */}
            {a.gallery && a.gallery.length > 0 && (
              <section className="bg-white border rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Camera className="w-5 h-5 text-amber-500" />
                  גלריה ({a.gallery.length} תמונות)
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {a.gallery.slice(0, 4).map((src, i) => (
                    <div key={i} className="relative group rounded-lg overflow-hidden">
                      <img
                        src={src}
                        alt={`${a.name} ${i + 1}`}
                        className="w-full h-24 md:h-28 object-cover transition-transform group-hover:scale-105"
                        loading="lazy"
                      />
                      {i === 3 && a.gallery!.length > 4 && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold">
                          +{a.gallery!.length - 4}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <button className="w-full mt-3 py-2 text-amber-600 hover:text-amber-700 font-medium border border-amber-200 rounded-lg hover:bg-amber-50 transition-colors">
                  צפה בכל התמונות
                </button>
              </section>
            )}

            {/* חוויות קשורות */}
            <section className="bg-white border rounded-2xl p-5 shadow-sm">
              <h3 className="text-lg font-bold mb-3">חוויות נוספות באזור</h3>
              <div className="space-y-3">
                <div className="p-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="font-medium">שימפנזים בקיבאלה</div>
                  <div className="text-sm text-gray-600">סיור בוקר/צהריים • גיל 12+</div>
                  <div className="text-sm text-amber-600 font-medium">מ-$250</div>
                </div>
                <div className="p-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="font-medium">גורילות במגהינגה</div>
                  <div className="text-sm text-gray-600">חלופה שקטה • נוף וולקני</div>
                  <div className="text-sm text-amber-600 font-medium">מ-$700</div>
                </div>
              </div>
              <button className="w-full mt-4 py-2 bg-amber-500 text-black font-medium rounded-lg hover:bg-amber-600 transition-colors">
                תכנן מסלול פרימטים מלא
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractionPage;