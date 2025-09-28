import React from "react";
import { Link } from "react-router-dom";

const Tour1Day: React.FC = () => {
  const itinerary = [
    {
      day: 1,
      title: "יום אחד - חוויה אינטנסיבית",
      activities: [
        "06:00 - יציאה מוקדמת מהמלון",
        "07:00 - הגעה לפארק הלאומי וספארי בוקר",
        "10:00 - ארוחת בוקר בטבע",
        "11:00 - ביקור בכפר מקומי וחוויה תרבותית",
        "13:00 - ארוחת צהריים מסורתית",
        "14:00 - טיול רגלי קצר וצפייה בחיות בר",
        "16:00 - חזרה למלון"
      ]
    }
  ];

  return (
    <div className="fade-in" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: "url(https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg)"
          }}
        />
        
        <div className="absolute inset-0 bg-black/40">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                מסלול יום אחד
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90">
                חוויה אינטנסיבית של יום אחד באפריקה - ספארי קצר, ביקור בכפר מקומי וטעימה מהתרבות המקומית
              </p>
              <div className="flex flex-wrap gap-4 text-lg">
                <span className="bg-primary/20 px-4 py-2 rounded-full">
                  יום אחד
                </span>
                <span className="bg-primary/20 px-4 py-2 rounded-full">
                  רמת קושי: קל
                </span>
                <span className="bg-primary/20 px-4 py-2 rounded-full">
                  מ-150$
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Description */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">תיאור המסלול</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              מסלול יום אחד מושלם למי שרוצה לטעום מהחוויה האפריקאית בזמן קצר. 
              המסלול כולל ספארי בוקר, ביקור בכפר מקומי וחוויה תרבותית אותנטית.
            </p>
          </div>

          {/* Itinerary */}
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">תוכנית המסלול</h2>
            <div className="space-y-8">
              {itinerary.map((day, index) => {
                // Define images for each day
                const dayImages = [
                  "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2Fqueen-elizabeth-lions-trees-hero.webp?alt=media&token=6aac3487-a6e1-46eb-b0b7-0055c4bb8a95"
                ];
                
                return (
                  <div key={day.day} className="bg-white border border-[#534B20]/60 rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col">
                    <h3 className="text-xl md:text-2xl font-bold text-[#4B361C] mb-4 border-b border-[#C9A34E] pb-2">
                      {day.title}
                    </h3>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch flex-1">
                      <div className="order-2 lg:order-1 flex flex-col">
                        <div className="space-y-3 mb-6">
                          {day.activities.map((activity, activityIndex) => (
                            <div key={activityIndex} className="flex items-start space-x-3 space-x-reverse">
                              <div className="w-2 h-2 bg-[#C9A34E] rounded-full mt-2 flex-shrink-0"></div>
                              <p className="text-gray-700 text-sm md:text-base">{activity}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="order-1 lg:order-2 flex flex-col">
                        <div className="relative aspect-[4/3] md:aspect-[16/9] w-full">
                          <img 
                            src={dayImages[index % dayImages.length]} 
                            alt={`יום ${day.day} - ${day.title}`}
                            className="w-full h-full object-cover rounded-xl shadow-md"
                            onError={(e) => {
                              e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDQwMCAyNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjUwIiBmaWxsPSIjRjNGNEY2Ii8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTI1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2QjcyODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiPuaXoOaVsOa1i+W6l+WbveWGheWQjeWtlzwvdGV4dD4KPC9zdmc+';
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* What's Included */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">מה כלול במחיר</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-green-800">כלול</h3>
                <ul className="space-y-2 text-green-700">
                  <li>✓ תחבורה במכונית 4x4</li>
                  <li>✓ הדרכה מקצועית</li>
                  <li>✓ ארוחת בוקר וצהריים</li>
                  <li>✓ כניסה לפארק הלאומי</li>
                  <li>✓ ביקור בכפר מקומי</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-red-800">לא כלול</h3>
                <ul className="space-y-2 text-red-700">
                  <li>✗ לינה</li>
                  <li>✗ משקאות אלכוהוליים</li>
                  <li>✗ טיפים למדריך</li>
                  <li>✗ ביטוח נסיעות</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-2 text-yellow-800">הערה חשובה</h3>
              <p className="text-yellow-700">
                ייתכנו שינויים בלינה או באטרקציות בהתאם לזמינות – במקרה כזה יינתן פתרון שווה ערך.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-primary text-white px-8 py-4 rounded-lg inline-block hover:bg-primary-dark transition-colors cursor-pointer">
              <Link to="/contact" className="text-white no-underline">
                צור קשר לפרטים נוספים
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour1Day;
