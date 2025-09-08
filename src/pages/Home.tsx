// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Users, Camera, Mountain, Waves } from "lucide-react";
import Card from "../components/Common/Card";

const Home: React.FC = () => {
  const featuredCategories = [
    {
      id: "1",
      name: "ספארי",
      slug: "safari",
      description: "חוויות ספארי מרהיבות עם חיות בר באפריקה",
      icon: <Camera className="w-8 h-8" />,
      image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2FAfrican%20Bush%20Elephant%20-%20Loxodonta%20africana%2C%20iconic%20member%20of%20African%20big%20five%2C%20Queen%20Elizabeth%20National%20Park.webp?alt=media&token=3b4c82c9-b383-4bbc-94c1-85438ff412b5",
    },
    {
      id: "2",
      name: "פרימטים",
      slug: "gorillas-chimps",
      description: "מפגשים קרובים עם גורילות ושימפנזים",
      icon: <Users className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg",
    },
    {
      id: "3",
      name: "מים",
      slug: "water",
      description: "פעילויות מים מרגשות ומפלים עוצרי נשימה",
      icon: <Waves className="w-8 h-8" />,
      image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2FTourists%20overlook%20the%20massive%20waterfall%20of%20Murchison%20Falls%20on%20the%20Nile%20River%20in%20Uganda.webp?alt=media&token=bc3f5511-234b-4696-85c0-446e67dbea52",
    },
    {
      id: "4",
      name: "הרים",
      slug: "mountains",
      description: "טרקים מאתגרים בהרים הוולקניים",
      icon: <Mountain className="w-8 h-8" />,
      image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FRwenzori%20Mountains%20National%20Park%2FHighland%20landscape%20near%20Weismann%60s%20peak%20in%20Rwenzori%20mountains%2C%20Uganda.%20Little%20lakes%20among%20the%20mossy%20rocks%20at%20high%20altitudes.webp?alt=media&token=f2a1df50-adf9-41e1-99cb-8eb7dfae947e",
    },
  ];

  return (
    <div className="fade-in" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white h-[30vh] md:h-[45vh] min-h-[200px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65"
          style={{
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/hero-gorilla.webp?alt=media&token=c67bec83-4363-4104-a102-757f69b351a4)",
          }}
        />
        <div className="relative container mx-auto px-4 text-center flex flex-col items-center justify-center h-full">
          <div className="slide-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sans">
              החוויה הבאה שלך באוגנדה
              <br />
              מתחילה כאן
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-sans">
              טיולי אקסטרים, טבע פראי, ושירות אישי – חוויה שלא תשכח
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 md:py-14 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 font-sans">
              הקטגוריות הפופולריות שלנו
            </h2>
            <p className="text-lg md:text-xl text-muted font-sans">
              גלו את המגוון הרחב של חוויות שאנו מציעים
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <Link key={category.id} to={
                category.slug === "water" 
                  ? "/water" 
                  : category.slug === "safari"
                  ? "/safari"
                  : category.slug === "mountains"
                  ? "/mountains"
                  : category.slug === "gorillas-chimps"
                  ? "/gorillas"
                  : `/category/${category.slug}`
              }>
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <div
                    className="card-image"
                    style={{ 
                      backgroundImage: `url(${category.image})`,
                      backgroundPosition: category.slug === 'safari' ? 'center 30%' : 
                                         category.slug === 'gorillas-chimps' ? 'center 40%' :
                                         category.slug === 'water' ? 'center 20%' :
                                         category.slug === 'mountains' ? 'center 25%' : 'center 50%',
                      height: '250px'
                    }}
                  />
                  <div className="card-content">
                    <h3 className="text-xl font-semibold mb-2 font-sans text-gray-900">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 font-sans">
                      {category.description}
                    </p>
                    <div className="card-footer">
                      <button className="btn-card" style={{ backgroundColor: '#CAA131', color: '#000000' }}>גלו עוד</button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 font-sans">
              השירותים שלנו
            </h2>
            <p className="text-lg md:text-xl text-muted font-sans">
              שירותים מקצועיים ומותאמים אישית לחוויה מושלמת
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/services">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <div
                  className="card-image"
                  style={{ 
                    backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBaraviationcard.webp?alt=media&token=760c531e-2cf9-4d40-ab23-bd816b77d9c5)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '250px'
                  }}
                />
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-2 font-sans text-gray-900">
                    שירותי תעופה
                  </h3>
                  <p className="text-gray-600 font-sans">
                    טיסות ספארי, טיסות פרטיות וטיסות נוף מעל הנופים הקסומים
                  </p>
                  <div className="card-footer">
                    <button className="btn-card" style={{ backgroundColor: '#CAA131', color: '#000000' }}>לפרטים נוספים</button>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/services">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <div
                  className="card-image"
                  style={{ 
                    backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBar%20SOS%2Fbarsos-medevac-img.jpg.webp?alt=media&token=168394a8-66ac-4311-a88d-d3420b4c0e9c)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '250px'
                  }}
                />
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-2 font-sans text-gray-900">
                    ביטחון רפואי
                  </h3>
                  <p className="text-gray-600 font-sans">
                    שירותי חילוץ רפואי 24/7 - חילוץ אווירי וקרקעי בכל רחבי אוגנדה
                  </p>
                  <div className="card-footer">
                    <button className="btn-card" style={{ backgroundColor: '#CAA131', color: '#000000' }}>לפרטים נוספים</button>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/services">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <div
                  className="card-image"
                  style={{ 
                    backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FExtreme%20adventures%2Fextremeadventures-card.webp?alt=media&token=cc084dbb-9efc-4e72-8453-d96c51d4a5d0)`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '250px'
                  }}
                />
                <div className="card-content">
                  <h3 className="text-xl font-semibold mb-2 font-sans text-gray-900">
                    פארק אקסטרים
                  </h3>
                  <p className="text-gray-600 font-sans">
                    Go-Karting, Zipline, Paintball ועוד חוויות מלאות אדרנלין בבוסיקה
                  </p>
                  <div className="card-footer">
                    <button className="btn-card" style={{ backgroundColor: '#CAA131', color: '#000000' }}>לפרטים נוספים</button>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-sans">
              למה לבחור בנו?
            </h2>
            <p className="text-xl text-muted leading-relaxed mb-8 font-sans">
              אנחנו מתמחים בבניית טיולים מותאמים אישית באוגנדה – משלב התכנון
              ועד השיבה הביתה. עם ניסיון של למעלה מ-30 שנים במדינה, אנו מכירים
              כל פינה ויכולים להציע לכם חוויות אותנטיות ובטוחות שיישארו איתכם
              לכל החיים.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="bg-[#CAA131] text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-sans">
                  מדריכים מקצועיים
                </h3>
                <p className="text-muted font-sans">
                  מדריכים מקומיים ובינלאומיים עם ניסיון עשיר
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#534B20] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-sans">
                  שירות אישי
                </h3>
                <p className="text-muted font-sans">
                  כל טיול מותאם בצורה אישית לצרכים שלכם
                </p>
              </div>

              <div className="text-center">
                <div className="bg-[#4B361C] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mountain className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-sans">
                  חוויות ייחודיות
                </h3>
                <p className="text-muted font-sans">
                  גישה למקומות נסתרים וחוויות בלעדיות
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-14 pb-8 bg-[#CAA131] text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-sans">
            מוכנים להתחיל?
          </h2>
          <p className="text-lg md:text-xl mb-6 font-sans">
            צור קשר עוד היום והתחל לתכנן את החוויה הבאה שלך
          </p>
          <Link
            to="/contact"
            className="bg-[#4B361C] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#3A2B15] transition-colors inline-flex items-center"
          >
            צור קשר עכשיו
            <ArrowLeft className="mr-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;