// src/pages/AttractionPage.tsx
import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// ====== DATA ======
import { gorillasChimps } from "../content/categories/gorillas-chimps";
import { safari } from "../content/categories/safari";
import { water } from "../content/categories/water";
import { mountains } from "../content/categories/mountains";
import { extreme } from "../content/categories/extreme";
import { parks } from "../data/parks";

// Import types
import { Attraction, Park, AttractionWithMock } from "../types";

// ====== COMPONENTS ======
import AttractionHero from "../components/AttractionPage/AttractionHero";
import AttractionGallery from "../components/AttractionPage/AttractionGallery";
import AttractionInfo from "../components/AttractionPage/AttractionInfo";
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
        isAdded={isAdded}
        setIsAdded={setIsAdded}
      />

      {/* Main Content Grid */}
      <div className="container mx-auto max-w-screen-xl px-4 py-8 md:py-10 space-y-6">
        
        {/* גריד מושלם מסודר */}
        <div className="space-y-6 flex flex-col md:block">
          {/* שורה עליונה: תיאור האטרקציה + גלריה */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <AttractionInfo attraction={a} />
            <AttractionGallery attraction={a} />
          </div>

          {/* גריד חדש - 2/3 ו-1/3 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AttractionMap attraction={a} />
            <AttractionExperiences />
          </div>
        </div>

        {/* Services Section */}
        <AttractionServices />

        {/* כפתור חזרה לקטגוריות */}
        <div className="container mx-auto max-w-screen-xl px-4 py-8">
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
    </div>
  );
};

export default AttractionPage;