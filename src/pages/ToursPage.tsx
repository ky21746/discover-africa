import React from "react";
import { Link } from "react-router-dom";

const ToursPage: React.FC = () => {
  const tours = [
    {
      id: "1-day",
      title: "מסלול יום אחד",
      description: "חוויה אינטנסיבית של יום אחד באפריקה - ספארי קצר, ביקור בכפר מקומי וטעימה מהתרבות המקומית"
    },
    {
      id: "5-days",
      title: "מסלול 5 ימים",
      description: "מסלול מאוזן של 5 ימים הכולל ספארי, ביקור בגורילות, טיולים בטבע וחוויות תרבותיות"
    },
    {
      id: "10-days",
      title: "מסלול 10 ימים",
      description: "מסלול מקיף של 10 ימים הכולל את כל האטרקציות המרכזיות: ספארי, גורילות, הרים, אגמים ונפלאות הטבע"
    },
    {
      id: "11-days",
      title: "מסלול 11 ימים",
      description: "המסלול המלא והמקיף ביותר - 11 ימים של חוויות בלתי נשכחות באפריקה עם כל האטרקציות והשירותים"
    }
  ];

  return (
    <div className="py-12 fade-in" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
            מסלולים מוכנים
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto font-sans">
            בחרו מסלול מוכן מראש ותנו לנו להוביל אתכם לחוויה מושלמת – הכל מתוכנן, הכל מסודר, נשאר לכם רק להגיע.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tours.map((tour) => (
            <Link
              key={tour.id}
              to={`/tours/${tour.id}`}
              className="category-card transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div
                className="card-image"
                style={{ 
                  backgroundImage: `url(https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg)`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="image-overlay">
                  <h3 className="font-sans">
                    {tour.title}
                  </h3>
                  
                  <p className="font-sans">
                    {tour.description.length > 50 
                      ? tour.description.slice(0, 50) + "..." 
                      : tour.description}
                  </p>
                </div>
              </div>
              
              <div className="card-content">
                <div className="btn-discover">
                  לפרטים
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
              כל המסלולים כוללים לינה, ארוחות, תחבורה והדרכה מקצועית. 
              ייתכנו שינויים בלינה או באטרקציות בהתאם לזמינות – במקרה כזה יינתן פתרון שווה ערך.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToursPage;
