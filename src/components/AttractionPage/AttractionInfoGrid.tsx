import React from 'react';

// Type definitions for the info grid data
export interface AttractionInfoGridData {
  seasons?: string[];
  access?: string[];
  gates?: string[];
  experiences?: string[];
  duration?: string[];
  didYouKnow?: string[];
}

interface AttractionInfoGridProps {
  data: AttractionInfoGridData;
}

const AttractionInfoGrid: React.FC<AttractionInfoGridProps> = ({ data }) => {
  // Helper function to render section if data exists
  const renderSection = (title: string, items: string[] | undefined, key: string) => {
    if (!items || items.length === 0) return null;
    
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
        <h3 className="text-xl font-bold text-black mb-3 border-b border-[#C9A34E] pb-2 text-right">{title}</h3>
        <div className="text-gray-800 text-right" style={{ lineHeight: '1.5' }}>
          <ul className="list-disc list-inside text-right">
            {items.map((item, index) => (
              <li key={index} className={index < items.length - 1 ? "mb-1" : ""}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  // Collect all sections that have data
  const sections = [
    { title: "עונות השנה", items: data.seasons, key: "seasons" },
    { title: "נסיעה והגעה", items: data.access, key: "access" },
    { title: "שערי כניסה", items: data.gates, key: "gates" },
    { title: "משך שהות מומלץ", items: data.duration, key: "duration" },
    { title: "חוויות ייחודיות", items: data.experiences, key: "experiences" },
    { title: "הידעת?", items: data.didYouKnow, key: "didYouKnow" }
  ].filter(section => section.items && section.items.length > 0);

  if (sections.length === 0) return null;

  return (
    <div className="bg-white border border-[#534B20]/60 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500">
      <h2 className="text-3xl font-bold mb-6 text-[#4B361C] text-center">חשוב לדעת</h2>
      
      {/* גריד ראשי - מקטעים דינמיים */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* עמודה שמאלית */}
        <div className="space-y-4">
          {sections.filter((_, index) => index % 2 === 0).map(section => 
            renderSection(section.title, section.items, section.key)
          )}
        </div>

        {/* עמודה ימנית */}
        <div className="space-y-4">
          {sections.filter((_, index) => index % 2 === 1).map(section => 
            renderSection(section.title, section.items, section.key)
          )}
        </div>
      </div>
    </div>
  );
};

export default AttractionInfoGrid;