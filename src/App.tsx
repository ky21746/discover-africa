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
import WhoWeAre from "./pages/WhoWeAre";
import PlanYourTrip from "./pages/PlanYourTrip";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import AttractionPage from "./pages/AttractionPage";
import ToursPage from "./pages/ToursPage";
import Tour1Day from "./pages/tours/Tour1Day";
import Tour5Days from "./pages/tours/Tour5Days";
import Tour10Days from "./pages/tours/Tour10Days";
import Tour11Days from "./pages/tours/Tour11Days";
import CookieBanner from "./components/CookieBanner";
import WhatsAppFloat from "./components/WhatsAppFloat";

// Water subcategories pages
import WaterSubcategories from "./pages/WaterSubcategories";
import WaterfallsPage from "./pages/WaterfallsPage";

// Safari page
import SafariPage from "./pages/SafariPage";

// Water page
import WaterPage from "./pages/WaterPage";

// Mountains page
import MountainsPage from "./pages/MountainsPage";

// Extreme page
import ExtremePage from "./pages/ExtremePage";

// Legal pages imports
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import AccessibilityStatement from "./pages/legal/AccessibilityStatement";

// Services pages imports
import OurServices from "./pages/services/OurServices";
import BarAviation from "./pages/services/BarAviation";
import BarSOS from "./pages/services/BarSOS";
import ExtremePark from "./pages/services/ExtremePark";

// Wishlist imports
import { WishlistProvider } from "./contexts/WishlistContext";
import { WishlistSidebar } from "./components/Wishlist/WishlistSidebar";

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
      {/* שינוי יחיד: basename="/" במקום "/discover-africa" */}
      <Router basename="/">
        {/* קומפוננטה שמחזירה לראש הדף בכל מעבר עמוד */}
        <ScrollToTop />
        
        {/* באנר קוקיז - הוספתי כאן! */}
        <CookieBanner />
        <WhatsAppFloat />
        <Routes>
          {/* כל הדפים נכנסים תחת ה־Layout */}
          <Route element={<Layout />}>
            {/* דף הבית */}
            <Route path="/" element={<Home />} />
            
            {/* קטגוריות נפרדות */}
            <Route path="/safari" element={<SafariPage />} />
            <Route path="/gorillas" element={<GorillasPage />} />
            <Route path="/mountains" element={<MountainsPage />} />
            <Route path="/water" element={<WaterPage />} />
            <Route path="/extreme" element={<ExtremePage />} />
            
            {/* מים - תת-קטגוריות (חייב להיות לפני category/:slug) */}
            <Route path="/water/waterfalls" element={<WaterfallsPage />} />
            
            {/* קטגוריות */}
            <Route path="/categories" element={<Categories />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/category/:slug/:parkSlug" element={<ParkDetail />} />
            
            {/* אטרקציה דינמית */}
            <Route path="/attraction/:id" element={<AttractionPage />} />
            
            {/* מסלולים מוכנים */}
            <Route path="/tours" element={<ToursPage />} />
            <Route path="/tours/1-day" element={<Tour1Day />} />
            <Route path="/tours/5-days" element={<Tour5Days />} />
            <Route path="/tours/10-days" element={<Tour10Days />} />
            <Route path="/tours/11-days" element={<Tour11Days />} />
            
            {/* בלוג */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            
            {/* עמודים נוספים */}
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/plan-your-trip" element={<PlanYourTrip />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* עמודים משפטיים */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/accessibility" element={<AccessibilityStatement />} />
            
            {/* עמודי שירותים */}
            <Route path="/services" element={<OurServices />} />
            <Route path="/services/bar-aviation" element={<BarAviation />} />
            <Route path="/services/bar-sos" element={<BarSOS />} />
            <Route path="/services/extreme-park" element={<ExtremePark />} />            
            {/* ברירת מחדל – 404 חוזר לדף הבית */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        
        {/* Wishlist Components - מחוץ ל-Layout */}
        <WishlistSidebar />
      </Router>
    </WishlistProvider>
  );
}