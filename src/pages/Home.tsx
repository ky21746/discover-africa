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
      image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg",
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
      image: "https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg",
    },
    {
      id: "4",
      name: "הרים",
      slug: "mountains",
      description: "טרקים מאתגרים בהרים הוולקניים",
      icon: <Mountain className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    },
  ];

  return (
    <div className="fade-in" dir="rtl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65"
          style={{
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/hero-gorilla.webp?alt=media&token=c67bec83-4363-4104-a102-757f69b351a4)",
          }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-sans slide-up">
            החוויה הבאה שלך באוגנדה
            <br />
            מתחילה כאן
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-sans slide-up">
            טיולי אקסטרים, טבע פראי, ושירות אישי – חוויה שלא תשכח
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up">
            <Link to="/plan-your-trip" className="btn-primary text-lg px-8 py-4">
              תכננו את הטיול שלכם
            </Link>
            <Link
              to="/contact"
              className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
            >
              צור קשר
              <ArrowLeft className="w-5 h-5" />
            </Link>
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
              <Link key={category.id} to={`/category/${category.slug}`}>
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                  <div className="card-content">
                    <div className="text-primary mb-3">{category.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 font-sans">
                      {category.name}
                    </h3>
                    <p className="text-muted font-sans">
                      {category.description}
                    </p>
                    <div className="card-footer">
                      <button className="btn-secondary w-full">גלו עוד</button>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Us — הקטנתי את הריווח התחתון כדי לצמצם את המרווח לפני הפוטר */}
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
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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

      {/* CTA Section (אם תרצה להשאיר) */}
      <section className="pt-14 pb-8 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 font-sans">
            מוכנים להתחיל?
          </h2>
          <p className="text-lg md:text-xl mb-6 font-sans">
            צור קשר עוד היום והתחל לתכנן את החוויה הבאה שלך
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
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