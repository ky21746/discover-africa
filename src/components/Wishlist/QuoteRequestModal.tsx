// src/components/Wishlist/QuoteRequestModal.tsx
import React, { useState, useRef } from 'react';
import { X, Send, Calendar, Users, Mail, Phone, User } from 'lucide-react';
import { useWishlist } from '../../contexts/WishlistContext';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({
  isOpen,
  onClose
}) => {
  const { items } = useWishlist();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dates: '',
    travelers: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const recaptchaRef = useRef(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = 'service_f70116g';
      const templateId = 'template_p4abc4m';
      const publicKey = 'fffzoME-DNQ1xssuP';

      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();

      // בניית הודעה למייל
      const itemsText = items.map(item => {
        // בטיחות מלאה - וודא שיש userChoices
        const userChoices = item.userChoices || { accommodation: 'budget', transport: 'self_drive', notes: '' };
        const accommodation = userChoices.accommodation === 'budget' ? 'תקציבית' :
                            userChoices.accommodation === 'midrange' ? 'בינונית' : 'יוקרתית';
        const transport = userChoices.transport === 'self_drive' ? 'רכב שכור' :
                        userChoices.transport === '4x4_guide' ? 'רכב 4x4 עם מדריך' : 'מסוקים';
        
        return `${item.name}
- לינה: ${accommodation}
- תחבורה: ${transport}
${userChoices.notes ? `- הערות: ${userChoices.notes}` : ''}`;
      }).join('\n\n');

      const message = `בקשת הצעת מחיר חדשה מ-Discover Africa

פרטי הלקוח:
שם: ${formData.name}
אימייל: ${formData.email}
טלפון: ${formData.phone}

פרטי הטיול:
תאריכים: ${formData.dates}
מספר מטיילים: ${formData.travelers}

האטרקציות שנבחרו:
${itemsText}

---
נשלח מ-Discover Africa Website`;

      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        title: `בקשת הצעת מחיר - ${formData.name}`,
        message: message,
        "g-recaptcha-response": token
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      alert('שגיאה בשליחת ההודעה. אנא נסו שוב או התקשרו אלינו ישירות.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl mx-4">
          <div className="p-6 text-center">
            <div className="text-green-600 text-6xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-green-800 mb-4">תודה רבה!</h2>
            <p className="text-green-700 text-lg mb-6">
              בקשת הצעת המחיר נשלחה בהצלחה. נחזור אליך תוך 24 שעות עם הצעה מותאמת אישית.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              סגור
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl mx-4">
        {/* Header */}
        <div className="text-white p-4 md:p-6 rounded-t-2xl flex justify-between items-center border-b" style={{background: '#CAA131', borderColor: '#CAA131'}}>
          <h2 className="text-xl font-bold text-black">בקש הצעת מחיר</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
            style={{backgroundColor: '#4B361C'}}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          {/* Summary of selected items */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">הפריטים שבחרת:</h3>
            <div className="space-y-2">
              {items.map(item => (
                <div key={item.id} className="bg-gray-50 p-4 rounded-lg">
                  <div className="font-semibold text-base">{item.name}</div>
                  {item.subtitle && (
                    <div className="text-base text-gray-600 mt-1">{item.subtitle}</div>
                  )}
                         <div className="text-base text-gray-500 mt-2">
                           לינה: {
                             item.userChoices.accommodation === 'budget' ? 'תקציבית' :
                             item.userChoices.accommodation === 'midrange' ? 'בינונית' : 'יוקרתית'
                           } • 
                           תחבורה: {
                             item.userChoices.transport === 'self_drive' ? 'מתנייד לבד' :
                             item.userChoices.transport === '4x4_guide' ? 'רכב 4x4 עם מדריך' :
                             'שירותי מסוקים'
                           }
                         </div>
                         {item.userChoices.notes && (
                           <div className="mt-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                             <div className="text-sm font-semibold text-amber-800 mb-1">הערות שלך:</div>
                             <div className="text-sm text-amber-700">{item.userChoices.notes}</div>
                           </div>
                         )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                שם מלא *
              </label>
              <div className="relative">
                <User className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base"
                  placeholder="הכנס את שמך המלא"
                />
              </div>
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                אימייל *
              </label>
              <div className="relative">
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                טלפון *
              </label>
              <div className="relative">
                <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base"
                  placeholder="050-1234567"
                />
              </div>
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                תאריכים רצויים
              </label>
              <div className="relative">
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  name="dates"
                  value={formData.dates}
                  onChange={handleInputChange}
                  className="w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base"
                  placeholder="למשל: 15-25 במרץ 2024"
                />
              </div>
            </div>

            <div>
              <label className="block text-base font-medium text-gray-700 mb-2">
                מספר מטיילים
              </label>
              <div className="relative">
                <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  name="travelers"
                  value={formData.travelers}
                  onChange={handleInputChange}
                  className="w-full pr-10 pl-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-base"
                  placeholder="למשל: 2 מבוגרים + 1 ילד"
                />
              </div>
            </div>

                   <ReCAPTCHA
                     sitekey="6Lcwa9ErAAAAAGQyrvEyb9JlkkipAC7aqOm8wwGy"
                     size="invisible"
                     ref={recaptchaRef}
                   />

                   <button
                     type="submit"
                     disabled={isSubmitting}
                     className={`w-full py-4 px-6 rounded-xl transition-all text-lg font-bold flex items-center justify-center gap-3 border-2 ${
                       isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                     }`}
                     style={{background: 'transparent', borderColor: '#CAA131', color: '#CAA131'}}
                   >
                     <Send className="w-6 h-6" />
                     {isSubmitting ? 'שולח...' : 'שלח בקשה'}
                   </button>
          </form>
        </div>
      </div>
    </div>
  );
};
