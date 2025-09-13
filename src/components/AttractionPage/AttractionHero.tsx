import React, { useEffect } from "react";
import { Route } from "lucide-react";
import { WishlistButton } from "../Wishlist/WishlistButton";
import { AttractionWithMock } from "../../types";

interface AttractionHeroProps {
  attraction: AttractionWithMock;
  heroImage: string;
  isAdded: boolean;
  setIsAdded: (value: boolean) => void;
}

const AttractionHero: React.FC<AttractionHeroProps> = ({
  attraction,
  heroImage,
  isAdded,
  setIsAdded
}) => {
  // ===== Responsive Hero Height =====
  useEffect(() => {
    if (attraction?.heroHeight?.desktop) {
      const style = document.createElement('style');
      style.id = 'hero-height-style';
      style.textContent = `
        @media (min-width: 768px) {
          .hero-section-${attraction.id} {
            height: ${attraction.heroHeight.desktop} !important;
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
  }, [attraction?.heroHeight, attraction?.id]);

  return (
    <>
      {/* ===== ENHANCED HERO SECTION ===== */}
      <section 
        className={`relative w-full hero-section-${attraction?.id || 'default'}`}
        style={{
          height: attraction?.heroHeight 
            ? `${attraction.heroHeight.mobile || '25vh'}`
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
              id: attraction.id || attraction.slug || 'default-id',
              attractionId: attraction.id || attraction.slug || 'default-id',
              name: attraction.name,
              subtitle: attraction.subtitle,
              image: heroImage,
              basePrice: attraction.price || 'מ-$2,400'
            }}
            variant="text"
            className="bg-amber-500 hover:bg-amber-600 active:bg-amber-700 rounded-full shadow-xl flex items-center gap-2 px-3 py-2 transition-all cursor-pointer border-2 border-white/20"
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="container mx-auto max-w-screen-xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
              {attraction.name}
            </h1>
            <h2 className="text-base md:text-lg text-amber-300 font-medium mb-3 drop-shadow-lg">
              {attraction.subtitle}
            </h2>

            {/* כרטיסיות מידע בדסקטופ - מתחת לכותרת והתיאור */}
            <div className="hidden md:flex gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center flex-1 h-16 flex flex-col justify-center">
                <div className="text-sm text-white/80 mb-1">מיקום במדינה</div>
                <div className="text-lg font-bold text-white">{attraction.region || "דרום מערב אוגנדה"}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center flex-1 h-16 flex flex-col justify-center">
                <div className="text-sm text-white/80 mb-1">זמן מומלץ לטיול</div>
                <div className="text-lg font-bold text-white">{attraction.duration || "2-4 ימים"}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center flex-1 h-16 flex flex-col justify-center">
                <div className="text-sm text-white/80 mb-1">רמת קושי</div>
                <div className="text-lg font-bold text-white">{attraction.difficulty || "קל-בינוני"}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center flex-1 h-16 flex flex-col justify-center">
                <div className="text-sm text-white/80 mb-1">במסלול שלי</div>
                <WishlistButton 
                  item={{
                    id: attraction.id || attraction.slug || 'default-id',
                    attractionId: attraction.id || attraction.slug || 'default-id',
                    name: attraction.name,
                    subtitle: attraction.subtitle,
                    image: heroImage,
                    basePrice: attraction.price || 'מ-$2,400'
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
              <div className="text-lg font-bold text-gray-700">{attraction.region || "דרום מערב אוגנדה"}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center h-16 flex flex-col justify-center">
              <div className="text-sm text-gray-600 mb-1">זמן מומלץ לטיול</div>
              <div className="text-lg font-bold text-gray-700">{attraction.duration || "2-4 ימים"}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center h-16 flex flex-col justify-center">
              <div className="text-sm text-gray-600 mb-1">רמת קושי</div>
              <div className="text-lg font-bold text-gray-700">{attraction.difficulty || "קל-בינוני"}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center h-16 flex flex-col justify-center">
              <div className="text-sm text-gray-600 mb-1">במסלול שלי</div>
              <WishlistButton 
                item={{
                  id: attraction.id || attraction.slug || 'default-id',
                  attractionId: attraction.id || attraction.slug || 'default-id',
                  name: attraction.name,
                  subtitle: attraction.subtitle,
                  image: heroImage,
                  basePrice: attraction.price || 'מ-$2,400'
                }}
                variant="text"
                className="text-lg font-bold text-gray-700 flex items-center justify-center h-full"
              />
            </div>
          </div>
        </div>
      </div>

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
      </div>
    </>
  );
};

export default AttractionHero;
