// src/types/index.ts

// ===== Core content =====
export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  filter: string; // e.g. "safari" | "wildlife" | ...
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
  date: string;       // ISO date
  author: string;
  readTime: string;   // e.g. "6 min"
  relatedPosts?: string[];
}

export interface Experience {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  price?: string;
  duration?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;     // 1..5
  image?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ContactForm {
  fullName: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  newsletter: boolean;
}

// ===== Trip planner / generator =====
export interface TripPlannerData {
  travelers: {
    adults: number;
    children: number;
    childrenAges: number[];
  };
  dates: {
    startDate: string;
    endDate: string;
    flexible: boolean;
  };
  duration: number;
  interests: string[];
  budget: 'נמוך' | 'בינוני' | 'גבוה' | number;
  difficulty: 'קל' | 'בינוני' | 'מאומץ';
  accommodation: 'בסיסי' | 'בינוני' | 'יוקרתי';
  transport: 'רכב' | 'מסוק' | 'מטוס';
  specialRequests: {
    kosher: boolean;
    sabbath: boolean;
    accessibility: boolean;
    youngChildren: boolean;
  };
}

export interface ItineraryDay {
  day: number;
  title: string;
  attractions: string[];
  area: string;
  totalCost: number;
  totalDuration: number; // hours
  travelTime: number;    // hours
  reasoning: string;
  isRestDay: boolean;
}

export interface GeneratedItinerary {
  days: ItineraryDay[];
  totalCost: number;
  totalDistance: number;
  breakdown: Record<string, number>;
  summary: string;
}

export interface GeneratedTrip {
  id: string;
  title: string;
  description: string;
  image?: string;
  days: ItineraryDay[];
  totalCost: number;
  duration: number; // days
}

// ===== Parks / Wildlife pages =====
export type TravelerType = 'משפחות' | 'זוגות' | 'בודדים' | 'קבוצה';

export interface Review {
  id: string;
  author: string;
  country?: string;
  rating: number;     // 1..5
  date: string;       // ISO date
  text: string;
  travelerType?: TravelerType;
}

export type SeasonalityMap = Record<
  // he-IL 3-letter short month labels we used ("ינו","פבר",...)
  'ינו' | 'פבר' | 'מרץ' | 'אפר' | 'מאי' | 'יוני' |
  'יולי' | 'אוג' | 'ספט' | 'אוק' | 'נוב' | 'דצמ',
  number
>;

export interface Logistics {
  drive_from_kla?: string;   // e.g. "6–7 שעות"
  flight_option?: string;    // e.g. "טיסה פנימית זמינה"
  best_time?: string;        // e.g. "בוקר מוקדם"
  duration_hours?: number;   // average activity duration
}

export interface Park {
  slug: string;
  name: string;
  category: string;    // "safari" | "wildlife" | "mountains" | "water" | "culture" | ...
  area: string;        // e.g. "מערב"
  family: boolean;
  night_drive: boolean;
  boat: boolean;
  cost_est: string;    // "$" | "$$" | "$$$"
  season: string;      // human readable season text
  highlights: string[];
  combos: string[];
  summary: string;
  description: string;

  logistics: Logistics;

  gallery: string[];
  image: string;
  tags: string[];

  // Optional enrichments used by ParkDetail.tsx
  rating_avg?: number;        // e.g. 4.7
  rating_count?: number;      // e.g. 123
  reviews?: Review[];

  seasonality?: SeasonalityMap;

  nearby_ids?: string[];      // slugs of nearby parks/attractions
  lat?: number;
  lng?: number;

  // extra fields sometimes referenced
  difficulty?: 'קל' | 'בינוני' | 'קשה' | string;
  min_age?: number;           // e.g. 12
  license_cost?: string;      // e.g. "$700"
}