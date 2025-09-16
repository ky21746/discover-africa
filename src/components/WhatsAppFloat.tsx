import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Plus, MapPin, Accessibility } from 'lucide-react';

interface WhatsAppFloatProps {
  number?: string;
  text?: string;
  refParam?: string;
}

const WhatsAppFloat: React.FC<WhatsAppFloatProps> = ({
  number = "972546152683",
  text = "היי, אשמח לפרטים על טיול באוגנדה",
  refParam
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // סגירה בלחיצה מחוץ לתפריט
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleWhatsAppClick = () => {
    // אנליטיקס - דחיפת אירוע ל-dataLayer
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: "whatsapp_click",
        source: "float_button",
        ref: refParam || "default"
      });
    }

    // בניית הקישור
    const encodedText = encodeURIComponent(text);
    const baseUrl = `https://wa.me/${number}?text=${encodedText}`;
    const finalUrl = refParam ? `${baseUrl}&ref=${encodeURIComponent(refParam)}` : baseUrl;
    
    // פתיחה שמתאימה לכל הדפדפנים
    try {
      // ניסיון לפתוח באפליקציה
      window.location.href = finalUrl;
    } catch (error) {
      // אם זה לא עובד, פתיחה בטאב חדש
      window.open(finalUrl, '_blank');
    }
    
    setIsOpen(false);
  };

  const handleAddToRoute = () => {
    // פתיחת דף המסלול
    window.location.href = '/wishlist';
    setIsOpen(false);
  };

  const handleAccessibility = () => {
    // כאן תוכל להוסיף לוגיקה לנגישות
    console.log('נגישות');
    setIsOpen(false);
  };

  return (
    <div ref={menuRef} className="fixed bottom-5 right-5 z-50 md:hidden">
      {/* תפריט הכפתורים הקטנים */}
      <div className={`absolute bottom-16 right-0 flex flex-col gap-3 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {/* כפתור נגישות */}
        <button
          onClick={handleAccessibility}
          className="group flex items-center gap-3 bg-blue-500/30 backdrop-blur-md border border-blue-400/30 rounded-full px-4 py-3 shadow-lg hover:bg-blue-500/40 transition-all duration-200"
          aria-label="נגישות"
        >
          <div className="w-8 h-8 bg-blue-500/85 backdrop-blur-md border border-blue-400/50 rounded-full flex items-center justify-center">
            <Accessibility className="w-4 h-4 text-white" />
          </div>
          <span className="text-white text-sm font-medium whitespace-nowrap">נגישות</span>
        </button>
        
        {/* כפתור הוסף למסלול */}
        <button
          onClick={handleAddToRoute}
          className="group flex items-center gap-3 bg-amber-500/30 backdrop-blur-md border border-amber-400/30 rounded-full px-4 py-3 shadow-lg hover:bg-amber-500/40 transition-all duration-200"
          aria-label="הוסף למסלול"
        >
          <div className="w-8 h-8 bg-amber-500/85 backdrop-blur-md border border-amber-400/50 rounded-full flex items-center justify-center">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <span className="text-white text-sm font-medium whitespace-nowrap">הוסף למסלול</span>
        </button>
        
        {/* כפתור ווטסאפ */}
        <button
          onClick={handleWhatsAppClick}
          className="group flex items-center gap-3 bg-green-500/30 backdrop-blur-md border border-green-400/30 rounded-full px-4 py-3 shadow-lg hover:bg-green-500/40 transition-all duration-200"
          aria-label="צור קשר בווטסאפ"
        >
          <div className="w-8 h-8 bg-green-500/85 backdrop-blur-md border border-green-400/50 rounded-full flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-white" />
          </div>
          <span className="text-white text-sm font-medium whitespace-nowrap">WhatsApp</span>
        </button>
      </div>

      {/* כפתור ראשי */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-500/30 backdrop-blur-md border border-blue-400/30 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-500/40 transition-all duration-300 hover:scale-110"
        aria-label="תפריט פעולות"
      >
        <Plus className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
