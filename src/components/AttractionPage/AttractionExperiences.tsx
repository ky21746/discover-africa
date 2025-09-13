import React from "react";
import { Link } from "react-router-dom";

const AttractionExperiences: React.FC = () => {
  return (
    <div className="md:col-span-1">
      <section className="bg-white border border-[#534B20]/60 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] h-full">
        <h3 className="text-lg font-bold text-center text-[#4B361C] mb-6">
          חוויות נוספות בדרך ליעד הבא
        </h3>
        <div className="space-y-4">
          {/* כרטיס 1 - בווינדי */}
          <div className="bg-white border border-[#534B20]/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="h-32 bg-cover bg-center relative" style={{
              backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FGorillas%20in%20Bwindi%20Forest%2FBaby%20Gorilla%20Kisses%20Silverback%20in%20Bwindi%20Impenetrable%20National%20Park%2C%20Uganda-hero.webp?alt=media&token=f1676abc-ac4a-462b-9478-136e0399fc55')`
            }}>
              <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                כ־3 שעות דרומה
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
                <h4 className="text-sm font-bold text-white mb-1">בווינדי</h4>
                <p className="text-xs text-white">מפגש נדיר עם גורילות</p>
              </div>
            </div>
            <div className="p-3">
              <Link to="/attraction/bwindi-gorillas" className="w-full bg-transparent border-2 border-[#CAA131] text-[#CAA131] hover:bg-[#CAA131] hover:text-white font-semibold py-2 px-3 rounded-lg text-center block transition-all duration-300 text-sm">
                קרא עוד
              </Link>
            </div>
          </div>
          
          {/* כרטיס 2 - קיבאלה */}
          <div className="bg-white border border-[#534B20]/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="h-32 bg-cover bg-center relative" style={{
              backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FKibale%20Chimpanzees%2Fkibale%20chimp%20chimpanzee%20Uganda%20in%20Africa-hero.webp?alt=media&token=ec93ce06-dcca-41a8-bf0a-b886d4112384')`
            }}>
              <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                כ־2.5 שעות צפונה
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
                <h4 className="text-sm font-bold text-white mb-1">קיבאלה</h4>
                <p className="text-xs text-white">טיול מודרך ביער טרופי</p>
              </div>
            </div>
            <div className="p-3">
              <Link to="/attraction/kibale-chimps" className="w-full bg-transparent border-2 border-[#CAA131] text-[#CAA131] hover:bg-[#CAA131] hover:text-white font-semibold py-2 px-3 rounded-lg text-center block transition-all duration-300 text-sm">
                קרא עוד
              </Link>
            </div>
          </div>

          {/* כרטיס 3 - אגם בוניוניו */}
          <div className="bg-white border border-[#534B20]/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="h-32 bg-cover bg-center relative" style={{
              backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FLake%20Bunyonyi%2FWoman%20sitting%20on%20dock%20at%20sunset%20on%20Lake%20Bunyonyi-Hero.webp?alt=media&token=3d315584-c531-4256-990a-82e532f86de0')`
            }}>
              <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                כ־3 שעות דרומה
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
                <h4 className="text-sm font-bold text-white mb-1">אגם בוניוניו</h4>
                <p className="text-xs text-white">מנוחה קסומה בין 29 איים</p>
              </div>
            </div>
            <div className="p-3">
              <Link to="/attraction/lake-bunyonyi" className="w-full bg-transparent border-2 border-[#CAA131] text-[#CAA131] hover:bg-[#CAA131] hover:text-white font-semibold py-2 px-3 rounded-lg text-center block transition-all duration-300 text-sm">
                קרא עוד
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttractionExperiences;
