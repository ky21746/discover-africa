import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '972546152683'; // Replace with actual business number
  const message = encodeURIComponent('שלום, אני מעוניין במידע נוסף על הטיול שלי');

  const handleClick = () => {
    const waUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    const fallbackUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // פתיחה עם deep link
    const now = Date.now();
    // ננסה לפתוח את האפליקציה
    window.location.href = waUrl;

    // אם לא נפתח (נשארים בדפדפן) – אחרי 2 שניות נפתח לינק רגיל
    setTimeout(() => {
      if (Date.now() - now < 2100) {
        window.open(fallbackUrl, "_blank");
      }
    }, 2000);
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-40 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 md:bottom-8 md:left-8"
      style={{ backgroundColor: '#25D366' }}
      aria-label="צ'אט בוואטסאפ"
    >
      <div className="w-14 h-14 md:w-12 md:h-12 flex items-center justify-center">
        <MessageCircle className="w-7 h-7 md:w-6 md:h-6" />
      </div>
    </button>
  );
};

export default WhatsAppButton;