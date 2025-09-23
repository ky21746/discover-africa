import React from "react";
import { Link } from "react-router-dom";

const Tour10Days: React.FC = () => {
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
      title: "יום 9 - יום חופשי",
      activities: [
        "08:00 - ארוחת בוקר",
        "09:00 - זמן חופשי לקניות",
        "12:00 - ארוחת צהריים",
        "14:00 - מנוחה במלון",
        "18:00 - ארוחת ערב"
      ]
    },
    {
      day: 10,
      title: "יום 10 - חזרה",
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
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                מסלול 10 ימים
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90">
                מסלול מקיף של 10 ימים הכולל את כל האטרקציות המרכזיות: ספארי, גורילות, הרים, אגמים ונפלאות הטבע
              </p>
              <div className="flex flex-wrap gap-4 text-lg">
                <span className="bg-primary/20 px-4 py-2 rounded-full">
                  10 ימים
                </span>
                <span className="bg-primary/20 px-4 py-2 rounded-full">
                  רמת קושי: בינוני-קשה
                </span>
                <span className="bg-primary/20 px-4 py-2 rounded-full">
                  מ-1,500$
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
              מסלול 10 ימים מקיף הכולל את כל האטרקציות המרכזיות של אפריקה. 
              המסלול מאפשר לכם לחוות את הטוב ביותר: ספארי, גורילות, הרים, אגמים ונפלאות הטבע.
            </p>
          </div>

          {/* Itinerary */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">תוכנית המסלול</h2>
            {itinerary.map((day) => (
              <div key={day.day} className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">{day.title}</h3>
                <div className="space-y-3">
                  {day.activities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 space-x-reverse">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* What's Included */}
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">מה כלול במחיר</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-green-800">כלול</h3>
                <ul className="space-y-2 text-green-700">
                  <li>✓ לינה במלון 4 כוכבים</li>
                  <li>✓ כל הארוחות</li>
                  <li>✓ תחבורה במכונית 4x4</li>
                  <li>✓ הדרכה מקצועית</li>
                  <li>✓ כניסה לפארק הלאומי</li>
                  <li>✓ רישיון גורילות</li>
                  <li>✓ שייט באגמים</li>
                  <li>✓ ביקור בכפר מקומי</li>
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

export default Tour10Days;
