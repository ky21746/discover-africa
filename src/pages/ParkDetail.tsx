// src/pages/ParkDetail.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Gauge,
  Baby,
  Ticket,
  Star,
  ChevronDown,
} from "lucide-react";
import Breadcrumbs from "../components/Common/Breadcrumbs";
import Card from "../components/Common/Card";
import { getParkBySlug, getRelatedParks, getParkBySlug as findPark } from "../data/parks";
import { categories } from "../data/categories";

type TravelerType = "משפחות" | "זוגות" | "בודדים" | "קבוצה";

const ParkDetail: React.FC = () => {
  // התאמה למסלול: /category/:slug/:parkSlug
  const { slug, parkSlug } = useParams<{ slug: string; parkSlug: string }>();
  const park = getParkBySlug(parkSlug || "");

  // איתור הקטגוריה להצגת פירורי לחם
  const category = categories.find((cat: any) => {
    const kebab = cat.name.toLowerCase().replace(/\s+/g, "-");
    return (cat.slug ? cat.slug === slug : kebab === slug);
  });

  if (!park || !category) {
    return (
      <div className="py-20 text-center" dir="rtl">
        <h1 className="text-4xl font-bold mb-4 font-sans">עמוד לא נמצא</h1>
        <Link to="/categories" className="btn-primary">
          חזרה לקטגוריות
        </Link>
      </div>
    );
  }

  // ===== Helpers =====
  const hasReviews = typeof (park as any).rating_avg === "number" && typeof (park as any).rating_count === "number";
  const reviews = ((park as any).reviews ?? []) as Array<{
    id: string;
    author: string;
    country?: string;
    rating: number;
    date: string;
    text: string;
    travelerType?: TravelerType;
  }>;

  const seasonality = (park as any).seasonality as Record<string, number> | undefined;

  // אטרקציות קרובות עד 3 שעות (אם קיימות בנתונים)
  const nearbyIds = ((park as any).nearby_ids ?? []) as string[];
  const nearbyParks = nearbyIds
    .map((id) => findPark(id))
    .filter(Boolean) as NonNullable<ReturnType<typeof findPark>>[];

  // ===== Components (inline to keep file self-contained) =====
  const AtAGlance: React.FC = () => {
    const difficulty = (park as any).difficulty as string | undefined;
    const minAge = (park as any).min_age as number | undefined;
    const licenseCost = (park as any).license_cost as string | undefined;
    const durationHrs = park.logistics?.duration_hours as number | undefined;

    const items: Array<{
      icon: React.ReactNode;
      label: string;
      value?: React.ReactNode;
    }> = [
      { icon: <MapPin className="w-5 h-5" />, label: "אזור", value: park.area },
      { icon: <Calendar className="w-5 h-5" />, label: "עונה מומלצת", value: park.season },
      { icon: <Gauge className="w-5 h-5" />, label: "רמת קושי", value: difficulty },
      { icon: <DollarSign className="w-5 h-5" />, label: "עלות/רישיון", value: licenseCost ?? park.cost_est },
      { icon: <Users className="w-5 h-5" />, label: "למשפחות", value: park.family ? "כן" : "לא" },
      { icon: <Baby className="w-5 h-5" />, label: "גיל מינימום", value: typeof minAge === "number" ? minAge : undefined },
      { icon: <Ticket className="w-5 h-5" />, label: "משך פעילות", value: durationHrs ? `${durationHrs} שעות` : undefined },
    ];

    const visible = items.filter((i) => i.value !== undefined && i.value !== "");

    return (
      <section className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-4 font-sans">במבט מהיר</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visible.map((it, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
              <div className="shrink-0 text-primary">{it.icon}</div>
              <div className="leading-tight">
                <div className="text-xs text-gray-500">{it.label}</div>
                <div className="text-sm font-medium">{it.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const ShortHook: React.FC = () => (
    <section>
      <p className="text-lg md:text-xl leading-relaxed font-sans">
        {park.summary || park.description.split("\n\n")[0].slice(0, 260)}
      </p>
    </section>
  );

  const Stars: React.FC<{ value: number }> = ({ value }) => {
    const full = Math.round(value);
    return (
      <div className="flex items-center gap-1" aria-label={`Rating ${value} out of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < full ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
    );
  };

  const ReviewsBlock: React.FC = () => {
    if (!hasReviews) return null;
    const avg = (park as any).rating_avg as number;
    const count = (park as any).rating_count as number;

    return (
      <section className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold font-sans">חוות דעת</h2>
          <div className="flex items-center gap-2">
            <Stars value={avg} />
            <span className="text-sm text-gray-600">{avg.toFixed(1)} · {count} ביקורות</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.slice(0, 4).map((r) => (
            <div key={r.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-1">
                <div className="font-semibold">{r.author}{r.country ? ` · ${r.country}` : ""}</div>
                <Stars value={r.rating} />
              </div>
              <div className="text-xs text-gray-500 mb-2">{new Date(r.date).toLocaleDateString("he-IL")}{r.travelerType ? ` · ${r.travelerType}` : ""}</div>
              <p className="text-sm text-gray-700">{r.text}</p>
            </div>
          ))}
        </div>

        {reviews.length > 4 && (
          <div className="text-center mt-4">
            <Link to="/testimonials" className="btn-secondary">קרא עוד ביקורות</Link>
          </div>
        )}
      </section>
    );
  };

  // עונתיות (בר פשוט ללא ספריות צ'ארט)
  const SeasonalityBar: React.FC = () => {
    if (!seasonality) return null;
    const monthsHe = ["ינו", "פבר", "מרץ", "אפר", "מאי", "יוני", "יולי", "אוג", "ספט", "אוק", "נוב", "דצמ"];
    const values = monthsHe.map((m) => seasonality[m] ?? 0);
    const max = Math.max(1, ...values);

    return (
      <div>
        <div className="flex items-end gap-2 h-24">
          {values.map((v, i) => {
            const h = Math.round((v / max) * 96); // עד 24*4px
            return (
              <div key={i} className="flex flex-col items-center">
                <div
                  className="w-5 rounded-t bg-primary/80"
                  style={{ height: `${h}px` }}
                  title={`${monthsHe[i]}: ${v}/5`}
                />
                <div className="text-[10px] mt-1 text-gray-500">{monthsHe[i]}</div>
              </div>
            );
          })}
        </div>
        <div className="text-xs text-gray-500 mt-2">ציון התאמה לפי חודשים (0–5)</div>
      </div>
    );
  };

  // אקורדיון נייטיב לנגישות
  const SectionAccordion: React.FC<{ title: string; children: React.ReactNode; defaultOpen?: boolean }> = ({
    title,
    children,
    defaultOpen = false,
  }) => (
    <details className="border rounded-lg bg-white p-4 open:shadow-sm" open={defaultOpen}>
      <summary className="flex items-center justify-between cursor-pointer list-none select-none">
        <span className="font-semibold">{title}</span>
        <ChevronDown className="w-5 h-5 text-gray-500 transition-transform details-open:rotate-180" />
      </summary>
      <div className="mt-3 text-gray-700">{children}</div>
    </details>
  );

  const PracticalContent: React.FC = () => (
    <section className="space-y-4">
      <SectionAccordion title="החוויה" defaultOpen>
        <p className="font-sans leading-relaxed">
          {/* 4–5 שורות טקסט קצרות, את הארוך כבר הצגנו בפסקאות */}
          {park.description.split("\n\n")[0]}
        </p>
        {Array.isArray(park.highlights) && park.highlights.length > 0 && (
          <div className="mt-3">
            <div className="mb-2 text-sm text-muted">מה מצפים לראות:</div>
            <div className="flex flex-wrap gap-1">
              {park.highlights.slice(0, 6).map((h, i) => (
                <span key={i} className="rounded bg-surface px-2 py-1 text-xs">
                  {h}
                </span>
              ))}
            </div>
          </div>
        )}
      </SectionAccordion>

      <SectionAccordion title="חיות וטבע">
        <p className="font-sans leading-relaxed">
          {park.highlights?.length
            ? `האזור ידוע ב: ${park.highlights.join(" · ")}.`
            : "חיות וצמחייה ייחודיות לאזור זה."}
        </p>
      </SectionAccordion>

      <SectionAccordion title="תכנון הטיול">
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-1">איך מגיעים</h4>
            {park.logistics?.drive_from_kla && (
              <p className="text-sm"><strong>נסיעה מקמפלה:</strong> {park.logistics.drive_from_kla}</p>
            )}
            {park.logistics?.flight_option && (
              <p className="text-sm"><strong>אפשרות טיסה:</strong> {park.logistics.flight_option}</p>
            )}
          </div>

          <div>
            <h4 className="font-semibold mb-1">עונות מומלצות</h4>
            <p className="text-sm mb-3">{park.season}</p>
            <SeasonalityBar />
          </div>

          <div>
            <h4 className="font-semibold mb-1">עלויות ורישיונות</h4>
            <p className="text-sm">
              {(park as any).license_cost
                ? (park as any).license_cost
                : `הערכת עלות: ${park.cost_est}`}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-1">מה לארוז</h4>
            <ul className="text-sm list-disc pr-4 space-y-1">
              <li>לבוש ניטרלי ונוח</li>
              <li>מעיל גשם קל ונעלי הליכה</li>
              {park.boat && <li>ביגוד להחלפה לשייט</li>}
              <li>תרסיס נגד יתושים ומסנן קרינה</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-1">בטיחות ובריאות</h4>
            <ul className="text-sm list-disc pr-4 space-y-1">
              <li>לפעול לפי הנחיות המדריכים</li>
              <li>שמירה על מרחק מכבד מחיות בר</li>
              <li>מים, כובע, הפסקות מנוחה</li>
            </ul>
          </div>
        </div>
      </SectionAccordion>

      <SectionAccordion title="איפה לישון">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Placeholder—תוכל להחליף לנתוני לודג'ים כשיהיו */}
          <div className="border rounded-lg p-4">
            <div className="font-semibold">Lodge Example A</div>
            <div className="text-sm text-gray-600">טווח מחיר: $$$ · דירוג: 4.7</div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="font-semibold">Lodge Example B</div>
            <div className="text-sm text-gray-600">טווח מחיר: $$ · דירוג: 4.5</div>
          </div>
        </div>
      </SectionAccordion>

      <SectionAccordion title="מסלולים משלימים">
        <p className="text-sm text-gray-700">
          ניתן לשלב עם חוויות סמוכות ואזורי טבע נוספים. ראו גם “אטרקציות קרובות” בהמשך העמוד.
        </p>
      </SectionAccordion>
    </section>
  );

  const MapBlock: React.FC = () => {
    const lat = (park as any).lat as number | undefined;
    const lng = (park as any).lng as number | undefined;
    if (!lat || !lng) return null;
    const src = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.3}%2C${lat - 0.3}%2C${lng + 0.3}%2C${lat + 0.3}&layer=mapnik&marker=${lat}%2C${lng}`;
    return (
      <section className="rounded-2xl overflow-hidden border bg-white">
        <iframe
          title={`${park.name} map`}
          src={src}
          className="w-full h-80"
          loading="lazy"
        />
      </section>
    );
  };

  const NearbyGrid: React.FC = () => {
    if (!nearbyParks.length) return null;
    return (
      <section>
        <h2 className="text-2xl font-bold mb-4 font-sans">אטרקציות קרובות (עד ~3 שעות)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nearbyParks.map((np) => (
            <Card key={np.slug} className="hover:shadow-lg transition-all duration-300">
              <div
                className="card-image"
                style={{ backgroundImage: `url(${np.image})` }}
              />
              <div className="card-content">
                <h3 className="text-lg font-semibold mb-2 font-sans">{np.name}</h3>
                <p className="text-sm text-muted mb-4 font-sans">
                  {np.summary}
                </p>
                <div className="card-footer">
                  <Link to={`/category/${slug}/${np.slug}`} className="btn-primary w-full">
                    גלה עוד
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    );
  };

  // ===== Render =====
  return (
    <div className="fade-in" dir="rtl">
      {/* HERO */}
      <section className="relative">
        <div className="relative w-full h-[55vh] md:h-[65vh]">
          <img
            src={park.image}
            alt={park.name}
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
                  { label: category.name, path: `/category/${slug}` },
                  { label: park.name },
                ]}
              />
              <h1 className="text-3xl md:text-5xl font-bold font-sans mt-2">
                {park.name}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1 bg-white/15 backdrop-blur rounded-full px-3 py-1 text-sm">
                  <MapPin className="w-4 h-4" /> {park.area}
                </span>
                {hasReviews && (
                  <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur rounded-full px-3 py-1 text-sm">
                    <Stars value={(park as any).rating_avg} />
                    {(park as any).rating_avg?.toFixed(1)} · {(park as any).rating_count} ביקורות
                  </span>
                )}
                <Link to="/contact" className="ml-auto btn-primary">
                  בדיקת זמינות / תכנון אישי
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <div className="container mx-auto px-4 py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT (main) */}
          <div className="lg:col-span-2 space-y-8">
            <AtAGlance />
            <ShortHook />
            <ReviewsBlock />
            {/* תוכן פרקטי (אקורדיונים) */}
            <PracticalContent />
            {/* מפה (אם יש lat/lng) */}
            <MapBlock />
            {/* קרוב אליך */}
            <NearbyGrid />
          </div>

          {/* RIGHT (sidebar sticky) */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="bg-primary text-white rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-1 font-sans">מוכנים להתחיל?</h3>
                <p className="text-sm opacity-90 mb-4">
                  דברו איתנו ונבנה לכם מסלול מותאם אישית.
                </p>
                <Link
                  to="/contact"
                  className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block w-full text-center"
                >
                  בקשת הצעה
                </Link>
              </div>

              {/* “עוד ב{קטגוריה}” */}
              {getRelatedParks(park, 3).length > 0 && (
                <div className="bg-white border rounded-2xl p-5">
                  <h4 className="font-semibold mb-3 font-sans">עוד ב{category.name}</h4>
                  <div className="space-y-3">
                    {getRelatedParks(park, 3).map((rp) => (
                      <Link
                        key={rp.slug}
                        to={`/category/${slug}/${rp.slug}`}
                        className="flex gap-3 group"
                      >
                        <div
                          className="w-16 h-16 rounded-lg bg-cover bg-center shrink-0"
                          style={{ backgroundImage: `url(${rp.image})` }}
                        />
                        <div className="min-w-0">
                          <div className="font-medium group-hover:text-primary transition-colors">{rp.name}</div>
                          <div className="text-xs text-gray-500 line-clamp-2">{rp.summary}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* Sticky CTA (mobile only) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 md:hidden">
        <div className="backdrop-blur bg-white/90 border-t px-4 py-3">
          <Link to="/contact" className="btn-primary w-full text-center block">
            בדיקת זמינות / תכנון אישי
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ParkDetail;