// src/pages/AttractionPage.tsx
import React, { useMemo, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Share2, Heart, MapPin, Clock, Users, Camera, Route, Plus, X, ChevronLeft, ChevronRight } from "lucide-react";

// ====== DATA ======
import { gorillasChimps } from "../content/categories/gorillas-chimps";
import { safari } from "../content/categories/safari";
import { water } from "../content/categories/water";
import { parks } from "../data/parks";

// ====== WISHLIST ======
import { WishlistButton } from "../components/Wishlist/WishlistButton";

// Import types
import { Attraction, Park } from "../types";

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

// המרת פארקים לפורמט Attraction
const parksAsAttractions: AttractionWithMock[] = parks.map(park => ({
  id: park.slug,
  slug: park.slug,
  name: park.name,
  category: park.category,
  description: park.description,
  highlights: park.highlights,
  image: park.image,
  gallery: park.gallery,
  // שדות נוספים לפי הצורך
}));

const allAttractions: AttractionWithMock[] = [...gorillasChimps, ...safari, ...water, ...parksAsAttractions];

// מיפוי קטגוריות לשמות בעברית
const categoryNames: Record<string, string> = {
  "gorillas-chimps": "גורילות ושימפנזים",
  "safari": "ספארי",
  "water": "אטרקציות מים",
  "mountains": "הרים",
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
  React.PropsWithChildren<{ title: string; className?: string; variant?: 'white' | 'gray' }>
> = ({ title, className = "", variant = 'white', children }) => {
  const bgClass = variant === 'gray' 
    ? 'bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50' 
    : 'bg-gradient-to-br from-white via-gray-50 to-white';
  
  return (
    <section className={`${bgClass} border border-[#534B20]/60 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-3xl hover:border-[#CAA131] hover:scale-[1.02] transition-all duration-500 group ${className}`}>
      <h3 className="text-xl font-extrabold mb-4 text-[#4B361C] text-right border-b-2 border-[#CAA131] w-fit">
        {title}
      </h3>
      <div className="text-[17px] leading-relaxed text-gray-700 group-hover:text-gray-800 transition-colors font-medium">{children}</div>
    </section>
  );
};

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
        price: attraction.permitCost || "מ-$2,400"
      };
    }
    return attraction;
  }, [id]);

  const [expanded, setExpanded] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [mapFullscreen, setMapFullscreen] = useState(false);

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
            ? `${a.heroHeight.mobile || '25vh'}`
            : '25vh',
          minHeight: '200px'
        }}
      >
        <img 
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ objectPosition: 'center 30%' }}
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
            className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 rounded-full shadow-xl flex items-center gap-2 px-3 py-2 transition-all cursor-pointer border-2 border-white/20"
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

            {/* כרטיסיות מידע בדסקטופ - מתחת לכותרת והתיאור */}
            <div className="hidden md:flex gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center flex-1 h-16 flex flex-col justify-center">
                <div className="text-sm text-white/80 mb-1">מיקום במדינה</div>
                <div className="text-lg font-bold text-white">{a.region || "דרום מערב אוגנדה"}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center flex-1 h-16 flex flex-col justify-center">
                <div className="text-sm text-white/80 mb-1">זמן מומלץ לטיול</div>
                <div className="text-lg font-bold text-white">{a.duration || "2-4 ימים"}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center flex-1 h-16 flex flex-col justify-center">
                <div className="text-sm text-white/80 mb-1">רמת קושי</div>
                <div className="text-lg font-bold text-white">{a.difficulty || "קל-בינוני"}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center flex-1 h-16 flex flex-col justify-center">
                <div className="text-sm text-white/80 mb-1">במסלול שלי</div>
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
                  className="text-lg font-bold text-white flex items-center justify-center h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ===== כרטיסיות מידע במובייל - מתחת להירו ===== */}
      <div className="bg-white border-t md:hidden">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-xl p-3 text-center h-16 flex flex-col justify-center">
              <div className="text-sm text-gray-600 mb-1">מיקום במדינה</div>
              <div className="text-lg font-bold text-gray-700">{a.region || "דרום מערב אוגנדה"}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center h-16 flex flex-col justify-center">
              <div className="text-sm text-gray-600 mb-1">זמן מומלץ לטיול</div>
              <div className="text-lg font-bold text-gray-700">{a.duration || "2-4 ימים"}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center h-16 flex flex-col justify-center">
              <div className="text-sm text-gray-600 mb-1">רמת קושי</div>
              <div className="text-lg font-bold text-gray-700">{a.difficulty || "קל-בינוני"}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center h-16 flex flex-col justify-center">
              <div className="text-sm text-gray-600 mb-1">במסלול שלי</div>
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
                className="text-lg font-bold text-gray-700 flex items-center justify-center h-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* ===== BREADCRUMB ===== */}
      <Breadcrumb category={a.category} attractionName={a.name} />


      {/* ===== BODY ===== */}
      <div className="container mx-auto max-w-screen-xl px-4 py-8 md:py-10 space-y-6">
        
        {/* הדרכה ל-Wishlist */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-[#CAA131]/50 rounded-2xl p-5 flex items-center gap-4 shadow-lg">
          <div className="bg-amber-500 text-white rounded-full p-2 flex-shrink-0">
            <Route className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-black">בונה מסלול חכם</h3>
            <p className="text-black text-sm">הוסף חוויות למסלול שלך ואנחנו נבנה לך תכנית טיול מושלמת עם מחירים ומפת נסיעה</p>
          </div>
          <div className="flex-shrink-0">
            <button 
              onClick={() => setIsAdded(!isAdded)}
              className={`px-6 py-2 rounded-full font-bold text-sm shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 ${
                isAdded 
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
                  : 'bg-gradient-to-r from-[#CAA131] to-[#B8942A] text-black hover:from-[#B8942A] hover:to-[#A68525]'
              }`}
            >
              {isAdded ? 'נוסף למסלול!' : 'הוסף מסלול'}
            </button>
          </div>
        </div>

        {/* גריד ראשי: ימין תוכן, שמאל סיידבר */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          {/* ===== תוכן ראשי ===== */}
          <div className="space-y-6">
            {/* תיאור ראשי */}
            <section className="bg-gradient-to-br from-white via-gray-50 to-white border border-[#534B20]/60 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01]">
              <div className="space-y-8">
                {a.subtitle && (
                  <h2 className="text-2xl font-bold text-[#4B361C] mb-6 leading-tight">{a.subtitle}</h2>
                )}
                
                {introFull && (
                  <div className="prose prose-lg max-w-none">
                    <p className="text-[18px] leading-relaxed text-gray-700 font-medium">
                      {expanded ? introFull : introShort}
                    </p>
                    {introFull.length > 280 && (
                      <button
                        onClick={() => setExpanded((v) => !v)}
                        className="text-[#CAA131] hover:text-[#B8942A] font-bold mt-6 flex items-center gap-3 text-lg transition-all duration-300 hover:scale-105 group"
                      >
                        {expanded ? "קרא פחות" : "קרא עוד"} 
                        <span className="text-xs transition-transform duration-300 group-hover:translate-x-2">→</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            </section>

            {/* בלוק מידע מאוחד */}
            <div className="grid grid-cols-1 gap-6">
              {a.wildlife && a.wildlife.length > 0 && (
                <InfoCard title="מה תגלו בדרך">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {a.wildlife.map((w, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#CAA131]/15 to-[#B8942A]/15 rounded-2xl border border-[#CAA131]/50/30 hover:shadow-xl hover:scale-105 transition-all duration-500">
                        <div className="w-4 h-4 bg-gradient-to-br from-[#CAA131] to-[#B8942A] rounded-full shadow-lg"></div>
                        <span className="text-[#4B361C] font-medium text-base">{w}</span>
                      </div>
                    ))}
                  </div>
                </InfoCard>
              )}

              {tips.length > 0 && (
                <InfoCard title="חשוב לדעת" variant="gray">
                  <div className="bg-[#CAA131]/10 p-4 rounded-xl space-y-2">
                    <div className="text-sm font-medium text-[#4B361C] text-right">
                      רישיון: $300–450 ליום — להזמין חודשים מראש
                    </div>
                    <div className="text-sm font-medium text-[#4B361C] text-right">
                      מיקום: קרוב לגבול DRC — בדוק אזהרות מסע עדכניות
                    </div>
                    <div className="text-sm font-medium text-[#4B361C] text-right">
                      עונת השיא: מתמלאת חודשים מראש — הזמן מוקדם
                    </div>
                  </div>
                </InfoCard>
              )}
            </div>
          </div>

          {/* ===== סיידבר ===== */}
          <div className="space-y-6">
            {/* מפה */}
            <section className="rounded-2xl overflow-hidden border border-[#534B20]/60 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative cursor-pointer" onClick={() => setMapFullscreen(true)}>
                <iframe
                  title={`מפה – ${a.name}`}
                  className="w-full h-72"
                  loading="lazy"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${mapCoords.bbox}&layer=mapnik`}
                />
                
                {/* Click overlay */}
                <div className="absolute inset-0 bg-black/0 hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <svg className="w-6 h-6 text-[#CAA131]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </div>
                </div>
                
                {/* Floating info card */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20">
                    <h4 className="font-bold text-[#4B361C] text-sm mb-1 text-right">מערב אוגנדה</h4>
                    <p className="text-gray-600 text-xs text-right">6 שעות מקמפלה | טיסה פנימית 45 דק'</p>
                  </div>
                </div>
                
                {/* Custom gold marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="relative group cursor-pointer">
                    <div className="w-6 h-6 bg-[#CAA131] rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    {/* Popup */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="bg-white border border-[#CAA131]/50 rounded-lg p-3 shadow-xl min-w-[200px]">
                        <h4 className="font-bold text-[#4B361C] text-sm mb-1 text-right">{a.name}</h4>
                        <p className="text-gray-600 text-xs leading-relaxed text-right">
                          {a.name === "Queen Elizabeth National Park" 
                            ? "שמורה ייחודית במערב אוגנדה, ידועה באריות המטפסים על עצים ובמגוון חיות בר נדירות."
                            : "אטרקציה מרהיבה באוגנדה עם נופים וחיות בר ייחודיות."
                          }
                        </p>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </section>

            {/* גלריה משופרת */}
            {a.gallery && a.gallery.length > 0 && (
              <section className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 border border-[#534B20]/60 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01]">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-3 text-[#4B361C]">
                  <Camera className="w-5 h-5 text-[#CAA131]" />
                  גלריה ({a.gallery.length} תמונות)
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {a.gallery.slice(0, 4).map((item, i) => {
                    const src = getImageSrc(item);
                    const title = getImageTitle(item);
                    const description = getImageDescription(item);
                    
                    return (
                      <div 
                        key={i} 
                        className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                        onClick={() => openLightbox(i)}
                      >
                        <img
                          src={src}
                          alt={title || `${a.name} ${i + 1}`}
                          className="w-full h-32 md:h-36 object-cover transition-transform group-hover:scale-110 duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {/* Show title overlay if available */}
                        {title && (
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 to-transparent text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <div className="text-base font-bold">{title}</div>
                            {description && (
                              <div className="text-sm text-gray-200 mt-2">{description}</div>
                            )}
                          </div>
                        )}
                        {i === 3 && a.gallery!.length > 4 && (
                          <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-white font-bold text-xl backdrop-blur-md">
                            +{a.gallery!.length - 4}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <button 
                  className="w-full mt-6 py-4 text-[#CAA131] hover:text-white font-bold border border-[#CAA131]/50 rounded-2xl hover:bg-[#CAA131] transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl text-base"
                  onClick={() => openLightbox(0)}
                >
                  צפה בכל התמונות
                </button>
              </section>
            )}

            {/* הידעת? */}
            <section className="bg-gradient-to-r from-[#CAA131]/15 to-[#B8942A]/15 border border-[#CAA131]/30 p-6 rounded-2xl shadow-lg mt-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-extrabold text-[#4B361C] mb-3 border-b-3 border-[#CAA131] w-fit flex items-center gap-2">
                <span className="text-2xl">💡</span>
                הידעת?
              </h3>
              <p className="text-base font-semibold text-[#4B361C] leading-relaxed">
                {a.funFact || "עובדה מעניינת על האטרקציה הזו תופיע כאן בקרוב!"}
              </p>
            </section>

          </div>
        </div>
      </div>

      {/* חוויות נוספות - פרוסות לרוחב בתחתית */}
      <div className="container mx-auto max-w-screen-xl px-4 py-8">
        <section className="bg-white border border-[#534B20]/60 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01]">
          <h3 className="text-lg font-bold text-center text-[#4B361C] mb-6">
            <div className="text-[#CAA131]">חוויות נוספות</div>
            <div>בסביבת {a.name}</div>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* שימפנזים בקיבאלה */}
            <div className="relative h-40 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-500">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop&crop=center')`
                }}
              >
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <h4 className="text-base font-extrabold text-white drop-shadow-md mb-1">שימפנזים בקיבאלה</h4>
                  <div className="text-xs text-gray-100 drop-shadow flex items-center gap-1 justify-center">
                    <span>🚗</span>
                    <span>כ־2.5–3 שעות צפונה</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* גורילות במגהינגה */}
            <div className="relative h-40 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-500">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=400&h=300&fit=crop&crop=center')`
                }}
              >
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <h4 className="text-base font-extrabold text-white drop-shadow-md mb-1">גורילות במגהינגה</h4>
                  <div className="text-xs text-gray-100 drop-shadow flex items-center gap-1 justify-center">
                    <span>🚗</span>
                    <span>כ־4–5 שעות דרומה</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ספארי בפארק המלכה אליזבת */}
            <div className="relative h-40 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-500">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop&crop=center')`
                }}
              >
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                  <h4 className="text-base font-extrabold text-white drop-shadow-md mb-1">ספארי בפארק המלכה אליזבת</h4>
                  <div className="text-xs text-gray-100 drop-shadow flex items-center gap-1 justify-center">
                    <span>🚗</span>
                    <span>באותו אזור</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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

      {/* כפתור חזרה לקטגוריות */}
      <div className="container mx-auto max-w-screen-xl px-4 py-8">
        <div className="flex justify-center">
          <Link 
            to={`/category/${a.category}`}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#CAA131] to-[#B8942A] text-black px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:from-[#B8942A] hover:to-[#A68525]"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            חזור לקטגוריית {categoryNames[a.category || ""] || a.category}
          </Link>
        </div>
      </div>

      {/* Fullscreen Map Modal */}
      {mapFullscreen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 border-b border-gray-200 flex items-center justify-between">
              <h3 className="font-bold text-[#4B361C] text-xl flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#CAA131]" />
                מיקום - {a.name}
              </h3>
              <button 
                onClick={() => setMapFullscreen(false)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            {/* Fullscreen Map */}
            <div className="relative h-[calc(100%-80px)]">
              <iframe
                title={`מפה מלאה – ${a.name}`}
                className="w-full h-full"
                loading="lazy"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${mapCoords.bbox}&layer=mapnik&marker=${mapCoords.lat}%2C${mapCoords.lng}`}
              />
              
              {/* Floating info card */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-white/20">
                  <h4 className="font-bold text-[#4B361C] text-base mb-2 text-right">מערב אוגנדה</h4>
                  <p className="text-gray-600 text-sm text-right">6 שעות מקמפלה | טיסה פנימית 45 דק'</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AttractionPage;