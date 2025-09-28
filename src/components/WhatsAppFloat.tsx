import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Plus, Route, Accessibility, X } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';

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
  const [showAccessibilityBar, setShowAccessibilityBar] = useState(false);
  const [fontSize, setFontSize] = useState(100);
  const [isBlinking, setIsBlinking] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { getTotalItems, toggleSidebar } = useWishlist();
  const itemCount = getTotalItems();

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

  // סגירת בר נגישות בלחיצה על הרקע
  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowAccessibilityBar(false);
    }
  };

  // מעקב אחרי אינטראקציה ראשונה
  useEffect(() => {
    const handleFirstInteraction = () => {
      setUserInteracted(true);
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  // הבהוב כפתור המסלול כשמוסיפים פריט
  useEffect(() => {
    if (itemCount > 0) {
      setIsBlinking(true);
      
      // רטט וצליל רק אחרי אינטראקציה ראשונה
      if (userInteracted) {
        // רטט במובייל
        if (navigator.vibrate) {
          navigator.vibrate([100, 50, 100, 50, 200]); // רטט חזק: 100ms, הפסקה 50ms, 100ms, הפסקה 50ms, 200ms
        }
        
        // צליל הודעה נכנסת - רך ונעים
        try {
          const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
          
          // צליל ראשי - "פינג" רך כמו הודעה נכנסת
          const oscillator1 = audioContext.createOscillator();
          const gainNode1 = audioContext.createGain();
          oscillator1.connect(gainNode1);
          gainNode1.connect(audioContext.destination);
          
          // צליל "פינג" קלאסי - מתחיל גבוה ויורד רך
          oscillator1.frequency.setValueAtTime(800, audioContext.currentTime);
          oscillator1.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.1);
          oscillator1.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.2);
          
          // עוצמה רכה ונעימה
          gainNode1.gain.setValueAtTime(0, audioContext.currentTime);
          gainNode1.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.02);
          gainNode1.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.25);
          
          oscillator1.start(audioContext.currentTime);
          oscillator1.stop(audioContext.currentTime + 0.25);
          
          // צליל משני - "טינג" עדין
          setTimeout(() => {
            const oscillator2 = audioContext.createOscillator();
            const gainNode2 = audioContext.createGain();
            oscillator2.connect(gainNode2);
            gainNode2.connect(audioContext.destination);
            
            // צליל גבוה ועדין
            oscillator2.frequency.setValueAtTime(1200, audioContext.currentTime);
            oscillator2.frequency.exponentialRampToValueAtTime(1000, audioContext.currentTime + 0.08);
            
            // עוצמה עדינה
            gainNode2.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode2.gain.linearRampToValueAtTime(0.15, audioContext.currentTime + 0.01);
            gainNode2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.12);
            
            oscillator2.start(audioContext.currentTime);
            oscillator2.stop(audioContext.currentTime + 0.12);
          }, 80);
          
        } catch (e) {
          // נסה צליל פשוט יותר אם Web Audio API לא עובד
          try {
            const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
            audio.volume = 0.3;
            audio.play().catch(() => {});
          } catch (e2) {
            // התעלם משגיאות צליל
          }
        }
      }
      
      const timer = setTimeout(() => {
        setIsBlinking(false);
      }, 3000); // הבהוב למשך 3 שניות
      
      return () => clearTimeout(timer);
    }
  }, [itemCount]);

  const handleWhatsAppClick = () => {
    // אנליטיקס - דחיפת אירוע ל-dataLayer
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: "whatsapp_click",
        source: "float_button",
        ref: refParam || "default"
      });
    }

    // בניית הקישורים
    const encodedText = encodeURIComponent(text);
    const waUrl = `whatsapp://send?phone=${number}&text=${encodedText}`;
    const fallbackUrl = `https://wa.me/${number}?text=${encodedText}`;
    const finalFallbackUrl = refParam ? `${fallbackUrl}&ref=${encodeURIComponent(refParam)}` : fallbackUrl;
    
    // פתיחה עם deep link
    const now = Date.now();
    // ננסה לפתוח את האפליקציה
    window.location.href = waUrl;

    // אם לא נפתח (נשארים בדפדפן) – אחרי 2 שניות נפתח לינק רגיל
    setTimeout(() => {
      if (Date.now() - now < 2100) {
        window.open(finalFallbackUrl, "_blank");
      }
    }, 2000);
    
    setIsOpen(false);
  };

  const handleMyRoute = () => {
    // פתיחת sidebar המסלול שלי
    toggleSidebar();
    setIsOpen(false);
  };

  const handleAccessibility = () => {
    setShowAccessibilityBar(!showAccessibilityBar);
    setIsOpen(false);
  };

  const updateFontSize = (newSize: number) => {
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const resetFontSize = () => {
    updateFontSize(100);
  };

  return (
    <>
      {/* בר נגישות - Control Center Style */}
      {showAccessibilityBar && (
            <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={handleBackgroundClick}>
          <div className="absolute bottom-20 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-96 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800">נגישות</h3>
              <button 
                onClick={() => setShowAccessibilityBar(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            
            {/* Control Center Style Controls */}
            <div className="space-y-4">
              {/* גודל טקסט - כפתור גדול */}
              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">גודל טקסט</span>
                  <span className="text-lg font-bold text-gray-900">{fontSize}%</span>
                </div>
                
                {/* כפתורים עגולים כמו Control Center */}
                <div className="flex gap-3">
                  <button 
                    onClick={() => updateFontSize(Math.max(80, fontSize - 10))}
                    className="flex-1 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    <span className="text-lg font-bold text-gray-700">A-</span>
                  </button>
                  
                  <button 
                    onClick={resetFontSize}
                    className="flex-1 h-12 bg-blue-500 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors shadow-sm"
                  >
                    <span className="text-sm font-semibold text-white">איפוס</span>
                  </button>
                  
                  <button 
                    onClick={() => updateFontSize(Math.min(150, fontSize + 10))}
                    className="flex-1 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm"
                  >
                    <span className="text-lg font-bold text-gray-700">A+</span>
                  </button>
                </div>
              </div>
              
              {/* סקאלה נוספת */}
              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700">שליטה מדויקת</span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="150"
                  value={fontSize}
                  onChange={(e) => updateFontSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${((fontSize - 80) / 70) * 100}%, #E5E7EB ${((fontSize - 80) / 70) * 100}%, #E5E7EB 100%)`
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

        <div ref={menuRef} className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50">
      {/* תפריט הכפתורים הקטנים */}
      <div className={`absolute bottom-16 right-0 md:bottom-20 md:right-4 flex flex-col gap-3 transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {/* כפתור נגישות */}
        <button
          onClick={handleAccessibility}
          className="group flex items-center gap-3 bg-blue-500/30 backdrop-blur-md border border-blue-400/30 rounded-full px-4 py-3 md:px-5 md:py-4 shadow-lg hover:bg-blue-500/40 transition-all duration-200"
          aria-label="נגישות"
        >
          <div className="w-8 h-8 md:w-9 md:h-9 bg-blue-500/85 backdrop-blur-md border border-blue-400/50 rounded-full flex items-center justify-center">
            <Accessibility className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-white text-sm md:text-base font-bold whitespace-nowrap">נגישות</span>
        </button>
        
        {/* כפתור במסלול שלי */}
        <button
          onClick={handleMyRoute}
          className={`group flex items-center gap-3 bg-amber-500/30 backdrop-blur-md border border-amber-400/30 rounded-full px-4 py-3 md:px-5 md:py-4 shadow-lg hover:bg-amber-500/40 transition-all duration-200 relative ${
            isBlinking ? 'animate-bounce bg-amber-500/60 border-amber-400/80 shadow-2xl scale-110' : ''
          }`}
          aria-label="במסלול שלי"
        >
          <div className="w-8 h-8 md:w-9 md:h-9 bg-amber-500/85 backdrop-blur-md border border-amber-400/50 rounded-full flex items-center justify-center relative">
            <Route className="w-4 h-4 md:w-5 md:h-5 text-white" />
            {itemCount > 0 && (
              <span className={`absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-red-500 text-white text-xs md:text-sm w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center font-bold ${
                isBlinking ? 'animate-ping scale-150 bg-red-600' : ''
              }`}>
                {itemCount > 9 ? '9+' : itemCount}
              </span>
            )}
          </div>
          <span className="text-amber-900 text-sm md:text-base font-bold whitespace-nowrap">במסלול שלי</span>
        </button>
        
        {/* כפתור ווטסאפ */}
        <button
          onClick={handleWhatsAppClick}
          className="group flex items-center gap-3 bg-green-500/30 backdrop-blur-md border border-green-400/30 rounded-full px-4 py-3 md:px-5 md:py-4 shadow-lg hover:bg-green-500/40 transition-all duration-200"
          aria-label="צור קשר בווטסאפ"
        >
          <div className="w-8 h-8 md:w-9 md:h-9 bg-green-500/85 backdrop-blur-md border border-green-400/50 rounded-full flex items-center justify-center">
            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-white text-sm md:text-base font-bold whitespace-nowrap">WhatsApp</span>
        </button>
      </div>

        {/* כפתור ראשי */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 md:w-16 md:h-16 bg-blue-500/30 backdrop-blur-md border border-blue-400/30 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-500/40 transition-all duration-300 hover:scale-110 relative ${
            isBlinking ? 'animate-bounce bg-blue-500/60 border-blue-400/80 shadow-2xl scale-125' : ''
          }`}
          aria-label="תפריט פעולות"
        >
          <Plus className={`w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
          {itemCount > 0 && (
            <span className={`absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-red-500 text-white text-xs md:text-sm w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center font-bold ${
              isBlinking ? 'animate-ping scale-150 bg-red-600' : ''
            }`}>
              {itemCount > 9 ? '9+' : itemCount}
            </span>
          )}
        </button>
    </div>
    </>
  );
};

export default WhatsAppFloat;
