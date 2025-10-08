import React from "react";
import { Helmet } from "react-helmet-async";

const BwindiBlogPost: React.FC = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>מסע אל לב הבלתי חדיר: המדריך המקיף לפארק בווינדי | Discover Africa</title>
        <meta 
          name="description" 
          content="המדריך המקיף לטיול גורילות בפארק הלאומי בווינדי, אוגנדה: עלויות, עונות, דרכי הגעה, טיפים חשובים ושילוב במסלול. כל מה שצריך לדעת לחוויה בלתי נשכחת!"
        />
        <meta name="keywords" content="בווינדי, גורילות הרים, אוגנדה, טיול גורילות, פארק לאומי, ספארי אפריקה" />
      </Helmet>

      {/* Main Container */}
      <article className="min-h-screen bg-white" dir="rtl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          
          
          {/* Header Section */}
          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#534B20] leading-tight mb-6 border-b-4 border-[#CAA131] pb-4">
              המדריך המקיף לטיול גורילות בפארק הלאומי בווינדי, אוגנדה
            </h1>
          </header>

          {/* Opening Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#534B20] mb-6 pb-3 border-b-2 border-[#CAA131]">
              המסע אל גורילות ההרים
            </h2>
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              <p className="mb-6">
                דמיינו את עצמכם עומדים בשקט מוחלט, עמוק בתוך יער גשם עתיק, כשרק קולות הציפורים המרוחקים פוצעים את הדממה. ואז, ממש מולכם, מגיח מתוך הצמחייה הכהה <span className="font-semibold text-[#534B20]">"ענק עדין"</span> – גורילת הרים כסופת גב, גדולה פי שלושה מאדם ממוצע, המביטה בכם בשלווה מתוך עיניים חומות ומבינות. הרגע הזה, שמכונה על ידי רבים "פעם בחיים", הוא חוויה עוצרת נשימה וכמעט מיסטית שמשנה את כל מה שחשבתם על הטבע ועל מקומנו בו.
              </p>
              <p className="mb-6">
                הפארק הלאומי <span className="font-semibold text-[#534B20]">בווינדי הבלתי חדיר</span> (Bwindi Impenetrable National Park) באוגנדה הוא אחד המקומות היחידים בעולם שבהם ניתן לחוות מפגש כזה. זוהי ללא ספק גולת הכותרת של אוגנדה, "פנינת אפריקה", וחוויה שתלווה אתכם לכל החיים.
              </p>
            </div>

            {/* Hikers Image */}
            <div className="my-8">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FMgahinga%20Gorillas%2FHikers%20on%20a%20gorilla%20trekking%20trail.webp?alt=media&token=6e509194-1bde-4afa-b851-66a367be78f2"
                alt="מטיילים בשביל טרק גורילות ביער בווינדי"
                className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <p className="text-center text-sm text-gray-600 mt-2 italic">
                מטיילים בשביל טרק גורילות ביער בווינדי הבלתי חדיר
              </p>
            </div>
          </section>

          <hr className="my-12 border-t-2 border-gray-200" />

          {/* History Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#534B20] mb-6 pb-3 border-b-2 border-[#CAA131]">
              היסטוריה ורקע: אי של מגוון ביולוגי עתיק
            </h2>
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              <p className="mb-6">
                פארק בווינדי משתרע על שטח של כ-<span className="font-semibold text-[#534B20]">331 קמ"ר</span> בדרום-מערב אוגנדה, בצומת מרתק שבין יערות השפלה וההרים. זהו אחד היערות העתיקים והמגוונים ביותר ביולוגית באפריקה, שהוכרז לראשונה כשמורת יער כבר בשנת <span className="font-semibold">1932</span>. ב-<span className="font-semibold">1991</span> הוכרז האזור כפארק לאומי כדי להבטיח את שלמותו האקולוגית, וב-<span className="font-semibold">1994</span> הוא נרשם כאתר <span className="font-semibold text-[#534B20]">מורשת עולמית של אונסק"ו</span> בזכות עושרו הבלתי רגיל במינים בסכנת הכחדה.
              </p>
              <p className="mb-6">
                השם "בווינדי" נגזר מביטוי מקומי בשפת הרוקיגה שמשמעותו <span className="font-semibold">"המקום האפל של נינאמוקארי"</span> (Mubwindi bwa Nyinamukari), המתאר בצורה מדויקת את הצפיפות המדהימה של היער שכמעט חוסם את אור השמש.
              </p>

              {/* Gorilla Image */}
              <div className="my-8">
                <img 
                  src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FGorillas%20in%20Bwindi%20Forest%2FGorilla%20in%20Bwindi%20Impenetrable%20Forest%20Uganda%400.5x.webp?alt=media&token=65832c3f-bba9-48ba-b8c2-ad7364f9f18c"
                  alt="גורילות הרים בפארק בווינדי"
                  className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-lg"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <p className="text-center text-sm text-gray-600 mt-2 italic">
                  גורילות הרים בפארק הלאומי בווינדי הבלתי חדיר, אוגנדה
                </p>
              </div>

              <h3 className="text-xl font-bold text-[#534B20] mb-4 mt-8">אוצר טבע עולמי</h3>

              <div className="bg-[#534B20]/10 border-r-4 border-[#534B20] p-6 my-8 rounded-lg shadow-sm">
                <h4 className="text-lg font-bold text-[#534B20] mb-3">
                  גורילות הרים – סיפור הצלחה שימורי
                </h4>
                <p className="text-gray-800">
                  הפארק מאכלס כ-<span className="font-semibold text-[#534B20]">51% מאוכלוסיית גורילות ההרים העולמית כולה</span>. מפקד מ-2018 העריך כי בפארק חיים לפחות <span className="font-semibold">459 פרטים</span>, ומדובר בסיפור הצלחה מרגש: האוכלוסייה מציגה גידול מתמשך ויציב מאז 1997, הודות למאמצי שימור נחושים.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <p>
                  <span className="font-semibold text-[#534B20]">מגוון צומח וחי עשיר:</span><br />
                  בפארק חיים לפחות <span className="font-semibold">120 מיני יונקים</span>, כולל שימפנזים (שאינם מאולפים לתיירות), פילים יער, וקופים נדירים כמו קופי ל'הוסט (L'Hoest's Monkey) וקולובוס שחור-לבן. הצומח כולל את המגוון הרחב ביותר של מיני עצים במזרח אפריקה – <span className="font-semibold">מעל 200 מינים</span>, מתוכם 10 אנדמיים לאזור זה בלבד. יש בפארק גם כ-<span className="font-semibold">104 מיני שרכים</span>.
                </p>
                <p>
                  <span className="font-semibold text-[#534B20]">גן עדן לצפרים ופרפרים:</span><br />
                  הפארק מהווה יעד צפרות מובחר עם כ-<span className="font-semibold">350 מיני ציפורים</span>, כאשר 22 מהם אנדמיים לבקע האלברטין (Albertine Rift). חובבי פרפרים יתרגשו לגלות שיש כאן מעל <span className="font-semibold">200 מיני פרפרים</span> צבעוניים.
                </p>
              </div>
            </div>
          </section>

          <hr className="my-12 border-t-2 border-gray-200" />

          {/* Seasons Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#534B20] mb-6 pb-3 border-b-2 border-[#CAA131]">
              עונות השנה והזמן המומלץ לביקור
            </h2>
            
            <p className="mb-6 text-gray-800">
              האקלים בבווינדי מאופיין בשתי עונות גשומות ושתי עונות יבשות בשנה, כשכל עונה מציעה יתרונות וחסרונות משלה.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#CAA131]/10 border-2 border-[#CAA131] rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#CAA131] mb-3">
                  העונה היבשה (התקופה המומלצת ביותר)
                </h3>
                <p className="font-semibold text-[#534B20] mb-3">
                  יוני–אוגוסט ו-דצמבר–פברואר
                </p>
                <div className="space-y-3 text-gray-800">
                  <div>
                    <p className="font-semibold text-[#534B20]">יתרונות:</p>
                    <p>זוהי תקופת השיא האידיאלית למעקב גורילות. השבילים יבשים יחסית, ההליכה קלה ונוחה יותר, והתנאים המזג האוויר נעימים. הסיכויים לטרק מוצלח ונוח גבוהים מאוד.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-700">חסרונות:</p>
                    <p>הביקוש להיתרי מעקב גבוה ביותר בתקופה זו, והמחירים גם כן. <span className="font-semibold">חיוני להזמין היתרים לפחות 3-6 חודשים מראש</span>, ובעונת הקיץ הישראלית אפילו יותר.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  העונה הגשומה (תקופת השפל)
                </h3>
                <p className="font-semibold text-gray-900 mb-3">
                  מרץ–מאי ו-ספטמבר–נובמבר
                </p>
                <div className="space-y-3 text-gray-800">
                  <div>
                    <p className="font-semibold text-[#534B20]">יתרונות:</p>
                    <p>קל בהרבה להשיג היתרים, ולעיתים אף במחירים מוזלים. הצמחייה ירוקה ושופעת במיוחד, והנוף עוצר נשימה. הסיכוי לראות פילים עולה משמעותית מכיוון שהם נפוצים יותר סביב גבולות הפארק בתקופה זו.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-700">חסרונות:</p>
                    <p>השבילים בוציים, חלקלקים ומאתגרים מאוד פיזית. המעקב הופך קשה יותר ודורש כושר גופני טוב. הגשם יכול להפריע לצילום ולנוחות הכללית. עם זאת, חשוב לציין שהגורילות נמצאות שם בכל תקופה, והחוויה עצמה תישאר בלתי נשכחת גם בגשם.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="my-12 border-t-2 border-gray-200" />

          {/* Access & Entry Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#534B20] mb-6 pb-3 border-b-2 border-[#CAA131]">
              דרכי הגעה וכניסה לפארק
            </h2>

            <p className="mb-6 text-gray-800">
              הגישה לפארק מתבצעת דרך <span className="font-semibold text-[#534B20]">ארבעה שערי כניסה מרכזיים</span>, שלכל אחד מהם אופי, נופים ואפשרויות לינה משלו. כל שער משמש כנקודת יציאה למעקב גורילות:
            </p>

            <h3 className="text-xl font-bold text-[#534B20] mb-4">ארבעת השערים</h3>

            <div className="space-y-4 mb-8">
              <div className="bg-white border-r-4 border-[#534B20] p-5 rounded-lg shadow-sm">
                <h4 className="font-bold text-[#534B20] text-lg mb-2">1. בוהומה (Buhoma) – צפון-מערב</h4>
                <p className="text-gray-800">
                  השער הפופולרי והנגיש ביותר, שהיה נקודת המוצא הראשונה למעקב גורילות באוגנדה כבר ב-<span className="font-semibold">1993</span>. הוא מציע את מבחר אפשרויות הלינה הרחב ביותר, ממחנות בסיסיים ועד לודג'ים יוקרתיים.
                </p>
              </div>

              <div className="bg-white border-r-4 border-[#CAA131] p-5 rounded-lg shadow-sm">
                <h4 className="font-bold text-[#CAA131] text-lg mb-2">2. רוהיזה (Ruhija) – מזרח</h4>
                <p className="text-gray-800">
                  השער הגבוה ביותר בפארק (2,340 מטר מעל פני הים), המציע נופים פנורמיים עוצרי נשימה להרי וירונגה. אזור מצוין במיוחד לצפרות.
                </p>
              </div>

              <div className="bg-white border-r-4 border-[#B8912A] p-5 rounded-lg shadow-sm">
                <h4 className="font-bold text-[#B8912A] text-lg mb-2">3. רושאגה (Rushaga) – דרום</h4>
                <p className="text-gray-800">
                  האזור עם המספר הגדול ביותר של קבוצות גורילות למעקב – <span className="font-semibold">9 קבוצות מאולפות</span>! זהו המקום היחיד שבו ניתן לבצע את חוויית <span className="font-semibold">"ההתרגלות לגורילות"</span> (Habituation Experience) בת 4 השעות.
                </p>
              </div>

              <div className="bg-white border-r-4 border-[#CAA131] p-5 rounded-lg shadow-sm">
                <h4 className="font-bold text-[#CAA131] text-lg mb-2">4. נקורינגו (Nkuringo) – דרום-מערב</h4>
                <p className="text-gray-800">
                  שער שקט ומרוחק יותר, הידוע בנופיו המרהיבים להרי וירונגה ובמסלוליו המאתגרים ביותר. מושלם למי שמחפש חוויה אותנטית ופחות תיירותית.
                </p>
              </div>
            </div>

            {/* Silverback Gorilla Image */}
            <div className="my-8">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FGorillas%20in%20Bwindi%20Forest%2FGorilla%20silverback%20in%20Bwindi%20Uganda%2C%20Africa%20%400.5x.webp?alt=media&token=07c4def0-0cb7-4d7c-b6f6-72c196ef547a"
                alt="גורילה כסופת גב בפארק בווינדי"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <p className="text-center text-sm text-gray-600 mt-2 italic">
                גורילה כסופת גב (Silverback) בפארק הלאומי בווינדי
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#534B20] mb-4">איך מגיעים לבווינדי?</h3>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="font-semibold text-[#534B20] mb-2">באוויר (המהיר והנוח)</h4>
                <p className="text-gray-800">
                  טיסה מקמפלה/אנטבה (Entebbe Airport) לאחד משני שדות התעופה הקרובים:
                </p>
                <ul className="list-disc mr-6 mt-2 space-y-1 text-gray-800">
                  <li><span className="font-semibold">קיהיאי (Kihihi)</span> – קרוב יותר לבוהומה, משך הטיסה כשעה וחצי</li>
                  <li><span className="font-semibold">קיסורו (Kisoro)</span> – קרוב יותר לנקורינגו ורושאגה</li>
                </ul>
                <p className="text-gray-800 mt-2">
                  חברות כמו Aerolink Uganda מפעילות טיסות קבועות. מקיהיאי, נסיעה לבוהומה היא כ-1.5 שעות בלבד.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#534B20] mb-2">בכביש (ארוך אך מרהיב)</h4>
                <p className="text-gray-800">
                  הנסיעה מקמפלה לבוהומה היא כ-<span className="font-semibold">475 ק"מ</span> ויכולה להימשך <span className="font-semibold">8-10 שעות</span>. רוב הדרך היא בכבישי עפר (Murram) שעלולים להיות חלקלקים ומאתגרים בעונת הגשמים. <span className="font-semibold">חובה רכב שטח 4×4</span> עם נהג מנוסה. הדרך עוברת דרך נופים מרהיבים, כולל עצירה במשווא (Equator Crossing).
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#534B20] mb-2">תחבורה ציבורית (לתקציב מצומצם)</h4>
                <p className="text-gray-800">
                  אוטובוסים כמו Bwindi Bus יוצאים מקמפלה לבוהומה (10-12 שעות, כ-12 דולר). זו אופציה חסכונית אך מתישה.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#534B20] mb-4">תהליך הכניסה והתדרוך</h3>
            <p className="text-gray-800 mb-4">
              היום מתחיל <span className="font-semibold">מוקדם בבוקר</span> – המבקרים מתבקשים להגיע למרכז המבקרים <span className="font-semibold">בסביבות 7:00</span>. שם מתקיימת בדיקת אישורים, ולאחר מכן תדרוך קצר אך חשוב על כללי הפארק, בטיחות, והנחיות להתנהגות ליד הגורילות.
            </p>
            <p className="text-gray-800">
              מדריך ראשי מחלק את המבקרים לקבוצות קטנות (עד <span className="font-semibold">8 מבקרים</span> בכל קבוצה), כאשר כל קבוצה מוקצית למשפחת גורילות מאולפת אחרת. לאחר חלוקה והיכרות עם המדריכים המקומיים, הטרק מתחיל!
            </p>
          </section>

          <hr className="my-12 border-t-2 border-gray-200" />

          {/* Gorilla Trekking Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#534B20] mb-6 pb-3 border-b-2 border-[#CAA131]">
              חוויות ייחודיות: טרק הגורילות והרבה מעבר
            </h2>

            <h3 className="text-xl font-bold text-[#534B20] mb-4">מעקב גורילות הרים – החוויה שאי אפשר לפספס</h3>
            
            <p className="text-gray-800 mb-6">
              מעקב הגורילות הוא ללא ספק גולת הכותרת של הביקור בבווינדי. הפארק כולל כיום <span className="font-semibold text-[#534B20]">25 קבוצות גורילות מאולפות</span> הפרוסות על פני ארבעת שערי הכניסה.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-semibold text-[#534B20] text-lg mb-3">ההכנה למפגש</h4>
                <p className="text-gray-800">
                  גורילות מאולפות הן קבוצות שעברו תהליך ארוך של <span className="font-semibold">הרגלה לנוכחות אנושית</span> – תהליך שלוקח בין <span className="font-semibold">2 ל-3 שנים</span> של מגע יומיומי זהיר. כל בוקר, צוותים של עוקבים מקצועיים (Trackers) נשלחים מראש כדי לאתר את מיקום המשפחות, ומדווחים למדריכים באמצעות רדיו.
                </p>
                <p className="text-gray-800 mt-3">
                  המדריכים משתמשים בצלילים מיוחדים וחקיינות של קולות הגורילות (כמו "rumbling call" המרגיע) כדי לסמן למשפחה שהם לא מהווים איום.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#534B20] text-lg mb-3">הטרק עצמו – הרפתקה אמיתית</h4>
                <div className="bg-[#CAA131]/10 border-r-4 border-[#CAA131] p-5 rounded-lg shadow-sm mb-4">
                  <p className="text-gray-800">
                    <span className="font-semibold">חשוב לדעת:</span> ההליכה בבווינדי היא <span className="font-semibold">הרפתקה פיזית אמיתית וקשה</span>. אין לזלזל בכך! משך הטרק משתנה בין <span className="font-semibold">15 דקות ל-6 שעות</span>, ובמקרים נדירים אף עד 10 שעות ליום פעילות מלא.
                  </p>
                </div>
                <p className="text-gray-800">
                  המסלול עובר בשטח הררי מאתגר, בגבהים של 1,400-2,000 מטר, דרך צמחייה צפופה, שבילים בוציים וטיפוסים תלולים. תצטרכו לדחוף את עצמכם דרך שיחים, לטפס על שורשים ולעבור בשטח לא מסומן. זו חוויה אותנטית של יער אמיתי – לא שביל מסודר בפארק לאומי מטופח.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-[#534B20] text-lg mb-3">המפגש – שעה שתזכרו לנצח</h4>
                <p className="text-gray-800 mb-4">
                  לאחר איתור הגורילות (רגע מרגש בפני עצמו!), משך השהייה המקסימלי במחיצתן הוא <span className="font-semibold text-[#534B20]">שעה אחת בלבד</span>. זו מגבלה קריטית שנועדה להגן על חיות הבר ולמזער את הלחץ עליהן.
                </p>
                <p className="text-gray-800 mb-4">
                  במהלך השעה הזו תראו את הגורילות בחיי היומיום שלהן: אוכלות, משחקות, מטפלות בגורים, נחות ומתקשרות זו עם זו. הזכר הדומיננטי (Silverback) הוא אישיות מרשימה במיוחד – ענק שקול כ-180-200 ק"ג שמוביל את המשפחה בשלווה ובסמכותיות.
                </p>
                <p className="text-gray-800">
                  המדריכים יסבירו על ההתנהגויות השונות, יזהו את חברי המשפחה ויוודאו שאתם שומרים על מרחק בטוח (מינימום 7 מטרים, אם כי הגורילות לפעמים מתקרבות מעצמן).
                </p>
              </div>
            </div>

            {/* Mountain Gorilla Image */}
            <div className="my-8">
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FGorillas%20in%20Bwindi%20Forest%2FMountain%20gorilla%20Bwindi%20Impenetrable%20Forest%20Uganda.webp?alt=media&token=1a4e88e7-4cfd-45d3-8e92-cc3dbc3a3e56"
                alt="גורילת הרים ביער בווינדי"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <p className="text-center text-sm text-gray-600 mt-2 italic">
                גורילת הרים ביער בווינדי הבלתי חדיר
              </p>
            </div>

            <h3 className="text-xl font-bold text-[#534B20] mb-4">חוויות נוספות שלא כדאי לפספס</h3>

            <p className="text-gray-800 mb-4">בווינדי מציע הרבה יותר מטרק גורילות בלבד:</p>

            <div className="space-y-4 mb-6">
              <div className="bg-[#CAA131]/10 border-r-4 border-[#CAA131] p-5 rounded-lg">
                <h4 className="font-semibold text-[#CAA131] mb-2">צפרות ושבילי טבע</h4>
                <p className="text-gray-800 mb-3">
                  הפארק הוא גן עדן אמיתי לצפרים. מבוהומה אפשר לצאת לטיולים מודרכים, כגון:
                </p>
                <ul className="list-disc mr-6 space-y-2 text-gray-800">
                  <li><span className="font-semibold">שביל המפל (Waterfall Trail)</span> – טיול קצר ונעים למפל יפהפה</li>
                  <li><span className="font-semibold">שביל ביצת מבווינדי (Mubwindi Swamp Trail)</span> מרוהיזה – כאן יש סיכוי של <span className="font-semibold">95%</span> לראות את ה-African Green Broadbill הנדיר ביותר, מין אנדמי שצפרים מרחוק באים לראות</li>
                </ul>
              </div>

              <div className="bg-[#B8912A]/10 border-r-4 border-[#B8912A] p-5 rounded-lg">
                <h4 className="font-semibold text-[#B8912A] mb-2">סיורי כפר ומפגש תרבותי</h4>
                <p className="text-gray-800 mb-3">
                  אינטראקציה עם בני שבט <span className="font-semibold">הבאטווה (Batwa Pygmies)</span>, שהיו בעבר שוכני היער ופונו ממנו כשהפך לפארק לאומי. הם מציעים סיורים מרגשים שבהם הם משתפים בידע מסורתי על היער, מדגימים ציד ושימוש בצמחי מרפא.
                </p>
                <p className="text-gray-800">
                  בבוהומה ממוקם גם <span className="font-semibold">Ride 4 A Woman</span> – ארגון נשים מקומיות שמוכר מלאכות יד מקסימות (אריגה, קליעה, תפירה) ומציע סדנאות. רכישה מהן תומכת ישירות בנשים מקומיות ובקהילה.
                </p>
              </div>

              <div className="bg-gray-50 border-r-4 border-gray-500 p-5 rounded-lg">
                <h4 className="font-semibold text-gray-700 mb-2">מעקב שימפנזים (לא תיירותי)</h4>
                <p className="text-gray-800">
                  למרות שבפארק חיה אוכלוסיית שימפנזים בריאה וגדולה, הם אינם מאולפים לתיירות באופן סדיר כמו הגורילות. אבל אם יתמזל מזלכם לראות אותם בטרק – זה בונוס נהדר!
                </p>
              </div>
            </div>
          </section>

          <hr className="my-12 border-t-2 border-gray-200" />

          {/* Practical Info Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#534B20] mb-6 pb-3 border-b-2 border-[#CAA131]">
              מידע פרקטי: עלויות, אישורים וציוד נדרש
            </h2>

            <h3 className="text-xl font-bold text-[#534B20] mb-4">עלויות והיתרים (Permits)</h3>
            
            <p className="text-gray-800 mb-6">
              היתרי מעקב גורילות הם עמוד התווך הכלכלי של הפארק ומקור המימון העיקרי לפעילויות השימור. המחיר גבוה, אך הוא משקף את המאמץ השימורי האדיר ואת הבלעדיות המוחלטת של החוויה.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-[#534B20] text-white">
                    <th className="p-4 text-right font-semibold">סוג היתר</th>
                    <th className="p-4 text-right font-semibold">עלות (FNR)</th>
                    <th className="p-4 text-right font-semibold">משך המפגש</th>
                    <th className="p-4 text-right font-semibold">הערות</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-[#534B20]">מעקב גורילות רגיל</td>
                    <td className="p-4 font-bold text-lg">$800</td>
                    <td className="p-4">שעה אחת (מקסימום)</td>
                    <td className="p-4 text-sm">8 היתרים לכל קבוצה ביום</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 font-semibold text-[#534B20]">חברות גורילות (Habituation)</td>
                    <td className="p-4 font-bold text-lg">$1,500</td>
                    <td className="p-4">4 שעות</td>
                    <td className="p-4 text-sm">זמין כיום רק באזור רושאגה</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-[#CAA131]/10 border-r-4 border-[#CAA131] p-5 rounded-lg mb-8">
              <h4 className="font-semibold text-[#CAA131] mb-2">איך מזמינים היתרים?</h4>
              <p className="text-gray-800 mb-3">
                יש להזמין את ההיתרים דרך <span className="font-semibold">רשות חיות הבר של אוגנדה</span> (Uganda Wildlife Authority - UWA) בקמפלה, או באמצעות חברת תיירות מקומית רשומה. רוב התיירים הישראלים מזמינים דרך חברת תיירות שמטפלת בכל התיאום.
              </p>
              <p className="text-gray-800">
                <span className="font-semibold text-red-700">חשוב מאוד:</span> הזמנה מוקדמת היא <span className="font-semibold">הכרחית</span>! בעונת השיא (יוני-אוגוסט, דצמבר-פברואר) מומלץ להזמין <span className="font-semibold">3-6 חודשים מראש</span>.
              </p>
            </div>

            <p className="text-gray-800 mb-8">
              <span className="font-semibold text-[#534B20]">דמי כניסה לפארק:</span> דמי הכניסה לפארק כבר כלולים במחיר היתר מעקב הגורילות, כך שאין צורך לשלם בנפרד.
            </p>

            <h3 className="text-xl font-bold text-[#534B20] mb-4">ציוד חיוני לטרק</h3>

            <p className="text-gray-800 mb-4">
              הטרק בבווינדי הוא פיזי, בוצי ומאתגר. הציוד הנכון הוא קריטי לחוויה נוחה ומוצלחת:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white border-2 border-[#534B20] p-4 rounded-lg">
                <h4 className="font-semibold text-[#534B20] mb-2">1. הנעלה (הכי חשוב!)</h4>
                <p className="text-gray-800 text-sm">
                  נעלי הליכה חזקות, עמידות במים ובגובה קרסול. רבים ממליצים על <span className="font-semibold">Welly Boots</span> (מגפי גומי) שאפשר לשכור או לקנות מקומית. זה יציל את הרגליים שלכם מבוץ עמוק!
                </p>
              </div>

              <div className="bg-white border-2 border-[#534B20] p-4 rounded-lg">
                <h4 className="font-semibold text-[#534B20] mb-2">2. ביגוד מתאים</h4>
                <p className="text-gray-800 text-sm">
                  מכנסיים וחולצות בשרוולים ארוכים – הגנה מפני צמחייה קוצנית (סרפדים) וחרקים. בגדים בצבעים כהים או ירוקים (לא לבנים). בגדים ישנים שלא אכפת לכם אם יתלכלכו בבוץ.
                </p>
              </div>

              <div className="bg-white border-2 border-[#534B20] p-4 rounded-lg">
                <h4 className="font-semibold text-[#534B20] mb-2">3. הגנה מקור וגשם</h4>
                <p className="text-gray-800 text-sm">
                  סוודר או ז'קט פליז לבוקר הקר (טמפרטורות יכולות לרדת ל-10-15 מעלות). <span className="font-semibold">מעיל גשם קל או פונצ'ו</span> – גשם יכול לפתע בכל עת. כובע או מצחייה.
                </p>
              </div>

              <div className="bg-white border-2 border-[#534B20] p-4 rounded-lg">
                <h4 className="font-semibold text-[#534B20] mb-2">4. ציוד צילום</h4>
                <p className="text-gray-800 text-sm">
                  מצלמה <span className="font-semibold">ללא פלאש</span> (אסור להשתמש בפלאש!). מומלץ ISO גבוה (800 ומעלה) בגלל תאורה נמוכה ביער. מונופוד או מקל סלפי יכול לעזור ליציבות. סוללות רזרביות וכרטיסי זיכרון.
                </p>
              </div>

              <div className="bg-white border-2 border-[#534B20] p-4 rounded-lg">
                <h4 className="font-semibold text-[#534B20] mb-2">5. אחר</h4>
                <p className="text-gray-800 text-sm">
                  <span className="font-semibold">מים (1.5-2 ליטר)</span> וחטיפים אנרגטיות. כפפות גינון (עוזרות בטיפוס על שורשים בוציים). משחת הדברה לחרקים. <span className="font-semibold">מקלות הליכה</span> (לפעמים מסופקים, כדאי לבקש!)
                </p>
              </div>

              <div className="bg-white border-2 border-[#534B20] p-4 rounded-lg">
                <h4 className="font-semibold text-[#534B20] mb-2">6. פורטר (מומלץ מאוד!)</h4>
                <p className="text-gray-800 text-sm">
                  העסקת <span className="font-semibold">פורטר מקומי</span> (כ-$10-15 ליום) היא השקעה מצוינת. הם ישאו את התרמיל שלכם, יעזרו לכם בטיפוס תלול, ותתמכו בכלכלה המקומית באופן ישיר. זו דרך נהדרת לתרום לקהילה!
                </p>
              </div>
            </div>
          </section>

          <hr className="my-12 border-t-2 border-gray-200" />

          {/* Do's and Don'ts Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#534B20] mb-6 pb-3 border-b-2 border-[#CAA131]">
              טיפים חשובים: עשה ואל תעשה
            </h2>

            <p className="text-gray-800 mb-6">
              הקפדה קפדנית על כללי ההתנהגות היא <span className="font-semibold text-red-700">קריטית</span> – בעיקר בשל הדמיון הגנטי הרב בין גורילות לבני אדם (כ-<span className="font-semibold">98% DNA משותף</span>). מחלות אנושיות יכולות לעבור לגורילות ולגרום נזק חמור.
            </p>

            <h3 className="text-xl font-bold text-[#534B20] mb-4">כללי זהב</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-[#534B20] text-white">
                        <th colSpan={2} className="p-4 text-right font-semibold">עשה</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-gray-200 hover:bg-[#534B20]/10 transition-colors">
                        <td className="p-3 font-semibold text-[#534B20]">חבוש מסכה</td>
                        <td className="p-3">חובה לחבוש מסכת פנים (לרוב מסופקות) כדי למנוע העברת מחלות נשימה</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-[#534B20]/10 transition-colors">
                        <td className="p-3 font-semibold text-[#534B20]">שמור מרחק 7 מטרים</td>
                        <td className="p-3">הגנה על הגורילות ועליכם. אם גורילה מתקרבת אליכם – לא זזים!</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-[#534B20]/10 transition-colors">
                        <td className="p-3 font-semibold text-[#534B20]">דבר בשקט ובלחש</td>
                        <td className="p-3">קולות חזקים מטרידים ומלחיצים את הגורילות</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-[#534B20]/10 transition-colors">
                        <td className="p-3 font-semibold text-[#534B20]">הזמן פורטר</td>
                        <td className="p-3">ההליכה קשה, פורטרים יקלו עליכם ותתמכו בקהילה</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-[#534B20]/10 transition-colors">
                        <td className="p-3 font-semibold text-[#534B20]">הישאר רגוע</td>
                        <td className="p-3">אם גורילה מתקרבת זה סימן טוב! פשוט אל תזוזו ואל תביטו ישירות בעיניים</td>
                      </tr>
                      <tr className="hover:bg-[#534B20]/10 transition-colors">
                        <td className="p-3 font-semibold text-[#534B20]">העזר בשירותים לפני</td>
                        <td className="p-3">אין שירותים ביער!</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-red-600 text-white">
                        <th colSpan={2} className="p-4 text-right font-semibold">❌ אל תעשה – קריטי!</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-gray-200 hover:bg-red-50 transition-colors">
                        <td className="p-3 font-semibold text-red-700">אל תבקר אם חולה</td>
                        <td className="p-3">אם יש לך שפעת, צינון או מחלה מדבקת – <span className="font-semibold">אסור לבוא</span>! זה יכול להיות קטלני לגורילות</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-red-50 transition-colors">
                        <td className="p-3 font-semibold text-red-700">אל תיגע בגורילות</td>
                        <td className="p-3">אסור בהחלט לגעת, ללטף או להאכיל</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-red-50 transition-colors">
                        <td className="p-3 font-semibold text-red-700">אל תשתה/תאכל ליד</td>
                        <td className="p-3">סיכון להעברת מחלות ופרזיטים</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-red-50 transition-colors">
                        <td className="p-3 font-semibold text-red-700">אל תשתמש בפלאש</td>
                        <td className="p-3">הפלאש מבהיל ומלחיץ את הגורילות</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-red-50 transition-colors">
                        <td className="p-3 font-semibold text-red-700">אל תסתכל בעיניים</td>
                        <td className="p-3">זה נתפס כאיום. הסתכל הצידה או למטה</td>
                      </tr>
                      <tr className="hover:bg-red-50 transition-colors">
                        <td className="p-3 font-semibold text-red-700">אל תברח/תזוז מהר</td>
                        <td className="p-3">תנועות פתאומיות מעוררות חשד. זוז לאט ובשקט</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-[#534B20] mb-4">היבטים קהילתיים ושימור</h3>

            <div className="space-y-4">
              <div className="bg-[#534B20]/10 border-r-4 border-[#534B20] p-5 rounded-lg">
                <h4 className="font-semibold text-[#534B20] mb-2">מודל שימור חיובי</h4>
                <p className="text-gray-800">
                  התיירות בבווינדי היא דוגמה מצוינת לשימור מוצלח המשלב קהילות מקומיות. רשות חיות הבר של אוגנדה (UWA) מחזירה חלק מהכנסות התיירות לקהילות שסביב הפארק, ומקדמת פרויקטים קהילתיים: בתי ספר, מרפאות, תשתיות מים ועוד.
                </p>
              </div>

              <div className="bg-[#CAA131]/10 border-r-4 border-[#CAA131] p-5 rounded-lg">
                <h4 className="font-semibold text-[#CAA131] mb-2">צוותי HUGO (Human-Gorilla Conflict Mitigation)</h4>
                <p className="text-gray-800">
                  קבוצות ניהול קונפליקט אדם-גורילה, המורכבות מתושבים מקומיים, פועלות בקו החזית. תפקידם: להרחיק גורילות שנכנסות לשטחים חקלאיים ולמנוע עימותים. זה מצמצם משמעותית את הנזק לשתי הצדדים.
                </p>
              </div>

              <div className="bg-[#CAA131]/10 border-r-4 border-[#CAA131] p-5 rounded-lg">
                <h4 className="font-semibold text-[#CAA131] mb-2">סיכונים בריאותיים משותפים</h4>
                <p className="text-gray-800">
                  מחקרים הראו שבאזורים עם חפיפה גבוהה בין גורילות, בני אדם ומשק חי, קיים סיכון מוגבר להעברת חיידקים גסטרואינטסטינליים (כמו <em>E. coli</em> עמיד לאנטיביוטיקה). זו הסיבה שנהלי הבריאות קפדניים כל כך!
                </p>
              </div>
            </div>
          </section>


          {/* Summary Section */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#534B20] mb-6 pb-3 border-b-2 border-[#CAA131]">
              סיכום השראתי
            </h2>
            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              <p className="mb-6">
                בווינדי הבלתי חדיר אינו רק פארק לאומי נוסף על המפה התיירותית – זהו <span className="font-semibold text-[#534B20]">מקום קדוש לשימור הטבע</span>, מקום שבו עתידן של גורילות ההרים נקבע כל יום מחדש. כאן, הטבע מתקיים בגובה העיניים עם מאמצי השימור העולמיים, והתיירות היא לא רק חוויה אישית אלא גם <span className="font-semibold text-[#534B20]">מעשה של שותפות בשימור</span>.
              </p>

              <p className="mb-6">
                העלייה המתמשכת באוכלוסיית גורילות ההרים – מכמה מאות פרטים בלבד לפני עשורים ל-<span className="font-semibold">מעל 1,000 פרטים כיום</span> (במכלול אזורי הווירונגה) – מוכיחה שמאמץ משותף של רשויות, קהילות מקומיות ותיירים כמוכם <span className="font-semibold text-[#534B20]">יכול להפוך את גלגל ההכחדה</span>.
              </p>

              <div className="bg-gradient-to-br from-[#534B20]/10 to-[#534B20]/5 border-2 border-[#534B20] p-8 my-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-[#534B20] mb-4 text-center">
                  הרגע שישנה אתכם
                </h3>
                <p className="text-gray-800 mb-4 leading-relaxed">
                  יש משהו עמוק ומשנה בחוויה של לעמוד ממש מול גורילת הרים. זה לא רק "לראות חיה מיוחדת" – זה <span className="font-semibold text-[#534B20]">מפגש עם קרוב משפחה אבולוציוני</span> שמזכיר לנו כמה אנחנו קטנים, כמה אנחנו חלק מהטבע, וכמה אנחנו אחראים עליו.
                </p>
                <p className="text-gray-800 mb-6 leading-relaxed">
                  כשזכר הכסף (Silverback) מסתכל עליכם בעיניו העמוקות והמבינות, כשגורה צעירה משחקת בעצים מעליכם, או כשאם מניקה את התינוק שלה בשלווה מוחלטת – אתם מבינים שזה היה <span className="font-semibold text-[#534B20]">שווה כל שעת נסיעה, כל דולר שהוצאתם, וכל טיפוס תלול וחלקלק</span>.
                </p>
              </div>

              <h3 className="text-xl font-bold text-[#534B20] mb-4">בואו לחוות את הקסם</h3>
              
              <p className="mb-6">
                אם גורילות ההרים עדיין ברשימת המשאלות שלכם – <span className="font-semibold text-[#534B20]">אל תדחו את זה</span>. בווינדי מחכה, היער העתיק נושם, והענקים העדינים עושים את שלהם בטבעיות מדהימה.
              </p>

              <p className="mb-6">
                תלכו לאיבוד בתוך הירוק האינסופי. תרגישו את הבוץ מתחת לנעליים. תשמעו את קולות היער העתיק. ותחזרו הביתה עם <span className="font-semibold text-[#534B20]">חוויה שתישאר איתכם לנצח</span> – חוויה של יראת כבוד עמוקה כלפי אחד היצורים המופלאים ביותר על פני כדור הארץ.
              </p>

              <h3 className="text-xl font-bold text-[#534B20] mb-4">מידע מעשי לסיום</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-[#534B20] mb-1">מתי להזמין?</p>
                  <p className="text-sm text-gray-800">3-6 חודשים לפני, במיוחד לעונת השיא</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-[#534B20] mb-1">כמה זמן להישאר?</p>
                  <p className="text-sm text-gray-800">מינימום 2-3 ימים בבווינדי (טרק + מנוחה)</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-[#534B20] mb-1">רמת כושר נדרשת?</p>
                  <p className="text-sm text-gray-800">בינונית עד גבוהה - הליכה 2-6 שעות בשטח הררי</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-[#534B20] mb-1">מה עם ילדים?</p>
                  <p className="text-sm text-gray-800">גיל מינימלי לטרק גורילות: <span className="font-semibold">15 שנים</span></p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-[#534B20] mb-1">חיסונים מומלצים:</p>
                  <p className="text-sm text-gray-800">צהבת, טיפוס, הפטיטיס A/B, ומלריה (תרופות מניעה)</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-[#534B20] mb-1">ביטוח נסיעות:</p>
                  <p className="text-sm text-gray-800">חובה! וודאו שמכסה פינוי רפואי ופעילויות הרפתקה</p>
                </div>
              </div>

              {/* Final CTA Box */}
              <div className="bg-gradient-to-br from-[#534B20] to-[#3A3517] text-white p-8 my-8 rounded-xl shadow-xl text-center">
                <p className="text-2xl sm:text-3xl font-bold mb-6">
                  הענקים העדינים מחכים.
                </p>
                <a 
                  href="https://wa.me/972546152683?text=שלום, אני מעוניין בתכנון מסלול לגורילות בבווינדי"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#534B20] font-bold py-4 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl"
                >
                  צור קשר לתכנון המסלול שלך
                </a>
                <p className="text-lg mt-4 text-white/90">
                  תכננו את הטרק שלכם עכשיו
                </p>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <footer className="mt-12 pt-6 border-t-2 border-gray-200">
            <p className="text-center text-sm text-gray-600 mb-4">
              <em>הערת סיום: המחירים, הנתונים והמידע במאמר זה מבוססים על המקורות שסופקו ונכונים למועד כתיבתם. מומלץ לבדוק מידע עדכני לפני התכנון הסופי של הטיול.</em>
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a 
                href="mailto:?subject=המדריך המקיף לטיול גורילות בפארק הלאומי בווינדי&body=קרא את המדריך המקיף לטיול גורילות בבווינדי: https://discover-africa-ky.web.app/blog/bwindi-gorilla-trekking-guide"
                className="bg-[#534B20] hover:bg-[#3A3517] text-white px-6 py-2 rounded-lg transition-colors inline-block"
              >
                שתף במייל
              </a>
              <a 
                href="https://www.facebook.com/sharer/sharer.php?u=https://discover-africa-ky.web.app/blog/bwindi-gorilla-trekking-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#CAA131] hover:bg-[#B8912A] text-white px-6 py-2 rounded-lg transition-colors inline-block"
              >
                שתף בפייסבוק
              </a>
              <a 
                href="https://wa.me/?text=המדריך המקיף לטיול גורילות בפארק הלאומי בווינדי%0A%0Aקרא את המדריך המקיף לטיול גורילות בבווינדי:%0Ahttps://discover-africa-ky.web.app/blog/bwindi-gorilla-trekking-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#B8912A] hover:bg-[#A67F1F] text-white px-6 py-2 rounded-lg transition-colors inline-block"
              >
                שתף בווצאפ
              </a>
            </div>
          </footer>

        </div>
      </article>
    </>
  );
};

export default BwindiBlogPost;
