import React, { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { faqItems } from '../data/faq';

const FAQ: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('כל הקטגוריות');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const categories = ['כל הקטגוריות', ...Array.from(new Set(faqItems.map(item => item.category)))];

  const filteredItems = faqItems.filter(item => {
    const matchesSearch = searchQuery === '' || 
                         item.question.includes(searchQuery) || 
                         item.answer.includes(searchQuery);
    const matchesCategory = selectedCategory === 'כל הקטגוריות' || 
                           item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() ? 
        <span key={index} className="search-highlight">{part}</span> : part
    );
  };

  return (
    <div className="py-12 fade-in">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">שאלות נפוצות</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto font-sans">
            כאן תמצאו תשובות לשאלות הנפוצות ביותר על הטיולים שלנו
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search */}
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="חפשו שאלה..."
                className="form-input pl-12"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="form-input min-w-48"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {filteredItems.length > 0 ? (
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-right flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform ${
                        openItems.includes(item.id) ? 'rotate-180' : ''
                      }`}
                    />
                    <h3 className="text-lg font-semibold font-sans flex-1 mr-4">
                      {highlightText(item.question, searchQuery)}
                    </h3>
                  </button>
                  
                  {openItems.includes(item.id) && (
                    <div className="px-6 pb-4">
                      <div className="border-t pt-4">
                        <p className="text-muted leading-relaxed font-sans">
                          {highlightText(item.answer, searchQuery)}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted mb-4">לא נמצאו תשובות, נסו מילה אחרת</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('כל הקטגוריות');
                }}
                className="btn-secondary"
              >
                נקה חיפוש
              </button>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="max-w-4xl mx-auto mt-12 bg-surface rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-sans">לא מצאתם תשובה לשאלה שלכם?</h2>
          <p className="text-xl text-muted mb-6 font-sans">
            צרו קשר ואנו נשמח לענות על כל שאלה
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary px-6 py-3">
              צור קשר
            </a>
            <a href="https://wa.me/972501234567" target="_blank" rel="noopener noreferrer" className="btn-secondary px-6 py-3">
              וואטסאפ
            </a>
            <a href="tel:+972501234567" className="btn-secondary px-6 py-3">
              התקשר עכשיו
            </a>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2 font-sans">24/7</div>
            <div className="text-muted font-sans">זמינות לשאלות חירום</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2 font-sans">&lt;2h</div>
            <div className="text-muted font-sans">זמן תגובה ממוצע</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2 font-sans">100%</div>
            <div className="text-muted font-sans">שביעות רצון מהשירות</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;