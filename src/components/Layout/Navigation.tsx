import React from 'react';
import { useLocation, Link } from 'react-router-dom';

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ mobile = false, onItemClick }) => {
  const location = useLocation();

  // הוסר '/plan-your-trip'
  const navItems = [
    { path: '/', label: 'בית' },
    { path: '/categories', label: 'קטגוריות' },
    { path: '/blog', label: 'בלוג' },
    { path: '/testimonials', label: 'לקוחות מספרים' },
    { path: '/faq', label: 'שאלות נפוצות' },
    { path: '/contact', label: 'צור קשר' },
    { path: '/gorillas', label: 'גורילות' } // 👈 נוסף קישור חדש
  ];

  const baseClasses = mobile
    ? 'block py-3 px-4 text-lg border-b border-gray-100 hover:bg-gray-50'
    : 'nav-link';

  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(path);

  return (
    <nav className={mobile ? 'space-y-0' : 'flex space-x-reverse space-x-6'}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={onItemClick}
          className={`${baseClasses} ${isActive(item.path) ? 'active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;