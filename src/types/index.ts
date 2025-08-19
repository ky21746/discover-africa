export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  filter: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
  date: string;
  author: string;
  readTime: string;
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
  rating: number;
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
  totalDuration: number;
  travelTime: number;
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
  duration: number;
}