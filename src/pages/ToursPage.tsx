import React from "react";
import { Link } from "react-router-dom";

const ToursPage: React.FC = () => {
  const tours = [
    {
      id: "5-days",
      title: "מסלול 5 ימים",
      description:
        "מסלול מאוזן של 5 ימים הכולל ספארי, ביקור בגורילות, טיולים בטבע וחוויות תרבותיות",
      image:
        "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2Ffemale%20African%20elephants%20protects%20a%20young%20calf%20Queen%20Elizabeth%20National%400.5x.webp?alt=media&token=0bf46f9f-50c2-4481-b604-83dd0c6cf2a7",
    },
    {
      id: "10-days",
      title: "מסלול 10 ימים",
      description:
        "מסלול מקיף של 10 ימים הכולל את כל האטרקציות המרכזיות: ספארי, גורילות, הרים, אגמים ונפלאות הטבע",
      image:
        "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2FMurchison%20Falls%2C%20Uganda%20%E2%80%93%20the%20Nile%E2%80%99s%20power%20at%20its%20most%20dramatic.webp?alt=media&token=e03c8b40-6aed-4662-9e09-1fd1237d04c1",
    },
  ];

  return (
    <div className="py-12 fade-in" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 font-sans">
            מסלולים מוכנים
          </h1>
          <p className="text-base md:text-xl text-muted max-w-2xl mx-auto font-sans">
            בחרו מסלול מוכן מראש ותנו לנו להוביל אתכם לחוויה מושלמת – הכל מתוכנן,
            הכל מסודר, נשאר לכם רק להגיע.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tours.map((tour) => (
            <Link
              key={tour.id}
              to={`/tours/${tour.id}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
            >
              {/* תמונה עם יחס גובה־רוחב קבוע */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 right-4 text-white">
                  <h3 className="font-bold text-xl mb-2">
                    {tour.title}
                  </h3>
                  <p className="text-sm opacity-90">
                    {tour.description.length > 60
                      ? tour.description.slice(0, 60) + "..."
                      : tour.description}
                  </p>
                </div>
              </div>

              <div className="p-4">
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 border-2 border-[#CAA131] text-[#CAA131] px-6 py-3 rounded-2xl font-bold hover:bg-[#CAA131] hover:text-white transition-all duration-300 transform hover:scale-105">
                    לפרטים נוספים
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-3">מידע חשוב</h3>
            <p className="text-gray-600">
              כל המסלולים כוללים לינה, ארוחות, תחבורה והדרכה מקצועית. ייתכנו
              שינויים בלינה או באטרקציות בהתאם לזמינות – במקרה כזה יינתן פתרון
              שווה ערך.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursPage;
