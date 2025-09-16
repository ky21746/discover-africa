import React, { useEffect } from "react";
import { WishlistButton } from "../Wishlist/WishlistButton";
import { AttractionWithMock } from "../../types";

interface AttractionHeroProps {
  attraction: AttractionWithMock;
  heroImage: string;
}

const AttractionHero: React.FC<AttractionHeroProps> = ({
  attraction,
  heroImage
}) => {
  // ===== Responsive Hero Height =====
  useEffect(() => {
    if (attraction?.heroHeight) {
      const style = document.createElement('style');
      style.id = 'hero-height-style';
      style.textContent = `
        @media (max-width: 767px) {
          .hero-section-${attraction.id} {
            height: ${attraction.heroHeight.mobile || '35vh'} !important;
          }
        }
        @media (min-width: 768px) {
          .hero-section-${attraction.id} {
            height: ${attraction.heroHeight.desktop || '45vh'} !important;
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
            ? `${attraction.heroHeight.mobile || '35vh'}`
            : '35vh',
          minHeight: '200px'
        }}
      >
        <img 
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ objectPosition: attraction?.heroImagePosition || 'center 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        
        
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="container mx-auto max-w-screen-xl">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
              {attraction.heroTitle || attraction.name}
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
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center h-16 flex flex-col justify-center">
              <div className="text-sm text-gray-600 mb-1">מיקום במדינה</div>
              <div className="text-lg font-bold text-gray-700">{attraction.region || "דרום מערב אוגנדה"}</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center h-16 flex flex-col justify-center">
              <div className="text-sm text-gray-600 mb-1">זמן מומלץ לטיול</div>
              <div className="text-lg font-bold text-gray-700">{attraction.duration || "2-4 ימים"}</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center h-16 flex flex-col justify-center">
              <div className="text-sm text-gray-600 mb-1">רמת קושי</div>
              <div className="text-lg font-bold text-gray-700">{attraction.difficulty || "קל-בינוני"}</div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center h-16 flex flex-col justify-center">
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
                className="text-lg font-bold text-white flex items-center justify-center h-full"
              />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AttractionHero;
