import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Users, Calendar, Star, Sparkles, Plus, Eye } from 'lucide-react';
import Breadcrumbs from '../components/Common/Breadcrumbs';
import Card from '../components/Common/Card';
import TripPlannerModal from '../components/TripPlanner/TripPlannerModal';
import { getParkBySlug, getRelatedParks } from '../data/parks';
import { categories } from '../data/categories';

const ParkDetail: React.FC = () => {
  // התאמה למסלול: /category/:slug/:parkSlug
  const { slug, parkSlug } = useParams<{ slug: string; parkSlug: string }>();

  const [isTripPlannerOpen, setIsTripPlannerOpen] = useState(false);
  const [showSampleItinerary, setShowSampleItinerary] = useState(false);
  const [selectedInMyTrip, setSelectedInMyTrip] = useState(false);

  const park = getParkBySlug(parkSlug || '');

  // חיפוש קטגוריה לפי slug אם קיים, ואם לא — לפי kebab-case של name
  const category = categories.find((cat: any) => {
    const kebab = cat.name.toLowerCase().replace(/\s+/g, '-');
    return (cat.slug ? cat.slug === slug : kebab === slug);
  });

  const relatedParks = park ? getRelatedParks(park) : [];

  if (!park || !category) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 font-heebo">עמוד לא נמצא</h1>
        <Link to="/categories" className="btn-primary">
          חזרה לקטגוריות
        </Link>
      </div>
    );
  }

  const handleAddToTrip = () => {
    setSelectedInMyTrip(!selectedInMyTrip);
  };

  const sampleItinerary = [
    {
      day: 1,
      title: `הגעה ל${park.area}`,
      activities: ['נסיעה מקמפלה', "התמקמות בלודג'", 'סיור היכרות באזור']
    },
    {
      day: 2,
      title: `יום מלא ב${park.name}`,
      activities: park.highlights.slice(0, 3)
    },
    {
      day: 3,
      title: 'סיכום וחזרה',
      activities: ['בוקר נוסף בפארק', 'נסיעה חזרה', 'עצירות בדרך']
    }
  ];

  return (
    <>
      <div className="fade-in">
        {/* Hero Section */}
        <div className="relative h-96 md:h-[500px]">
          <img
            src={park.image}
            alt={park.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="container mx-auto">
              <Breadcrumbs
                items={[
                  { label: 'בית', path: '/' },
                  { label: 'קטגוריות', path: '/categories' },
                  { label: category.name, path: `/category/${slug}` },
                  { label: park.name }
                ]}
              />
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heebo">
                {park.name}
              </h1>
              <p className="text-xl font-assistant max-w-2xl">
                {park.summary}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Quick Facts */}
              <div className="bg-surface rounded-2xl p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 font-heebo">מידע מהיר</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-semibold">{park.area}</div>
                    <div className="text-xs text-muted">אזור</div>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-semibold">{park.season}</div>
                    <div className="text-xs text-muted">עונה מומלצת</div>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-semibold">{park.family ? 'כן' : 'לא'}</div>
                    <div className="text-xs text-muted">למשפחות</div>
                  </div>

                  <div className="text-center">
                    <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-semibold">{park.cost_est}</div>
                    <div className="text-xs text-muted">עלות משוערת</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-heebo">תיאור מפורט</h2>
                <div className="prose prose-lg max-w-none">
                  {park.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-lg leading-relaxed font-assistant">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-heebo">מה מצפים לראות</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {park.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-assistant">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-heebo">גלריה</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {park.gallery.map((image, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden">
                      <img
                        src={image}
                        alt={`${park.name} ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Logistics */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-heebo">לוגיסטיקה</h2>
                <div className="bg-white rounded-lg border p-6">
                  <h3 className="text-lg font-semibold mb-3 font-heebo">איך מגיעים</h3>
                  {park.logistics.drive_from_kla && (
                    <p className="mb-2 font-assistant">
                      <strong>נסיעה מקמפלה:</strong> {park.logistics.drive_from_kla}
                    </p>
                  )}
                  {park.logistics.flight_option && (
                    <p className="mb-2 font-assistant">
                      <strong>אפשרות טיסה:</strong> {park.logistics.flight_option}
                    </p>
                  )}
                  {park.logistics.best_time && (
                    <p className="mb-2 font-assistant">
                      <strong>זמן מומלץ לביקור:</strong> {park.logistics.best_time}
                    </p>
                  )}

                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">טיפים חשובים:</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• הביאו בגדים בצבעים ניטרליים</li>
                      <li>• שמרו על מרחק מהחיות</li>
                      <li>• הקשיבו להוראות המדריך</li>
                      {park.boat && <li>• מומלץ להביא בגדי החלפה לשייט</li>}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Suggested Combos */}
              {park.combos.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4 font-heebo">מומלץ לשלב עם</h2>
                  <div className="flex flex-wrap gap-3">
                    {park.combos.map((combo, index) => (
                      <span key={index} className="px-4 py-2 bg-primary text-white rounded-full text-sm">
                        {combo}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Action Buttons */}
                <div className="bg-white rounded-lg border p-6">
                  <div className="space-y-4">
                    <button
                      onClick={handleAddToTrip}
                      className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-colors ${
                        selectedInMyTrip
                          ? 'bg-green-100 text-green-700 border border-green-300'
                          : 'btn-secondary'
                      }`}
                    >
                      <Plus className="w-5 h-5" />
                      {selectedInMyTrip ? 'נוסף למסלול שלי' : 'הוסף למסלול שלי'}
                    </button>

                    <button
                      onClick={() => setShowSampleItinerary(!showSampleItinerary)}
                      className="btn-secondary w-full flex items-center justify-center gap-2"
                    >
                      <Eye className="w-5 h-5" />
                      צפה במסלול לדוגמה
                    </button>

                    <button
                      onClick={() => setIsTripPlannerOpen(true)}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-5 h-5" />
                      תכננו עם הסוכן החכם
                    </button>
                  </div>
                </div>

                {/* Sample Itinerary */}
                {showSampleItinerary && (
                  <div className="bg-white rounded-lg border p-6">
                    <h3 className="text-lg font-semibold mb-4 font-heebo">מסלול לדוגמה - 3 ימים</h3>
                    <div className="space-y-4">
                      {sampleItinerary.map((day) => (
                        <div key={day.day} className="border-r-2 border-primary pr-4">
                          <h4 className="font-semibold text-primary font-heebo">
                            יום {day.day}: {day.title}
                          </h4>
                          <ul className="text-sm text-muted mt-2 space-y-1">
                            {day.activities.map((activity, index) => (
                              <li key={index}>• {activity}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Contact CTA */}
                <div className="bg-primary text-white rounded-lg p-6 text-center">
                  <h3 className="text-lg font-bold mb-2 font-heebo">מוכנים להזמין?</h3>
                  <p className="text-sm mb-4">צרו קשר לקבלת הצעת מחיר מפורטת</p>
                  <Link to="/contact" className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                    צור קשר עכשיו
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Parks */}
          {relatedParks.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8 text-center font-heebo">
                עוד ב{category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedParks.map((relatedPark) => (
                  <Card key={relatedPark.slug}>
                    <div
                      className="card-image"
                      style={{ backgroundImage: `url(${relatedPark.image})` }}
                    ></div>
                    <div className="card-content">
                      <h3 className="text-xl font-semibold mb-2 font-heebo">
                        {relatedPark.name}
                      </h3>
                      <p className="text-muted mb-4 font-assistant">
                        {relatedPark.summary}
                      </p>
                      <div className="card-footer">
                        <Link
                          to={`/category/${slug}/${relatedPark.slug}`}
                          className="btn-primary w-full"
                        >
                          גלה עוד
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <TripPlannerModal
        isOpen={isTripPlannerOpen}
        onClose={() => setIsTripPlannerOpen(false)}
      />
    </>
  );
};

export default ParkDetail;