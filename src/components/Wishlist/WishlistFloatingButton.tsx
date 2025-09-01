// src/components/Wishlist/WishlistFloatingButton.tsx
import React from 'react';
import { Route } from 'lucide-react';
import { useWishlist } from '../../contexts/WishlistContext';

export const WishlistFloatingButton: React.FC = () => {
  const { getTotalItems, toggleSidebar } = useWishlist();
  const itemCount = getTotalItems();

  if (itemCount === 0) return null;

  return (
    <button
      onClick={toggleSidebar}
      className="fixed bottom-4 right-4 bg-amber-500 hover:bg-amber-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all transform hover:scale-110 z-50"
    >
      <Route className="w-6 h-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
          {itemCount > 9 ? '9+' : itemCount}
        </span>
      )}
    </button>
  );
};