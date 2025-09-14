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
  // Define the exact order as required - 6 sections
  const gridItems = [
    { key: 'seasons', title: 'עונות השנה', content: data.seasons },
    { key: 'access', title: 'נסיעה והגעה', content: data.access },
    { key: 'gates', title: 'שערי כניסה', content: data.gates },
    { key: 'experiences', title: 'חוויות מומלצות', content: data.experiences },
    { key: 'duration', title: 'משך שהות', content: data.duration },
    { key: 'didYouKnow', title: 'הידעת?', content: data.didYouKnow },
  ];

  // Filter out items that don't have data
  const visibleItems = gridItems.filter(item => item.content && item.content.length > 0);

  if (visibleItems.length === 0) {
    return null; // Don't render anything if no data
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 border border-[#534B20]/60 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01]">
      <h2 className="text-2xl font-bold mb-6 text-[#4B361C] text-center">מידע חשוב</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleItems.map((item) => (
          <div
            key={item.key}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-[#534B20]/30"
          >
            <h3 className="text-xl font-bold text-[#CAA131] mb-4 text-right">
              {item.title}
            </h3>
            <div className="text-right">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {item.content!.map((listItem, index) => (
                  <li key={index} className="text-right leading-relaxed">
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttractionInfoGrid;
