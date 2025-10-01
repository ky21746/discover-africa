import React from "react";
import { Link } from "react-router-dom";

const Tour11Days: React.FC = () => {
  const itinerary = [
    {
      day: 1,
      title: "יום 1 - הגעה והתאקלמות",
      activities: [
        "הגעה לשדה התעופה",
        "העברה למלון",
        "ארוחת ערב ולינה"
      ]
    },
    {
      day: 2,
      title: "יום 2 - ספארי בוקר",
      activities: [
        "06:00 - יציאה מוקדמת לספארי",
        "07:00 - ספארי בוקר בפארק הלאומי",
        "10:00 - ארוחת בוקר בטבע",
        "12:00 - חזרה למלון ומנוחה",
        "15:00 - טיול רגלי קצר",
        "18:00 - ארוחת ערב"
      ]
    },
    {
      day: 3,
      title: "יום 3 - ביקור בגורילות",
      activities: [
        "05:00 - יציאה מוקדמת לגורילות",
        "07:00 - טרק לגורילות (2-3 שעות)",
        "10:00 - צפייה בגורילות",
        "12:00 - חזרה מהטרק",
        "14:00 - ארוחת צהריים",
        "16:00 - חזרה למלון ומנוחה"
      ]
    },
    {
      day: 4,
      title: "יום 4 - טיול להרים",
      activities: [
        "07:00 - ארוחת בוקר",
        "08:00 - יציאה להרים",
        "10:00 - טיול רגלי בהרים",
        "12:00 - ארוחת צהריים בטבע",
        "14:00 - המשך הטיול",
        "16:00 - חזרה למלון"
      ]
    },
    {
      day: 5,
      title: "יום 5 - ביקור באגמים",
      activities: [
        "08:00 - ארוחת בוקר",
        "09:00 - יציאה לאגמים",
        "11:00 - שייט באגם",
        "13:00 - ארוחת צהריים",
        "15:00 - צפייה בציפורים",
        "17:00 - חזרה למלון"
      ]
    },
    {
      day: 6,
      title: "יום 6 - חוויה תרבותית",
      activities: [
        "08:00 - ארוחת בוקר",
        "09:00 - ביקור בכפר מקומי",
        "11:00 - סדנת תרבות מסורתית",
        "13:00 - ארוחת צהריים מסורתית",
        "15:00 - טיול רגלי בטבע",
        "18:00 - ארוחת ערב"
      ]
    },
    {
      day: 7,
      title: "יום 7 - ספארי נוסף",
      activities: [
        "06:00 - יציאה מוקדמת לספארי",
        "07:00 - ספארי בוקר נוסף",
        "10:00 - ארוחת בוקר בטבע",
        "12:00 - חזרה למלון ומנוחה",
        "15:00 - זמן חופשי",
        "18:00 - ארוחת ערב"
      ]
    },
    {
      day: 8,
      title: "יום 8 - טיול לנפלאות הטבע",
      activities: [
        "07:00 - ארוחת בוקר",
        "08:00 - יציאה לנפלאות הטבע",
        "10:00 - טיול רגלי",
        "12:00 - ארוחת צהריים",
        "14:00 - המשך הטיול",
        "16:00 - חזרה למלון"
      ]
    },
    {
      day: 9,
      title: "יום 9 - אטרקציות נוספות",
      activities: [
        "08:00 - ארוחת בוקר",
        "09:00 - ביקור באטרקציות נוספות",
        "11:00 - טיול רגלי",
        "13:00 - ארוחת צהריים",
        "15:00 - המשך הטיול",
        "17:00 - חזרה למלון"
      ]
    },
    {
      day: 10,
      title: "יום 10 - יום חופשי",
      activities: [
        "08:00 - ארוחת בוקר",
        "09:00 - זמן חופשי לקניות",
        "12:00 - ארוחת צהריים",
        "14:00 - מנוחה במלון",
        "18:00 - ארוחת ערב"
      ]
    },
    {
      day: 11,
      title: "יום 11 - חזרה",
      activities: [
        "08:00 - ארוחת בוקר",
        "09:00 - זמן חופשי אחרון",
        "11:00 - העברה לשדה התעופה",
        "13:00 - טיסה חזרה"
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
              <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
                מסלול 11 ימים
              </h1>
              <p className="text-base md:text-xl mb-4 md:mb-6 opacity-90">
                המסלול המלא והמקיף ביותר - 11 ימים של חוויות בלתי נשכחות באפריקה עם כל האטרקציות והשירותים
              </p>
              <div className="flex flex-wrap gap-4 text-lg">
                <span className="bg-primary/20 px-4 py-2 rounded-full">
                  11 ימים
                </span>
                <span className="bg-primary/20 px-4 py-2 rounded-full">
                  רמת קושי: קשה
                </span>
                <span className="bg-primary/20 px-4 py-2 rounded-full">
                  מ-1,800$
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
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-center">תיאור המסלול</h2>
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              המסלול המלא והמקיף ביותר של 11 ימים הכולל את כל האטרקציות והחוויות שאפריקה יכולה להציע. 
              מסלול זה מאפשר לכם לחוות את הטוב ביותר עם זמן נוסף לחקירה מעמיקה.
            </p>
          </div>

          {/* Itinerary */}
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-center">תוכנית המסלול</h2>
            <div className="space-y-8">
              {itinerary.map((day, index) => {
                // Define images for each day
                const dayImages = [
                  "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2Fqueen-elizabeth-lions-trees-hero.webp?alt=media&token=6aac3487-a6e1-46eb-b0b7-0055c4bb8a95",
                  "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2Fmurchison-falls-hero.webp?alt=media&token=56ccea2c-c574-46a6-ac3a-a0ecc2fbc3a5",
                  "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FGorillas%20in%20Bwindi%20Forest%2FGorilla%20family%20with%20silverback%20in%20Bwindi%20Impenetrable%20Forest%2C%20Uganda%2C%20Africa.webp?alt=media&token=6afb4c11-7cfa-4c28-a29e-d41dea9634ac",
                  "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMountains%2FRwenzori%20Mountains%2Frwenzori-mountains-hero.webp?alt=media&token=example-token",
                  "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2FElephant%20in%20Queen%20Elizabeth%20Park%2C%20Uganda%2C%20watched%20by%20a%20tourist%20boat%20on%20a%20safari%20cruise.webp?alt=media&token=6b7061b6-b02e-4410-8393-e072ae208a64",
                  "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/uganda%2FThree%20girls%20at%20a%20village%20water%20pump%20two%20pumping%20while%20one%20drinks%20directly%20from%20the%20spout.webp?alt=media&token=1282bd1a-529f-49f5-bf62-f83462860e6f",
                  "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FKibale%20Chimpanzees%2FMother%20and%20baby%20chimpanzees%2C%20pan%20troglodytes%2C%20swinging%20in%20the%20tropical%20rainforest%20of%20Kibale%20National%20Park%2C%20Uganda%2C%20and%20feeding%20from%20the%20fruits%400.5x.webp?alt=media&token=3728b69f-7861-49b6-90f7-63f363d18dbf",
                  "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2FTourists%20overlook%20the%20massive%20waterfall%20of%20Murchison%20Falls%20on%20the%20Nile%20River%20in%20Uganda.webp?alt=media&token=bc3f5511-234b-4696-85c0-446e67dbea52",
                  "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2Fqueen-elizabeth-lions-trees-hero.webp?alt=media&token=6aac3487-a6e1-46eb-b0b7-0055c4bb8a95",
                  "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FGorillas%20in%20Bwindi%20Forest%2FBaby%20Gorilla%20Kisses%20Silverback%20in%20Bwindi%20Impenetrable%20National%20Park%2C%20Uganda.webp?alt=media&token=13d220c2-99d9-477d-b46f-b69253988504",
                  "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/uganda%2FThree%20girls%20at%20a%20village%20water%20pump%20two%20pumping%20while%20one%20drinks%20directly%20from%20the%20spout.webp?alt=media&token=1282bd1a-529f-49f5-bf62-f83462860e6f"
                ];
                
                return (
                  <div key={day.day} className="bg-white border border-[#534B20]/60 rounded-3xl p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col">
                    <h3 className="text-lg md:text-xl font-bold text-[#4B361C] mb-3 md:mb-4 border-b border-[#C9A34E] pb-2">
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
            <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-center">מה כלול במחיר</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-green-800">כלול</h3>
                <ul className="space-y-2 text-green-700">
                  <li>✓ לינה במלון 5 כוכבים</li>
                  <li>✓ כל הארוחות</li>
                  <li>✓ תחבורה במכונית 4x4</li>
                  <li>✓ הדרכה מקצועית</li>
                  <li>✓ כניסה לפארק הלאומי</li>
                  <li>✓ רישיון גורילות</li>
                  <li>✓ שייט באגמים</li>
                  <li>✓ ביקור בכפר מקומי</li>
                  <li>✓ אטרקציות נוספות</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-red-800">לא כלול</h3>
                <ul className="space-y-2 text-red-700">
                  <li>✗ טיסות בינלאומיות</li>
                  <li>✗ משקאות אלכוהוליים</li>
                  <li>✗ טיפים למדריך</li>
                  <li>✗ ביטוח נסיעות</li>
                  <li>✗ ויזה</li>
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

export default Tour11Days;
