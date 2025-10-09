import React from 'react';
import { useLocation, Link } from 'react-router-dom';

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ mobile = false, onItemClick }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'בית' },
    { path: '/categories', label: 'קטגוריות' },
    { path: '/tours', label: 'מסלולים מוכנים' },
    { path: '/services', label: 'השירותים שלנו' },
    { path: '/about-uganda', label: 'אודות אוגנדה' },
    { path: '/blog', label: 'בלוג' },
    { path: '/who-we-are', label: 'מי אנחנו' },
    { path: '/faq', label: 'שאלות נפוצות' },
    { path: '/contact', label: 'צור קשר' }
  ];

  const baseClasses = mobile
    ? 'block py-3 px-4 text-lg border-b border-gray-100 hover:bg-gray-50'
    : 'nav-link-upgraded';

  const isActive = (path: string) =>
    path === '/'
      ? location.pathname === '/'
      : location.pathname.startsWith(path);

  return (
    <nav className={mobile ? 'space-y-0' : 'flex gap-6 whitespace-nowrap'}>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={onItemClick}
          className={`${baseClasses} ${isActive(item.path) ? 'nav-active' : ''}`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;