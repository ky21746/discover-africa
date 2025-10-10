import React from 'react';
import { Helmet } from 'react-helmet-async';

const AboutUganda: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>אודות אוגנדה | Discover Africa</title>
        <meta name="description" content="הכירו את אוגנדה – מדינת הפנינה של אפריקה. נופים ירוקים, עגור כתר אפור, שוביל נדיר, חיות בר, תרבות חמה וטבע שאין לו תחליף." />
        <meta name="keywords" content="אוגנדה, אפריקה, טיול, גורילות, שימפנזים, טבע, תרבות, מטוקֶה, קפה אוגנדי" />
        <meta name="author" content="Discover Africa" />
        <meta property="og:image" content="/images/uganda-hero.webp" />
        <meta property="og:title" content="אודות אוגנדה – Discover Africa" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="הכירו את אוגנדה – מדינת הפנינה של אפריקה. נופים ירוקים, עגור כתר אפור, שוביל נדיר, חיות בר, תרבות חמה וטבע שאין לו תחליף." />
        <meta itemProp="keywords" content="אוכל אוגנדי, מטוקֶה, רולקס, קפה, אוכל רחוב באוגנדה" />
      </Helmet>

      <main className="min-h-screen bg-white font-sans" dir="rtl">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/General%20Information%20Uganda%2FGrey%20Crowned%20Crane-hero.webp?alt=media&token=236abfa0-2e16-4bbb-b520-8f1e8f5a8473" 
              alt="עגור כתר אפור - הציפור הלאומית של אוגנדה"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 text-center text-white px-8 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg mb-8 animate-fade-in">
              אודות אוגנדה
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mb-6 leading-relaxed animate-fade-in">
              פנינת אפריקה
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              מדינה קטנה, נופים אינסופיים, לב אחד גדול. גלה את הקסם של אוגנדה - ממלכת הטבע והתרבות של מזרח אפריקה.
            </p>
            <a 
              href="/tours" 
              className="inline-block bg-[#C2A24B] hover:bg-[#b8963d] text-white px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 font-semibold text-lg animate-fade-in"
            >
              תכנן טיול באוגנדה
            </a>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 px-8 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl font-semibold text-[#C2A24B] tracking-wide mb-8">
                  סקירה כללית על אוגנדה
                </h2>
                <div className="space-y-4 leading-relaxed text-gray-800 text-right" style={{fontSize: '32px !important', lineHeight: '1.6 !important', fontWeight: '500 !important'}}>
                  <p>
                    אוגנדה שוכנת בלב מזרח אפריקה, בדיוק על <span className="font-semibold text-[#C2A24B]">קו המשווה</span>, ומוקפת במדינות מהיפות ביבשת – קניה במזרח, טנזניה ורואנדה בדרום, קונגו במערב ודרום סודן בצפון.
                  </p>
                  <ul className="list-disc list-inside space-y-2 leading-relaxed text-gray-800" style={{fontSize: '32px !important', lineHeight: '1.6 !important', fontWeight: '500 !important'}}>
                    <li><span className="font-semibold text-[#C2A24B]">שטח:</span> 236 אלף קמ״ר – בערך כמו בריטניה</li>
                    <li><span className="font-semibold text-[#C2A24B]">בירה:</span> קמפלה (1.9 מיליון תושבים)</li>
                    <li><span className="font-semibold text-[#C2A24B]">אוכלוסייה:</span> כמעט 46 מיליון איש</li>
                    <li><span className="font-semibold text-[#C2A24B]">מטבע:</span> שילינג אוגנדי (UGX)</li>
                    <li><span className="font-semibold text-[#C2A24B]">שפה רשמית:</span> אנגלית, לצד לוגנדה ועוד עשרות שפות מקומיות</li>
                    <li><span className="font-semibold text-[#C2A24B]">דתות:</span> נצרות (85%) ואסלאם (12%)</li>
                    <li><span className="font-semibold text-[#C2A24B]=">אזור זמן:</span> GMT+3, זהה לישראל</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/General%20Information%20Uganda%2Fuganda-and-neighboring-countries-map.jpg?alt=media&token=0ff84a91-c47c-4892-8512-9886ce8cc648" 
                  alt="מפת אוגנדה והמדינות השכנות - Discover Africa"
                  className="w-full max-w-lg h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Climate Section */}
        <section className="py-20 px-8 lg:px-24 bg-[#0e2a1d] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 order-2 lg:order-1">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/General%20Information%20Uganda%2Frwenzori-mountains-uganda-hikers.webp?alt=media&token=9bb739a4-4c22-4498-82ca-6df5e047cc45" 
                  alt="מטיילים בהרי רוונזורי באוגנדה"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 order-1 lg:order-2 space-y-8">
                <h2 className="text-4xl font-semibold text-[#C2A24B] tracking-wide mb-8">
                  אקלים ונוף באוגנדה
                </h2>
                <div className="space-y-4 text-lg md:text-xl leading-relaxed text-gray-100 text-right">
                  <p>
                    למרות מיקומה על <span className="font-semibold text-[#C2A24B]">קו המשווה</span>, אוגנדה נהנית ממזג אוויר נוח ויציב הודות לגובה הרב של רמותיה. מרבית המדינה נמצאת בין 900 ל־1,500 מטר מעל פני הים, והטמפרטורה הממוצעת עומדת על כ־<span className="font-semibold text-[#C2A24B]">25°C</span> לאורך כל השנה.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg md:text-xl leading-relaxed text-gray-100">
                    <li><span className="font-semibold text-[#C2A24B]=">עונות גשם:</span> שתי עונות קצרות – מרץ–מאי וספטמבר–נובמבר</li>
                    <li><span className="font-semibold text-[#C2A24B]=">נוף:</span> ירוק ושופע בכל עונה, כך שאין תקופה שאינה מתאימה לטיול</li>
                    <li><span className="font-semibold text-[#C2A24B]=">מים:</span> כרבע משטחה של אוגנדה מכוסה במים</li>
                    <li><span className="font-semibold text-[#C2A24B]=">נהר הנילוס:</span> מקורו באוגנדה – אחד האתרים הגאוגרפיים המשמעותיים באפריקה</li>
                    <li><span className="font-semibold text-[#C2A24B]=">אגם ויקטוריה:</span> האגם הגדול ביותר ביבשת</li>
                    <li><span className="font-semibold text-[#C2A24B]=">אגמים נוספים:</span> אלברט, אדוארד וג'ורג' – מוקדי טבע מרהיבים ומרכזי חיים לאלפי מינים</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section id="culture" className="py-20 px-8 lg:px-24 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl font-semibold text-[#C2A24B] tracking-wide mb-8">
                  אנשים ותרבות באוגנדה
                </h2>
                <div className="space-y-4 text-lg md:text-xl leading-relaxed text-gray-800 text-right">
                  <p>
                    אוגנדה היא <span className="font-semibold text-[#C2A24B]">פסיפס אנושי עשיר</span> הכולל כ־<span className="font-semibold text-[#C2A24B]">30 קבוצות אתניות</span> שונות. הגדולה שבהן, <span className="font-semibold text-[#C2A24B]">הבאגנדה</span>, מתגוררת באזור קמפלה והמרכז, אך כמעט בכל מחוז תפגשו מסורות, שפות ומנהגים שונים. התרבות המקומית מאופיינת בקשרים קהילתיים חזקים, שמחת חיים והכנסת אורחים חמה.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg md:text-xl leading-relaxed text-gray-800">
                    <li><span className="font-semibold text-[#C2A24B]=">מוזיקה וריקוד:</span> חלק בלתי נפרד מהחיים החברתיים – לכל אזור סגנון וכלי נגינה מסורתיים משלו</li>
                    <li><span className="font-semibold text-[#C2A24B]=">מטבח מקומי:</span> מגוון, מבוסס על תוצרת חקלאית טרייה ומאכלים אזוריים ייחודיים</li>
                    <li><span className="font-semibold text-[#C2A24B]=">חיי קהילה ושווקים:</span> השוק הוא מרכז החיים, מקום מפגש יומיומי וסמל לאורח החיים הפשוט והמחובר לאדמה</li>
                    <li><span className="font-semibold text-[#C2A24B]=">גישה לחיים:</span> שלווה, סבלנית ופתוחה – משקפת את רוחם של תושבי אוגנדה ואת האיזון שבין מסורת לקידמה</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/General%20Information%20Uganda%2Fbatwa-people-uganda-forest-community.webp?alt=media&token=d2fe6091-bbb4-4e0f-8247-fdaccb63f2bf" 
                  alt="אנשי באטווה - קהילת היער המסורתית באוגנדה"
                  className="w-full max-w-lg h-96 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Food Section */}
        <section className="py-20 px-8 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 order-2 lg:order-1">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/General%20Information%20Uganda%2Fuganda-traditional-cooking-matoke.webp?alt=media&token=7985733e-bc3a-446d-9283-beef4959bb89" 
                  alt="בישול מסורתי של מטוקֶה באוגנדה"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 order-1 lg:order-2 space-y-8">
                <h2 className="text-4xl font-semibold text-[#C2A24B] tracking-wide mb-8">
                  מטבח מקומי באוגנדה
                </h2>
                <div className="space-y-4 text-lg md:text-xl leading-relaxed text-gray-800 text-right">
                  <p>
                    המטבח האוגנדי הוא <span className="font-semibold text-[#C2A24B]">שילוב מרתק</span> של מסורת כפרית, תוצרת טרייה ויצירתיות קולינרית. המאכל הלאומי הוא <span className="font-semibold text-[#C2A24B]">מטוקֶה</span> – בננות ירוקות מאודות או מבושלות, המוגשות כמעט בכל ארוחה ומהוות סמל למטבח המקומי.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-lg md:text-xl leading-relaxed text-gray-800">
                    <li><span className="font-semibold text-[#C2A24B]=">מאכלים בסיסיים:</span> קאסבה, אורז ושעועית – הבסיס לתזונה היומיומית</li>
                    <li><span className="font-semibold text-[#C2A24B]=">בשרים:</span> בקר ועז, לרוב בתבשילים עשירים או על האש</li>
                    <li><span className="font-semibold text-[#C2A24B]=">פירות טרופיים:</span> אננס, מנגו ופפאיה טריים שנקטפים באותה עונה</li>
                    <li><span className="font-semibold text-[#C2A24B]=">רולקס:</span> חביתה מגולגלת בצ'פאטי – מאכל הרחוב האהוב והנפוץ ביותר באוגנדה</li>
                    <li><span className="font-semibold text-[#C2A24B]=">קפה אוגנדי:</span> מהאיכותיים בעולם, נחשב לאחד מסודות הייצוא הגדולים של המדינה, בעיקר לשווקי אירופה</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Wildlife Section */}
        <section className="py-12 px-8 lg:px-24 bg-[#2D5A3D] text-white">
          <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-semibold text-[#C2A24B] mb-6 text-center tracking-wide">
                  חיות בר וחוויות באוגנדה
                </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-12 px-4">
              <div className="relative group w-full max-w-[520px] bg-[#0e2a1d] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#C2A24B]/30 transition-all duration-700 border border-[#C2A24B]/40">
                <div className="overflow-hidden h-64 relative">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/General%20Information%20Uganda%2FGorilla%20silverback%20in%20Bwindi%20Uganda%2C%20Africa.webp?alt=media&token=577cc50c-61a2-443a-b7eb-4a69eb617de5" 
                    alt="גורילת הרים באוגנדה"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e2a1d]/60 via-[#0e2a1d]/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-[#C2A24B] tracking-wide mt-4 px-5 drop-shadow-sm group-hover:text-[#e0bf65] transition-colors duration-300">
                  גורילות הרים
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed px-5 pb-6 pt-2">
                  ביער בווינדי שוכנות גורילות ההרים הנדירות — מפגש עמן נחשב לאחת החוויות העוצמתיות והמרגשות ביותר באפריקה.
                </p>
              </div>
              
              <div className="relative group w-full max-w-[520px] bg-[#0e2a1d] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#C2A24B]/30 transition-all duration-700 border border-[#C2A24B]/40">
                <div className="overflow-hidden h-64 relative">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/General%20Information%20Uganda%2Ftree-climbing-lion-queen-elizabeth-uganda.webp?alt=media&token=4a9f535a-42d0-4f4e-89a1-684b8b9c9d3f" 
                    alt="אריות מטפסי עצים"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e2a1d]/60 via-[#0e2a1d]/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-[#C2A24B] tracking-wide mt-4 px-5 drop-shadow-sm group-hover:text-[#e0bf65] transition-colors duration-300">
                  אריות מטפסי עצים
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed px-5 pb-6 pt-2">
                  בפארק קווין אליזבת' ניתן לצפות באריות מטפסי עצים – תופעה ייחודית ונדירה באפריקה, ההופכת כל ספארי לחוויה בלתי נשכחת.
                </p>
              </div>
              
              <div className="relative group w-full max-w-[520px] bg-[#0e2a1d] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#C2A24B]/30 transition-all duration-700 border border-[#C2A24B]/40">
                <div className="overflow-hidden h-64 relative">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/General%20Information%20Uganda%2Fchimpanzee-mother-baby-kibale-uganda.webp?alt=media&token=e636b4a2-8149-47cc-b861-1cb2c9d4b800" 
                    alt="שימפנזים בקיבאלה"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e2a1d]/60 via-[#0e2a1d]/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-[#C2A24B] tracking-wide mt-4 px-5 drop-shadow-sm group-hover:text-[#e0bf65] transition-colors duration-300">
                  שימפנזים
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed px-5 pb-6 pt-2">
                  ביער קיבאלה ניתן לצפות בשימפנזים חופשיים בסביבתם הטבעית – אחת ההתנסויות הקרובות ביותר לעולם קופי האדם באפריקה.
                </p>
              </div>
            </div>
            <div className="text-center pb-8">
              <div className="bg-[#0e2a1d] rounded-2xl p-6 mx-8 border border-[#C2A24B]/30">
                <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed bg-[#0e2a1d] rounded-lg p-3 md:p-4">
                  באוגנדה עשרה פארקים לאומיים – החל ממרצ'יסון פולס בצפון ועד בווינדי בדרום־מערב. אף מדינה אחרת לא מציעה מפגש עם גורילות, שימפנזים, ואריות באותו טיול אחד.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Birds Section */}
        <section className="py-12 px-8 lg:px-24 bg-[#0e2a1d] text-white">
          <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-semibold text-[#C2A24B] mb-6 text-center tracking-wide">
                  ממלכת הציפורים של אפריקה
                </h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-12 px-4">
              <div className="relative group w-full max-w-[520px] bg-[#0e2a1d] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#C2A24B]/30 transition-all duration-700 border border-[#C2A24B]/40">
                <div className="overflow-hidden h-64 relative">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/General%20Information%20Uganda%2FGrey%20Crowned%20Crane%20Uganda.webp?alt=media&token=4edb4f71-5678-4e29-a372-2d516757374a" 
                    alt="עגור כתר אפור - הציפור הלאומית של אוגנדה"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e2a1d]/60 via-[#0e2a1d]/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-[#C2A24B] tracking-wide mt-4 px-5 drop-shadow-sm group-hover:text-[#e0bf65] transition-colors duration-300">
                  עגור כתר אפור
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed px-5 pb-6 pt-2">
                  העגור הכתרני האפור הוא הציפור הלאומית של אוגנדה וסמל המדינה, מופיע בגאווה על דגל אוגנדה עם נוצות זהב זוהרות בצורת כתר.
                </p>
              </div>
              
              <div className="relative group w-full max-w-[520px] bg-[#0e2a1d] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#C2A24B]/30 transition-all duration-700 border border-[#C2A24B]/40">
                <div className="overflow-hidden h-64 relative">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/General%20Information%20Uganda%2Fshoebill-stork-uganda-mabamba.webp?alt=media&token=1304cbfa-750f-477a-ae88-2427ab2b169c" 
                    alt="שוביל - הציפור המיוחדת של אוגנדה"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e2a1d]/60 via-[#0e2a1d]/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-[#C2A24B] tracking-wide mt-4 px-5 drop-shadow-sm group-hover:text-[#e0bf65] transition-colors duration-300">
                  שוביל
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed px-5 pb-6 pt-2">
                  אחת הציפורים המיוחדות בעולם – השוביל (Shoebill Stork). ציפור קדומה, כמעט פרהיסטורית, עם מקור ענק דמוי נעל, הנראית כאילו נולדה מעידן הדינוזאורים.
                </p>
              </div>
              
              <div className="relative group w-full max-w-[520px] bg-[#0e2a1d] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#C2A24B]/30 transition-all duration-700 border border-[#C2A24B]/40">
                <div className="overflow-hidden h-64 relative">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/General%20Information%20Uganda%2Fblue-starling-uganda-savannah-bird.webp?alt=media&token=38736ad2-4bd9-4a6c-ba28-fe3310368282" 
                    alt="ציפורים טרופיות צבעוניות באוגנדה"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e2a1d]/60 via-[#0e2a1d]/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-[#C2A24B] tracking-wide mt-4 px-5 drop-shadow-sm group-hover:text-[#e0bf65] transition-colors duration-300">
                  ציפורים טרופיות
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed px-5 pb-6 pt-2">
                  מגוון עצום של ציפורים טרופיות צבעוניות, תוכים, ציפורי שיר וציפורי מים. כל יום מביא מפגש עם מינים חדשים ומרהיבים.
                </p>
              </div>
            </div>
            
            <div className="text-center bg-[#102c1d] pb-8">
              <div className="bg-[#0e2a1d] rounded-2xl p-6 mx-8 border border-[#C2A24B]/30">
                <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">
                  אוגנדה היא גן עדן לצפרים, מהעשירים בעולם – יותר מ־1,080 מיני ציפורים, מספר עצום למדינה קטנה כל כך.
                  שילוב של יערות גשם, אגמים ונהרות יוצר מגוון שאין לו מתחרים ביבשת.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="py-24 px-8 lg:px-24 bg-gradient-to-br from-[#C2A24B] via-[#b8963d] to-[#1A3D2A] text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
            <div className="absolute top-32 right-20 w-24 h-24 bg-white rounded-full"></div>
            <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute bottom-32 right-1/3 w-20 h-20 bg-white rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-wide">
                  עובדות קצרות ומפתיעות
                </h2>
              <h3 className="text-2xl md:text-3xl font-light text-white/90 mb-4">
                על אוגנדה
              </h3>
              <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="relative group w-full max-w-[520px] bg-[#0e2a1d] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#C2A24B]/30 transition-all duration-700 border border-[#C2A24B]/40">
                <div className="overflow-hidden h-64 relative">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/General%20Information%20Uganda%2Fuganda-equator-monument-kayabwe.webp?alt=media&token=b5109053-08db-4fe8-a29b-5b0eef417e5c" 
                    alt="אנדרטת קו המשווה בקאיבווה, אוגנדה"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e2a1d]/60 via-[#0e2a1d]/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-[#C2A24B] tracking-wide mt-4 px-5 drop-shadow-sm group-hover:text-[#e0bf65] transition-colors duration-300">
                  קו המשווה
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed px-5 pb-6 pt-2">
                  קו המשווה חוצה את המדינה, אבל אין בה מדבר. אוגנדה היא אחת המדינות היחידות בעולם שחוצה את קו המשווה.
                </p>
              </div>
              
              <div className="relative group w-full max-w-[520px] bg-[#0e2a1d] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#C2A24B]/30 transition-all duration-700 border border-[#C2A24B]/40">
                <div className="overflow-hidden h-64 relative">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/General%20Information%20Uganda%2Fmurchison-falls-uganda-nile.webp?alt=media&token=c7855b98-d388-4876-875d-f0b97c37842c" 
                    alt="מפלי מרצ'יסון על הנילוס באוגנדה"
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e2a1d]/60 via-[#0e2a1d]/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-[#C2A24B] tracking-wide mt-4 px-5 drop-shadow-sm group-hover:text-[#e0bf65] transition-colors duration-300">
                  מים
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed px-5 pb-6 pt-2">
                  רבע מהמדינה מכוסה מים – אחד הנתחים הגבוהים בעולם. כאן נולד נהר הנילוס, הגדול באפריקה.
                </p>
              </div>
              
              <div className="relative group w-full max-w-[520px] bg-[#0e2a1d] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#C2A24B]/30 transition-all duration-700 border border-[#C2A24B]/40">
                <div className="overflow-hidden h-64 relative">
                  <img 
                    src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/General%20Information%20Uganda%2Fgreen-bananas-matoke-uganda.webp?alt=media&token=11edbeab-13b9-4af5-b21a-e3272f364ec0" 
                    alt="בננות ירוקות מטוקֶה - המאכל הלאומי של אוגנדה"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e2a1d]/60 via-[#0e2a1d]/20 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-[#C2A24B] tracking-wide mt-4 px-5 drop-shadow-sm group-hover:text-[#e0bf65] transition-colors duration-300">
                  בננות
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed px-5 pb-6 pt-2">
                  באוגנדה גדלים יותר מ־50 זני בננות שונים. המאכל הלאומי הוא מטוקֶה – בננות ירוקות מבושלות.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutUganda;