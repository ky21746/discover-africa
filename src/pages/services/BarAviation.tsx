// src/pages/services/BarAviation.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plane, MapPin, Clock, Users, Shield, Star, X } from "lucide-react";

const BarAviation: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBar%20Aviation%2Fbar%20aviation%20transport.webp?alt=media&token=82554792-233a-4626-b714-2706ca8aa41a",
      alt: "מטוס BAR Aviation"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBar%20Aviation%2Fbar%20aviation%20transport%20v5.webp?alt=media&token=0080e7cd-a225-45b3-b9ab-725420d56d9f",
      alt: "טיסת ספארי"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBar%20Aviation%2Fbar%20aviation%20transport%20v4.webp?alt=media&token=4cb28668-06cd-46cf-8876-d424b6bcbc48",
      alt: "מטוס בשדה התעופה"
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBar%20Aviation%2Fbar%20aviation%20transport%20v3.webp?alt=media&token=5997047a-e32d-4663-a8c3-b6da016addf1",
      alt: "צוות טייסים"
    }
  ];

  return (
    <div className="fade-in" dir="rtl">
      {/* Hero Section */}
      <section className="relative w-full h-[30vh] md:h-[45vh] min-h-[200px] mb-12">
          <img 
            src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBar%20Aviation%2FBar%20safari%20Hero.webp?alt=media&token=9a4c4d80-c145-43d5-9e5d-92da80069a19"
            alt="BAR Aviation Hero"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </section>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src="/images/baraviationug.webp" 
              alt="BAR Aviation Logo" 
              className="h-20 w-auto"
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 font-sans text-[#4B361C]">
            BAR Aviation
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto font-sans">
            חברת התעופה המובילה באוגנדה - שער המרכזי לטיולי ספארי וטיסות נוף
          </p>
        </div>

        {/* תיאור כללי */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-lg md:text-2xl font-bold text-[#4B361C] mb-4 md:mb-6 border-b-2 border-[#CAA131] w-fit">
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
            <h2 className="text-lg md:text-2xl font-bold text-[#4B361C] mb-4 md:mb-6 border-b-2 border-[#CAA131] w-fit">
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
                    כחלק מהקבוצה: איתור וחילוץ רפואי וחילוץ אווירי 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* גלריה */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-lg md:text-2xl font-bold text-[#4B361C] mb-4 md:mb-6 border-b-2 border-[#CAA131] w-fit">
              גלריה
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative group overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal לתמונה בגודל מלא */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage}
                alt="תמונה בגודל מלא"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}

        {/* קריאה לפעולה */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-[#CAA131] to-[#B8942A] rounded-2xl p-8 text-center text-white">
            <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">הזמן טיסה עכשיו</h2>
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
              - שירותי איתור וחילוץ רפואי 24/7
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
