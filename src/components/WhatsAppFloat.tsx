import React from 'react';
import { MessageCircle } from 'lucide-react';

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
  const handleClick = () => {
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
    
    // פתיחת הקישור
    window.open(finalUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
      aria-label="פתח צ'אט וואטסאפ"
      title="צור קשר בוואטסאפ"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};

export default WhatsAppFloat;
