import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { faqItems } from '../data/faq';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };


  return (
    <>
      <Helmet>
        <title>שאלות נפוצות - Discover Africa</title>
        <meta name="description" content="שאלות נפוצות על טיולים באוגנדה - תהליך הזמנה, בטיחות, מדריכים, מחירים ועונות הטיול. תשובות מקצועיות לכל השאלות." />
        <meta property="og:title" content="שאלות נפוצות - Discover Africa" />
        <meta property="og:description" content="שאלות נפוצות על טיולים באוגנדה - תהליך הזמנה, בטיחות, מדריכים, מחירים ועונות הטיול." />
        <meta property="og:url" content="https://discoverafrica.co.il/faq" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="py-12 fade-in">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">שאלות נפוצות</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto font-sans">
            כאן תמצאו תשובות לשאלות הנפוצות ביותר על הטיולים שלנו
          </p>
        </div>


        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => (
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
                    {item.question}
                  </h3>
                </button>
                
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4">
                    <div className="border-t pt-4">
                      <p className="text-muted leading-relaxed font-sans">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
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
            <a href="https://wa.me/972546152683" target="_blank" rel="noopener noreferrer" className="btn-secondary px-6 py-3">
              וואטסאפ
            </a>
            <a href="tel:+972546152683" className="btn-secondary px-6 py-3">
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
    </>
  );
};

export default FAQ;