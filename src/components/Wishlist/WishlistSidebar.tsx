// src/components/Wishlist/WishlistSidebar.tsx
import React from 'react';
import { X, Trash2, Settings, MapPin, Send, Download, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../../contexts/WishlistContext';

export const WishlistSidebar: React.FC = () => {
  const { 
    isOpen, 
    toggleSidebar, 
    items, 
    removeItem, 
    updateResolution, 
    getTotalPrice,
    clearWishlist
  } = useWishlist();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={toggleSidebar}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-amber-500 text-white p-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">הרשימה שלי</h2>
            <p className="text-amber-100 text-sm">
              {items.length} חוויות • ${getTotalPrice().toLocaleString()}
            </p>
          </div>
          <button 
            onClick={toggleSidebar}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-amber-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-medium mb-2">הרשימה ריקה</h3>
              <p className="text-sm">התחל להוסיף חוויות מעניינות!</p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="border rounded-lg overflow-hidden">
                  {/* Item Header */}
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-32 object-cover"
                    />
                    <button
                      onClick={() => removeItem(item.id)}
                      className="absolute top-2 left-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="p-3">
                    <h3 className="font-bold text-sm mb-1">{item.name}</h3>
                    {item.subtitle && (
                      <p className="text-xs text-gray-600 mb-2">{item.subtitle}</p>
                    )}
                    <div className="text-sm font-medium text-amber-600 mb-3">
                      מחיר בסיסי: {item.basePrice}
                    </div>

                    {/* Resolutions */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
                        <Settings className="w-3 h-3" />
                        אפשרויות נוספות
                      </div>
                      
                      {/* Group by type */}
                      {['accommodation', 'transport'].map(type => {
                        const typeResolutions = item.resolutions.filter(res => res.type === type);
                        if (typeResolutions.length === 0) return null;
                        
                        return (
                          <div key={type} className="space-y-1">
                            <div className="text-xs font-medium text-gray-600 mr-2">
                              {type === 'accommodation' ? '🏨 לינה' : '🚁 תחבורה'}
                            </div>
                            {typeResolutions.map(resolution => (
                              <label key={resolution.id} className="flex items-center gap-2 text-xs cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={resolution.selected}
                                  onChange={(e) => updateResolution(item.id, resolution.id, e.target.checked)}
                                  className="rounded border-gray-300 text-amber-500"
                                />
                                <div className="flex-1">
                                  <div className="font-medium">{resolution.name}</div>
                                  <div className="text-gray-500">{resolution.description}</div>
                                </div>
                                {resolution.price && (
                                  <div className="text-amber-600 font-medium">{resolution.price}</div>
                                )}
                              </label>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="border-t bg-gray-50 p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-bold">סה"כ משוער:</span>
              <span className="text-xl font-bold text-amber-600">
                ${getTotalPrice().toLocaleString()}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <button className="flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                <Send className="w-4 h-4" />
                שלח לייעוץ
              </button>
              <button className="flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                <MapPin className="w-4 h-4" />
                צור מסלול
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                <Download className="w-4 h-4" />
                הורד PDF
              </button>
              <button 
                onClick={clearWishlist}
                className="flex items-center justify-center gap-2 border border-red-300 text-red-700 py-2 px-4 rounded-lg hover:bg-red-50 transition-colors text-sm"
              >
                <Trash2 className="w-4 h-4" />
                נקה הכל
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};