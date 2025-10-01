// src/pages/services/ExtremePark.tsx
import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Car, Users, Calendar, Shield, Clock, ArrowLeft, Zap, Star, Trophy, Heart } from "lucide-react";

const ExtremePark: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50" dir="rtl">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Extreme%20Adventures%2FBusika%20Hero.mp4?alt=media&token=3ce05a68-f548-43bf-85e5-40a03afccbc2" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <img 
            src="https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg" 
            alt="Extreme Adventure Park Hero" 
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 z-20 flex items-end justify-center pb-32">
          <div className="text-center text-white px-4">
            <div className="flex justify-center mb-8">
              <img 
                src="/images/extreme-adventure-park-logo.webp" 
                alt="Extreme Adventure Park Logo" 
                className="h-16 w-auto drop-shadow-lg"
              />
            </div>
            <h1 className="mb-6 md:mb-8 text-2xl md:text-4xl font-bold font-sans drop-shadow-lg">
              Extreme Adventure Park
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-lg">
              פארק האקסטרים הגדול ביותר באוגנדה - חוויות מלאות אדרנלין לצד נוף ירוק
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-30">

        {/* תיאור כללי */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-lg md:text-2xl font-bold text-[#4B361C] mb-4 md:mb-6 border-b-2 border-[#CAA131] w-fit">
              תיאור כללי
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* תיאור - 2/3 */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none text-[#4B361C] leading-relaxed">
                  <p className="mb-4">
                    במרחק קצר משדה התעופה הבינלאומי של אנטבה וממרכז קמפלה מחכה לכם Busika Extreme Adventure Park – מתחם ייחודי שמשלב בין נוחות של לינה מסודרת לבין יום מלא באנרגיה, אדרנלין והרפתקאות לכל המשפחה.
                  </p>
                  <p className="mb-4">
                    בפארק תמצאו מגוון רחב של פעילויות אקסטרים שמתאימות במיוחד לקהל הישראלי:
                  </p>
                  <ul className="mb-4 list-disc list-inside space-y-2">
                    <li>רייזרים וקוואדים במסלולי שטח פראיים</li>
                    <li>אופנועי אנדורו לחובבי השטח המאתגרים</li>
                    <li>גו־קארטינג במסלול מקצועי</li>
                    <li>פיינטבול, חץ וקשת וירי למטרה לאקשן קבוצתי</li>
                    <li>זיפליין, קירות טיפוס ומסלולי חבלים לגיבוש והרפתקה לכל גיל</li>
                    <li>בריכת שחייה להתרעננות אחרי יום עמוס חוויות</li>
                  </ul>
                  <p className="mb-4">
                    בנוסף, הפארק מציע לינה ברמה טובה עם מגוון אפשרויות: חדרים זוגיים, בקתות משפחתיות, קמפינג באוויר הפתוח ואפילו קרוואנים. כל זאת לצד מסעדה ובר שמאפשרים לסיים את היום בארוחה משותפת באווירה אפריקאית אותנטית.
                  </p>
                  <p className="mb-4">
                    הפארק מהווה בחירה אידיאלית ליום הראשון אחרי הנחיתה, כהכנה להרפתקה הגדולה, או כתחנה אחרונה מלאה אנרגיות לפני החזרה לארץ. זהו מקום שבו אפשר גם לנוח וגם לחוות את אוגנדה בצורה בלתי נשכחת.
                  </p>
                </div>
              </div>
              
              {/* מפה - 1/3 */}
              <div className="lg:col-span-1">
                <div className="rounded-xl overflow-hidden h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5!2d32.5!3d0.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTgnMDAuMCJOIDMywrAzMCcwMC4wIkU!5e0!3m2!1sen!2sug!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Busika Adventure Park Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* לינה */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-lg md:text-2xl font-bold text-[#4B361C] mb-4 md:mb-6 border-b-2 border-[#CAA131] w-fit">
              לינה ב-Busika Extreme Adventure Park
            </h2>
            <div className="prose prose-lg max-w-none text-[#4B361C] leading-relaxed mb-8">
              <p className="mb-4">
                הפארק מציע למטיילים מגוון אפשרויות לינה ברמה טובה ובאווירה פסטורלית, המאפשרות לסיים יום מלא חוויות בנוחות ובשלווה:
              </p>
              <ul className="mb-4 list-disc list-inside space-y-2">
                <li>בקתות משפחתיות – מרווחות ומאובזרות, מתאימות למשפחות או קבוצות קטנות.</li>
                <li>חדרים זוגיים / טווין – פתרון נוח לזוגות או חברים המטיילים יחד.</li>
                <li>קרוואנים וחדרי אירוח יחיד – לנוסעים בודדים או למי שמעדיף פרטיות מלאה.</li>
                <li>קמפינג בטבע – לאוהבי שטח שמחפשים חוויה קרובה לאדמה עם לינה באוהלים באזור ייעודי ובטוח.</li>
              </ul>
              <p className="mb-4">
                בנוסף ללינה, האורחים נהנים ממתקנים משלימים: מסעדה ובר באתר, ואחת האטרקציות המבוקשות – בריכת שחייה רחבה ומטופחת, מושלמת להתרעננות אחרי יום אקסטרים בשטח או פשוט לרוגע בשעות הפנאי.
              </p>
              <p className="mb-4">
                האווירה משלבת בין נוחות מערבית לבין קסם אפריקאי אמיתי – חוויה מושלמת להתחלה או לסיום הטיול באוגנדה.
              </p>
            </div>
            
            {/* גלריית תמונות לינה */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Extreme%20Adventures%2FAccommodations%2Ffamily-cottages-room-img-4.jpg?alt=media&token=182262a8-ba5c-452b-840d-b4decc445487"
                  alt="בקתות משפחתיות"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 right-4 text-white">
                  <h3 className="text-lg font-bold">בקתות משפחתיות</h3>
                  <p className="text-sm opacity-90">מרווחות ומאובזרות</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Extreme%20Adventures%2FAccommodations%2Ffamily-cottages-room-img-10.jpg?alt=media&token=0c25b7a6-434a-4940-a69b-e3da8cea4bac"
                  alt="חדרים זוגיים"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 right-4 text-white">
                  <h3 className="text-lg font-bold">חדרים זוגיים</h3>
                  <p className="text-sm opacity-90">פתרון נוח לזוגות</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Extreme%20Adventures%2FAccommodations%2Fdouble-occupancy-room-img-0594.jpg?alt=media&token=bd700c35-3ebc-4651-8136-8e20ac12a307"
                  alt="קרוואנים"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 right-4 text-white">
                  <h3 className="text-lg font-bold">קרוואנים</h3>
                  <p className="text-sm opacity-90">פרטיות מלאה</p>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Extreme%20Adventures%2FAccommodations%2FIMG_1374.jpg?alt=media&token=1e0c78b5-778b-4607-8b4b-7a9bcaeee1d4"
                  alt="קמפינג בטבע"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 right-4 text-white">
                  <h3 className="text-lg font-bold">קמפינג בטבע</h3>
                  <p className="text-sm opacity-90">חוויה קרובה לאדמה</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* פעילויות מרכזיות */}
        <div className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-[#4B361C] mb-3 md:mb-4">
                פעילויות מרכזיות
              </h2>
              <p className="text-xl text-[#4B361C]/80 max-w-3xl mx-auto">
                מגוון רחב של חוויות אקסטרים לכל הגילאים והרמות
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Go-Karting */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Extreme%20Adventures%2Fgo-karting-Extreme%20Adventures%202.webp?alt=media&token=765560a2-4663-47e4-b581-ea7c5818762b"
                  alt="Go-Karting"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-bold text-[#4B361C]">Go-Karting</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-white">
                  <p className="text-sm opacity-90 mb-2">מסלולי מירוצים מקצועיים</p>
                  <div className="flex items-center gap-2 text-xs">
                    <Star className="w-3 h-3 fill-yellow-400" />
                    <span>גיל 8+ • 15-30 דקות</span>
                  </div>
                </div>
              </div>

              {/* Quad Bikes */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Extreme%20Adventures%2Fquad-bikes-Extreme%20Adventures%201.webp?alt=media&token=ded1a502-f8ff-4992-90e5-79fdc6bdf4bb"
                  alt="Quad Bikes"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-bold text-[#4B361C]">Quad Bikes</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-white">
                  <p className="text-sm opacity-90 mb-2">רכיבה אתגרית בשטח</p>
                  <div className="flex items-center gap-2 text-xs">
                    <Shield className="w-3 h-3" />
                    <span>גיל 16+ • הדרכה מקצועית</span>
                  </div>
                </div>
              </div>

              {/* Zipline */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Extreme%20Adventures%2Findependent-zipline-Extreme%20Adventures%201.webp?alt=media&token=0c06fb0f-bee6-42fa-8505-6cadf50aa3b3"
                  alt="Zipline"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-bold text-[#4B361C]">Zipline</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-white">
                  <p className="text-sm opacity-90 mb-2">טיסה מעל הנוף</p>
                  <div className="flex items-center gap-2 text-xs">
                    <Heart className="w-3 h-3 fill-red-400" />
                    <span>גיל 12+ • 200 מטר גובה</span>
                  </div>
                </div>
              </div>

              {/* Paintball */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Extreme%20Adventures%2FPaint%20Ball%20Extreme%20Adventures%201.webp?alt=media&token=edd0efb0-2e70-46b9-91e8-18bc6ef7a78b"
                  alt="Paintball"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-bold text-[#4B361C]">Paintball</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-white">
                  <p className="text-sm opacity-90 mb-2">קרב צבעוני קבוצתי</p>
                  <div className="flex items-center gap-2 text-xs">
                    <Trophy className="w-3 h-3" />
                    <span>גיל 10+ • קבוצות 6-20</span>
                  </div>
                </div>
              </div>

              {/* Archery */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Extreme%20Adventures%2Farchery-Extreme%20Adventures.webp?alt=media&token=8c7f2530-e31d-409e-ad56-affd5812bb50"
                  alt="Archery"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-bold text-[#4B361C]">Archery</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-white">
                  <p className="text-sm opacity-90 mb-2">קליעה למטרה מקצועית</p>
                  <div className="flex items-center gap-2 text-xs">
                    <Star className="w-3 h-3 fill-yellow-400" />
                    <span>גיל 8+ • הדרכה אישית</span>
                  </div>
                </div>
              </div>

              {/* Skydiving */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Extreme%20Adventures%2Fskydiving-Extreme%20Adventures%201.webp?alt=media&token=df8ff4de-3709-40c0-9676-0e2ce3eb9db4"
                  alt="Skydiving"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-bold text-[#4B361C]">Skydiving</span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-white">
                  <p className="text-sm opacity-90 mb-2">צניחה חופשית</p>
                  <div className="flex items-center gap-2 text-xs">
                    <Heart className="w-3 h-3 fill-red-400" />
                    <span>גיל 18+ • לפי זמינות</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* כרטיס WhatsApp */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-center text-white shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">מוכנים להזמין?</h3>
              <p className="text-lg mb-6 opacity-90">
                צרו קשר עכשיו ותתחילו לתכנן את החוויה האקסטרים שלכם ב-Busika Extreme Adventure Park
              </p>
              <a 
                href="https://wa.me/256700000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                צרו קשר ב-WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* כפתור חזרה */}
        <div className="text-center mt-8 mb-8">
          <Link to="/" className="btn-secondary">
            ← חזרה לעמוד הבית
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExtremePark;
