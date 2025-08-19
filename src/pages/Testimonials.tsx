import React from 'react';
import { Star, Quote } from 'lucide-react';
import Card from '../components/Common/Card';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;

  return (
    <div className="py-12 fade-in">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heebo">לקוחות מספרים עלינו</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-6 font-assistant">
            אנחנו גאים לשתף חוויות של לקוחותינו שחזרו מלאים בחיוכים.
          </p>
          
          {/* Statistics */}
          <div className="flex flex-wrap justify-center items-center gap-8 bg-surface rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary font-heebo">{testimonials.length}+</div>
              <div className="text-muted font-assistant">לקוחות מרוצים</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-3xl font-bold text-primary font-heebo">{averageRating.toFixed(1)}</span>
                <div className="flex">{renderStars(Math.round(averageRating))}</div>
              </div>
              <div className="text-muted font-assistant">דירוג ממוצע</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary font-heebo">100%</div>
              <div className="text-muted font-assistant">המלצות</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="text-center">
              <div className="card-content">
                <div className="flex justify-center mb-4">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
                
                <p className="text-muted mb-6 font-assistant leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="card-footer">
                  <div className="flex justify-center mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  
                  <div className="text-center">
                    <div className="font-semibold text-lg font-heebo">{testimonial.name}</div>
                    <div className="text-muted text-sm font-assistant">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-heebo">רוצים להצטרף למשפחת הלקוחות שלנו?</h2>
          <p className="text-xl mb-6 font-assistant">
            בואו ניצור עבורכם גם חוויה בלתי נשכחת שתרצו לשתף
          </p>
          <a href="/contact" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            בואו נתכנן ביחד
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 font-heebo">למה לקוחות בוחרים בנו?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2 font-heebo">ניסיון מוכח</h4>
              <p className="text-muted font-assistant">למעלה מ-10 שנות ניסיון בתחום טיולי ההרפתקה</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Quote className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2 font-heebo">שירות אישי</h4>
              <p className="text-muted font-assistant">ליווי צמוד לכל אורך הדרך - מהתכנון ועד השיבה</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-semibold mb-2 font-heebo">בטיחות מקסימלית</h4>
              <p className="text-muted font-assistant">מדריכים מוסמכים וציוד בטיחות ברמה הגבוהה ביותר</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;