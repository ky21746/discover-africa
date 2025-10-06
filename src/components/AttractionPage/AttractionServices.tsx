import React from "react";
import { Link } from "react-router-dom";

const AttractionServices: React.FC = () => {
  return (
    <div className="mb-8 order-8 md:order-none">
      <div className="mt-8 mb-4">
        <h3 className="text-2xl font-bold text-center text-[#4B361C] mb-4">
          השירותים שלנו
        </h3>
      </div>
      <div className="flex justify-center mb-6">
        <div className="w-16 h-1 bg-[#CAA131] rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Extreme Adventure Park */}
        <Link to="/services/extreme-park" className="group">
          <div className="bg-white border border-[#CAA131] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/images/extreme-adventure-park-logo.webp" 
                alt="Extreme Adventure Park Logo" 
                className="h-16 w-auto"
                loading="lazy"
              />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">פארק אקסטרים לכל המשפחה</h4>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              גלישת חבלים, טיפוס קירות, מסלולי אתגר ייחודיים ועוד שלל חוויות מרגשות – מתאים לקבוצות, משפחות וחובבי אקשן.
            </p>
            <div className="bg-transparent border-2 border-[#CAA131] text-[#CAA131] px-6 py-2 rounded-full font-semibold text-sm group-hover:bg-[#CAA131] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
              הזמינו חווית אקסטרים
            </div>
          </div>
        </Link>

        {/* BAR Aviation */}
        <Link to="/services/bar-aviation" className="group">
          <div className="bg-white border border-[#CAA131] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/images/baraviationug.webp" 
                alt="BAR Aviation Logo" 
                className="h-16 w-auto"
                loading="lazy"
              />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">טיסות פרטיות ונוחות</h4>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              טיסות מסוקים ומטוסים פנימיים לכל יעד באוגנדה. חיסכון של שעות נסיעה והנאה מנופים מרהיבים.
            </p>
            <div className="bg-transparent border-2 border-[#CAA131] text-[#CAA131] px-6 py-2 rounded-full font-semibold text-sm group-hover:bg-[#CAA131] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
              גלו את אפשרויות הטיסה
            </div>
          </div>
        </Link>

        {/* BAR SOS */}
        <Link to="/services/bar-sos" className="group">
          <div className="bg-white border border-[#CAA131] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/images/BAR-SOS-MAGNUS-logo.webp" 
                alt="BAR SOS Logo" 
                className="h-16 w-auto"
                loading="lazy"
              />
            </div>
            <h4 className="text-2xl font-bold text-gray-900 mb-3">ביטחון רפואי מלא 24/7</h4>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              שירותי חילוץ רפואי מתקדמים עם צוות מקומי וצוות ישראלי – שקט נפשי וביטחון מלא בכל נקודה באוגנדה.
            </p>
            <div className="bg-transparent border-2 border-[#CAA131] text-[#CAA131] px-6 py-2 rounded-full font-semibold text-sm group-hover:bg-[#CAA131] group-hover:text-white group-hover:shadow-lg transition-all duration-300">
              קבלו מידע על הביטחון שלנו
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AttractionServices;
