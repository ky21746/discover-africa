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
                איתור וחילוץ רפואי 24/7 – BAR SOS
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
        
        {/* Legal Links Section - NEW! */}
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
          
          <p className="text-gray-400 text-center">
            © {currentYear} דיסקבר אפריקה. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;