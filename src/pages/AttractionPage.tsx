// src/pages/AttractionPage.tsx
import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Share2, MapPin, Clock, Users, Camera, Route } from "lucide-react";

// ====== DATA ======
import { gorillasChimps } from "../content/categories/gorillas-chimps";
import { safari } from "../content/categories/safari";

// ====== WISHLIST ======
import { WishlistButton } from "../components/Wishlist/WishlistButton";

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

  // 👇 כל שאר הקוד שלך נשאר כמו שהוא (Hero, Body, Sidebar וכו')

};

export default AttractionPage;