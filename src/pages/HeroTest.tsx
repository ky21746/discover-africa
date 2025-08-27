import React, { useState } from 'react';
import { Star, MapPin, Clock, Users, Camera, Route, Plus } from 'lucide-react';

const HeroTest: React.FC = () => {
  const [selectedHero, setSelectedHero] = useState(1);
  
  const heroImage = "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2Fmurchison-falls-hero.webp?alt=media&token=56ccea2c-c574-46a6-ac3a-a0ecc2fbc3a5";
  
  const attractionData = {
    name: "פארק לאומי מורצ'יסון פולס",
    subtitle: "הפארק הגדול באוגנדה עם המפל העוצמתי ביותר בעולם",
    price: "מ-$2,400",
    duration: "2-4 ימים",
    difficulty: "קל-בינוני",
    rating: 4.8,
    reviewCount: 247
  };

  // Hero 1: Original (Current)
  const Hero1 = () => (
    <section className="relative w-full h-[70vh] md:h-[75vh]">
      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center 20%'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
        <div className="container mx-auto max-w-screen-xl">
          <div className="mb-3">
            <span className="inline-flex items-center gap-2 bg-amber-500 text-black px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
              <MapPin className="w-4 h-4" />
              ספארי
            </span>
          </div>
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
            {attractionData.name}
          </h1>
          <h2 className="text-base md:text-xl text-amber-300 font-medium mb-3 drop-shadow-lg">
            {attractionData.subtitle}
          </h2>
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-6 rounded-xl text-base md:text-lg transition-all transform hover:scale-105 shadow-xl w-full md:flex-1">
              הזמן עכשיו - החל מ-{attractionData.price}
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium py-3 px-4 md:px-6 rounded-xl transition-all border border-white/30 w-full md:flex-1">
              <Users className="w-4 h-4 inline ml-2" />
              בדוק זמינות
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  // Hero 2: Smaller Height
  const Hero2 = () => (
    <>
      <section className="relative w-full h-[50vh] md:h-[50vh]">
        <img 
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            objectPosition: 'center 100%' // אחוז שמתאים לשניהם
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        
        {/* כפתור הוסף למסלול למובייל - צד עליון ימין */}
        <div className="absolute top-4 right-4 md:hidden z-10">
          <div className="bg-amber-500 hover:bg-green-500 active:bg-green-600 rounded-full shadow-xl flex items-center gap-2 px-3 py-2 transition-all cursor-pointer border-2 border-white/20">
            <Route className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-medium">הוסף למסלול</span>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="container mx-auto max-w-screen-xl">
            <div className="mb-3">
              <span className="inline-flex items-center gap-2 bg-amber-500 text-black px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                <MapPin className="w-4 h-4" />
                ספארי
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
              {attractionData.name}
            </h1>
            <h2 className="text-base md:text-lg text-amber-300 font-medium mb-3 drop-shadow-lg">
              {attractionData.subtitle}
            </h2>
            
            {/* כרטיסי מידע + כפתור - רק דסקטופ */}
            <div className="hidden md:grid md:grid-cols-4 gap-3 mb-4">
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <div className="text-lg font-bold text-blue-600">צפון־מערב אוגנדה</div>
                <div className="text-sm text-gray-600">מיקום במדינה</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <div className="text-lg font-bold text-green-600">2-4 ימים</div>
                <div className="text-sm text-gray-600">זמן מומלץ לטיול</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <div className="text-lg font-bold text-amber-600">קל-בינוני</div>
                <div className="text-sm text-gray-600">רמת קושי</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-white/30 hover:bg-green-500/80 hover:border-green-400 active:bg-green-600 transition-all cursor-pointer">
                <div className="text-lg font-bold text-white flex items-center justify-center h-full">
                  <Route className="w-5 h-5 ml-2" />
                  הוסף למסלול
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* כרטיסי מידע מתחת לבאנר - רק במובייל */}
      <div className="md:hidden bg-white border-t">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-blue-600">צפון־מערב אוגנדה</div>
              <div className="text-sm text-gray-600">מיקום במדינה</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-green-600">2-4 ימים</div>
              <div className="text-sm text-gray-600">זמן מומלץ לטיול</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-amber-600">קל-בינוני</div>
              <div className="text-sm text-gray-600">רמת קושי</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Hero 3: Card-Based
  const Hero3 = () => (
    <section className="relative w-full h-[50vh] md:h-[60vh]">
      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center 20%'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
        <div className="container mx-auto max-w-screen-xl">
          {/* Hero Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-amber-600">{attractionData.price}</div>
              <div className="text-sm text-gray-600">מחיר התחלתי</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-blue-600">{attractionData.duration}</div>
              <div className="text-sm text-gray-600">משך הטיול</div>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-2xl font-bold text-green-600">{attractionData.difficulty}</div>
              <div className="text-sm text-gray-600">רמת קושי</div>
            </div>
          </div>
          
          <div className="mb-3">
            <span className="inline-flex items-center gap-2 bg-amber-500 text-black px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
              <MapPin className="w-4 h-4" />
              ספארי
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
            {attractionData.name}
          </h1>
          <h2 className="text-base md:text-lg text-amber-300 font-medium mb-3 drop-shadow-lg">
            {attractionData.subtitle}
          </h2>
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-xl text-base transition-all transform hover:scale-105 shadow-xl w-full md:flex-1">
              הזמן עכשיו - החל מ-{attractionData.price}
            </button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-medium py-3 px-4 md:px-6 rounded-xl transition-all border border-white/30 w-full md:flex-1">
              <Users className="w-4 h-4 inline ml-2" />
              בדוק זמינות
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  // Hero 4: Minimalist
  const Hero4 = () => (
    <section className="relative w-full h-[60vh] md:h-[70vh]">
      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center 20%'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            {attractionData.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-amber-300 font-medium mb-8 drop-shadow-lg">
            {attractionData.subtitle}
          </h2>
          <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:scale-105 shadow-xl">
            הזמן עכשיו
          </button>
        </div>
      </div>
    </section>
  );

  // Hero 5: Split Layout
  const Hero5 = () => (
    <section className="relative w-full h-[60vh] md:h-[70vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Image Side */}
        <div className="relative">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${heroImage})`,
              backgroundPosition: 'center 20%'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        </div>
        
        {/* Content Side */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-8">
          <div className="text-white text-center md:text-right">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 bg-amber-500 text-black px-3 py-1.5 rounded-full text-sm font-medium">
                <MapPin className="w-4 h-4" />
                ספארי
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {attractionData.name}
            </h1>
            <h2 className="text-lg md:text-xl text-amber-300 font-medium mb-6">
              {attractionData.subtitle}
            </h2>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500">{attractionData.price}</div>
                <div className="text-sm text-gray-400">מחיר</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-500">{attractionData.duration}</div>
                <div className="text-sm text-gray-400">משך</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-500">{attractionData.difficulty}</div>
                <div className="text-sm text-gray-400">קושי</div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-xl">
                הזמן עכשיו
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-6 rounded-xl transition-all border border-white/30">
                <Users className="w-4 h-4 inline ml-2" />
                בדוק זמינות
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const heroes = [
    { id: 1, name: "Original", component: Hero1 },
    { id: 2, name: "Smaller Height", component: Hero2 },
    { id: 3, name: "Card-Based", component: Hero3 },
    { id: 4, name: "Minimalist", component: Hero4 },
    { id: 5, name: "Split Layout", component: Hero5 }
  ];

  const SelectedHero = heroes.find(h => h.id === selectedHero)?.component || Hero1;

  return (
    <div dir="rtl" className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">ניסוי באנר הירו</h1>
          <div className="flex flex-wrap gap-2">
            {heroes.map(hero => (
              <button
                key={hero.id}
                onClick={() => setSelectedHero(hero.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedHero === hero.id
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {hero.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Display */}
      <SelectedHero />

      {/* Info Panel */}
      <div className="bg-white border-t">
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-xl font-bold mb-4">מידע על הגרסה הנוכחית</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">תכונות:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {selectedHero === 1 && (
                  <>
                    <li>• גובה מלא (70vh/75vh)</li>
                    <li>• תוכן בתחתית</li>
                    <li>• גרדיאנט כהה</li>
                  </>
                )}
                {selectedHero === 2 && (
                  <>
                    <li>• גובה קטן (50vh)</li>
                    <li>• כפתור עגול במובייל</li>
                    <li>• כרטיסי מידע מתחת לבאנר במובייל</li>
                  </>
                )}
                {selectedHero === 3 && (
                  <>
                    <li>• כרטיסים צפים עם מידע</li>
                    <li>• עיצוב מודרני</li>
                    <li>• מידע נגיש יותר</li>
                  </>
                )}
                {selectedHero === 4 && (
                  <>
                    <li>• מינימליסטי</li>
                    <li>• טקסט במרכז</li>
                    <li>• כפתור אחד בלבד</li>
                  </>
                )}
                {selectedHero === 5 && (
                  <>
                    <li>• תמונה + תוכן</li>
                    <li>• סטטיסטיקות ברורות</li>
                    <li>• עיצוב מאוזן</li>
                  </>
                )}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">המלצות:</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {selectedHero === 1 && (
                  <>
                    <li>• טוב למובייל</li>
                    <li>• הרבה מידע</li>
                    <li>• יכול להיות גדול מדי</li>
                  </>
                )}
                {selectedHero === 2 && (
                  <>
                    <li>• מאוזן מאוד</li>
                    <li>• מובייל נקי</li>
                    <li>• דסקטופ מלא</li>
                  </>
                )}
                {selectedHero === 3 && (
                  <>
                    <li>• מודרני ונגיש</li>
                    <li>• מידע ברור</li>
                    <li>• מומלץ ביותר</li>
                  </>
                )}
                {selectedHero === 4 && (
                  <>
                    <li>• נקי ופשוט</li>
                    <li>• דגש על התמונה</li>
                    <li>• פחות מידע</li>
                  </>
                )}
                {selectedHero === 5 && (
                  <>
                    <li>• מאוזן מאוד</li>
                    <li>• מידע ברור</li>
                    <li>• טוב לדסקטופ</li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTest;