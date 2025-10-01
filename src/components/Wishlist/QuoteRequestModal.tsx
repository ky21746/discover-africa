// src/components/Wishlist/QuoteRequestModal.tsx
import React, { useState } from 'react';
import { X, Send, Calendar, Users, Mail, Phone, User } from 'lucide-react';
import { useWishlist } from '../../contexts/WishlistContext';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // כאן נשלח את הנתונים ל-Firebase/CRM
    const quoteData = {
      ...formData,
      items: items.map(item => ({
        id: item.id,
        name: item.name,
        subtitle: item.subtitle,
        userChoices: item.userChoices
      }))
    };
    
    console.log('Quote request data:', quoteData);
    
    // TODO: שליחה ל-Firebase/CRM
    alert('הבקשה נשלחה בהצלחה! נחזור אליך בקרוב.');
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-6 rounded-t-2xl flex justify-between items-center">
          <h2 className="text-xl font-bold">בקש הצעת מחיר</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-amber-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
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
                טלפון
              </label>
              <div className="relative">
                <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
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

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-6 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all text-lg font-bold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Send className="w-6 h-6" />
              שלח בקשה
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
