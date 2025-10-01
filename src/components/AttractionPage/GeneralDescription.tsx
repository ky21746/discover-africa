import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface GeneralDescriptionProps {
  title: string;
  description: string;
}

const GeneralDescription: React.FC<GeneralDescriptionProps> = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);

  // Function to render content with markdown parsing
  const renderContent = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('## ')) {
        // Subtitle
        return (
          <h3 key={index} className="text-lg md:text-xl font-semibold text-[#4B361C] border-b-2 border-[#CAA131] pb-2 mb-3 md:mb-4 mt-4 md:mt-6">
            {line.substring(3).trim()}
          </h3>
        );
      } else if (line.startsWith('- ')) {
        // List item
        return (
          <li key={index} className="text-gray-800 leading-relaxed mb-2 list-disc list-inside">
            {line.substring(2).trim()}
          </li>
        );
      } else if (line.trim() === '---') {
        // Horizontal rule
        return <hr key={index} className="my-6 border-[#CAA131]/50" />;
      } else if (line.trim() === '') {
        // Empty line for spacing
        return <p key={index} className="mb-4"></p>;
      } else {
        // Regular paragraph
        return (
          <p key={index} className="text-sm md:text-base text-gray-800 leading-relaxed mb-3 md:mb-4">
            {line.trim()}
          </p>
        );
      }
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 border border-[#534B20]/60 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] h-full flex flex-col">
      {/* כותרת ראשית */}
      <h2 className="text-xl md:text-3xl font-bold text-[#CAA131] mb-6 md:mb-8 leading-tight">{title}</h2>

      {/* Content wrapper with flex layout */}
      <div className="h-full flex flex-col">
        {/* Text content with collapse functionality */}
        <div className={`relative text-gray-800 transition-all duration-300 w-full flex-1 ${
          expanded ? "max-h-none" : "max-h-64 overflow-hidden" // ~8 lines
        }`} style={{ fontFamily: 'Poppins' }}>
          {renderContent(description)}
        </div>

        {/* Button positioned at bottom center */}
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => setExpanded(v => !v)}
            className="bg-[#CAA131] text-white font-bold py-3 px-6 rounded-lg text-center mx-auto hover:bg-[#B8942A] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#CAA131]/50 focus:ring-offset-2 flex items-center gap-2"
          >
            {expanded ? (
              <>
                קרא פחות <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                קרא עוד <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneralDescription;