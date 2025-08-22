// src/components/CookieBanner.tsx
import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setShow(true), 1000); // מופיע אחרי שנייה
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true
    }));
    setShow(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    localStorage.setItem('cookiePreferences', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false
    }));
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-2xl z-50 border-t-4 border-primary" dir="rtl">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-gray-900 mb-1">אנו משתמשים בעוגיות</h3>
              <p className="text-sm text-gray-600">
                אנו משתמשים בעוגיות כדי לשפר את חווית הגלישה שלך, להציג תוכן מותאם אישית ולנתח את התנועה באתר. 
                <a href="/privacy" className="text-primary hover:underline mr-1">למידע נוסף</a>
              </p>
            </div>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={acceptAll}
              className="flex-1 md:flex-initial bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              אשר הכל
            </button>
            <button
              onClick={acceptNecessary}
              className="flex-1 md:flex-initial bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium transition-colors"
            >
              הכרחיות בלבד
            </button>
          </div>
          
          <button
            onClick={() => setShow(false)}
            className="absolute top-4 left-4 text-gray-400 hover:text-gray-600"
            aria-label="סגור"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;