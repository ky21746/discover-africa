// src/pages/AttractionPage.tsx
import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Route } from "lucide-react";

// ====== DATA ======
import { gorillasChimps } from "../content/categories/gorillas-chimps";
import { safari } from "../content/categories/safari";
import { water } from "../content/categories/water";
import { mountains } from "../content/categories/mountains";
import { parks } from "../data/parks";

// Import types
import { Attraction, AttractionWithMock } from "../types";

// ====== COMPONENTS ======
import AttractionHero from "../components/AttractionPage/AttractionHero";
import AttractionInfoGrid from "../components/AttractionPage/AttractionInfoGrid";
import AttractionGallery from "../components/AttractionPage/AttractionGallery";
import GeneralDescription from "../components/AttractionPage/GeneralDescription";
import AttractionMap from "../components/AttractionPage/AttractionMap";
import AttractionExperiences from "../components/AttractionPage/AttractionExperiences";
import AttractionServices from "../components/AttractionPage/AttractionServices";

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
  infoGrid: park.infoGrid,
  // שדות נוספים לפי הצורך
}));

const allAttractions: AttractionWithMock[] = [...gorillasChimps, ...safari, ...water, ...mountains, ...parksAsAttractions];

// מיפוי קטגוריות לשמות בעברית
const categoryNames: Record<string, string> = {
  "gorillas-chimps": "גורילות ושימפנזים",
  "safari": "ספארי",
  "water": "אטרקציות מים",
  "mountains": "הרים",
  "adventure": "הרפתקאות",
  "culture": "תרבות ומסורת",
};

// slug normalizer
const normalize = (s?: string) =>
  s?.toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\u0590-\u05FF\-]/g, "")
    .replace(/-+/g, "-");

// Helper function to get image source from gallery item
const getImageSrc = (item: string | any): string => {
  return typeof item === 'string' ? item : item.src;
};

const AttractionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isAdded, setIsAdded] = useState(false);

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

  if (!a) {
    return (
      <div className="container mx-auto max-w-screen-xl px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">אטרקציה לא נמצאה</h1>
        <p className="text-gray-600 mb-8">
          האטרקציה שחיפשת לא קיימת במערכת.
          <br />
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

  return (
    <div dir="rtl" className="fade-in">
      {/* Hero Section */}
      <AttractionHero 
        attraction={a}
        heroImage={heroImage}
      />

      {/* Main Content Wrapper */}
      <div className="container mx-auto max-w-screen-xl px-4 py-8 md:py-10 space-y-6">

        {/* הדרכה ל-Wishlist */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-[#CAA131]/50 rounded-2xl p-5 flex items-center gap-4 shadow-lg order-1 md:order-none">
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

        {/* 2. General Description Block - Left: description, Right: gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Left side: General description */}
          <div className="h-full">
            <GeneralDescription 
              title={a.subtitle || a.name}
              description={a.description || ''}
            />
          </div>
          
          {/* Right side: Gallery */}
          <div className="h-full">
            <AttractionGallery attraction={a} />
          </div>
        </div>

        {/* 3. Important Information ("מידע חשוב") - Only one AttractionInfoGrid */}
        {a.infoGrid && <AttractionInfoGrid data={a.infoGrid} />}

        {/* 4. Map and Experiences Grid - 2/3 for map, 1/3 for experiences */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Map Section - 2/3 */}
          <div className="md:col-span-2">
            <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 border border-[#534B20]/60 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] h-full">
              <AttractionMap attraction={a} />
            </div>
          </div>
          
          {/* Additional Experiences - 1/3 */}
          <div className="md:col-span-1">
            <AttractionExperiences />
          </div>
        </div>

        {/* Services Section */}
        <AttractionServices />

        {/* כפתור חזרה לקטגוריות */}
        <div className="text-center">
          <Link 
            to="/categories" 
            className="inline-flex items-center gap-2 bg-[#CAA131] hover:bg-[#B8942A] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5" />
            חזרה לקטגוריות
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AttractionPage;