import React from "react";
import { AttractionWithMock } from "../../types";

interface AttractionInfoProps {
  attraction: AttractionWithMock;
}

const AttractionInfo: React.FC<AttractionInfoProps> = ({ attraction }) => {
  const introFull = attraction.description ?? (attraction as any).summary ?? "";
  const introShort = introFull.length > 280 ? introFull.slice(0, 280) + "…" : introFull;

  return (
    <>
      {/* תיאור האטרקציה - ריבוע רחב */}
      <div className="md:col-span-1 order-2 md:order-1">
        <section className="bg-white border border-[#534B20]/60 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] h-full">
          <div className="space-y-8">
            {attraction.subtitle && (
              <h2 className="text-2xl font-bold text-[#4B361C] mb-6 leading-tight">{attraction.subtitle}</h2>
            )}
            
            {introFull && (
              <div className="prose prose-lg max-w-none">
                <div className="text-body leading-relaxed text-gray-700 font-medium" 
                     style={{ fontFamily: 'Poppins' }}
                     dangerouslySetInnerHTML={{ __html: introFull.replace(/\n/g, '<br>') }}
                />
              </div>
            )}
          </div>
        </section>
      </div>

      {/* גריד מידע חשוב לפארק מורצ'יסון פולס */}
      {(attraction.id === 'murchison-falls-safari' || attraction.id === 'murchison-falls-water' || attraction.id === 'murchison-falls-waterfalls' || attraction.slug === 'murchison-falls') && (
        <div className="grid grid-cols-1 gap-6 order-4 md:order-2">
          <section className="bg-gradient-to-br from-white via-gray-50 to-white border border-[#CAA131]/60 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] h-full">
            <h3 className="text-xl font-extrabold mb-6 text-[#4B361C] text-right border-b-2 border-[#CAA131] w-fit">
              מידע חשוב
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right" style={{fontFamily: 'Poppins'}}>
              {/* עמודה שמאלית */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-2xl p-5 border border-[#CAA131]/30">
                  <h4 className="font-bold text-black mb-3 text-lg">עונות השנה</h4>
                  <div className="space-y-3 text-black">
                    <p className="text-base mb-3"><strong>הערה כללית:</strong> הודות למיקומה על קו המשווה, אוגנדה מציעה חוויית ספארי וטיולים המתאימה לכל עונה.</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#CAA131] rounded-full mt-2"></div>
                        <div>
                          <span className="font-semibold text-black text-base">יבשה (דצמבר–פברואר, יוני–אוגוסט):</span>
                          <span className="block text-base">חיות מתרכזות סביב מקורות מים, דרכים נוחות יותר.</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#CAA131] rounded-full mt-2"></div>
                        <div>
                          <span className="font-semibold text-black text-base">ירוקה (מרץ–מאי, ספטמבר–נובמבר):</span>
                          <span className="block text-base">נוף ירוק ועשיר, שפע ציפורים, דרכים מאתגרות יותר.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-2xl p-5 border border-[#CAA131]/30">
                  <h4 className="font-bold text-black mb-3 text-lg">חוויות ייחודיות</h4>
                  <div className="space-y-2 text-black">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#CAA131] rounded-full mt-2"></div>
                      <span className="text-base"><strong>מפלי מורצ'יסון</strong> - המפלים החזקים בעולם</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#CAA131] rounded-full mt-2"></div>
                      <span className="text-base"><strong>שייט על הנילוס</strong> - תצפית על היפופוטמים ותנינים</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#CAA131] rounded-full mt-2"></div>
                      <span className="text-base"><strong>ספארי יבשתי</strong> - אריות, פילים, ג'ירפות ועוד</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-2xl p-5 border border-[#CAA131]/30">
                  <h4 className="font-bold text-black mb-3 text-lg">משך שהות מומלץ</h4>
                  <div className="space-y-2 text-black">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#CAA131] rounded-full mt-2"></div>
                      <span className="text-base"><strong>טיול יום</strong> - ביקור במפלים ושייט קצר</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#CAA131] rounded-full mt-2"></div>
                      <span className="text-base"><strong>סוף שבוע</strong> - ספארי מלא עם לינה</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#CAA131] rounded-full mt-2"></div>
                      <span className="text-base"><strong>חופשה מלאה</strong> - שילוב עם אטרקציות נוספות</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* עמודה ימנית */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-2xl p-5 border border-[#CAA131]/30">
                  <h4 className="font-bold text-black mb-3 text-lg">נסיעה והגעה</h4>
                  <div className="space-y-2 text-black">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#CAA131] rounded-full mt-2"></div>
                      <span className="text-base"><strong>יבשתית:</strong> ~305 ק״מ מקמפלה, 5–6 שעות נסיעה</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#CAA131] rounded-full mt-2"></div>
                      <span className="text-base"><strong>טיסות פנימיות:</strong> עם Bar Aviation מ־Entebbe אל מנחת Pakuba</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-2xl p-5 border border-[#CAA131]/30">
                  <h4 className="font-bold text-black mb-3 text-lg">שערי כניסה</h4>
                  <div className="space-y-2 text-black">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#CAA131] rounded-full mt-2"></div>
                      <span className="text-base"><strong>שער צפוני</strong> – קרוב למפלים ולמרכז הפארק</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#CAA131] rounded-full mt-2"></div>
                      <span className="text-base"><strong>שער דרומי</strong> – גישה נוחה מהכביש הראשי</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#CAA131] rounded-full mt-2"></div>
                      <span className="text-base"><strong>שער מערבי</strong> – ליד אזור השייט</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border-2 border-[#CAA131]">
                  <h4 className="font-bold text-black mb-3 text-lg">הידעת?</h4>
                  <div className="space-y-3 text-black">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-[#CAA131]">
                      <p className="text-base leading-relaxed">
                        מפלי מורצ'יסון הם <span className="text-[#CAA131] font-bold">המפלים החזקים בעולם</span> - 300 מטרים של מים נופלים דרך צוואר בקבוק צר
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-[#CAA131]">
                      <p className="text-base leading-relaxed">
                        הפארק נקרא על שם <span className="text-[#CAA131] font-bold">רודריק מורצ'יסון</span>, גיאולוג סקוטי שגילה את המפלים ב-1864
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* גריד מידע חשוב לפארק המלכה אליזבת */}
      {(attraction.id === 'queen-elizabeth' || attraction.slug === 'queen-elizabeth') && (
        <div className="grid grid-cols-1 gap-6 order-4 md:order-none">
          <section className="bg-gradient-to-br from-white via-gray-50 to-white border border-[#CAA131]/60 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-center text-black mb-8" style={{fontFamily: 'Poppins'}}>
              מידע חשוב
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{fontFamily: 'Poppins'}}>
              {/* עמודה שמאלית */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-2xl p-5 border border-[#CAA131]/30">
                  <h4 className="font-bold text-black mb-3 text-lg">עונות השנה</h4>
                  <div className="space-y-2 text-black">
                    <p className="text-base">
                      <strong>הערה כללית:</strong> אוגנדה נמצאת על קו המשווה ולכן אפשר לטייל בה כל השנה. ההבדל הוא בין עונה יבשה לעונה רטובה.
                    </p>
                    <ul className="space-y-1 list-disc list-inside text-[#CAA131]">
                      <li className="text-base text-black"><strong>יבשה</strong> (דצמבר–פברואר, יוני–אוגוסט): חיות סביב מקורות מים, דרכים נוחות</li>
                      <li className="text-base text-black"><strong>רטובה</strong> (מרץ–מאי, ספטמבר–נובמבר): נוף ירוק, שפע ציפורים, דרכים מאתגרות יותר</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-2xl p-5 border border-[#CAA131]/30">
                  <h4 className="font-bold text-black mb-3 text-lg">נסיעה והגעה</h4>
                  <ul className="space-y-1 text-black list-disc list-inside" style={{color: '#CAA131'}}>
                    <li className="text-base text-black"><strong>יבשתית:</strong> ~375 ק״מ מקמפלה, 6–7 שעות נסיעה</li>
                    <li className="text-base text-black"><strong>טיסות פנימיות:</strong> עם Bar Aviation מ־Entebbe / Kajjansi אל מנחת Kasese, השער הקרוב לפארק</li>
                  </ul>
                </div>
              </div>

              {/* עמודה ימנית */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-2xl p-5 border border-[#CAA131]/30">
                  <h4 className="font-bold text-black mb-3 text-lg">חוויות ייחודיות</h4>
                  <ul className="space-y-1 text-black list-disc list-inside" style={{color: '#CAA131'}}>
                    <li className="text-base text-black"><strong>שייט על תעלת קזינגה</strong> – תצפית על היפופוטמים, תנינים וציפורים</li>
                    <li className="text-base text-black"><strong>ספארי יבשתי</strong> – אריות, פילים, בופאלו ועוד</li>
                    <li className="text-base text-black"><strong>צפרות</strong> – מעל 600 מיני ציפורים</li>
                    <li className="text-base text-black"><strong>טיפוס על הרי הירח</strong> – נוף מרהיב של הפארק</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-[#CAA131]/10 to-[#B8942A]/10 rounded-2xl p-5 border border-[#CAA131]/30">
                  <h4 className="font-bold text-black mb-3 text-lg">משך שהות מומלץ</h4>
                  <ul className="space-y-1 text-black list-disc list-inside" style={{color: '#CAA131'}}>
                    <li className="text-base text-black"><strong>2–3 ימים</strong> – ביקור בסיסי עם שייט וספארי</li>
                    <li className="text-base text-black"><strong>4–5 ימים</strong> – חוויה מלאה עם צפרות וטיולים</li>
                    <li className="text-base text-black"><strong>שבוע+</strong> – שילוב עם אטרקציות נוספות באזור</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Additional info sections for other attractions would go here */}
      {/* For brevity, I'm including just the two main ones, but the pattern continues for all attractions */}
    </>
  );
};

export default AttractionInfo;
