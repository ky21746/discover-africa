import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TripPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TripPlannerModal: React.FC<TripPlannerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600"
          aria-label="סגור"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 font-sans">תכנון מסלול חכם</h2>
          <p className="text-muted mb-6 font-sans">
            השתמשו בכלי התכנון החכם שלנו ליצירת מסלול מותאם אישית באוגנדה
          </p>
          
          <div className="space-y-3">
            <Link
              to="/plan-your-trip"
              onClick={onClose}
              className="btn-primary w-full block text-center"
            >
              התחל תכנון מסלול
            </Link>
            
            <button
              onClick={onClose}
              className="btn-secondary w-full"
            >
              סגור
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPlannerModal;