// src/pages/WaterSubcategories.tsx
import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Common/Card";

const WaterSubcategories: React.FC = () => {
  const subcategories = [
    {
      id: "waterfalls",
      name: "מפלים",
      description: "8 מפלים מרהיבים ברחבי אוגנדה - ממורצ'יסון העוצמתי ועד סיפי הציורי",
      image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
      count: 8,
      slug: "waterfalls"
    },
    {
      id: "lakes",
      name: "אגמים",
      description: "8 אגמים ייחודיים - מוויקטוריה הגדול ועד בוניוני הבטוח לשחייה",
      image: "https://images.pexels.com/photos/1661535/pexels-photo-1661535.jpeg",
      count: 8,
      slug: "lakes"
    },
    {
      id: "rivers",
      name: "נהרות",
      description: "2 נהרות חשובים - הנילוס הלבן ומקור הנילוס ההיסטורי",
      image: "https://images.pexels.com/photos/534188/pexels-photo-534188.jpeg",
      count: 2,
      slug: "rivers"
    }
  ];

  return (
    <div className="py-12 fade-in" dir="rtl">
      <div className="container mx-auto px-4">
        {/* כותרת */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
            אגמים, מפלים ונהרות
          </h1>
          <p className="text-xl text-muted font-sans max-w-3xl mx-auto">
            גלו את עולם המים המרהיב של אוגנדה - מפלים עוצמתיים, אגמים ציוריים ונהרות היסטוריים
          </p>
        </div>

        {/* רשת הכרטיסים */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subcategories.map((subcategory) => (
            <Link key={subcategory.id} to={`/water/${subcategory.slug}`}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div
                  className="card-image h-48"
                  style={{ backgroundImage: `url(${subcategory.image})` }}
                />
                <div className="card-content flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold font-sans">
                      {subcategory.name}
                    </h3>
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {subcategory.count} אתרים
                    </span>
                  </div>
                  <p className="text-muted mb-4 font-sans">
                    {subcategory.description}
                  </p>
                  <div className="card-footer">
                    <button className="btn-primary w-full">
                      גלו את {subcategory.name}
                    </button>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* כפתור חזרה */}
        <div className="text-center mt-12">
          <Link to="/categories" className="btn-secondary">
            ← חזרה לקטגוריות
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WaterSubcategories;
