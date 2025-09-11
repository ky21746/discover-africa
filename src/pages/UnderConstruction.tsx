import React from 'react';

const UnderConstruction: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center" dir="rtl">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-[#CAA131] rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            עמוד בבניה
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            העמוד נמצא בתהליך פיתוח ויהיה זמין בקרוב
          </p>
        </div>
        
        <div className="space-y-4">
          <a 
            href="/categories" 
            className="block w-full bg-[#CAA131] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#B8942A] transition-colors duration-200"
          >
            חזרה לקטגוריות
          </a>
          <a 
            href="/" 
            className="block w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200"
          >
            חזרה לעמוד הבית
          </a>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
