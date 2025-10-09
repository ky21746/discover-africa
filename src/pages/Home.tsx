// src/pages/Home.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Users, Camera, Mountain, Waves, MapPin, Route, Shield, Globe, Heart, Cross, Map, User, Navigation, Phone } from "lucide-react";
import { Helmet } from 'react-helmet-async';
import Card from "../components/Common/Card";

const Home: React.FC = () => {
  useEffect(() => {
    const hero = document.querySelector(".hero-section") as HTMLElement | null;
    if (!hero) return;

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    const setHeight = () => {
      if (isSafari) {
        hero.style.height = `${window.innerHeight}px`; // Safari: גובה אמיתי לפי המסך
      } else {
        hero.style.height = "100vh"; // כל היתר
      }
    };

    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  const featuredCategories = [
    {
      id: "1",
      name: "מסלולים מוכנים",
      slug: "ready-tours",
      description: "מסלולי טיול מוכנים ומתוכננים מראש",
      icon: <Route className="w-8 h-8" />,
      image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBar%20Aviation%2Fbar%20aviation%20transport%20v3.webp?alt=media&token=5997047a-e32d-4663-a8c3-b6da016addf1",
    },
    {
      id: "2",
      name: "ספארי",
      slug: "safari",
      description: "חוויות ספארי מרהיבות עם חיות בר באפריקה",
      icon: <Camera className="w-8 h-8" />,
      image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2FAfrican%20Bush%20Elephant%20-%20Loxodonta%20africana%2C%20iconic%20member%20of%20African%20big%20five%2C%20Queen%20Elizabeth%20National%20Park.webp?alt=media&token=3b4c82c9-b383-4bbc-94c1-85438ff412b5",
    },
    {
      id: "3",
      name: "פרימטים",
      slug: "gorillas-chimps",
      description: "מפגשים קרובים עם גורילות ושימפנזים",
      icon: <Users className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg",
    },
    {
      id: "4",
      name: "מים",
      slug: "water",
      description: "פעילויות מים מרגשות ומפלים עוצרי נשימה",
      icon: <Waves className="w-8 h-8" />,
      image: "https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2FTourists%20overlook%20the%20massive%20waterfall%20of%20Murchison%20Falls%20on%20the%20Nile%20River%20in%20Uganda.webp?alt=media&token=bc3f5511-234b-4696-85c0-446e67dbea52",
    },
  ];

  return (
    <div className="fade-in" dir="rtl">
      <Helmet>
        <title>Discover Africa - טיולי הרפתקה מותאמים אישית באוגנדה</title>
        <meta name="description" content="טיולים מותאמים אישית באוגנדה" />
        <meta property="og:title" content="Discover Africa - טיולי הרפתקה מותאמים אישית" />
        <meta property="og:description" content="טיולים מותאמים אישית באוגנדה" />
        <meta property="og:image" content="https://discover-africa-ky.web.app/images/discover%20africa%20logo.webp" />
        <meta property="og:url" content="https://discoverafrica.co.il/" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Hero Section */}
      <section 
        className="hero-section relative bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden"
        style={{
          height: '80vh',
        }}
      >
        {/* Mobile Hero - Full Screen */}
        <div 
          className="md:hidden flex flex-col justify-start items-center px-5 relative bg-cover bg-center bg-no-repeat"
          style={{
            height: '100vh',
            backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/hero-gorilla.webp?alt=media&token=c67bec83-4363-4104-a102-757f69b351a4)"
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
                  padding: '12px'
                }}
              >
                <div 
                  className="text-[#CAA131] mb-0 font-bold"
                  style={{ fontSize: '21px', fontWeight: '700' }}
                >
                  ניהול ישראלי מקומי
                </div>
                <div 
                  className="text-white"
                  style={{ fontSize: '17px', fontWeight: '400' }}
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
                  padding: '12px'
                }}
              >
                <div 
                  className="text-[#CAA131] mb-0 font-bold"
                  style={{ fontSize: '21px', fontWeight: '700' }}
                >
                  ניסיון של 30 שנה באוגנדה
                </div>
                <div 
                  className="text-white"
                  style={{ fontSize: '17px', fontWeight: '400' }}
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
                  padding: '12px'
                }}
              >
                <div 
                  className="text-[#CAA131] mb-0 font-bold"
                  style={{ fontSize: '21px', fontWeight: '700' }}
                >
                  מסלולים ייחודיים
                </div>
                <div 
                  className="text-white"
                  style={{ fontSize: '17px', fontWeight: '400' }}
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
                  padding: '12px'
                }}
              >
                <div 
                  className="text-[#CAA131] mb-0 font-bold"
                  style={{ fontSize: '21px', fontWeight: '700' }}
                >
                  ליווי אישי ובטיחות
                </div>
                <div 
                  className="text-white"
                  style={{ fontSize: '17px', fontWeight: '400' }}
                >
                  מערך חירום 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Story Block */}
      <section className="py-12 bg-cream">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
            כך בנינו תשתית מלאה בלב אפריקה
          </h2>
          <div className="w-20 h-1 bg-gold-dark mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            אנחנו ישראלים שחיים באוגנדה מעל 30 שנה. התחלנו מתעופה פרטית – מטוסים ומסוקים שמאפשרים ספארי מהאוויר והגעה מהירה לכל יעד. עם השנים בנינו תשתית מלאה: צוות ישראלי מקומי, רשת קשרים אמינה ויכולת להגיע למקומות שאף סוכנות אחרת לא מגיעה.
          </p>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              קטגוריות פופולריות
            </h2>
          <div className="w-16 h-1 bg-[#C6A45C] mx-auto mt-2 mb-6"></div>
          <p className="text-gray-600 text-base md:text-lg text-center mb-12">
            ממסלולי ספארי ועד אקסטרים – תבחרו את ההרפתקה שלכם
            </p>
          </div>
        
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCategories.map((category) => (
              <Link 
                key={category.id} 
                to={
                  category.slug === "water" 
                    ? "/water" 
                    : category.slug === "safari"
                    ? "/safari"
                    :                   category.slug === "ready-tours"
                    ? "/tours"
                    : category.slug === "gorillas-chimps"
                    ? "/gorillas"
                    : `/category/${category.slug}`
                }
                className="rounded-xl overflow-hidden border-2 border-[#C6A45C]/60 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="relative">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  style={{ 
                      objectPosition: category.slug === 'safari' ? 'center 30%' : 
                                       category.slug === 'gorillas-chimps' ? 'center 40%' :
                                       category.slug === 'water' ? 'center 20%' :
                                     category.slug === 'ready-tours' ? 'center 25%' : 'center 50%'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 text-right">
                    <h3 className="text-xl font-bold text-white drop-shadow-md">
                      {category.name}
                    </h3>
                    <p className="text-sm text-white/90 mt-1">
                      {category.description.length > 50 
                        ? category.description.slice(0, 50) + "." 
                        : category.description}
                    </p>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <button className="w-full border border-[#C6A45C] text-[#A0742A] font-semibold py-2 rounded-md hover:bg-[#C6A45C] hover:text-white transition-colors duration-200">
                    קרא עוד
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              השירותים שלנו
            </h2>
            <div className="w-16 h-1 bg-[#C6A45C] mx-auto mt-2 mb-6"></div>
            <p className="text-gray-600 text-base md:text-lg text-center mb-12">
              שירותים מקצועיים ומותאמים אישית לחוויה מושלמת
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
            <Link to="/services/bar-aviation" className="rounded-lg border border-[#c9a959] overflow-hidden shadow-md hover:shadow-xl transition bg-white h-full flex flex-col cursor-pointer">
              {/* תמונה */}
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBaraviationcard.webp?alt=media&token=760c531e-2cf9-4d40-ab23-bd816b77d9c5" 
                alt="שירותי תעופה"
                className="w-full h-32 md:h-56 object-cover"
                loading="lazy"
              />

              {/* טקסט על רקע לבן נקי */}
              <div className="p-2 md:p-4 text-center flex-1">
                <h3 className="text-sm md:text-xl font-bold text-gray-900">שירותי תעופה</h3>
                <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                  טיסות ספארי, טיסות פרטיות וטיסות נוף מעל הנופים הקסומים
                </p>
              </div>
              
              {/* כפתור יוקרתי */}
              <div className="px-4 pb-4">
                <button className="w-full border border-[#c9a959] text-[#c9a959] font-semibold py-2 rounded-md hover:bg-[#c9a959] hover:text-white transition-colors duration-300">
                  לפרטים נוספים
                </button>
              </div>
            </Link>

            <Link to="/services/bar-sos" className="rounded-lg border border-[#c9a959] overflow-hidden shadow-md hover:shadow-xl transition bg-white h-full flex flex-col cursor-pointer">
              {/* תמונה */}
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FBar%20SOS%2Fbarsos-medevac-img.jpg.webp?alt=media&token=168394a8-66ac-4311-a88d-d3420b4c0e9c" 
                alt="איתור וחילוץ רפואי"
                className="w-full h-32 md:h-56 object-cover"
                loading="lazy"
              />

              {/* טקסט על רקע לבן נקי */}
              <div className="p-2 md:p-4 text-center flex-1">
                <h3 className="text-sm md:text-xl font-bold text-gray-900">איתור וחילוץ רפואי</h3>
                <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                  שירותי חילוץ רפואי 24/7 - חילוץ אווירי וקרקעי בכל רחבי אוגנדה
                </p>
              </div>
              
              {/* כפתור יוקרתי */}
              <div className="px-4 pb-4">
                <button className="w-full border border-[#c9a959] text-[#c9a959] font-semibold py-2 rounded-md hover:bg-[#c9a959] hover:text-white transition-colors duration-300">
                  לפרטים נוספים
                </button>
              </div>
            </Link>

            <Link to="/services/extreme-park" className="rounded-lg border border-[#c9a959] overflow-hidden shadow-md hover:shadow-xl transition bg-white h-full flex flex-col cursor-pointer">
              {/* תמונה */}
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Services%2FExtreme%20adventures%2Fextremeadventures-card.webp?alt=media&token=cc084dbb-9efc-4e72-8453-d96c51d4a5d0" 
                alt="פארק אקסטרים"
                className="w-full h-32 md:h-56 object-cover"
                loading="lazy"
              />

              {/* טקסט על רקע לבן נקי */}
              <div className="p-2 md:p-4 text-center flex-1">
                <h3 className="text-sm md:text-xl font-bold text-gray-900">פארק אקסטרים</h3>
                <p className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2">
                  Go-Karting, Zipline, Paintball ועוד חוויות מלאות אדרנלין
                </p>
              </div>
              
              {/* כפתור יוקרתי */}
              <div className="px-4 pb-4">
                <button className="w-full border border-[#c9a959] text-[#c9a959] font-semibold py-2 rounded-md hover:bg-[#c9a959] hover:text-white transition-colors duration-300">
                  לפרטים נוספים
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">מה אומרים עלינו?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#C6A45C] to-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              אלפי מטיילים כבר בחרו בנו לחוויה בלתי נשכחת באוגנדה
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* עדות 1 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-[#C6A45C]/30">
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face" alt="עדי לוי" className="w-16 h-16 rounded-full object-cover ring-4 ring-[#C6A45C]/20 group-hover:ring-[#C6A45C]/40 transition-all duration-300" loading="lazy"/>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">עדי לוי</h4>
                  <div className="flex text-yellow-400 mt-1">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed text-lg italic">
                "מהרגע שנחתנו הרגשנו שיש מי שדואג לנו בכל שלב. הכל היה מסודר ומדויק, והמדריכים שלנו היו פשוט מדהימים!"
              </blockquote>
              <div className="mt-4 text-sm text-gray-500">
                טיול ספארי • יוני 2024
              </div>
              </div>

            {/* עדות 2 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-[#C6A45C]/30">
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face" alt="משפחת כהן" className="w-16 h-16 rounded-full object-cover ring-4 ring-[#C6A45C]/20 group-hover:ring-[#C6A45C]/40 transition-all duration-300" loading="lazy"/>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">משפחת כהן</h4>
                  <div className="flex text-yellow-400 mt-1">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed text-lg italic">
                "המסלול שבנו לנו היה מיוחד, לקחו אותנו למקומות שלא חשבנו שנראה. הילדים עפו על זה והם עדיין מדברים על זה!"
              </blockquote>
              <div className="mt-4 text-sm text-gray-500">
                טיול משפחתי • אפריל 2024
              </div>
              </div>

            {/* עדות 3 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-[#C6A45C]/30">
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                <div className="relative">
                  <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=120&h=120&fit=crop&crop=face" alt="נועה ודני" className="w-16 h-16 rounded-full object-cover ring-4 ring-[#C6A45C]/20 group-hover:ring-[#C6A45C]/40 transition-all duration-300" loading="lazy"/>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">נועה ודני</h4>
                  <div className="flex text-yellow-400 mt-1">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed text-lg italic">
                "השירות בעברית נתן לנו תחושת ביטחון לאורך כל הדרך. תמיד היה מישהו לענות לנו, גם באמצע הלילה!"
              </blockquote>
              <div className="mt-4 text-sm text-gray-500">
                טיול זוגי • ספטמבר 2024
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-14 pb-8 bg-gold text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-3 font-sans">
            מוכנים להתחיל?
          </h2>
          <p className="text-lg md:text-xl mb-6 font-sans">
            צור קשר עוד היום והתחל לתכנן את החוויה הבאה שלך
          </p>
          <Link
            to="/contact"
            className="bg-brown text-white px-8 py-4 rounded-lg font-semibold hover:bg-brown-dark transition-colors inline-flex items-center"
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