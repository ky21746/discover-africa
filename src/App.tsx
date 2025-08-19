import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoryPage from "./pages/CategoryPage";
import ParkDetail from "./pages/ParkDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Testimonials from "./pages/Testimonials";
import PlanYourTrip from "./pages/PlanYourTrip";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* כל הדפים בתוך ה־Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          {/* קטגוריות */}
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/category/:slug/:parkSlug" element={<ParkDetail />} />

          {/* בלוג */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          {/* עמודים נוספים */}
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/plan-your-trip" element={<PlanYourTrip />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />

          {/* 404 */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}