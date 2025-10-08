import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12" dir="rtl" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4">
        {/* ===== אין יותר פס עליון עם פרטי קשר ===== */}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-[#CAA131] mb-4 font-sans">
              דיסקבר אפריקה
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed font-sans">
              מתמחים בטיולי הרפתקה מותאמים אישית באוגנדה. חוויות בלתי נשכחות עם שירות אישי ברמה הגבוהה ביותר.
            </p>
            <div className="flex space-x-reverse space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61580329149179" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook" 
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/discoverafrica.co.il/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram" 
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCv_7hucJqy0DqS3PjXOvvaw" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="YouTube" 
                className="text-gray-300 hover:text-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">קישורים מהירים</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">בית</Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-300 hover:text-primary transition-colors">קטגוריות</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">בלוג</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-primary transition-colors">שאלות נפוצות</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">צור קשר</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">השירותים שלנו</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services/bar-aviation" className="text-gray-300 hover:text-primary transition-colors">Bar Aviation</Link>
              </li>
              <li>
                <Link to="/services/bar-sos" className="text-gray-300 hover:text-primary transition-colors">Bar SOS</Link>
              </li>
              <li>
                <Link to="/services/extreme-park" className="text-gray-300 hover:text-primary transition-colors">Extreme Park</Link>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <Link to="/services/bar-sos" className="text-[#CAA131] hover:text-[#B8942A] transition-colors text-sm">
                ביטחון רפואי מלא 24/7 – BAR SOS
              </Link>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">פרטי התקשרות</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#CAA131]" />
                {/* שמים LTR כדי שה"+" יהיה בתחילת המספר */}
                <span className="text-gray-300" dir="ltr">+972-54-615-2683</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#CAA131]" />
                <span className="text-gray-300">info@discoverafrica.co.il</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#CAA131]" />
                <span className="text-gray-300">ראשון-חמישי: 9:00–18:00</span>
              </div>
            </div>
            
          </div>
        </div>
        
        {/* Legal Links Section */}
        <div className="border-t border-[#CAA131] mt-8 pt-6">
          <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
            <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors">
              מדיניות פרטיות
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors">
              תנאי שימוש
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/accessibility" className="text-gray-400 hover:text-primary transition-colors">
              הצהרת נגישות
            </Link>
            <span className="text-gray-600">|</span>
            <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">
              צור קשר
            </Link>
          </div>
        </div>

        {/* Comprehensive Legal Footer */}
        <div className="border-t border-gray-700 mt-6 pt-6">
          <div className="text-sm text-gray-500 text-center rtl space-y-1 max-w-4xl mx-auto">
            <p>© כל הזכויות שמורות ל-Discover Africa 2025</p>
            <p>האתר פועל בהתאם לחוק הגנת הפרטיות, תקנות הנגישות ותקני האינטרנט הבינלאומיים.</p>
            <p>
              למידע נוסף: 
              <Link to="/terms" className="hover:text-gray-700 transition-colors"> תנאי שימוש</Link> | 
              <Link to="/privacy" className="hover:text-gray-700 transition-colors"> מדיניות פרטיות</Link> | 
              <Link to="/accessibility" className="hover:text-gray-700 transition-colors"> הצהרת נגישות</Link>
            </p>
            <p>האתר מאובטח בפרוטוקול SSL. שימוש באתר מהווה הסכמה לתנאים ולמדיניות שלנו.</p>
            
            {/* English Version */}
            <div className="mt-4 pt-4 border-t border-gray-600">
              <p className="text-xs text-gray-600">
                © Discover Africa 2025 – All rights reserved.
              </p>
              <p className="text-xs text-gray-600">
                By using this site, you agree to our Terms of Use and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;