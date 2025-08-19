// src/pages/GorillasPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Common/Breadcrumbs";

const heroImage =
  "https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg";

const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ className = "", children }) => (
  <section className={`bg-white border rounded-2xl p-5 md:p-6 shadow-sm ${className}`}>
    {children}
  </section>
);

const RowStat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-gray-50 rounded-lg p-3">
    <div className="text-gray-500 text-xs">{label}</div>
    <div className="font-medium">{value}</div>
  </div>
);

const SectionAccordion: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
  title,
  children,
  defaultOpen = false,
}) => (
  <details className="border rounded-xl bg-white p-4 open:shadow-sm" open={defaultOpen}>
    <summary className="flex items-center justify-between cursor-pointer list-none select-none">
      <span className="font-semibold">{title}</span>
      <span className="text-gray-500">▾</span>
    </summary>
    <div className="mt-3 text-gray-700">{children}</div>
  </details>
);

const GorillasPage: React.FC = () => {
  return (
    <div dir="rtl" className="fade-in">
      {/* HERO */}
      <section className="relative w-full h-[42vh] md:h-[56vh]">
        <img
          src={heroImage}
          alt="גורילה ביער בווינדי"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
          <div className="container mx-auto">
            <Breadcrumbs
              items={[
                { label: "בית", path: "/" },
                { label: "קטגוריות", path: "/categories" },
                { label: "גורילות ביער בווינדי" },
              ]}
            />
            <h1 className="mt-2 text-3xl md:text-5xl font-bold font-heebo">
              גורילות ביער Bwindi – חוויית חיים בלתי נשכחת
            </h1>
            <p className="mt-3 max-w-3xl text-sm md:text-base text-white/90 font-assistant">
              מפגש נדיר עם גורילות ההרים בסביבתן הטבעית – בטבע טרופי והררי בדרום־מערב אוגנדה.
            </p>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="container mx-auto px-4 py-10 md:py-12 space-y-8">
        {/* במבט מהיר */}
        <Card>
          <h2 className="text-xl font-bold mb-3 font-heebo">במבט מהיר</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <RowStat label="מיקום" value="דרום־מערב אוגנדה (גבול רואנדה/קונגו)" />
            <RowStat label="אופי הטרק" value="2–8 שעות (לרוב 3–5), משתנה לפי מיקום המשפחה" />
            <RowStat label="עונות מומלצות" value="יונ–ספט, דצמ–פבר (יבשות)" />
            <RowStat label="רישיון" value="≈ $700 לאדם — להזמין חודשים מראש" />
          </div>
        </Card>

        {/* תיבה צדדית קטנה + תיאור קצר */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <p className="text-lg md:text-xl leading-relaxed font-assistant">
              יער Bwindi (Bwindi Impenetrable Forest) הוא אתר מורשת עולמית של אונסק״ו, אחד האזורים הביולוגיים העשירים באפריקה
              ובית לאחת מאוכלוסיות גורילות ההרים הגדולות בעולם. כ־20 משפחות גורילות הורגלו לנוכחות מבקרים בסיורי{" "}
              <em>Gorilla Trekking</em> מודרכים, במפגש אינטימי ומכבד.
            </p>
          </Card>

          <Card className="lg:col-span-1">
            <h3 className="font-bold mb-2">עוד פרימטים וחוויות</h3>
            <div className="space-y-2 text-sm">
              <div>
                <div className="font-semibold">שימפנזים בקיבאלה</div>
                <div className="text-gray-500">סיור בוקר/צהריים ביער גשם; גיל 12+</div>
              </div>
              <div className="border-t pt-2">
                <div className="font-semibold">גורילות בפארק מגהינגה</div>
                <div className="text-gray-500">חלופה שקטה בדרום־מערב; נוף וולקני</div>
              </div>
            </div>
          </Card>
        </div>

        {/* אקורדיונים – כל הטקסט שביקשת, אחד לאחד */}
        <SectionAccordion title="חוויית הטרק" defaultOpen>
          <ul className="list-disc pr-5 space-y-1 text-sm">
            <li>המסע מתחיל בשעות הבוקר המוקדמות עם מדריכים וריינג’רים מיומנים.</li>
            <li>אורך ההליכה 1–6 שעות (לרוב 3–5), לפי מיקום המשפחה באותו יום.</li>
            <li>הדרך: יער גשם עבות, עליות/ירידות, בוץ ופלגים – מאתגר אך מתגמל.</li>
            <li>בהגעה למשפחת הגורילות — שעה שלמה לצפייה והתבוננות שקטה.</li>
          </ul>
        </SectionAccordion>

        <SectionAccordion title="מה עוד תראו בדרך?">
          <p className="text-sm">
            מלבד הגורילות: יונקים נוספים, קופים (קולובוס שחור־לבן, לעיתים שימפנזים),
            מאות מיני ציפורים (כולל אנדמיים), פרפרים נדירים וצמחייה טרופית עשירה.
          </p>
        </SectionAccordion>

        <SectionAccordion title="עונות מומלצות">
          <ul className="list-disc pr-5 space-y-1 text-sm">
            <li><strong>יוני–ספטמבר, דצמבר–פברואר:</strong> שבילים נוחים יותר; עומס ומחירים גבוהים.</li>
            <li><strong>מרץ–מאי, אוקטובר–נובמבר:</strong> בוצי ומאתגר; פחות תיירים וירוק מרשים.</li>
          </ul>
        </SectionAccordion>

        <SectionAccordion title="לינה באזור">
          <p className="text-sm">
            מגוון לודג׳ים ובתי הארחה בעיירות הסמוכות: <strong>Buhoma</strong>, <strong>Ruhija</strong>,
            <strong> Rushaga</strong>, <strong>Nkuringo</strong> — מהיוקרתיים ועד בסיסיים.
          </p>
        </SectionAccordion>

        <SectionAccordion title="טיפים חשובים">
          <ul className="list-disc pr-5 space-y-1 text-sm">
            <li>רישיון ≈ $700 לאדם — להזמין חודשים מראש.</li>
            <li>לציית להנחיות הריינג’רים; לשמור מרחק 7 מ׳; לא להביא אוכל.</li>
            <li>ציוד מומלץ: נעלי הליכה, ביגוד עמיד למים, כפפות דקות, מקלות הליכה, ציוד צילום.</li>
          </ul>
        </SectionAccordion>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Link to="/contact" className="btn-primary w-full sm:w-auto text-center">
            בדיקת זמינות / תכנון אישי
          </Link>
          <Link to="/category/gorillas-chimps" className="btn-secondary w-full sm:w-auto text-center">
            עוד חוויות גורילות ושימפנזים
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GorillasPage;