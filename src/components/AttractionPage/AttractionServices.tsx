import React from "react";
import { Link } from "react-router-dom";

const AttractionServices: React.FC = () => {
  return (
    <div className="mb-8 order-8 md:order-none">
      <h3 className="text-2xl font-bold text-center text-[#4B361C] mb-6">
        השירותים שלנו
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Extreme Adventure Park */}
        <Link to="/services/extreme-park" className="group">
          <div className="bg-white border border-[#CAA131]/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/images/extreme-adventure-park-logo.webp" 
                alt="Extreme Adventure Park Logo" 
                className="h-16 w-auto"
              />
            </div>
            <h4 className="text-lg font-bold text-[#4B361C] mb-3">חוויות אדרנלין ואקסטרים</h4>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              פארק האקסטרים - גלישת חבלים, טיפוס קירות, מסלולי אתגר ועוד חוויות מרגשות
            </p>
            <div className="bg-[#CAA131] text-white px-4 py-2 rounded-lg font-semibold text-sm group-hover:bg-[#B8942A] transition-colors">
              הזמן שיהיה
            </div>
          </div>
        </Link>

        {/* BAR Aviation */}
        <Link to="/services/bar-aviation" className="group">
          <div className="bg-white border border-[#CAA131]/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/images/baraviationug.webp" 
                alt="BAR Aviation Logo" 
                className="h-16 w-auto"
              />
            </div>
            <h4 className="text-lg font-bold text-[#4B361C] mb-3">טיסות פרטיות פנימיות</h4>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              טיסות מסוקים ומטוסים לכל יעד באוגנדה - חיסכון בזמן ונוחות מקסימלית
            </p>
            <div className="bg-[#CAA131] text-white px-4 py-2 rounded-lg font-semibold text-sm group-hover:bg-[#B8942A] transition-colors">
              לפרטים נוספים
            </div>
          </div>
        </Link>

        {/* BAR SOS */}
        <Link to="/services/bar-sos" className="group">
          <div className="bg-white border border-[#CAA131]/30 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/images/BAR-SOS-MAGNUS-logo.webp" 
                alt="BAR SOS Logo" 
                className="h-16 w-auto"
              />
            </div>
            <h4 className="text-lg font-bold text-[#4B361C] mb-3">איתור וחילוץ רפואי 24/7</h4>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              שירותי חירום רפואיים מתקדמים - ביטחון מלא בכל טיול באוגנדה
            </p>
            <div className="bg-[#CAA131] text-white px-4 py-2 rounded-lg font-semibold text-sm group-hover:bg-[#B8942A] transition-colors">
              לפרטים נוספים
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AttractionServices;
