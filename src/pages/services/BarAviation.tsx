// src/pages/services/BarAviation.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Plane, MapPin, Clock, Users, Shield, Star } from "lucide-react";

const BarAviation: React.FC = () => {
  return (
    <div className="py-8 fade-in" dir="rtl">
      <div className="container mx-auto px-4">
        {/* כותרת ראשית */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl md:text-5xl font-bold font-sans text-[#4B361C]">
            BAR Aviation
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted font-sans">
            חברת התעופה המובילה באוגנדה - שער המרכזי לטיולי ספארי וטיסות נוף
          </p>
        </div>

        {/* תיאור כללי */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#4B361C] mb-6 border-b-2 border-[#CAA131] w-fit">
              תיאור כללי
            </h2>
            <div className="prose prose-lg max-w-none text-[#4B361C] leading-relaxed">
              <p className="mb-4">
                BAR Aviation היא חברת התעופה המובילה באוגנדה, הפועלת משדה התעופה Kajjansi ונחשבת לשער המרכזי לטיולי ספארי, טיסות נוף וחיבורים אוויריים מהירים.
              </p>
              <p className="mb-4">
                החברה מתמחה בטיסות פנים ייחודיות המאפשרות גישה ישירה לשמורות הטבע המפורסמות ביותר במדינה – ממורצ'יסון פולס בצפון ועד בווינדי בדרום.
              </p>
              <p className="mb-4">
                מטוסי החברה מספקים חווית טיסה נוחה, בטוחה ומהירה, המותאמת לקבוצות, משפחות ותיירי יוקרה.
              </p>
              <p className="mb-4">
                לצד טיסות ספארי, BAR Aviation מציעה גם טיסות נוף קסומות מעל אגם ויקטוריה ונהר הנילוס, חוויה בלתי נשכחת לכל מבקר.
              </p>
              <p>
                החברה פועלת תחת סטנדרטים בינלאומיים של בטיחות ותפעול, ומציבה דגש על שירות אישי ברמה הגבוהה ביותר.
              </p>
            </div>
          </div>
        </div>

        {/* שירותים מרכזיים */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#4B361C] mb-6 border-b-2 border-[#CAA131] w-fit">
              שירותים מרכזיים
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <Plane className="w-6 h-6 text-[#CAA131] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4B361C] mb-2">טיסות ספארי</h3>
                  <p className="text-[#4B361C] text-sm">
                    חיבור אווירי לשמורות: מורצ'יסון פולס, קווין אליזבת, קידפו, בווינדי ועוד
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <Users className="w-6 h-6 text-[#CAA131] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4B361C] mb-2">טיסות פרטיות</h3>
                  <p className="text-[#4B361C] text-sm">
                    טיסות בהתאמה אישית למשפחות, קבוצות וחברות
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <MapPin className="w-6 h-6 text-[#CAA131] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4B361C] mb-2">טיסות נוף</h3>
                  <p className="text-[#4B361C] text-sm">
                    חוויה ייחודית מעל אגם ויקטוריה, נהר הנילוס והרי רוונזורי
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-xl border border-[#CAA131]/30">
                <Shield className="w-6 h-6 text-[#CAA131] mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-[#4B361C] mb-2">שירותי BAR SOS</h3>
                  <p className="text-[#4B361C] text-sm">
                    כחלק מהקבוצה: ביטחון רפואי וחילוץ אווירי 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* גלריה */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#4B361C] mb-6 border-b-2 border-[#CAA131] w-fit">
              גלריה
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg"
                  alt="מטוס ממריא משדה עפר ליד שמורה"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">מטוס ממריא משדה עפר</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg"
                  alt="טיסת נוף מעל אגם ויקטוריה"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">טיסת נוף מעל אגם ויקטוריה</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/534188/pexels-photo-534188.jpeg"
                  alt="נוסעים חווים טיסה לספארי"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">נוסעים חווים טיסה לספארי</p>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl">
                <img
                  src="https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg"
                  alt="צוות טייסים בשטח"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">צוות טייסים בשטח</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* קריאה לפעולה */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-[#CAA131] to-[#B8942A] rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">הזמן טיסה עכשיו</h2>
            <p className="text-lg mb-6 opacity-90">
              טוסו בבטחה ובמהירות אל לב הספארי האוגנדי עם BAR Aviation
            </p>
            <button className="bg-white text-[#4B361C] px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors duration-300">
              צור קשר עכשיו
            </button>
          </div>
        </div>

        {/* קישור לחברה אחות */}
        <div className="mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <p className="text-[#4B361C] mb-4">
              <strong>חברה אחות:</strong> BAR Aviation היא חלק מקבוצת BAR יחד עם 
              <Link to="/services/bar-sos" className="text-[#CAA131] hover:underline mx-1">
                BAR SOS
              </Link>
              - שירותי ביטחון וחילוץ רפואי 24/7
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

export default BarAviation;
