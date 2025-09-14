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
    <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 border border-[#534B20]/60 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01]">
      <h2 className="text-3xl font-bold mb-8 text-[#4B361C] text-center">חשוב לדעת – פארק המלכה אליזבת</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
        {/* עונות השנה */}
        <section>
          <h3 className="text-xl font-bold text-[#CAA131] mb-4 border-b-2 border-[#CAA131] pb-2">
            עונות השנה
          </h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            אוגנדה שוכנת על קו המשווה, הטמפרטורות יציבות כל השנה וההבדל העיקרי הוא בכמות הגשמים.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>עונות יבשות (דצמבר–פברואר, יוני–אוגוסט): בעלי החיים מתרכזים סביב מקורות מים, הדרכים נוחות יותר והצפייה קלה.</li>
            <li>עונות גשומות (מרץ–מאי, ספטמבר–נובמבר): נופים ירוקים ועשירים, צפרות מצוינת, אך הדרכים חלקלקות.</li>
          </ul>
        </section>

        {/* נסיעה והגעה */}
        <section>
          <h3 className="text-xl font-bold text-[#CAA131] mb-4 border-b-2 border-[#CAA131] pb-2">
            נסיעה והגעה
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>ברכב: כ־6–7 שעות מקמפלה דרך פורט פורטל או מסאקה.</li>
            <li>בטיסה: טיסות פנימיות עם Bar Aviation מאנטבה או קאג'אנסי (כשעה טיסה).</li>
          </ul>
        </section>

        {/* שערי כניסה */}
        <section>
          <h3 className="text-xl font-bold text-[#CAA131] mb-4 border-b-2 border-[#CAA131] pb-2">
            שערי כניסה
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Katunguru – שער מרכזי סמוך לתעלת קזינגה.</li>
            <li>Kichwamba – שער מזרחי קרוב למכתשי הלבה.</li>
            <li>Ishasha – שער דרומי לאזור האריות המטפסים.</li>
          </ul>
        </section>

        {/* חוויות ייחודיות */}
        <section>
          <h3 className="text-xl font-bold text-[#CAA131] mb-4 border-b-2 border-[#CAA131] pb-2">
            חוויות ייחודיות
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>אריות מטפסי עצים – תופעה נדירה באזור איששה.</li>
            <li>שייט בתעלת קזינגה – צפייה בהיפופוטמים, תנינים, פילים ועופות מים.</li>
            <li>צפרות עשירה – מעל 600 מיני עופות ייחודיים.</li>
            <li>שימפנזים בקיאמבורה – מסלול רגלי מודרך ביער השקע.</li>
          </ul>
        </section>

        {/* משך שהות מומלץ */}
        <section>
          <h3 className="text-xl font-bold text-[#CAA131] mb-4 border-b-2 border-[#CAA131] pb-2">
            משך שהות מומלץ
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>מינימום: יום אחד לספארי קצר או לשייט.</li>
            <li>מומלץ: 2–3 לילות לשילוב ספארי, שייט ושימפנזים.</li>
            <li>מורחב: 4–5 לילות לחוויה מלאה.</li>
          </ul>
        </section>

        {/* הידעת? */}
        <section>
          <h3 className="text-xl font-bold text-[#CAA131] mb-4 border-b-2 border-[#CAA131] pb-2">
            הידעת?
          </h3>
          <div className="text-gray-800 leading-relaxed space-y-2">
            <p>פארק המלכה אליזבת נקרא על שמה.</p>
            <p>מאכלס את אוכלוסיית ההיפופוטמים הגדולה באפריקה.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AttractionInfoGrid;