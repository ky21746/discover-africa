import React, { useState, useEffect } from "react";
import { Camera, X, ChevronLeft, ChevronRight } from "lucide-react";
import { AttractionWithMock, GalleryItem } from "../../types";

interface AttractionGalleryProps {
  attraction: AttractionWithMock;
}

// Helper function to get image source from gallery item
const getImageSrc = (item: string | GalleryItem): string => {
  return typeof item === 'string' ? item : item.src;
};

// Helper function to get image title from gallery item
const getImageTitle = (item: string | GalleryItem): string => {
  return typeof item === 'string' ? '' : item.title;
};

// Helper function to get image description from gallery item
const getImageDescription = (item: string | GalleryItem): string => {
  return typeof item === 'string' ? '' : item.description;
};

const AttractionGallery: React.FC<AttractionGalleryProps> = ({ attraction }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // ===== Gallery Functions =====
  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (!attraction?.gallery) return;
    setSelectedImage((prev) => 
      prev === null ? 0 : (prev + 1) % attraction.gallery!.length
    );
  };

  const prevImage = () => {
    if (!attraction?.gallery) return;
    setSelectedImage((prev) => 
      prev === null ? 0 : prev === 0 ? attraction.gallery!.length - 1 : prev - 1
    );
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  if (!attraction.gallery || attraction.gallery.length === 0) {
    return null;
  }

  return (
    <>
      {/* גלריה - ריבוע */}
      <div className="md:col-span-1 order-5 md:order-1">
        <section className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 border border-[#534B20]/60 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] h-full">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-3 text-[#4B361C] text-right">
            <Camera className="w-5 h-5 text-[#CAA131]" />
            גלריה ({attraction.gallery.length} תמונות)
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {attraction.gallery.slice(0, 4).map((item, i) => {
              const src = getImageSrc(item);
              const title = getImageTitle(item);
              const description = getImageDescription(item);
              
              return (
                <div 
                  key={i} 
                  className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={src}
                    alt={title || `${attraction.name} ${i + 1}`}
                    className="w-full h-32 md:h-36 object-cover transition-transform group-hover:scale-110 duration-700"
                  />
                  {(title || description) && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
                      {title && (
                        <div className="text-white font-bold text-sm mb-1 text-right">{title}</div>
                      )}
                      {description && (
                        <div className="text-sm text-gray-200 mt-2 text-right">{description}</div>
                      )}
                    </div>
                  )}
                  {i === 3 && attraction.gallery!.length > 4 && (
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center text-white font-bold text-xl backdrop-blur-md">
                      +{attraction.gallery!.length - 4}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <button 
            className="w-full mt-6 py-4 text-[#CAA131] hover:text-white font-bold border border-[#CAA131]/50 rounded-2xl hover:bg-[#CAA131] transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl text-base"
            onClick={() => openLightbox(0)}
          >
            צפה בכל התמונות
          </button>
        </section>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && attraction.gallery && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <img
              src={getImageSrc(attraction.gallery[selectedImage])}
              alt={getImageTitle(attraction.gallery[selectedImage]) || `${attraction.name} ${selectedImage + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image info overlay */}
            {getImageTitle(attraction.gallery[selectedImage]) && (
              <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white bg-black/70 px-4 py-2 rounded-lg text-center max-w-md">
                <div className="font-medium">{getImageTitle(attraction.gallery[selectedImage])}</div>
                {getImageDescription(attraction.gallery[selectedImage]) && (
                  <div className="text-sm text-gray-300 mt-1">{getImageDescription(attraction.gallery[selectedImage])}</div>
                )}
              </div>
            )}

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {attraction.gallery.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AttractionGallery;
