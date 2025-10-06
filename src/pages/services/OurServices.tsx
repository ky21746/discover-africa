// src/pages/services/OurServices.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const OurServices: React.FC = () => {
  return (
    <div className="py-8 fade-in" dir="rtl">
      <div className="container mx-auto px-4">
        {/* כותרת ראשית */}
        <div className="mb-12 text-center">
          <div className="mt-8 mb-4">
            <h1 className="mb-3 md:mb-4 text-2xl md:text-4xl font-bold font-sans text-[#4B361C]">
              השירותים שלנו
            </h1>
          </div>
          <div className="flex justify-center mb-6">
            <div className="w-16 h-1 bg-[#CAA131] rounded-full"></div>
          </div>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted font-sans">
            שירותים מקצועיים ומותאמים אישית לכל צרכי הטיול שלכם באוגנדה
          </p>
        </div>

        {/* כרטיסי השירותים */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* BAR Aviation */}
          <Link to="/services/bar-aviation" className="group">
            <div className="bg-white border border-[#CAA131] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
              <div
                className="h-64 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBaraviationcard.webp?alt=media&token=760c531e-2cf9-4d40-ab23-bd816b77d9c5)`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              />
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <img 
                    src="/images/baraviationug.webp" 
                    alt="BAR Aviation Logo" 
                    className="h-16 w-auto"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">טיסות פרטיות ונוחות</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  טיסות מסוקים ומטוסים פנימיים לכל יעד באוגנדה. חיסכון של שעות נסיעה והנאה מנופים מרהיבים.
                </p>
                <div className="flex items-center justify-center bg-transparent border-2 border-[#CAA131] text-[#CAA131] px-6 py-2 rounded-full font-semibold text-sm group-hover:bg-[#CAA131] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                  גלו את אפשרויות הטיסה
                </div>
              </div>
            </div>
          </Link>

          {/* BAR SOS */}
          <Link to="/services/bar-sos" className="group">
            <div className="bg-white border border-[#CAA131] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
              <div
                className="h-64 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBar%20SOS%2Fbarsos-medevac-img.jpg.webp?alt=media&token=168394a8-66ac-4311-a88d-d3420b4c0e9c)`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              />
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <img 
                    src="/images/BAR-SOS-MAGNUS-logo.webp" 
                    alt="BAR SOS Logo" 
                    className="h-16 w-auto"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">ביטחון רפואי מלא 24/7</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  שירותי חילוץ רפואי מתקדמים עם צוות מקומי וצוות ישראלי – שקט נפשי וביטחון מלא בכל נקודה באוגנדה.
                </p>
                <div className="flex items-center justify-center bg-transparent border-2 border-[#CAA131] text-[#CAA131] px-6 py-2 rounded-full font-semibold text-sm group-hover:bg-[#CAA131] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                  קבלו מידע על הביטחון שלנו
                </div>
              </div>
            </div>
          </Link>

          {/* Extreme Adventure Park */}
          <Link to="/services/extreme-park" className="group">
            <div className="bg-white border border-[#CAA131] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
              <div
                className="h-64 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FExtreme%20adventures%2Fextremeadventures-card.webp?alt=media&token=cc084dbb-9efc-4e72-8453-d96c51d4a5d0)`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              />
              <div className="p-6">
                <div className="flex items-center justify-center mb-6">
                  <img 
                    src="/images/extreme-adventure-park-logo.webp" 
                    alt="Extreme Adventure Park Logo" 
                    className="h-16 w-auto"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">פארק אקסטרים לכל המשפחה</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  גלישת חבלים, טיפוס קירות, מסלולי אתגר ייחודיים ועוד שלל חוויות מרגשות – מתאים לקבוצות, משפחות וחובבי אקשן.
                </p>
                <div className="flex items-center justify-center bg-transparent border-2 border-[#CAA131] text-[#CAA131] px-6 py-2 rounded-full font-semibold text-sm group-hover:bg-[#CAA131] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
                  הזמינו חווית אקסטרים
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* מידע על הקבוצה */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-2xl p-8 text-center border border-[#CAA131]/30">
            <h2 className="text-lg md:text-2xl font-bold text-[#4B361C] mb-3 md:mb-4">קבוצת BAR</h2>
            <p className="text-[#4B361C] leading-relaxed max-w-3xl mx-auto">
              BAR Aviation ו-BAR SOS הם חלק מקבוצת BAR, המספקת שירותים מקצועיים ומותאמים אישית 
              לכל צרכי הטיול שלכם באוגנדה. מהטיסה המהירה והנוחה ועד הביטחון הרפואי המלא - 
              אנחנו כאן כדי להבטיח לכם חוויה מושלמת ובטוחה.
            </p>
          </div>
        </div>

        {/* כפתור חזרה */}
        <div className="text-center">
          <Link to="/" className="btn-secondary">
            ← חזרה לעמוד הבית
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
