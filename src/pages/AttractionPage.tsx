// src/pages/AttractionPage.tsx
import React, { useMemo, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Share2, Heart, MapPin, Clock, Users, Camera, Route, Plus, X, ChevronLeft, ChevronRight } from "lucide-react";

// ====== DATA ======
import { gorillasChimps } from "../content/categories/gorillas-chimps";
import { safari } from "../content/categories/safari";
import { waterfalls } from "../content/categories/waterfalls";
import { lakes } from "../content/categories/lakes";
import { rivers } from "../content/categories/rivers";

// ====== WISHLIST ======
import { WishlistButton } from "../components/Wishlist/WishlistButton";

// Import types
import { Attraction } from "../types";

// Define GalleryItem locally
interface GalleryItem {
  src: string;
  title: string;
  description: string;
}

// Extend Attraction with mock data for demo
type AttractionWithMock = Attraction & {
  // Mock data for demo
  rating?: number;
  reviewCount?: number;
  price?: string;
};

const allAttractions: AttractionWithMock[] = [...gorillasChimps, ...safari, ...waterfalls, ...lakes, ...rivers];

// מיפוי קטגוריות לשמות בעברית
const categoryNames: Record<string, string> = {
  "gorillas-chimps": "גורילות ושימפנזים",
  "safari": "ספארי",
  "waterfalls": "מפלים",
  "lakes": "אגמים",
  "rivers": "נהרות",
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
  <section className={`bg-gray-800 border-4 border-amber-500 rounded-2xl p-5 md:p-6 shadow-2xl hover:shadow-amber-500/50 transition-all ${className}`}>
    <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-white">
      <div className="w-1 h-5 bg-amber-500 rounded-full"></div>
      {title}
    </h3>
    <div className="text-[17px] leading-relaxed text-white">{children}</div>
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
              to={category === "waterfalls" || category === "lakes" || category === "rivers" 
                ? `/water` 
                : `/category/${category}`} 
              className="hover:text-primary-600 transition-colors"
            >
              {category === "waterfalls" || category === "lakes" || category === "rivers" 
                ? "אגמים, מפלים ונהרות" 
                : categoryNames[category] || category}
            </Link>
            {(category === "waterfalls" || category === "lakes" || category === "rivers") && (
              <>
                <span className="text-gray-400">/</span>
                <Link 
                  to={`/water/${category}`} 
                  className="hover:text-primary-600 transition-colors"
                >
                  {categoryNames[category]}
                </Link>
              </>
            )}
          </>
        )}
        <span className="text-gray-400">/</span>
        <span className="text-gray-900 font-medium truncate">{attractionName}</span>
      </div>
    </div>
  </nav>
);

// Helper function to get image source from gallery item
const getImageSrc = (item: string | GalleryItem): string => {
  return typeof item === 'string' ? item : item.src;
};

// Helper function to get image title from gallery item
const getImageTitle = (item: string | GalleryItem): string => {
  return typeof item === 'string' ? '' : item.title;
};

// Helper function to get image description from gallery item
const getImageDescription = (item: string | GalleryItem): string => {
  return typeof item === 'string' ? '' : item.description;
};

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
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

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

  // ===== Responsive Hero Height =====
  useEffect(() => {
    if (a?.heroHeight?.desktop) {
      const style = document.createElement('style');
      style.id = 'hero-height-style';
      style.textContent = `
        @media (min-width: 768px) {
          .hero-section-${a.id} {
            height: ${a.heroHeight.desktop} !important;
          }
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        const existingStyle = document.getElementById('hero-height-style');
        if (existingStyle) {
          existingStyle.remove();
        }
      };
    }
  }, [a?.heroHeight, a?.id]);

  // ===== Gallery Functions =====
  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (!a?.gallery) return;
    setSelectedImage((prev) => 
      prev === null ? 0 : (prev + 1) % a.gallery!.length
    );
  };

  const prevImage = () => {
    if (!a?.gallery) return;
    setSelectedImage((prev) => 
      prev === null ? 0 : prev === 0 ? a.gallery!.length - 1 : prev - 1
    );
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

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
    a.image ??
    (a.gallery && a.gallery.length > 0 ? getImageSrc(a.gallery[0]) : null) ??
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

  const introFull = a.description ?? (a as any).summary ?? "";
  const introShort = introFull.length > 280 ? introFull.slice(0, 280) + "…" : introFull;

  return (
    <div dir="rtl" className="fade-in">
      {/* ===== ENHANCED HERO SECTION ===== */}
      <section 
        className={`relative w-full hero-section-${a?.id || 'default'}`}
        style={{
          height: a?.heroHeight 
            ? `${a.heroHeight.mobile || '50vh'}`
            : '50vh',
          minHeight: '300px'
        }}
      >
        <img 
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center object-bottom md:object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        
        {/* כפתור הוסף למסלול למובייל - צד עליון ימין */}
        <div className="absolute top-4 right-4 md:hidden z-10">
          <WishlistButton 
            item={{
              id: a.id || a.slug || 'default-id',
              attractionId: a.id || a.slug || 'default-id',
              name: a.name,
              subtitle: a.subtitle,
              image: heroImage,
              basePrice: a.price || 'מ-$2,400'
            }}
            variant="text"
            className="bg-amber-500 hover:bg-green-500 active:bg-green-600 rounded-full shadow-xl flex items-center gap-2 px-3 py-2 transition-all cursor-pointer border-2 border-white/20"
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="container mx-auto max-w-screen-xl">
            <div className="mb-3">
              <span className="inline-flex items-center gap-2 bg-amber-500 text-black px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                <MapPin className="w-4 h-4" />
                {categoryNames[a.category || ""] || a.category}
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
              {a.name}
            </h1>
            <h2 className="text-base md:text-lg text-amber-300 font-medium mb-3 drop-shadow-lg">
              {a.subtitle}
            </h2>
          </div>
        </div>
      </section>
      
      {/* ===== כרטיסיות מידע מתחת ל-Hero ===== */}
      <div className="bg-white border-t">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-blue-600">{a.region || "צפון־מערב אוגנדה"}</div>
              <div className="text-sm text-gray-600">מיקום במדינה</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-green-600">{a.duration || "2-4 ימים"}</div>
              <div className="text-sm text-gray-600">זמן מומלץ לטיול</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-amber-600">{a.difficulty || "קל-בינוני"}</div>
              <div className="text-sm text-gray-600">רמת קושי</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <WishlistButton 
                item={{
                  id: a.id || a.slug || 'default-id',
                  attractionId: a.id || a.slug || 'default-id',
                  name: a.name,
                  subtitle: a.subtitle,
                  image: heroImage,
                  basePrice: a.price || 'מ-$2,400'
                }}
                variant="text"
                className="text-lg font-bold text-green-600 flex items-center justify-center h-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* ===== BREADCRUMB ===== */}
      <Breadcrumb category={a.category} attractionName={a.name} />

ס      {/* ===== STICKY CTA BAR (Mobile) - כפתור במרכז התחתית ===== */}
      <div className="md:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <WishlistButton 
          item={{
            id: a.id || a.slug || 'default-id',
            attractionId: a.id || a.slug || 'default-id',
            name: a.name,
            subtitle: a.subtitle,
            image: heroImage,
            basePrice: a.price || 'מ-$2,400'
          }}
          variant="bag"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full px-4 py-2 shadow-lg flex items-center justify-center text-sm font-medium"
        />
      </div>

      {/* ===== BODY ===== */}
      <div className="container mx-auto max-w-screen-xl px-4 py-8 md:py-10 space-y-6">
        
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
                  {a.gallery.slice(0, 4).map((item, i) => {
                    const src = getImageSrc(item);
                    const title = getImageTitle(item);
                    const description = getImageDescription(item);
                    
                    return (
                      <div 
                        key={i} 
                        className="relative group rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => openLightbox(i)}
                      >
                        <img
                          src={src}
                          alt={title || `${a.name} ${i + 1}`}
                          className="w-full h-24 md:h-28 object-cover transition-transform group-hover:scale-105"
                          loading="lazy"
                        />
                        {/* Show title overlay if available */}
                        {title && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <div className="text-xs font-medium">{title}</div>
                            {description && (
                              <div className="text-xs text-gray-300 mt-1">{description}</div>
                            )}
                          </div>
                        )}
                        {i === 3 && a.gallery!.length > 4 && (
                          <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-bold">
                            +{a.gallery!.length - 4}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <button 
                  className="w-full mt-3 py-2 text-amber-600 hover:text-amber-700 font-medium border border-amber-200 rounded-lg hover:bg-amber-50 transition-colors"
                  onClick={() => openLightbox(0)}
                >
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
              <WishlistButton 
                item={{
                  id: a.id || a.slug || 'default-id',
                  attractionId: a.id || a.slug || 'default-id',
                  name: a.name,
                  subtitle: a.subtitle,
                  image: heroImage,
                  basePrice: a.price || 'מ-$2,400'
                }}
                variant="bag"
                className="w-full mt-4"
              />
            </section>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && a.gallery && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <img
              src={getImageSrc(a.gallery[selectedImage])}
              alt={getImageTitle(a.gallery[selectedImage]) || `${a.name} ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image info overlay */}
            {getImageTitle(a.gallery[selectedImage]) && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white bg-black/70 px-4 py-2 rounded-lg text-center max-w-md">
                <div className="font-medium">{getImageTitle(a.gallery[selectedImage])}</div>
                {getImageDescription(a.gallery[selectedImage]) && (
                  <div className="text-sm text-gray-300 mt-1">{getImageDescription(a.gallery[selectedImage])}</div>
                )}
              </div>
            )}

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {a.gallery.length}
            </div>
          </div>
        </div>
      )}
    </div> 
  );
};

export default AttractionPage;