// src/App.tsx
import React from "react";
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
import AttractionPage from "./pages/AttractionPage"; // ✅ עמוד אטרקציה דינמי

// Wishlist imports
import { WishlistProvider } from './contexts/WishlistContext';
import { WishlistSidebar } from './components/Wishlist/WishlistSidebar';
import { WishlistFloatingButton } from './components/Wishlist/WishlistFloatingButton';

export default function App() {
  return (
    <WishlistProvider>
      <Router basename="/discover-africa">
        <Routes>
          {/* כל הדפים נכנסים תחת ה־Layout */}
          <Route element={<Layout />}>
            {/* דף הבית */}
            <Route path="/" element={<Home />} />
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