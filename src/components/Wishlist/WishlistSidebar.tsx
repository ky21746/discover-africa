// src/components/Wishlist/WishlistSidebar.tsx
import React, { useState } from 'react';
import { X, Trash2, Settings, MapPin, Send, Download, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../../contexts/WishlistContext';
import { QuoteRequestModal } from './QuoteRequestModal';

export const WishlistSidebar: React.FC = () => {
  const { 
    isOpen, 
    toggleSidebar, 
    items, 
    removeItem, 
    updateResolution,
    updateUserChoices,
    getTotalPrice,
    clearWishlist
  } = useWishlist();
  
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={toggleSidebar}
      />
      
      {/* Full Page Modal */}
      <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl w-full max-w-6xl h-[90vh] overflow-hidden shadow-2xl flex flex-col">
        {/* Header */}
        <div className="text-white p-12 flex justify-between items-center" style={{background: 'linear-gradient(to right, #CAA131, #534B20)'}}>
          <div>
            <h2 className="text-4xl font-bold mb-3">המסלול שלך לאוגנדה</h2>
            <p className="text-xl" style={{color: '#CAA131'}}>
              {items.length} חוויות נבחרו • מוכן להצעת מחיר
            </p>
          </div>
          <button 
            onClick={toggleSidebar}
            className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
            style={{backgroundColor: '#4B361C'}}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 to-gray-100 max-h-[calc(100vh-200px)]">
          {items.length === 0 ? (
            <div className="p-16 text-center">
              <div className="max-w-md mx-auto">
                <h3 className="text-3xl font-bold mb-6 text-gray-800">המסלול שלך מחכה לך</h3>
                <p className="text-xl text-gray-600 mb-8">התחל לבנות את החוויה המושלמת באוגנדה</p>
                <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
              </div>
            </div>
          ) : (
            <div className="p-12 space-y-12">
              {/* מפרט רמות הלינה והתחבורה - מעל כל האטרקציות */}
              <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* לינה */}
                  <div>
                    <h4 className="text-base font-bold text-gray-800 mb-3">רמות לינה באוגנדה</h4>
                    <div className="space-y-3 text-xs">
                      <div>
                        <div className="font-bold text-black text-sm">לינה תקציבית (Budget)</div>
                        <div className="text-gray-700">גסטהאוסים בסיסיים, חדרים פשוטים, מים חמים מוגבלים</div>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm">לינה בינונית (Mid-range)</div>
                        <div className="text-gray-700">לודג'ים ברמה טובה, מים חמים, חדרים פרטיים, לעיתים בריכה</div>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm">לינה יוקרתית (Luxury)</div>
                        <div className="text-gray-700">לודג'ים מפוארים בלב הפארק, שירות אישי, בריכה, אוכל גורמה</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* תחבורה */}
                  <div>
                    <h4 className="text-base font-bold text-gray-800 mb-3">אפשרויות תחבורה באוגנדה</h4>
                    <div className="space-y-3 text-xs">
                      <div>
                        <div className="font-bold text-black text-sm">נהיגה עצמאית – רכב שכור</div>
                        <div className="text-gray-700">חופש מלא, גמישות מלאה, אחריות עליך</div>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm">רכב ספארי 4x4 עם מדריך מקומי</div>
                        <div className="text-gray-700">נהג מקצועי שמכיר את השטח, חווית ספארי מודרכת</div>
                      </div>
                      <div>
                        <div className="font-bold text-black text-sm">טיסות פנימיות במסוק</div>
                        <div className="text-gray-700">מעבר מהיר ונוף מרהיב מלמעלה – הגעה ליעד בשעה במקום נסיעה של 6–8 שעות</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-amber-200">
                  {/* Item Header */}
                  <div className="relative">
                    <div 
                      className="w-full h-64 bg-cover bg-center"
                      style={{
                        backgroundImage: (() => {
                          try {
                            // בדיקה בטוחה - וודא ש-item.image הוא string
                            const imageUrl = typeof item.image === 'string' ? item.image : '';
                            
                            // אם יש תמונה תקינה, השתמש בה
                            if (imageUrl && imageUrl !== '' && !imageUrl.includes('example.com')) {
                              return `url('${imageUrl}')`;
                            }
                            
                            // אחרת, השתמש בתמונות ספציפיות לפי שם
                            const imageMap: { [key: string]: string } = {
                              'פארק המלכה אליזבת': 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2Fqueen-elizabeth-lions-trees-hero.webp?alt=media&token=6aac3487-a6e1-46eb-b0b7-0055c4bb8a95',
                              'גורילות בווינדי': 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FGorillas%20in%20Bwindi%20Forest%2FMountain%20gorilla%20Bwindi%20Impenetrable%20Forest%20Uganda.webp?alt=media&token=1a4e88e7-4cfd-45d3-8e92-cc3dbc3a3e56',
                              'מפלי מורצ\'יסון': 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2Fmurchison-falls-hero.webp?alt=media&token=56ccea2c-c574-46a6-ac3a-a0ecc2fbc3a5'
                            };
                            
                            return `url('${imageMap[item.name] || 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2Fqueen-elizabeth-lions-trees-hero.webp?alt=media&token=6aac3487-a6e1-46eb-b0b7-0055c4bb8a95'}')`;
                          } catch (error) {
                            console.error('Error setting background image:', error);
                            return "url('https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2Fqueen-elizabeth-lions-trees-hero.webp?alt=media&token=6aac3487-a6e1-46eb-b0b7-0055c4bb8a95')";
                          }
                        })()
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute top-6 left-6 w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 shadow-xl hover:scale-110"
                    >
                      <Trash2 className="w-6 h-6" />
                    </button>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="font-bold text-2xl mb-2 text-white drop-shadow-lg">{item.name}</h3>
                      {item.subtitle && (
                        <p className="text-lg text-white/90 mb-3 drop-shadow-md">{item.subtitle}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-8">

                    {/* User Choices - Dropdown Design */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                      <h4 className="text-xl font-bold text-gray-800 mb-6">
                        העדפות המסלול
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* לינה */}
                        <div className="space-y-3">
                          <label className="text-base font-semibold text-gray-700">לינה</label>
                          <select 
                            value={item.userChoices?.accommodation || 'budget'}
                            onChange={(e) => updateUserChoices(item.id, { accommodation: e.target.value as 'budget' | 'midrange' | 'luxury' })}
                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white text-base"
                          >
                            <option value="budget">לינה תקציבית - גסטהאוסים בסיסיים</option>
                            <option value="midrange">לינה בינונית - לודג'ים ברמה טובה</option>
                            <option value="luxury">לינה יוקרתית - לודג'ים מפוארים</option>
                          </select>
                          <div className="text-sm text-gray-600">
                            {item.userChoices?.accommodation === 'budget' 
                              ? 'חדרים פשוטים, מים חמים מוגבלים, מיקום מרכזי' 
                              : item.userChoices?.accommodation === 'midrange'
                              ? 'חדרים פרטיים, מים חמים, לעיתים בריכה'
                              : 'שירות אישי, בריכה, אוכל גורמה, מיקום אקסקלוסיבי'
                            }
                          </div>
                        </div>

                        {/* תחבורה */}
                        <div className="space-y-3">
                          <label className="text-base font-semibold text-gray-700">תחבורה</label>
                          <select 
                            value={item.userChoices?.transport || 'self_drive'}
                            onChange={(e) => updateUserChoices(item.id, { transport: e.target.value as 'self_drive' | '4x4_guide' | 'helicopter' })}
                            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white text-base"
                          >
                            <option value="self_drive">רכב שכור - נהיגה עצמאית</option>
                            <option value="4x4_guide">רכב 4x4 עם מדריך מקצועי</option>
                            <option value="helicopter">שירותי מסוקים - חוויה יוקרתית</option>
                          </select>
                          <div className="text-sm text-gray-600">
                            {item.userChoices?.transport === 'self_drive' 
                              ? 'גמישות מלאה, חיסכון בעלויות'
                              : item.userChoices?.transport === '4x4_guide'
                              ? 'מדריך מקומי, גישה לאזורים מיוחדים'
                              : 'חוויה ייחודית, חיסכון בזמן, נוף מרהיב'
                            }
                          </div>
                        </div>

                               {/* הערות ושאלות */}
                               <div className="space-y-3">
                                 <label className="text-base font-semibold text-gray-700">הערות ושאלות</label>
                                 <textarea 
                                   value={item.userChoices?.notes || ''}
                                   onChange={(e) => updateUserChoices(item.id, { notes: e.target.value })}
                                   placeholder="האם יש לך שאלות ספציפיות? העדפות מיוחדות? הערות חשובות?"
                                   className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white text-base resize-none"
                                   rows={4}
                                 />
                                 <div className="text-sm text-gray-600">
                                   ההערות שלך יישמרו ויועברו עם בקשת הצעת המחיר
                                 </div>
                               </div>

                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-12">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">מוכן להצעת מחיר?</h3>
                <p className="text-gray-600">נחזור אליך תוך 24 שעות עם הצעה מותאמת אישית</p>
              </div>
              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full text-white py-8 px-12 rounded-3xl transition-all duration-500 text-2xl font-bold flex items-center justify-center gap-6 shadow-2xl hover:shadow-3xl transform hover:scale-105"
                style={{background: 'linear-gradient(to right, #CAA131, #534B20)'}}
              >
                <Send className="w-8 h-8" />
                סיים ובקש הצעת מחיר
              </button>
            </div>
          </div>
        )}
        </div>
      </div>

      {/* Quote Request Modal */}
      <QuoteRequestModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  );
};