// src/pages/ExtremePage.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Construction, ArrowLeft } from "lucide-react";

const ExtremePage: React.FC = () => {
  return (
    <div className="fade-in" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white h-[45vh] min-h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FExtreme%20adventures%2Fextremeadventures-card.webp?alt=media&token=cc084dbb-9efc-4e72-8453-d96c51d4a5d0)"
          }}
        />
        
        {/* Transparent bar at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-black/40 border-t-[1.5px] border-[#CAA131]/80">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-4 text-white max-w-4xl">
            <h1 className="text-2xl md:text-5xl font-bold drop-shadow-md">
              אקסטרים באוגנדה
            </h1>
            <p className="text-base md:text-lg max-w-3xl mx-auto drop-shadow-md">
              חוויות אתגריות וספורט אקסטרים - רפטינג, באנג'י, טיפוס הרים ועוד
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <Construction className="w-24 h-24 mx-auto text-[#CAA131] mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#4B361C] mb-4">
                העמוד יגיע בקרוב
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                אנחנו עובדים על יצירת חוויות אקסטרים מדהימות באוגנדה. 
                בקרוב תוכלו לגלות רפטינג בנילוס, טיפוס הרים, באנג'י ועוד הרבה פעילויות אתגריות!
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-[#4B361C] mb-4">מה מחכה לכם?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#CAA131] rounded-full"></div>
                  <span className="text-gray-700">רפטינג בנילוס הלבן</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#CAA131] rounded-full"></div>
                  <span className="text-gray-700">באנג'י מגשרים גבוהים</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#CAA131] rounded-full"></div>
                  <span className="text-gray-700">טיפוס הרים ברוונזורי</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#CAA131] rounded-full"></div>
                  <span className="text-gray-700">קאנו באגמים</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/categories" 
                className="inline-flex items-center gap-2 bg-[#CAA131] hover:bg-[#B8942A] text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="w-5 h-5" />
                חזרה לקטגוריות
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-white border-2 border-[#CAA131] text-[#CAA131] hover:bg-[#CAA131] hover:text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                צור קשר
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtremePage;