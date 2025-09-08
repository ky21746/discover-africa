// src/pages/services/OurServices.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Plane, Shield, ArrowLeft } from "lucide-react";

const OurServices: React.FC = () => {
  return (
    <div className="py-8 fade-in" dir="rtl">
      <div className="container mx-auto px-4">
        {/* כותרת ראשית */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold font-sans text-[#4B361C]">
            השירותים שלנו
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted font-sans">
            שירותים מקצועיים ומותאמים אישית לכל צרכי הטיול שלכם באוגנדה
          </p>
        </div>

        {/* כרטיסי השירותים */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* BAR Aviation */}
          <Link to="/services/bar-aviation" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
              <div
                className="h-64 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg)`,
                  backgroundPosition: 'center 30%'
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#CAA131] p-2 rounded-lg">
                    <Plane className="w-6 h-6 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#4B361C]">BAR Aviation</h2>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  שירותי תעופה מקצועיים - טיסות ספארי, טיסות פרטיות וטיסות נוף מעל הנופים הקסומים של אוגנדה
                </p>
                <div className="flex items-center text-[#CAA131] font-semibold group-hover:gap-2 transition-all duration-300">
                  לפרטים נוספים
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </div>
              </div>
            </div>
          </Link>

          {/* BAR SOS */}
          <Link to="/services/bar-sos" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
              <div
                className="h-64 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg)`,
                  backgroundPosition: 'center 30%'
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#CAA131] p-2 rounded-lg">
                    <Shield className="w-6 h-6 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#4B361C]">BAR SOS</h2>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  שירותי ביטחון וחילוץ רפואי 24/7 - חילוץ אווירי וקרקעי, אפליקציית SOS ותקשורת לוויינית
                </p>
                <div className="flex items-center text-[#CAA131] font-semibold group-hover:gap-2 transition-all duration-300">
                  לפרטים נוספים
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </div>
              </div>
            </div>
          </Link>

          {/* Extreme Adventure Park */}
          <Link to="/services/extreme-park" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
              <div
                className="h-64 bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg)`,
                  backgroundPosition: 'center 30%'
                }}
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[#CAA131] p-2 rounded-lg">
                    <Shield className="w-6 h-6 text-black" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#4B361C]">Extreme Adventure Park</h2>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  פארק האקסטרים הגדול ביותר באוגנדה - Go-Karting, Zipline, Paintball ועוד חוויות מלאות אדרנלין
                </p>
                <div className="flex items-center text-[#CAA131] font-semibold group-hover:gap-2 transition-all duration-300">
                  לפרטים נוספים
                  <ArrowLeft className="w-4 h-4 mr-2" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* מידע על הקבוצה */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-2xl p-8 text-center border border-[#CAA131]/30">
            <h2 className="text-2xl font-bold text-[#4B361C] mb-4">קבוצת BAR</h2>
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
