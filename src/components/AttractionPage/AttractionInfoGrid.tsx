import React from 'react';

// Type definitions for the info grid data
export interface AttractionInfoGridData {
  seasons?: string[];
  access?: string[];
  gates?: string[];
  experiences?: string[];
  duration?: string[];
  didYouKnow?: string[];
}

interface AttractionInfoGridProps {
  data: AttractionInfoGridData;
}

const AttractionInfoGrid: React.FC<AttractionInfoGridProps> = ({ data }) => {
  return (
    <div className="bg-white border border-[#534B20]/60 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500">
      <h2 className="text-3xl font-bold mb-6 text-[#4B361C] text-center">חשוב לדעת – פארק המלכה אליזבת</h2>
      
      {/* גריד ראשי - 6 מקטעים */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* עמודה שמאלית */}
        <div className="space-y-4">
          {/* עונות השנה */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h3 className="text-xl font-bold text-black mb-3 border-b border-[#C9A34E] pb-2 text-right">עונות השנה</h3>
            <div className="text-gray-800 text-right" style={{ lineHeight: '1.5' }}>
              <p className="mb-2">אוגנדה שוכנת על קו המשווה, הטמפרטורות יציבות כל השנה וההבדל העיקרי הוא בכמות הגשמים.</p>
              <ul className="list-disc list-inside text-right">
                <li className="mb-1">עונות יבשות (דצמבר–פברואר, יוני–אוגוסט): בעלי החיים מתרכזים סביב מקורות מים, הדרכים נוחות יותר והצפייה קלה.</li>
                <li>עונות גשומות (מרץ–מאי, ספטמבר–נובמבר): נופים ירוקים ועשירים, צפרות מצוינת, אך הדרכים חלקלקות.</li>
              </ul>
            </div>
          </div>

          {/* נסיעה והגעה */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h3 className="text-xl font-bold text-black mb-3 border-b border-[#C9A34E] pb-2 text-right">נסיעה והגעה</h3>
            <div className="text-gray-800 text-right" style={{ lineHeight: '1.5' }}>
              <ul className="list-disc list-inside text-right">
                <li className="mb-1">ברכב: כ־6–7 שעות מקמפלה דרך פורט פורטל או מסאקה.</li>
                <li>בטיסה: טיסות פנימיות עם Bar Aviation מאנטבה או קאג'אנסי (כשעה טיסה).</li>
              </ul>
            </div>
          </div>

          {/* שערי כניסה */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h3 className="text-xl font-bold text-black mb-3 border-b border-[#C9A34E] pb-2 text-right">שערי כניסה</h3>
            <div className="text-gray-800 text-right" style={{ lineHeight: '1.5' }}>
              <ul className="list-disc list-inside text-right">
                <li className="mb-1">Katunguru – שער מרכזי סמוך לתעלת קזינגה.</li>
                <li className="mb-1">Kichwamba – שער מזרחי קרוב למכתשי הלבה.</li>
                <li>Ishasha – שער דרומי לאזור האריות המטפסים.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* עמודה ימנית */}
        <div className="space-y-4">
          {/* משך שהות מומלץ */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h3 className="text-xl font-bold text-black mb-3 border-b border-[#C9A34E] pb-2 text-right">משך שהות מומלץ</h3>
            <div className="text-gray-800 text-right" style={{ lineHeight: '1.5' }}>
              <ul className="list-disc list-inside text-right">
                <li className="mb-1">מינימום: יום אחד לספארי קצר או לשייט.</li>
                <li className="mb-1">מומלץ: 2–3 לילות לשילוב ספארי, שייט ושימפנזים.</li>
                <li>מורחב: 4–5 לילות לחוויה מלאה.</li>
              </ul>
            </div>
          </div>

          {/* חוויות ייחודיות */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h3 className="text-xl font-bold text-black mb-3 border-b border-[#C9A34E] pb-2 text-right">חוויות ייחודיות</h3>
            <div className="text-gray-800 text-right" style={{ lineHeight: '1.5' }}>
              <ul className="list-disc list-inside text-right">
                <li className="mb-1">אריות מטפסי עצים – תופעה נדירה באזור איששה.</li>
                <li className="mb-1">שייט בתעלת קזינגה – צפייה בהיפופוטמים, תנינים, פילים ועופות מים.</li>
                <li className="mb-1">צפרות עשירה – מעל 600 מיני עופות ייחודיים.</li>
                <li>שימפנזים בקיאמבורה – מסלול רגלי מודרך ביער השקע.</li>
              </ul>
            </div>
          </div>

          {/* הידעת? */}
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h3 className="text-xl font-bold text-black mb-3 border-b border-[#C9A34E] pb-2 text-right">הידעת?</h3>
            <div className="text-gray-800 text-right" style={{ lineHeight: '1.5' }}>
              <ul className="list-disc list-inside text-right">
                <li className="mb-1">פארק המלכה אליזבת נקרא על שמה של המלכה אליזבת השנייה.</li>
                <li className="mb-1">מאכלס את אוכלוסיית ההיפופוטמים הגדולה באפריקה.</li>
                <li className="mb-1">הפארק הוכרז כשמורת טבע בשנת 1952.</li>
                <li>משתרע על שטח של כ-1,978 קמ"ר.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttractionInfoGrid;