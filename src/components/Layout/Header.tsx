import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ימין: לוגו + ניווט */}
          <div className="flex items-center gap-6 rtl:space-x-reverse">
            <h1 className="text-2xl font-bold text-primary font-heebo">
              אוגנדה אדוונצ'רס
            </h1>
            <div className="hidden md:flex">
              <Navigation />
            </div>
          </div>

          {/* שמאל: כפתור הכתום */}
          <div className="hidden md:block">
            <Link to="/plan-your-trip" className="btn-primary">
              תכננו את הטיול שלכם
            </Link>
          </div>

          {/* כפתור תפריט מובייל */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="תפריט"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* תפריט מובייל */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <Navigation mobile onItemClick={() => setIsMenuOpen(false)} />
            <div className="mt-4 px-4">
              <Link 
                to="/plan-your-trip" 
                className="btn-primary w-full flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                תכננו את הטיול שלכם
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;