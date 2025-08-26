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
        <h3 className="font-semibold font-sans">{title}</h3>
        <ChevronDown className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" />
      </summary>
      <div className="mt-4 pt-4 border-t">{children}</div>
    </details>
  );

  // תוכן פרקטי (אקורדיונים)
  const PracticalContent: React.FC = () => {
    const wildlife = (park as any).wildlife as string[] | undefined;
    const howToGetThere = (park as any).howToGetThere as string[] | undefined;
    const whatToBring = (park as any).whatToBring as string[] | undefined;
    const healthSafety = (park as any).healthSafety as string[] | undefined;
    const accommodation = (park as any).accommodation as string[] | undefined;
    const nearby = (park as any).nearby as string[] | undefined;
    const whyUs = (park as any).whyUs as string[] | undefined;
    const valueAdd = (park as any).valueAdd as string[] | undefined;

    return (
      <div className="space-y-4">
        {wildlife && (
          <SectionAccordion title="חיות בר" defaultOpen>
            <ul className="space-y-2">
              {wildlife.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionAccordion>
        )}

        {howToGetThere && (
          <SectionAccordion title="איך להגיע">
            <ul className="space-y-2">
              {howToGetThere.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionAccordion>
        )}

        {whatToBring && (
          <SectionAccordion title="מה להביא">
            <ul className="space-y-2">
              {whatToBring.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionAccordion>
        )}

        {healthSafety && (
          <SectionAccordion title="בריאות ובטיחות">
            <ul className="space-y-2">
              {healthSafety.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionAccordion>
        )}

        {accommodation && (
          <SectionAccordion title="לינה">
            <ul className="space-y-2">
              {accommodation.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionAccordion>
        )}

        {nearby && (
          <SectionAccordion title="בסביבה">
            <ul className="space-y-2">
              {nearby.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionAccordion>
        )}

        {whyUs && (
          <SectionAccordion title="למה איתנו">
            <ul className="space-y-2">
              {whyUs.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionAccordion>
        )}

        {valueAdd && (
          <SectionAccordion title="ערך מוסף">
            <ul className="space-y-2">
              {valueAdd.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </SectionAccordion>
        )}

        {/* עונתיות */}
        {seasonality && (
          <SectionAccordion title="עונתיות">
            <SeasonalityBar />
          </SectionAccordion>
        )}
      </div>
    );
  };

  // מפה (אם יש lat/lng)
  const MapBlock: React.FC = () => {
    const lat = (park as any).lat as number | undefined;
    const lng = (park as any).lng as number | undefined;

    if (!lat || !lng) return null;

    return (
      <section className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-4 font-sans">מיקום</h2>
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600">מפה תתווסף בקרוב</p>
            <p className="text-sm text-gray-500">קואורדינטות: {lat}, {lng}</p>
          </div>
        </div>
      </section>
    );
  };

  // אטרקציות קרובות
  const NearbyGrid: React.FC = () => {
    if (nearbyParks.length === 0) return null;

    return (
      <section className="bg-white border rounded-2xl p-5 md:p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-4 font-sans">קרוב אליך</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nearbyParks.map((np) => (
            <Link
              key={np.slug}
              to={`/category/${slug}/${np.slug}`}
              className="block group"
            >
              <div className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div
                  className="w-full h-32 bg-cover bg-center"
                  style={{ backgroundImage: `url(${np.image})` }}
                />
                <div className="p-4">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">{np.name}</h3>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{np.summary}</p>
                  {np.tags && np.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {np.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Link>
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
        <div className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden group">
          <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-700 ease-out">
            <img
              src={park.image}
              alt={park.name}
              className="w-full h-full object-cover object-center"
              loading="eager"
            />
          </div>
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

              {/* "עוד ב{קטגוריה}" */}
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
    </div>
  );
};

export default ParkDetail;