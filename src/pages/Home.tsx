// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Users, Camera, Mountain, Waves, MapPin, Route, Shield, Globe, Heart, Cross } from "lucide-react";
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
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white h-screen md:h-[45vh] min-h-screen md:min-h-[200px] overflow-hidden md:block">
        {/* Mobile Hero - Full Screen */}
        <div 
          className="md:hidden flex flex-col justify-start items-center px-5 relative"
          style={{
            height: '100vh',
            minHeight: '100vh',
            maxHeight: '100vh',
            backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/hero-gorilla.webp?alt=media&token=c67bec83-4363-4104-a102-757f69b351a4)",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(75, 54, 28, 0.2) 0%, rgba(75, 54, 28, 0.3) 100%)"
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center" style={{ paddingTop: '60px' }}>
            
            {/* Title */}
            <h1 
              className="mb-3"
              style={{
                fontSize: '36px',
                fontWeight: '700',
                lineHeight: '1.2',
                color: '#FFFFFF',
                textShadow: '2px 4px 12px rgba(75, 54, 28, 0.9)',
                maxWidth: '90%',
                margin: '0 0 12px 0'
              }}
            >
              טיולים מותאמים אישית באוגנדה
            </h1>
            
            {/* Subtitle */}
            <p 
              className="mb-4"
              style={{
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '1.4',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '2px 3px 8px rgba(75, 54, 28, 0.8)',
                maxWidth: '85%',
                margin: '0 0 16px 0'
              }}
            >
              ניסיון מקומי, מסלולים ייחודיים וליווי 24/7
            </p>
            
            {/* CTA Button */}
            <Link
              to="/plan-your-trip"
              className="rounded-lg font-semibold transition-all duration-200 active:scale-97 mb-6"
              style={{
                backgroundColor: '#CAA131',
                color: '#4B361C',
                fontSize: '18px',
                fontWeight: '600',
                padding: '14px 0',
                width: '85%',
                maxWidth: '300px',
                borderRadius: '10px',
                boxShadow: '0 8px 24px rgba(202, 161, 49, 0.5)',
                margin: '0 0 20px 0'
              }}
            >
              תכנן לי טיול עכשיו
            </Link>
            
            {/* Bullets on Hero */}
            <div style={{ maxWidth: '500px', margin: '0 0 0 auto', marginTop: '10px' }}>
              <div className="mb-2 text-right">
                <div 
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    padding: '10px 22px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <Globe size={20} color="#CAA131" />
                  <div>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: '#CAA131', display: 'block', marginBottom: '-2px' }}>
                      ניהול ישראלי מקומי
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: '400', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.4' }}>
                      שירות בעברית
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mb-2 text-right">
                <div 
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    padding: '10px 22px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <Users size={20} color="#CAA131" />
                  <div>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: '#CAA131', display: 'block', marginBottom: '-2px' }}>
                      ניסיון של 30 שנה באוגנדה
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: '400', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.4' }}>
                      עם שותפים מקומיים
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mb-2 text-right">
                <div 
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    padding: '10px 22px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <Route size={20} color="#CAA131" />
                  <div>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: '#CAA131', display: 'block', marginBottom: '-2px' }}>
                      מסלולים ייחודיים
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: '400', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.4' }}>
                      מקומות שאחרים לא מגיעים
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mb-2 text-right">
                <div 
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    padding: '10px 22px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <Cross size={20} color="#CAA131" />
                  <div>
                    <span style={{ fontSize: '16px', fontWeight: '600', color: '#CAA131', display: 'block', marginBottom: '-2px' }}>
                      ליווי אישי ובטיחות
                    </span>
                    <span style={{ fontSize: '16px', fontWeight: '400', color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.4' }}>
                      מערך חירום 24/7
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop Hero */}
        <div className="hidden md:block">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-70"
            style={{
              backgroundImage:
                "url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/hero-gorilla.webp?alt=media&token=c67bec83-4363-4104-a102-757f69b351a4)",
            }}
          />
          
          {/* Dark Overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(75, 54, 28, 0.2) 0%, rgba(75, 54, 28, 0.45) 100%)"
            }}
          />
          
          {/* Content positioned at center bottom */}
          <div className="absolute bottom-8 md:bottom-12 left-4 right-4 text-center text-white">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{
                fontSize: '56px',
                fontWeight: '700',
                color: '#FFFFFF',
                textShadow: '2px 2px 4px rgba(75, 54, 28, 0.8)'
              }}
            >
              טיולים מותאמים אישית באוגנדה
            </h1>
            
            <p 
              className="text-lg md:text-xl font-light mb-8 max-w-[700px] mx-auto"
              style={{
                fontSize: '20px',
                color: 'rgba(255, 255, 255, 0.95)',
                textShadow: '1px 1px 2px rgba(75, 54, 28, 0.6)'
              }}
            >
              ניסיון שטח מקומי, מסלולים ייחודיים וליווי אישי 24/7
            </p>
            
            <Link
              to="/plan-your-trip"
              className="inline-block mb-12 rounded-lg font-semibold transition-colors duration-200"
              style={{
                backgroundColor: '#CAA131',
                color: '#4B361C',
                fontSize: '18px',
                fontWeight: '600',
                padding: '18px 40px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(202, 161, 49, 0.3)'
              }}
            >
              תכנן לי טיול עכשיו
            </Link>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
              <div 
                className="text-right rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(83, 75, 32, 0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(202, 161, 49, 0.3)',
                  borderRadius: '12px',
                  padding: '28px'
                }}
              >
                <div 
                  className="text-[#CAA131] mb-2 font-bold"
                  style={{ fontSize: '21px', fontWeight: '700' }}
                >
                  ניהול ישראלי מקומי
                </div>
                <div 
                  className="text-white"
                  style={{ fontSize: '15px', fontWeight: '400' }}
                >
                  שירות בעברית
                </div>
              </div>
              
              <div 
                className="text-right rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(83, 75, 32, 0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(202, 161, 49, 0.3)',
                  borderRadius: '12px',
                  padding: '28px'
                }}
              >
                <div 
                  className="text-[#CAA131] mb-2 font-bold"
                  style={{ fontSize: '21px', fontWeight: '700' }}
                >
                  ניסיון של 30 שנה באוגנדה
                </div>
                <div 
                  className="text-white"
                  style={{ fontSize: '15px', fontWeight: '400' }}
                >
                  עם שותפים מקומיים
                </div>
              </div>
              
              <div 
                className="text-right rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(83, 75, 32, 0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(202, 161, 49, 0.3)',
                  borderRadius: '12px',
                  padding: '28px'
                }}
              >
                <div 
                  className="text-[#CAA131] mb-2 font-bold"
                  style={{ fontSize: '21px', fontWeight: '700' }}
                >
                  מסלולים ייחודיים
                </div>
                <div 
                  className="text-white"
                  style={{ fontSize: '15px', fontWeight: '400' }}
                >
                  מקומות שאחרים לא מגיעים
                </div>
              </div>
              
              <div 
                className="text-right rounded-xl transition-all duration-300 hover:transform hover:-translate-y-1"
                style={{
                  backgroundColor: 'rgba(83, 75, 32, 0.3)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(202, 161, 49, 0.3)',
                  borderRadius: '12px',
                  padding: '28px'
                }}
              >
                <div 
                  className="text-[#CAA131] mb-2 font-bold"
                  style={{ fontSize: '21px', fontWeight: '700' }}
                >
                  ליווי אישי ובטיחות
                </div>
                <div 
                  className="text-white"
                  style={{ fontSize: '15px', fontWeight: '400' }}
                >
                  מערך חירום 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Featured Categories */}
      <section className="py-12 md:py-14 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 font-sans">
              קטגוריות פופולריות
            </h2>
            <p className="text-lg md:text-xl text-muted font-sans">
              גלו את המגוון הרחב של חוויות שאנו מציעים
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCategories.map((category) => (
              <Link 
                key={category.id} 
                to={
                  category.slug === "water" 
                    ? "/water" 
                    : category.slug === "safari"
                    ? "/safari"
                    : category.slug === "mountains"
                    ? "/mountains"
                    : category.slug === "gorillas-chimps"
                    ? "/gorillas"
                    : `/category/${category.slug}`
                }
                className="category-card transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                <div
                  className="card-image"
                  style={{ 
                    backgroundImage: `url(${category.image})`,
                    backgroundPosition: category.slug === 'safari' ? 'center 30%' : 
                                       category.slug === 'gorillas-chimps' ? 'center 40%' :
                                       category.slug === 'water' ? 'center 20%' :
                                       category.slug === 'mountains' ? 'center 25%' : 'center 50%'
                  }}
                >
                  <div className="image-overlay">
                    <h3 className="font-sans">
                      {category.name}
                    </h3>
                    
                    <p className="font-sans">
                      {category.description.length > 50 
                        ? category.description.slice(0, 50) + "." 
                        : category.description}
                    </p>
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 font-sans">
              השירותים שלנו
            </h2>
            <p className="text-lg md:text-xl text-muted font-sans">
              שירותים מקצועיים ומותאמים אישית לחוויה מושלמת
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/services/bar-aviation" className="category-card transition-all duration-300 hover:shadow-lg cursor-pointer">
              <div
                className="card-image"
                style={{ 
                  backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBaraviationcard.webp?alt=media&token=760c531e-2cf9-4d40-ab23-bd816b77d9c5)`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              >
                <div className="image-overlay">
                  <h3 className="font-sans">
                    שירותי תעופה
                  </h3>
                  
                  <p className="font-sans">
                    טיסות ספארי, טיסות פרטיות וטיסות נוף מעל הנופים הקסומים.
                  </p>
                </div>
              </div>
              
              <div className="card-content">
                <div className="btn-discover">
                  לפרטים נוספים
                </div>
              </div>
            </Link>

            <Link to="/services/bar-sos" className="category-card transition-all duration-300 hover:shadow-lg cursor-pointer">
              <div
                className="card-image"
                style={{ 
                  backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBar%20SOS%2Fbarsos-medevac-img.jpg.webp?alt=media&token=168394a8-66ac-4311-a88d-d3420b4c0e9c)`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              >
                <div className="image-overlay">
                  <h3 className="font-sans">
                    איתור וחילוץ רפואי
                  </h3>
                  
                  <p className="font-sans">
                    שירותי חילוץ רפואי 24/7 - חילוץ אווירי וקרקעי בכל רחבי אוגנדה.
                  </p>
                </div>
              </div>
              
              <div className="card-content">
                <div className="btn-discover">
                  לפרטים נוספים
                </div>
              </div>
            </Link>

            <Link to="/services/extreme-park" className="category-card transition-all duration-300 hover:shadow-lg cursor-pointer">
              <div
                className="card-image"
                style={{ 
                  backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FExtreme%20adventures%2Fextremeadventures-card.webp?alt=media&token=cc084dbb-9efc-4e72-8453-d96c51d4a5d0)`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover'
                }}
              >
                <div className="image-overlay">
                  <h3 className="font-sans">
                    פארק אקסטרים
                  </h3>
                  
                  <p className="font-sans">
                    Go-Karting, Zipline, Paintball ועוד חוויות מלאות אדרנלין בבוסיקה.
                  </p>
                </div>
              </div>
              
              <div className="card-content">
                <div className="btn-discover">
                  לפרטים נוספים
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 font-sans">
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
          <h2 className="text-xl md:text-3xl font-bold mb-3 font-sans">
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