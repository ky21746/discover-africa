import React from "react";
import { AttractionWithMock } from "../../types";

interface AttractionMapProps {
  attraction: AttractionWithMock;
}

const AttractionMap: React.FC<AttractionMapProps> = ({ attraction }) => {
  return (
    <div className="md:col-span-2 order-6 md:order-none">
      <section className="bg-white border border-[#534B20]/60 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] h-full">
        <h3 className="text-xl font-bold text-[#4B361C] mb-4">מפה</h3>
        <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
          <p className="text-gray-600">מפה תתווסף כאן</p>
        </div>
      </section>
    </div>
  );
};

export default AttractionMap;
