import React from "react";
import { Link } from "react-router-dom";

interface AttractionExperiencesProps {
  nearby?: string[];
  attractionId?: string;
}

const AttractionExperiences: React.FC<AttractionExperiencesProps> = ({ nearby = [], attractionId }) => {
  // הגדרת אתרים לפי עמוד
  const getAttractionsForPage = (id?: string) => {
    switch (id) {
      case 'queen-elizabeth':
        return [
          { name: 'קיבאלה', description: 'טיול מודרך ביער טרופי', link: '/attraction/chimps-kibale', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FKibale%20Chimpanzees%2Fkibale%20chimp%20chimpanzee%20Uganda%20in%20Africa-hero.webp?alt=media&token=ec93ce06-dcca-41a8-bf0a-b886d4112384' },
          { name: 'הרי רוונזורי', description: '"הרי הירח" של אפריקה', link: '/attraction/rwenzori-mountains', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/My%20Trip%2FRwenzori%20mountains-My-Trip.webp?alt=media&token=4e15fba8-9de3-4367-98d7-15115271aab5' },
          { name: 'פארק סמוליקי', description: 'יער טרופי עם חיות בר נדירות', link: '/attraction/semuliki', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FSemuliki%20National%20Park%2FHot%20Springs%20in%20Semuliki%20National%20Park%20Uganda-hero.webp?alt=media&token=228dff7f-a458-4f59-bbcc-d29fdb5c9075' }
        ];
      case 'murchison-falls-safari':
        return [
          { name: 'ג\'ינג\'ה', description: 'מקור הנילוס הלבן', link: '/attraction/jinja-white-nile', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FJinja%2FJinja%E2%80%99s%20new%20suspension%20bridge%20view%20Hero.webp?alt=media&token=0db4ee52-681b-46f4-9056-a7205296e186' },
          { name: 'אגם ויקטוריה', description: 'האגם הגדול באפריקה', link: '/attraction/lake-victoria', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FLake%20Victoria%2FLake%20victoria%20fishermen%20go%20to%20work-Hero.webp?alt=media&token=cfab0621-1bb5-4fc4-8595-23673bd1d3e1' },
          { name: 'פארק סמוליקי', description: 'יער טרופי עם חיות בר נדירות', link: '/attraction/semuliki', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FSemuliki%20National%20Park%2FHot%20Springs%20in%20Semuliki%20National%20Park%20Uganda-hero.webp?alt=media&token=228dff7f-a458-4f59-bbcc-d29fdb5c9075' }
        ];
      case 'lake-mburo-safari':
      case 'lake-mburo':
        return [
          { name: 'אגם ויקטוריה', description: 'האגם הגדול באפריקה', link: '/attraction/lake-victoria', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FLake%20Victoria%2FLake%20victoria%20fishermen%20go%20to%20work-Hero.webp?alt=media&token=cfab0621-1bb5-4fc4-8595-23673bd1d3e1' },
          { name: 'ג\'ינג\'ה', description: 'מקור הנילוס הלבן', link: '/attraction/jinja-white-nile', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FJinja%2FJinja%E2%80%99s%20new%20suspension%20bridge%20view%20Hero.webp?alt=media&token=0db4ee52-681b-46f4-9056-a7205296e186' },
          { name: 'אגם בוניוני', description: 'אגם האיים הקסום', link: '/attraction/lake-bunyonyi', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FLake%20Bunyonyi%2FWoman%20sitting%20on%20dock%20at%20sunset%20on%20Lake%20Bunyonyi-Hero.webp?alt=media&token=3d315584-c531-4256-990a-82e532f86de0' }
        ];
      case 'semuliki':
        return [
          { name: 'הרי רוונזורי', description: '"הרי הירח" של אפריקה', link: '/attraction/rwenzori-mountains', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/My%20Trip%2FRwenzori%20mountains-My-Trip.webp?alt=media&token=4e15fba8-9de3-4367-98d7-15115271aab5' },
          { name: 'קיבאלה', description: 'טיול מודרך ביער טרופי', link: '/attraction/chimps-kibale', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FKibale%20Chimpanzees%2Fkibale%20chimp%20chimpanzee%20Uganda%20in%20Africa-hero.webp?alt=media&token=ec93ce06-dcca-41a8-bf0a-b886d4112384' },
          { name: 'פארק המלכה אליזבת', description: 'פארק הספארי המפורסם', link: '/attraction/queen-elizabeth', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2Fqueen-elizabeth-lions-trees-hero.webp?alt=media&token=6aac3487-a6e1-46eb-b0b7-0055c4bb8a95' }
        ];
      case 'gorillas-bwindi':
        return [
          { name: 'פארק המלכה אליזבת', description: 'פארק הספארי המפורסם', link: '/attraction/queen-elizabeth', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2Fqueen-elizabeth-lions-trees-hero.webp?alt=media&token=6aac3487-a6e1-46eb-b0b7-0055c4bb8a95' },
          { name: 'קיבאלה', description: 'טיול מודרך ביער טרופי', link: '/attraction/chimps-kibale', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FKibale%20Chimpanzees%2Fkibale%20chimp%20chimpanzee%20Uganda%20in%20Africa-hero.webp?alt=media&token=ec93ce06-dcca-41a8-bf0a-b886d4112384' },
          { name: 'אגם בוניוני', description: 'אגם האיים הקסום', link: '/attraction/lake-bunyonyi', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FLake%20Bunyonyi%2FWoman%20sitting%20on%20dock%20at%20sunset%20on%20Lake%20Bunyonyi-Hero.webp?alt=media&token=3d315584-c531-4256-990a-82e532f86de0' }
        ];
      case 'gorillas-mgahinga':
        return [
          { name: 'אגם בוניוני', description: 'אגם האיים הקסום', link: '/attraction/lake-bunyonyi', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FLake%20Bunyonyi%2FWoman%20sitting%20on%20dock%20at%20sunset%20on%20Lake%20Bunyonyi-Hero.webp?alt=media&token=3d315584-c531-4256-990a-82e532f86de0' },
          { name: 'אגם מבורו', description: 'פארק ספארי קטן ואינטימי', link: '/attraction/lake-mburo-safari', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Lake%20Mburo%20National%20Park%2FAfrica%20sunset.%20Plains%20zebra%2C%20Equus%20quagga%2C%20in%20the%20grassy%20nature%20habitat%20with%20evening%20light%20in%20Lake%20Mburo%20NP%20in%20Uganda-Hero.webp?alt=media&token=decce22e-f118-41a1-b80c-657770874411' },
          { name: 'גורילות בווינדי', description: 'פארק הגורילות המפורסם', link: '/attraction/gorillas-bwindi', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FGorillas%20in%20Bwindi%20Forest%2FBaby%20Gorilla%20Kisses%20Silverback%20in%20Bwindi%20Impenetrable%20National%20Park%2C%20Uganda-hero.webp?alt=media&token=f1676abc-ac4a-462b-9478-136e0399fc55' }
        ];
      case 'chimps-kibale':
        return [
          { name: 'הרי רוונזורי', description: '"הרי הירח" של אפריקה', link: '/attraction/rwenzori-mountains', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/My%20Trip%2FRwenzori%20mountains-My-Trip.webp?alt=media&token=4e15fba8-9de3-4367-98d7-15115271aab5' },
          { name: 'פארק המלכה אליזבת', description: 'פארק הספארי המפורסם', link: '/attraction/queen-elizabeth', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2Fqueen-elizabeth-lions-trees-hero.webp?alt=media&token=6aac3487-a6e1-46eb-b0b7-0055c4bb8a95' },
          { name: 'פארק סמוליקי', description: 'יער טרופי עם חיות בר נדירות', link: '/attraction/semuliki', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FSemuliki%20National%20Park%2FHot%20Springs%20in%20Semuliki%20National%20Park%20Uganda-hero.webp?alt=media&token=228dff7f-a458-4f59-bbcc-d29fdb5c9075' }
        ];
      case 'sipi-falls':
        return [
          { name: 'הר אלגון', description: 'הר געש רדום עם נופים מרהיבים', link: '/attraction/mount-elgon', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FMount%20Elgon%20National%20Park%2FMount%20Elgon%20national%20park%20in%20Uganda-hero.webp?alt=media&token=f311d9a8-eedc-497a-961d-01145b159634' },
          { name: 'ג\'ינג\'ה', description: 'מקור הנילוס הלבן', link: '/attraction/jinja-white-nile', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FJinja%2FJinja%E2%80%99s%20new%20suspension%20bridge%20view%20Hero.webp?alt=media&token=0db4ee52-681b-46f4-9056-a7205296e186' },
          { name: 'אגם ויקטוריה', description: 'האגם הגדול באפריקה', link: '/attraction/lake-victoria', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FWater%2FLake%20Victoria%2FLake%20victoria%20fishermen%20go%20to%20work-Hero.webp?alt=media&token=cfab0621-1bb5-4fc4-8595-23673bd1d3e1' }
        ];
      case 'lake-victoria':
        return [
          { name: 'ג\'ינג\'ה', description: 'מקור הנילוס הלבן', link: '/attraction/jinja-white-nile', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FJinja%2FJinja%E2%80%99s%20new%20suspension%20bridge%20view%20Hero.webp?alt=media&token=0db4ee52-681b-46f4-9056-a7205296e186' },
          { name: 'אגם מבורו', description: 'פארק ספארי קטן ואינטימי', link: '/attraction/lake-mburo-safari', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Lake%20Mburo%20National%20Park%2FAfrica%20sunset.%20Plains%20zebra%2C%20Equus%20quagga%2C%20in%20the%20grassy%20nature%20habitat%20with%20evening%20light%20in%20Lake%20Mburo%20NP%20in%20Uganda-Hero.webp?alt=media&token=decce22e-f118-41a1-b80c-657770874411' },
          { name: 'מפלי סיפי', description: 'מפלים מרהיבים בהר אלגון', link: '/attraction/sipi-falls', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FMount%20Elgon%20National%20Park%2FThe%20amazing%20Sipi%20falls%20in%20the%20Mount%20Elgon%20national%20park%20in%20Uganda.webp?alt=media&token=13642ed8-bd50-42a1-ac7e-d7ef3e39ed62' }
        ];
      case 'lake-bunyonyi':
        return [
          { name: 'גורילות מגהינגה', description: 'פארק גורילות קטן ואינטימי', link: '/attraction/gorillas-mgahinga', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FMgahinga%20Gorillas%2FMountain%20gorilla%20Mgahinga%20National%20park%2C%20Uganda-hero.webp?alt=media&token=16f0a4a3-4c15-44e7-b41f-60571b6dadc1' },
          { name: 'גורילות בווינדי', description: 'פארק הגורילות המפורסם', link: '/attraction/gorillas-bwindi', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FGorillas%20in%20Bwindi%20Forest%2FBaby%20Gorilla%20Kisses%20Silverback%20in%20Bwindi%20Impenetrable%20National%20Park%2C%20Uganda-hero.webp?alt=media&token=f1676abc-ac4a-462b-9478-136e0399fc55' },
          { name: 'אגם מבורו', description: 'פארק ספארי קטן ואינטימי', link: '/attraction/lake-mburo-safari', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/Lake%20Mburo%20National%20Park%2FAfrica%20sunset.%20Plains%20zebra%2C%20Equus%20quagga%2C%20in%20the%20grassy%20nature%20habitat%20with%20evening%20light%20in%20Lake%20Mburo%20NP%20in%20Uganda-Hero.webp?alt=media&token=decce22e-f118-41a1-b80c-657770874411' }
        ];
      case 'mount-elgon':
        return [
          { name: 'מפלי סיפי', description: 'מפלים מרהיבים בהר אלגון', link: '/attraction/sipi-falls', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FMount%20Elgon%20National%20Park%2FThe%20amazing%20Sipi%20falls%20in%20the%20Mount%20Elgon%20national%20park%20in%20Uganda.webp?alt=media&token=13642ed8-bd50-42a1-ac7e-d7ef3e39ed62' },
          { name: 'ג\'ינג\'ה', description: 'מקור הנילוס הלבן', link: '/attraction/jinja-white-nile', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FJinja%2FJinja%E2%80%99s%20new%20suspension%20bridge%20view%20Hero.webp?alt=media&token=0db4ee52-681b-46f4-9056-a7205296e186' },
          { name: 'מרצ\'יסון פולס', description: 'פארק הספארי הגדול באוגנדה', link: '/attraction/murchison-falls-safari', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FMurchison%20Falls%20National%20Park%2Fmurchison-falls-hero.webp?alt=media&token=56ccea2c-c574-46a6-ac3a-a0ecc2fbc3a5' }
        ];
      case 'rwenzori-mountains':
        return [
          { name: 'פארק המלכה אליזבת', description: 'פארק הספארי המפורסם', link: '/attraction/queen-elizabeth', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2Fqueen-elizabeth%2Fqueen-elizabeth-lions-trees-hero.webp?alt=media&token=6aac3487-a6e1-46eb-b0b7-0055c4bb8a95' },
          { name: 'גורילות בווינדי', description: 'פארק הגורילות המפורסם', link: '/attraction/gorillas-bwindi', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FGorillas%20in%20Bwindi%20Forest%2FBaby%20Gorilla%20Kisses%20Silverback%20in%20Bwindi%20Impenetrable%20National%20Park%2C%20Uganda-hero.webp?alt=media&token=f1676abc-ac4a-462b-9478-136e0399fc55' },
          { name: 'פארק סמוליקי', description: 'יער טרופי עם חיות בר נדירות', link: '/attraction/semuliki', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FSemuliki%20National%20Park%2FHot%20Springs%20in%20Semuliki%20National%20Park%20Uganda-hero.webp?alt=media&token=228dff7f-a458-4f59-bbcc-d29fdb5c9075' }
        ];
      default:
        return [
          { name: 'קיבאלה', description: 'טיול מודרך ביער טרופי', link: '/attraction/chimps-kibale', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FPrimates%20of%20Uganda%2FKibale%20Chimpanzees%2Fkibale%20chimp%20chimpanzee%20Uganda%20in%20Africa-hero.webp?alt=media&token=ec93ce06-dcca-41a8-bf0a-b886d4112384' },
          { name: 'הרי רוונזורי', description: '"הרי הירח" של אפריקה', link: '/attraction/rwenzori-mountains', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/My%20Trip%2FRwenzori%20mountains-My-Trip.webp?alt=media&token=4e15fba8-9de3-4367-98d7-15115271aab5' },
          { name: 'פארק סמוליקי', description: 'יער טרופי עם חיות בר נדירות', link: '/attraction/semuliki', image: 'https://firebasestorage.googleapis.com/v0/b/discover-africa-ky.firebasestorage.app/o/attractions%2FSafari%20Uganda%2FSemuliki%20National%20Park%2FHot%20Springs%20in%20Semuliki%20National%20Park%20Uganda-hero.webp?alt=media&token=228dff7f-a458-4f59-bbcc-d29fdb5c9075' }
        ];
    }
  };

  const attractions = getAttractionsForPage(attractionId);

  return (
    <div className="md:col-span-1 order-7 md:order-none">
      <section className="bg-white border border-[#534B20]/60 rounded-3xl p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.01] h-full">
        <h3 className="text-lg font-bold text-center text-[#4B361C] mb-6">
          חוויות נוספות בדרך ליעד הבא
        </h3>
        <div className="space-y-4">
          {attractions.map((attraction, index) => (
            <div key={index} className="bg-white border border-[#534B20]/60 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="h-32 bg-cover bg-center relative" style={{
                backgroundImage: `url('${attraction.image}')`
            }}>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
                  <h4 className="text-sm font-bold text-white mb-1">{attraction.name}</h4>
                  <p className="text-xs text-white">{attraction.description}</p>
              </div>
            </div>
            <div className="p-3">
                <Link to={attraction.link} className="w-full bg-transparent border-2 border-[#CAA131] text-[#CAA131] hover:bg-[#CAA131] hover:text-white font-semibold py-2 px-3 rounded-lg text-center block transition-all duration-300 text-sm">
                קרא עוד
              </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AttractionExperiences;