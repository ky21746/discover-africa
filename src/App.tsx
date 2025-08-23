import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import ParkDetail from "./pages/ParkDetail";
import GorillasPage from "./pages/GorillasPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Testimonials from "./pages/Testimonials";
import PlanYourTrip from "./pages/PlanYourTrip";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import AttractionPage from "./pages/AttractionPage";
import CookieBanner from "./components/CookieBanner";
import AccessibilityButton from "./components/AccessibilityButton";

// Water subcategories pages
import WaterSubcategories from "./pages/WaterSubcategories";
import WaterfallsPage from "./pages/WaterfallsPage";
import LakesPage from "./pages/LakesPage";
import RiversPage from "./pages/RiversPage";

// Legal pages imports
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import AccessibilityStatement from "./pages/legal/AccessibilityStatement";

// Wishlist imports
import { WishlistProvider } from "./contexts/WishlistContext";
import { WishlistSidebar } from "./components/Wishlist/WishlistSidebar";
import { WishlistFloatingButton } from "./components/Wishlist/WishlistFloatingButton";

// Scroll fix component
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);
  
  return null;
};

export default function App() {
  return (
    <WishlistProvider>
      <Router basename="/discover-africa">
        {/* קומפוננטה שמחזירה לראש הדף בכל מעבר עמוד */}
        <ScrollToTop />
        
        {/* באנר קוקיז - הוספתי כאן! */}
        <CookieBanner />
        <AccessibilityButton />
        <Routes>
          {/* כל הדפים נכנסים תחת ה־Layout */}
          <Route element={<Layout />}>
            {/* דף הבית */}
            <Route path="/" element={<Home />} />
            
            {/* מים - תת-קטגוריות (חייב להיות לפני category/:slug) */}
            <Route path="/water" element={<WaterSubcategories />} />
            <Route path="/water/waterfalls" element={<WaterfallsPage />} />
            <Route path="/water/lakes" element={<LakesPage />} />
            <Route path="/water/rivers" element={<RiversPage />} />
            
            {/* קטגוריות */}
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/category/:slug/:parkSlug" element={<ParkDetail />} />
            
            {/* אטרקציה דינמית */}
            <Route path="/attraction/:id" element={<AttractionPage />} />
            
            {/* עמוד סטטי ישן של גורילות (אם נדרש עדיין) */}
            <Route path="/gorillas" element={<GorillasPage />} />
            
            {/* בלוג */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            
            {/* עמודים נוספים */}
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/plan-your-trip" element={<PlanYourTrip />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* עמודים משפטיים */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/accessibility" element={<AccessibilityStatement />} />
            
            {/* ברירת מחדל – 404 חוזר לדף הבית */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        
        {/* Wishlist Components - מחוץ ל-Layout */}
        <WishlistSidebar />
        <WishlistFloatingButton />
      </Router>
    </WishlistProvider>
  );
}