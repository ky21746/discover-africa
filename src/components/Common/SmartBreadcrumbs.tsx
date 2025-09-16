import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { categories } from '../../data/categories';
import { getParkBySlug } from '../../data/parks';
import { gorillasChimps } from '../../content/categories/gorillas-chimps';
import { safari } from '../../content/categories/safari';
import { water } from '../../content/categories/water';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

// מיפוי קטגוריות לשמות בעברית
const categoryNames: { [key: string]: string } = {
  '/safari': 'ספארי',
  '/gorillas': 'גורילות ושימפנזים',
  '/water': 'אגמים, מפלים ונהרות',
  '/mountains': 'הרים',
  '/extreme': 'אקסטרים',
  '/lakes': 'אגמים',
  '/waterfalls': 'מפלים',
  '/rivers': 'נהרות',
  'gorillas-chimps': 'גורילות ושימפנזים',
  'safari': 'ספארי',
  'water': 'אגמים, מפלים ונהרות',
  'mountains': 'הרים',
  'extreme': 'אקסטרים',
  'lakes': 'אגמים',
  'waterfalls': 'מפלים',
  'rivers': 'נהרות'
};

// מיפוי אטרקציות לשמות בעברית
const attractionNames: { [key: string]: string } = {
  // 🦁 ספארי
  'queen-elizabeth': 'פארק המלכה אליזבת הלאומי',
  'murchison-falls-safari': 'פארק לאומי מורצ׳יסון פולס',
  'lake-mburo-safari': 'פארק לאומי אגם מבורו',
  'semuliki': 'פארק לאומי סמוליקי',

  // 🦍 גורילות ושימפנזים
  'gorillas-bwindi': 'גורילות ביער בווינדי',
  'gorillas-mgahinga': 'גורילות מגהינגה',
  'chimps-kibale': 'שימפנזים בקיבאלה',

  // 💧 אגמים
  'lake-victoria': 'אגם ויקטוריה',
  'lake-bunyonyi': 'אגם בוניוני',
  'lake-albert': 'אגם אלברט',
  'lake-kyoga': 'אגם קיוגה',
  'lake-edward': 'אגם אדוארד',
  'lake-george': 'אגם ג׳ורג׳',
  'lake-mutanda': 'אגם מוטנדה',
  'lake-mburo-lake': 'אגם מבורו',

  // 🌊 מפלים
  'murchison-falls-waterfalls': 'מפלי מורצ׳יסון',
  'sipi-falls': 'מפלי סיפי',
  'kisiizi-falls': 'מפלי קיסיזי',
  'karuma-falls': 'מפלי קארומה',
  'itanda-falls': 'מפלי איטנדה',
  'sezibwa-falls': 'מפלי סזיבווה',
  'aruu-falls': 'מפלי ארואו',
  'bujagali-falls': 'מפלי בוג׳גאלי',

  // 🌊 נהרות
  'nile-river': 'נהר הנילוס הלבן',
  'source-of-nile': 'מקור הנילוס',

  // 🏔️ הרים
  'mount-elgon': 'פארק לאומי הר אלגון',
  'rwenzori-mountains': 'פארק לאומי הרי הרוונזורי'
};

// פונקציה למציאת אטרקציה לפי ID
const findAttractionById = (id: string) => {
  const allAttractions = [...gorillasChimps, ...safari, ...water];
  return allAttractions.find(attraction => attraction.id === id);
};

const SmartBreadcrumbs: React.FC = () => {
  const location = useLocation();
  const params = useParams();
  const pathname = location.pathname;

  // פונקציה ליצירת breadcrumbs על בסיס הנתיב
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      { label: "בית", path: "/" }
    ];

    // דף הבית
    if (pathname === '/') {
      return [{ label: "בית" }];
    }

    // עמוד קטגוריות
    if (pathname === '/categories') {
      items.push({ label: "קטגוריות" });
      return items;
    }

    // עמודי קטגוריות ראשיות
    const mainCategories = ['/safari', '/gorillas', '/mountains', '/water', '/extreme'];

    for (const category of mainCategories) {
      if (pathname === category) {
        items.push({ label: "קטגוריות", path: "/categories" });
        items.push({ label: categoryNames[category] });
        return items;
      }
    }

    // תת-קטגוריות של מים
    if (pathname.startsWith('/water/')) {
      items.push({ label: "קטגוריות", path: "/categories" });
      items.push({ label: "אגמים, מפלים ונהרות", path: "/water" });
      
      if (pathname === '/water/waterfalls') {
        items.push({ label: "מפלים" });
      } else if (pathname === '/water/lakes') {
        items.push({ label: "אגמים" });
      } else if (pathname === '/water/rivers') {
        items.push({ label: "נהרות" });
      }
      return items;
    }

    // קטגוריות דינמיות /category/:slug
    if (pathname.startsWith('/category/') && !pathname.includes('/category/') + 1) {
      const slug = params.slug;
      if (slug) {
        const category = categories.find(cat => cat.slug === slug);
        items.push({ label: "קטגוריות", path: "/categories" });
        items.push({ label: category?.name || slug });
      }
      return items;
    }

    // פרטי פארק /category/:slug/:parkSlug
    if (pathname.match(/^\/category\/[^\/]+\/[^\/]+$/)) {
      const { slug, parkSlug } = params;
      if (slug && parkSlug) {
        const category = categories.find(cat => cat.slug === slug);
        const park = getParkBySlug(parkSlug);
        
        items.push({ label: "קטגוריות", path: "/categories" });
        items.push({ label: category?.name || slug, path: `/category/${slug}` });
        items.push({ label: park?.name || parkSlug });
      }
      return items;
    }

    // אטרקציה /attraction/:id
    if (pathname.startsWith('/attraction/')) {
      const id = params.id;
      if (id) {
        const attraction = findAttractionById(id);
        if (attraction) {
          items.push({ label: "קטגוריות", path: "/categories" });
          items.push({ label: categoryNames[attraction.category] || attraction.category, path: `/category/${attraction.category}` });
          items.push({ label: attractionNames[id] || attraction.name });
        } else {
          items.push({ label: "קטגוריות", path: "/categories" });
          items.push({ label: attractionNames[id] || `אטרקציה ${id}` });
        }
      }
      return items;
    }

    // עמודי שירותים
    if (pathname.startsWith('/services')) {
      items.push({ label: "שירותים", path: "/services" });
      
      if (pathname === '/services/bar-aviation') {
        items.push({ label: "Bar Aviation" });
      } else if (pathname === '/services/bar-sos') {
        items.push({ label: "Bar SOS" });
      } else if (pathname === '/services/extreme-park') {
        items.push({ label: "Extreme Adventure Park" });
      }
      return items;
    }

    // עמודי בלוג
    if (pathname.startsWith('/blog')) {
      items.push({ label: "בלוג", path: "/blog" });
      
      if (pathname !== '/blog') {
        const blogId = params.id;
        if (blogId) {
          items.push({ label: `פוסט ${blogId}` });
        }
      }
      return items;
    }

    // עמודים אחרים
    const pageNames: { [key: string]: string } = {
      '/testimonials': 'המלצות',
      '/who-we-are': 'מי אנחנו',
      '/plan-your-trip': 'תכנן את הטיול',
      '/faq': 'שאלות נפוצות',
      '/contact': 'צור קשר',
      '/privacy': 'מדיניות פרטיות',
      '/terms': 'תנאי שימוש',
      '/accessibility': 'הצהרת נגישות'
    };

    if (pageNames[pathname]) {
      items.push({ label: pageNames[pathname] });
      return items;
    }

    // ברירת מחדל
    return items;
  };

  const breadcrumbs = generateBreadcrumbs();


  // אם יש רק פריט אחד (בית), לא מציגים breadcrumbs
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav aria-label="breadcrumb" className="bg-gray-50 border-b sticky top-0 z-40 shadow-sm">
      <div className="container mx-auto max-w-screen-xl px-4 py-3">
        {/* במובייל - גלילה אופקית */}
        <div className="md:hidden overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
          <ol className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600 whitespace-nowrap min-w-max">
            {breadcrumbs.map((item, index) => (
              <li key={index} className="flex items-center flex-shrink-0">
                {index > 0 && (
                  <ChevronLeft className="w-4 h-4 mx-2 text-gray-400 flex-shrink-0" />
                )}
                {item.path && index < breadcrumbs.length - 1 ? (
                  <Link
                    to={item.path}
                    className="hover:text-[#CAA131] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className={index === breadcrumbs.length - 1 ? 'text-gray-900 font-medium' : ''}>
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
        
        {/* בדסקטופ - תצוגה רגילה */}
        <ol className="hidden md:flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600">
          {breadcrumbs.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronLeft className="w-4 h-4 mx-2 text-gray-400" />
              )}
              {item.path && index < breadcrumbs.length - 1 ? (
                <Link
                  to={item.path}
                  className="hover:text-[#CAA131] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={index === breadcrumbs.length - 1 ? 'text-gray-900 font-medium' : ''}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default SmartBreadcrumbs;
