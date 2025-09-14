import React, { useState } from "react";

interface GeneralDescriptionProps {
  title: string;
  description: string;
}

const GeneralDescription: React.FC<GeneralDescriptionProps> = ({ title, description }) => {
  const [expanded, setExpanded] = useState(false);

  // Clean description - remove markdown formatting and convert to plain text
  const cleanDescription = description
    .replace(/#{1,6}\s+/g, '') // Remove markdown headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold formatting
    .replace(/\*(.*?)\*/g, '$1') // Remove italic formatting
    .replace(/\n\n/g, '\n') // Normalize line breaks
    .trim();

  return (
    <div className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 border border-[#534B20]/60 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] h-full flex flex-col">
      {/* כותרת */}
      <h2 className="text-2xl font-bold mb-6 text-[#4B361C] leading-tight">{title}</h2>

      {/* Content wrapper with flex layout */}
      <div className="h-full flex flex-col">
        {/* Text content with collapse functionality */}
        <div className={`relative leading-relaxed text-gray-700 font-medium transition-all duration-300 w-full flex-1 ${
          expanded ? "max-h-none" : "max-h-64 overflow-hidden"
        }`} style={{ fontFamily: 'Poppins' }}>
          {cleanDescription.split('\n').map((paragraph, index) => (
            paragraph.trim() && (
              <p key={index} className="mb-4 last:mb-0 w-full">
                {paragraph}
              </p>
            )
          ))}
          
        </div>

        {/* Button positioned at bottom right */}
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            aria-expanded={expanded}
            onClick={() => {
              console.log('Button clicked! Current expanded:', expanded);
              setExpanded(v => !v);
            }}
            className="px-4 py-4 border-2 border-[#CAA131] text-[#CAA131] rounded-xl font-bold text-base hover:bg-[#CAA131]/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#CAA131]/50 focus:ring-offset-2"
          >
            {expanded ? "קרא פחות" : "קרא עוד"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeneralDescription;
