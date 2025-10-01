// src/components/Wishlist/WishlistButton.tsx
import React from 'react';
import { Heart, ShoppingBag, Route, Plus } from 'lucide-react';
import { useWishlist, WishlistResolution } from '../../contexts/WishlistContext';
import { useToast } from '../../contexts/ToastContext';

interface WishlistButtonProps {
  item: {
    id: string;
    attractionId: string;
    name: string;
    subtitle?: string;
    image: string;
    basePrice: string;
  };
  className?: string;
  variant?: 'heart' | 'bag' | 'text';
}

export const WishlistButton: React.FC<WishlistButtonProps> = ({ 
  item, 
  className = "", 
  variant = "heart" 
}) => {
  const { items, addItem, removeItem } = useWishlist();
  const { showToast } = useToast();
  
  const isInWishlist = items.some(wishlistItem => wishlistItem.attractionId === item.attractionId);

  const handleClick = () => {
    if (isInWishlist) {
      const existingItem = items.find(wishlistItem => wishlistItem.attractionId === item.attractionId);
      if (existingItem) {
        removeItem(existingItem.id);
        showToast('הוסר מהמסלול', 'info');
      }
    } else {
      // Create default resolutions for the item
      const defaultResolutions: WishlistResolution[] = [
        {
          id: 'accommodation-luxury',
          type: 'accommodation',
          name: 'Sanctuary Gorilla Forest Camp',
          description: 'יוקרתי בלב היער',
          price: '',
          selected: false
        },
        {
          id: 'accommodation-standard',
          type: 'accommodation',
          name: 'Buhoma Lodge',
          description: 'נוף ישיר ליער',
          price: '',
          selected: false
        },
        {
          id: 'transport-flight',
          type: 'transport',
          name: 'טיסה פנימית',
          description: 'מאנטבה לקיסורו (שעה)',
          price: '',
          selected: false
        },
        {
          id: 'transport-drive',
          type: 'transport',
          name: 'נסיעה ברכב',
          description: '8-9 שעות מקמפלה',
          price: '',
          selected: true
        }
      ];

      addItem({
        ...item,
        resolutions: defaultResolutions,
        userChoices: {
          accommodation: 'budget',
          transport: 'self_drive'
        }
      });
      showToast('נוסף למסלול', 'success');
    }
  };

  if (variant === 'heart') {
    return (
      <button
        onClick={handleClick}
        className={`group transition-all ${className}`}
        title={isInWishlist ? 'הסר מהרשימה' : 'הוסף לרשימה'}
      >
        <Heart 
          className={`w-6 h-6 transition-colors ${
            isInWishlist 
              ? 'fill-red-500 text-red-500' 
              : 'text-white group-hover:text-red-500'
          }`} 
        />
      </button>
    );
  }

  if (variant === 'bag') {
    return (
      <button
        onClick={handleClick}
        className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all font-bold text-base shadow-lg ${
          isInWishlist
            ? 'bg-green-600 text-white hover:bg-green-700 border-green-600'
            : 'bg-amber-500 text-black hover:bg-amber-600 border-amber-500'
        } ${className}`}
      >
        {isInWishlist ? 'במסלול שלי ✓' : 'הוסף למסלול'}
      </button>
    );
  }

  // text variant
  return (
    <button
      onClick={handleClick}
      className={`transition-colors ${className}`}
    >
      {isInWishlist ? (
        <span className="flex items-center gap-2 text-green-600 font-medium">
          <Route className="w-4 h-4" />
          ✓ במסלול שלי
        </span>
      ) : (
        <span className="flex items-center gap-2 font-medium">
          <Plus className="w-4 h-4" />
          הוסף למסלול
        </span>
      )}
    </button>
  );
};