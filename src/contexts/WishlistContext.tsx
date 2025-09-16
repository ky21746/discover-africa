// src/contexts/WishlistContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types for Wishlist
export interface WishlistResolution {
  id: string;
  type: 'accommodation' | 'transport' | 'duration' | 'group_size';
  name: string;
  description: string;
  price?: string;
  selected: boolean;
}

export interface WishlistItem {
  id: string;
  attractionId: string;
  name: string;
  subtitle?: string;
  image: string;
  basePrice: string;
  resolutions: WishlistResolution[];
  addedAt: Date;
}

interface WishlistContextType {
  items: WishlistItem[];
  isOpen: boolean;
  addItem: (item: Omit<WishlistItem, 'addedAt'>) => void;
  removeItem: (id: string) => void;
  updateResolution: (itemId: string, resolutionId: string, selected: boolean) => void;
  toggleSidebar: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // טעינת נתונים מ-localStorage בהתחלה
  const [items, setItems] = useState<WishlistItem[]>(() => {
    try {
      const saved = localStorage.getItem('discover-africa-wishlist');
      if (saved) {
        const parsed = JSON.parse(saved);
        // המרת addedAt מ-string ל-Date
        return parsed.map((item: any) => ({
          ...item,
          addedAt: new Date(item.addedAt)
        }));
      }
    } catch (error) {
      console.error('שגיאה בטעינת wishlist מ-localStorage:', error);
    }
    return [];
  });
  
  const [isOpen, setIsOpen] = useState(false);

  // שמירה אוטומטית ב-localStorage בכל פעם שהפריטים משתנים
  useEffect(() => {
    try {
      localStorage.setItem('discover-africa-wishlist', JSON.stringify(items));
    } catch (error) {
      console.error('שגיאה בשמירת wishlist ל-localStorage:', error);
    }
  }, [items]);

  const addItem = (newItem: Omit<WishlistItem, 'addedAt'>) => {
    const existingItem = items.find(item => item.attractionId === newItem.attractionId);
    
    if (!existingItem) {
      setItems(prev => [...prev, { ...newItem, addedAt: new Date() }]);
    }
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const updateResolution = (itemId: string, resolutionId: string, selected: boolean) => {
    setItems(prev => prev.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          resolutions: item.resolutions.map(res => 
            res.id === resolutionId ? { ...res, selected } : res
          )
        };
      }
      return item;
    }));
  };

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  const getTotalItems = () => items.length;

  const getTotalPrice = () => {
    return 0;
  };

  const clearWishlist = () => {
    setItems([]);
    try {
      localStorage.removeItem('discover-africa-wishlist');
    } catch (error) {
      console.error('שגיאה במחיקת wishlist מ-localStorage:', error);
    }
  };

  return (
    <WishlistContext.Provider value={{
      items,
      isOpen,
      addItem,
      removeItem,
      updateResolution,
      toggleSidebar,
      getTotalItems,
      getTotalPrice,
      clearWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};