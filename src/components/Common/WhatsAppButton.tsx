import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '972501234567'; // Replace with actual business number
  const message = encodeURIComponent('שלום, אני מעוניין במידע נוסף על הטיול שלי');

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // ניסיון לפתוח באפליקציה - אם זה לא עובד, יפתח בדפדפן
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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