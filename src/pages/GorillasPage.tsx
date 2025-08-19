// src/pages/GorillasPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../components/Common/Breadcrumbs";

const heroImage =
  "https://images.pexels.com/photos/6194629/pexels-photo-6194629.jpeg";

const gallery = [
  "https://images.pexels.com/photos/33535/gorilla-primate-silverback-close-up.jpg",
  "https://images.pexels.com/photos/1670737/pexels-photo-1670737.jpeg",
  "https://images.pexels.com/photos/145939/pexels-photo-145939.jpeg",
  "https://images.pexels.com/photos/210012/pexels-photo-210012.jpeg",
];

const Stat: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-gray-50 rounded-lg p-3">
    <div className="text-gray-500 text-xs">{label}</div>
    <div className="font-medium">{value}</div>
  </div>
);

const Section: React.FC<React.PropsWithChildren<{ title: string; open?: boolean }>> = ({
  title,
  open = false,
  children,
}) => (
  <details className="border rounded-xl bg-white p-4 open:shadow-sm" open={open}>
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
            <h1 className="mt-2 text-3xl md:text-5xl font-bold">
              גורילות ביער Bwindi – חוויית חיים בלתי נשכחת
            </h1>
            <p className="mt-3 max-w-3xl text-sm md:text-base text-white/90">
              מפגש נדיר עם גורילות ההרים בסביבתן הטבעית – בטבע טרופי והררי בדרום־מערב אוגנדה.
            </p>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="container mx-auto px-4 py-10 md:py-12 space-y-8">
        {/* במבט מהיר */}
        <section className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-3">במבט מהיר</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <Stat label="מיקום" value="דרום־מערב אוגנדה (גבול רואנדה/קונגו)" />
            <Stat label="אופי הטרק" value="2–8 שעות (לרוב 3–5), תלוי במיקום המשפחה" />
            <Stat label="עונות מומלצות" value="יונ–ספט, דצמ–פבר (יבשות)" />
            <Stat label="רישיון" value="≈ ‎$700 לאדם — להזמין חודשים מראש" />
          </div>
        </section>

        {/* פתיח + תיבה צדדית */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm lg:col-span-2">
            <p className="text-lg md:text-xl leading-relaxed">
              יער Bwindi (Bwindi Impenetrable Forest) הוא אתר מורשת עולמית של אונסק״ו, אחד האזורים
              הביולוגיים העשירים באפריקה ובית לאחת מאוכלוסיות גורילות ההרים הגדולות בעולם. כ־20 משפחות
              גורילות הורגלו לנוכחות מבקרים בסיורי <em>Gorilla Trekking</em> מודרכים — מפגש אינטימי, מכבד ומרגש.
            </p>
          </section>

          <section className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm">
            <h3 className="font-bold mb-2">עוד פרימטים וחוויות</h3>
            <div className="space-y-2 text-sm">
              <div>
                <div className="font-semibold">שימפנזים בקיבאלה</div>
                <div className="text-gray-500">סיור בוקר/צהריים ביער גשם; גיל 12+</div>
              </div>
              <div className="border-t pt-2">
                <div className="font-semibold">גורילות במגהינגה</div>
                <div className="text-gray-500">חלופה שקטה לבווינדי; נוף וולקני</div>
              </div>
              <Link to="/contact" className="btn-secondary mt-3 inline-flex w-full justify-center">
                נתפור לכם מסלול סביב פרימטים
              </Link>
            </div>
          </section>
        </div>

        {/* אקורדיונים — כל המידע שביקשת */}
        <Section title="חוויית הטרק" open>
          <ul className="list-disc pr-5 space-y-1 text-sm">
            <li>המסע מתחיל בשעות הבוקר המוקדמות עם מדריכים וריינג’רים מיומנים.</li>
            <li>אורך ההליכה 1–6 שעות (לרוב 3–5), לפי מיקום המשפחה באותו יום.</li>
            <li>תוואי יער גשם: עליות/ירידות, בוץ ופלגים – מאתגר אך מתגמל.</li>
            <li>בהגעה למשפחה — שעה שלמה לצפייה שקטה: משחקי גורים, אינטראקציות וסילברבקים.</li>
          </ul>
        </Section>

        <Section title="מה עוד תראו בדרך?">
          <p className="text-sm">
            מעבר לגורילות: יונקים נוספים, קופים (קולובוס שחור־לבן ולעיתים שימפנזים),
            מאות מיני ציפורים (כולל אנדמיים), פרפרים נדירים וצמחייה טרופית עשירה.
          </p>
        </Section>

        <Section title="עונות מומלצות">
          <ul className="list-disc pr-5 space-y-1 text-sm">
            <li><strong>יוני–ספטמבר, דצמבר–פברואר:</strong> שבילים נוחים יותר; עומס ומחירים גבוהים.</li>
            <li><strong>מרץ–מאי, אוקטובר–נובמבר:</strong> בוצי ומאתגר; פחות תיירים, יער ירוק ומרשים.</li>
          </ul>
        </Section>

        <Section title="לינה באזור">
          <p className="text-sm">
            מגוון לודג׳ים ובתי הארחה בעיירות הסמוכות: <strong>Buhoma</strong>, <strong>Ruhija</strong>,
            <strong> Rushaga</strong>, <strong>Nkuringo</strong> — מהיוקרתיים ועד בסיסיים. נתאים יחד לפי תקציב וסקטור הטרק.
          </p>
        </Section>

        <Section title="טיפים חשובים">
          <ul className="list-disc pr-5 space-y-1 text-sm">
            <li>רישיון ≈ ‎$700 לאדם — להזמין חודשים מראש.</li>
            <li>לציית להנחיות הריינג’רים; לשמור מרחק 7 מ׳; אין אוכל בקרבת גורילות.</li>
            <li>ציוד: נעלי הליכה טובות, ביגוד עמיד למים, כפפות דקות, מקלות הליכה, ציוד צילום.</li>
          </ul>
        </Section>

        {/* גלריה */}
        <section>
          <h2 className="text-xl font-bold mb-3">גלריה</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {gallery.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden border bg-white">
                <img src={src} alt={`Bwindi ${i + 1}`} className="w-full h-40 md:h-44 object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* מפה (סטטית ועדינה) */}
        <section className="rounded-2xl overflow-hidden border bg-white">
          <iframe
            title="מפת Bwindi"
            className="w-full h-72"
            loading="lazy"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=29.4%2C-1.3%2C30.2%2C-0.7&layer=mapnik&marker=-1.05%2C29.75`}
          />
        </section>

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