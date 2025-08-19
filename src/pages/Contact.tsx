import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { ContactForm } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false
  });

  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'שם מלא הוא שדה חובה';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'טלפון הוא שדה חובה';
    } else if (!/^[\d\-\+\(\)\s]+$/.test(formData.phone)) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'אימייל הוא שדה חובה';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'כתובת אימייל לא תקינה';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'נושא הוא שדה חובה';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'הודעה היא שדה חובה';
    } else if (formData.message.length < 10) {
      newErrors.message = 'ההודעה חייבת להכיל לפחות 10 תווים';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        subject: '',
        message: '',
        newsletter: false
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-20 fade-in">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-green-50 border border-green-200 rounded-2xl p-8">
            <div className="text-green-600 text-6xl mb-4">✓</div>
            <h1 className="text-3xl font-bold text-green-800 mb-4 font-heebo">תודה רבה!</h1>
            <p className="text-green-700 text-lg mb-6 font-assistant">
              ההודעה שלכם נשלחה בהצלחה. נחזור אליכם בתוך 24 שעות.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              שלח הודעה נוספת
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 fade-in">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heebo">צור קשר</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto font-assistant">
            השאירו פרטים ונחזור אליכם עם הצעה מותאמת אישית
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 font-heebo">שלחו לנו הודעה</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">שם מלא *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`form-input ${errors.fullName ? 'error' : ''}`}
                  placeholder="הכניסו את השם המלא שלכם"
                />
                {errors.fullName && (
                  <div className="form-error">{errors.fullName}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">טלפון *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  placeholder="050-123-4567"
                />
                {errors.phone && (
                  <div className="form-error">{errors.phone}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">אימייל *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="example@email.com"
                />
                {errors.email && (
                  <div className="form-error">{errors.email}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">נושא *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                >
                  <option value="">בחרו נושא</option>
                  <option value="ספארי">ספארי</option>
                  <option value="פרימטים">פרימטים</option>
                  <option value="מים">פעילויות מים</option>
                  <option value="הרים">טרקים</option>
                  <option value="תרבות">חוויות תרבותיות</option>
                  <option value="יוקרה">טיולי יוקרה</option>
                  <option value="משפחות">טיולים משפחתיים</option>
                  <option value="אחר">אחר</option>
                </select>
                {errors.subject && (
                  <div className="form-error">{errors.subject}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">הודעה *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`form-input ${errors.message ? 'error' : ''}`}
                  placeholder="ספרו לנו על הטיול החלומי שלכם..."
                ></textarea>
                {errors.message && (
                  <div className="form-error">{errors.message}</div>
                )}
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary"
                />
                <label htmlFor="newsletter" className="text-sm text-muted font-assistant">
                  אני מעוניין/ת לקבל עדכונים וטיפים במייל
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary w-full ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'שולח...' : 'שלח הודעה'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-surface rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 font-heebo">פרטי התקשרות</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold font-heebo">טלפון</div>
                    <div className="text-muted font-assistant">+972-50-123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold font-heebo">וואטסאפ</div>
                    <div className="text-muted font-assistant">+972-50-123-4567</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold font-heebo">אימייל</div>
                    <div className="text-muted font-assistant">info@uganda-adventures.co.il</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold font-heebo">כתובת</div>
                    <div className="text-muted font-assistant">רחוב הרצל 123, תל אביב</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold font-heebo">שעות פעילות</div>
                    <div className="text-muted font-assistant">ראשון-חמישי: 9:00-18:00</div>
                    <div className="text-muted font-assistant">שישי: 9:00-14:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.3282628188604!2d34.7748068!3d32.0852999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0x4e9427a0d9b72e3e!2sHerzl%20St%20123%2C%20Tel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1620000000000!5m2!1sen!2sil"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="מיקום המשרד"
              ></iframe>
            </div>

            {/* Quick Actions */}
            <div className="bg-primary text-white rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold mb-4 font-heebo">צריכים תשובה מהירה?</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/972501234567"
                  className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  וואטסאפ
                </a>
                <a
                  href="tel:+972501234567"
                  className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  התקשרו עכשיו
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;