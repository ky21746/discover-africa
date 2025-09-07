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

    if (!lat || !lng) {
      return (
        <section className="rounded-2xl overflow-hidden border border-[#534B20]/60 bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full">
          <div className="h-full bg-gray-100 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">מפה תתווסף בקרוב</p>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="rounded-2xl overflow-hidden border border-[#534B20]/60 bg-white shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        <div className="relative cursor-pointer h-full">
          <iframe
            title={`מפה – ${park.name}`}
            className="w-full h-full rounded-xl"
            loading="lazy"
            src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng-0.1},${lat-0.1},${lng+0.1},${lat+0.1}&layer=mapnik&marker=${lat}%2C${lng}`}
          />
          
          {/* Floating info card */}
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/20">
              <h4 className="font-bold text-[#4B361C] text-sm mb-1 text-right">{park.area}</h4>
              <p className="text-gray-600 text-xs text-right">6 שעות מקמפלה | טיסה פנימית 45 דק'</p>
            </div>
          </div>
          
          {/* Custom gold marker */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative group cursor-pointer">
              <div className="w-6 h-6 bg-[#CAA131] rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
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
        <div className="relative w-full h-[30vh] md:h-[45vh] overflow-hidden group">
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
      <div className="container mx-auto max-w-screen-xl px-4 py-8 md:py-10 space-y-6">
        
        {/* הדרכה ל-Wishlist */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-[#CAA131]/50 rounded-2xl p-5 flex items-center gap-4 shadow-lg">
          <div className="bg-amber-500 text-white rounded-full p-2 flex-shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-black">בונה מסלול חכם</h3>
            <p className="text-black text-sm">הוסף חוויות למסלול שלך ואנחנו נבנה לך תכנית טיול מושלמת עם מחירים ומפת נסיעה</p>
          </div>
          <div className="flex-shrink-0">
            <Link
              to="/contact"
              className="px-6 py-2 rounded-full font-bold text-sm shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#CAA131] to-[#B8942A] text-black hover:from-[#B8942A] hover:to-[#A68525]"
            >
              הוסף מסלול
            </Link>
          </div>
        </div>

        {/* גריד מושלם מסודר */}
        <div className="space-y-6">
          {/* שורה עליונה: תיאור האטרקציה + מפה */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* תיאור האטרקציה - ריבוע רחב */}
            <div className="md:col-span-2">
              <section className="bg-gradient-to-br from-white via-gray-50 to-white border border-[#534B20]/60 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] h-full">
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-[#4B361C] mb-6 leading-tight">{park.summary || park.description.split("\n\n")[0]}</h2>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-[18px] leading-relaxed text-gray-700 font-medium">
                      {park.description}
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* מפה - ריבוע */}
            <div className="md:col-span-1">
              <MapBlock />
            </div>
          </div>

          {/* שורה שנייה: גלריה + מה תגלו בדרך */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* גלריה - ריבוע */}
            <div className="md:col-span-1">
              <section className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 border border-[#534B20]/60 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] h-full">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-3 text-[#4B361C]">
                  <MapPin className="w-5 h-5 text-[#CAA131]" />
                  גלריה
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <img
                      src={park.image}
                      alt={park.name}
                      className="w-full h-32 md:h-36 object-cover transition-transform group-hover:scale-110 duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <img
                      src={park.image}
                      alt={park.name}
                      className="w-full h-32 md:h-36 object-cover transition-transform group-hover:scale-110 duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <img
                      src={park.image}
                      alt={park.name}
                      className="w-full h-32 md:h-36 object-cover transition-transform group-hover:scale-110 duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                    <img
                      src={park.image}
                      alt={park.name}
                      className="w-full h-32 md:h-36 object-cover transition-transform group-hover:scale-110 duration-700"
                      loading="lazy"
                    />
                  </div>
                </div>
                <button className="w-full mt-6 py-4 text-[#CAA131] hover:text-white font-bold border border-[#CAA131]/50 rounded-2xl hover:bg-[#CAA131] transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl text-base">
                  צפה בכל התמונות
                </button>
              </section>
            </div>

            {/* מה תגלו בדרך - ריבוע רחב */}
            <div className="md:col-span-2">
              <section className="bg-gradient-to-br from-white via-gray-50 to-white border border-[#534B20]/60 rounded-3xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] h-full">
                <h3 className="text-xl font-bold text-[#4B361C] mb-4 border-b-2 border-[#CAA131] w-fit">מה תגלו בדרך</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {(park as any).wildlife?.map((w: string, i: number) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-gradient-to-r from-[#CAA131]/15 to-[#B8942A]/15 rounded-2xl border border-[#CAA131]/50/30 hover:shadow-xl hover:scale-105 transition-all duration-500">
                      <div className="w-4 h-4 bg-gradient-to-br from-[#CAA131] to-[#B8942A] rounded-full shadow-lg"></div>
                      <span className="text-[#4B361C] font-medium text-base">{w}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* שורה שלישית: הידעת + חשוב לדעת */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* הידעת - ריבוע קטן */}
            <div className="md:col-span-1">
              <section className="bg-gradient-to-r from-[#CAA131]/15 to-[#B8942A]/15 border border-[#CAA131]/30 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <h3 className="text-xl font-extrabold text-[#4B361C] mb-3 border-b-3 border-[#CAA131] w-fit flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  הידעת?
                </h3>
                <p className="text-base font-semibold text-[#4B361C] leading-relaxed">
                  {park.funFact || "עובדה מעניינת על הפארק הזה תופיע כאן בקרוב!"}
                </p>
              </section>
            </div>

            {/* חשוב לדעת - ריבוע רחב */}
            <div className="md:col-span-2">
              <section className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 border border-[#534B20]/60 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] h-full">
                <h3 className="text-xl font-bold text-[#4B361C] mb-4 border-b-2 border-[#CAA131] w-fit">חשוב לדעת</h3>
                <div className="bg-[#CAA131]/10 p-4 rounded-xl space-y-2">
                  <div className="text-sm font-medium text-[#4B361C] text-right">
                    רישיון: $300–450 ליום — להזמין חודשים מראש
                  </div>
                  <div className="text-sm font-medium text-[#4B361C] text-right">
                    מיקום: קרוב לגבול DRC — בדוק אזהרות מסע עדכניות
                  </div>
                  <div className="text-sm font-medium text-[#4B361C] text-right">
                    עונת השיא: מתמלאת חודשים מראש — הזמן מוקדם
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* שורה תחתונה: חוויות נוספות - מלא רוחב */}
          <div className="grid grid-cols-1 gap-6">
            <section className="bg-white border border-[#534B20]/60 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01]">
              <h3 className="text-lg font-bold text-center text-[#4B361C] mb-6">
                <div className="text-[#CAA131]">חוויות נוספות</div>
                <div>בסביבת {park.name}</div>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {nearbyParks.slice(0, 3).map((np) => (
                  <Link key={np.slug} to={`/category/${slug}/${np.slug}`}>
                    <div className="relative h-40 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-all duration-500">
                      <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${np.image})` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-500"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                          <h4 className="text-base font-extrabold text-white drop-shadow-md mb-1">{np.name}</h4>
                          <div className="text-xs text-gray-100 drop-shadow flex items-center gap-1 justify-center">
                            <span>🚗</span>
                            <span>באותו אזור</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ParkDetail;