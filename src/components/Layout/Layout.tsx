import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SkipToContent from "../SkipToContent";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SkipToContent />
      <Header />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;