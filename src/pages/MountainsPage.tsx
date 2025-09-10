import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/Common/SearchBar";
import { mountains } from "../content/categories/mountains";

const MountainsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // חיפוש
  const filteredMountains = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return mountains.filter((item) => {
      const name = item.name?.toLowerCase() ?? "";
      const desc = item.description?.toLowerCase() ?? "";
      const subtitle = item.subtitle?.toLowerCase() ?? "";

      return q === "" || name.includes(q) || desc.includes(q) || subtitle.includes(q);
    });
  }, [searchQuery]);

  // הדגשת טקסט בחיפוש
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = String(text).split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={index} className="search-highlight">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="fade-in" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white h-[40vh] min-h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FRwenzori%20Mountains%20National%20Park%2FHighland%20landscape%20near%20Weismann%60s%20peak%20in%20Rwenzori%20mountains%2C%20Uganda.%20Little%20lakes%20among%20the%20mossy%20rocks%20at%20high%20altitudes.webp?alt=media&token=f1df50-adf9-41e1-99cb-8eb7dfae947e)"
          }}
        />
        
        {/* Transparent bar at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-black/40 border-t-[1.5px] border-[#CAA131]/80">
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center space-y-4 text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold drop-shadow-md">
              הרים וטרקים באוגנדה
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
              גלו את ההרים המרהיבים - מהר אלגון ועד הרי הרוונזורי המושלגים
            </p>
            
            {/* Single CTA Button */}
            <button className="bg-transparent border-2 border-[#CAA131] text-[#CAA131] px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 hover:bg-[#CAA131] hover:text-black">
              צפה בכל הטרקים
            </button>
          </div>
        </div>
      </section>

      <div className="py-8">
        <div className="container mx-auto px-4">
          {/* בלוק חשוב לדעת */}
          <div className="mb-12">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-[#CAA131]/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-xl font-bold text-[#4B361C] mb-4 border-b border-[#CAA131] pb-2 w-fit text-right">
                חשוב לדעת
              </h2>
              <div className="space-y-3 text-right">
                <ul className="text-sm text-[#4B361C] space-y-2 text-right list-none">
                  <li className="relative pr-4 before:content-[''] before:absolute before:right-0 before:top-2 before:w-2 before:h-2 before:bg-[#CAA131] before:rounded-full">רמת קושי: טרקים מאתגרים עד <span className="text-[#CAA131] font-semibold">7 ימים</span> — כושר גופני נדרש</li>
                  <li className="relative pr-4 before:content-[''] before:absolute before:right-0 before:top-2 before:w-2 before:h-2 before:bg-[#CAA131] before:rounded-full">ציוד חובה: נעלי טרקים, ביגוד חם, ציוד מחנאות</li>
                  <li className="relative pr-4 before:content-[''] before:absolute before:right-0 before:top-2 before:w-2 before:h-2 before:bg-[#CAA131] before:rounded-full">עונה מומלצת: יוני-אוגוסט ודצמבר-פברואר — מזג אוויר יציב</li>
                  <li className="relative pr-4 before:content-[''] before:absolute before:right-0 before:top-2 before:w-2 before:h-2 before:bg-[#CAA131] before:rounded-full">הדרכה: חובה מדריך מוסמך לכל הטרקים</li>
                </ul>
              </div>
            </div>
          </div>

        {/* רשת הכרטיסים */}
        {filteredMountains.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredMountains.map((item) => (
              <Link
                key={item.id}
                to={`/attraction/${item.slug}`}
                className="category-card transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div
                  className="card-image"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="image-overlay">
                    <h3 className="font-sans">
                      {highlightText(item.name || "", searchQuery)}
                    </h3>
                    
                    {item.description && (
                      <p className="font-sans">
                        {highlightText(
                          item.description.length > 50 
                            ? item.description.slice(0, 50) + "." 
                            : item.description, 
                          searchQuery
                        )}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="card-content">
                  <div className="btn-discover">
                    קרא עוד
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted mb-4">
              לא נמצאו תוצאות, נסו מילה אחרת
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="btn-secondary"
            >
              נקה חיפוש
            </button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default MountainsPage;