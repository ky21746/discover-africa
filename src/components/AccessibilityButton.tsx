import React, { useState } from 'react';
import { Eye, X } from 'lucide-react';

const AccessibilityButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const increaseFontSize = () => {
    document.documentElement.style.fontSize = '110%';
  };

  const decreaseFontSize = () => {
    document.documentElement.style.fontSize = '90%';
  };

  const resetSettings = () => {
    document.documentElement.style.fontSize = '100%';
  };

  return (
    <div>
      <button
        className="fixed left-4 bottom-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Eye className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed left-4 bottom-20 z-50 bg-white rounded-lg shadow-xl p-4 w-64 border" dir="rtl">
          <div className="flex items-center justify-between mb-4 pb-2 border-b">
            <h3 className="font-bold">הגדרות נגישות</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="space-y-2">
            <button 
              onClick={increaseFontSize}
              className="w-full p-2 text-right hover:bg-gray-100 rounded"
            >
              הגדל טקסט +
            </button>
            <button 
              onClick={decreaseFontSize}
              className="w-full p-2 text-right hover:bg-gray-100 rounded"
            >
              הקטן טקסט -
            </button>
            <button 
              onClick={resetSettings}
              className="w-full p-2 text-right hover:bg-gray-100 rounded border"
            >
              איפוס הגדרות
            </button>
          </div>

          <div className="mt-4 pt-2 border-t">
            <a href="/accessibility" className="text-xs text-blue-600 hover:underline">
              הצהרת נגישות מלאה
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityButton;