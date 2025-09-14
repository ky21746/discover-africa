import React from "react";
import { AttractionWithMock } from "../../types";

interface AttractionInfoProps {
  attraction: AttractionWithMock;
}

const AttractionInfo: React.FC<AttractionInfoProps> = ({ attraction }) => {
  const introFull = attraction.description ?? (attraction as any).summary ?? "";
  const introShort = introFull.length > 280 ? introFull.slice(0, 280) + "…" : introFull;

  return (
    <>
      {/* תיאור האטרקציה - ריבוע רחב */}
      <div className="md:col-span-1 order-2 md:order-1">
        <section className="bg-white border border-[#534B20]/60 rounded-3xl p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] h-full">
          <div className="space-y-8">
            {attraction.subtitle && (
              <h2 className="text-2xl font-bold text-[#4B361C] mb-6 leading-tight">{attraction.subtitle}</h2>
            )}
            
            {introFull && (
              <div className="prose prose-lg max-w-none">
                <div className="text-body leading-relaxed text-gray-700 font-medium" 
                     style={{ fontFamily: 'Poppins' }}
                     dangerouslySetInnerHTML={{ __html: introFull.replace(/\n/g, '<br>') }}
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default AttractionInfo;
