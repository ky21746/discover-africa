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
  
  // Fun fact for "הידעת?" section
  funFact?: string;
  
  // Important information for "חשוב לדעת" section
  importantInfo?: string[];
}
// Gallery item type
export interface GalleryItem {
  src: string;
  title: string;
  description: string;
}

// Extended Attraction with mock data for demo
export type AttractionWithMock = Attraction & {
  rating?: number;
  reviewCount?: number;
  price?: string;
};

// ===== Attractions (new unified type) =====
export interface Attraction {
  id: string;                 // למשל "gorillas-bwindi"
  slug?: string;              // אופציונלי, לשימוש ב־URL (אם יש מעדיפים אותו על id)
  name: string;
  subtitle?: string;          // הוספה חדשה - כותרת משנה
  category: string;           // e.g. "safari" | "gorillas-chimps"
  region?: string;

  description: string;
  highlights?: string[];
  duration?: string;
  difficulty?: string;
  bestSeason?: string;
  permitCost?: string;
  minAge?: number;

  wildlife?: string[];
  howToGetThere?: string[];
  whatToBring?: string[];
  healthSafety?: string[];
  accommodation?: string[];
  nearby?: string[];
  whyUs?: string[];
  valueAdd?: string[];

  gallery?: (string | GalleryItem)[];  // תמיכה במבנה ישן (string) וחדש (GalleryItem)
  image?: string;             // אופציונלי, בשימוש ב-AttractionPage כ-fallback לתמונה
  
  // Hero section customization
  heroHeight?: {
    mobile?: string;          // e.g. "40vh", "50vh", "60vh"
    desktop?: string;         // e.g. "50vh", "60vh", "70vh"
  };

  // Fun fact for "הידעת?" section
  funFact?: string;
  
  // Important information for "חשוב לדעת" section
  importantInfo?: string[];
  
  // Coordinates for map
  coordinates?: {
    lat: number;
    lng: number;
  };
  
  // Info Grid data for AttractionInfoGrid component
  infoGrid?: {
    seasons?: string[];
    access?: string[];
    gates?: string[];
    experiences?: string[];
    duration?: string[];
    didYouKnow?: string[];
  };
}