import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { ContactForm } from '../types';
import emailjs from '@emailjs/browser';

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

    try {
      // EmailJS configuration
      const serviceId = 'service_f70116g';
      const templateId = 'template_ptmbsh7';
      const publicKey = 'fffzoME-DNQ1xssuP';

      // Prepare template parameters
      const templateParams = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        title: formData.subject,
        message: formData.message
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
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
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      // You can add error handling here if needed
      alert('שגיאה בשליחת ההודעה. אנא נסו שוב או התקשרו אלינו ישירות.');
    }
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
            <h1 className="text-3xl font-bold text-green-800 mb-4 font-sans">תודה רבה!</h1>
            <p className="text-green-700 text-lg mb-6 font-sans">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans">צור קשר</h1>
          <p className="text-xl text-muted max-w-2xl mx-auto font-sans">
            השאירו פרטים ונחזור אליכם עם הצעה מותאמת אישית
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 font-sans">שלחו לנו הודעה</h2>
            
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
                <label htmlFor="newsletter" className="text-sm text-muted font-sans">
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
              <h2 className="text-2xl font-bold mb-6 font-sans">פרטי התקשרות</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold font-sans">טלפון</div>
                    <div className="text-muted font-sans">+972-54-615-2683</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold font-sans">וואטסאפ</div>
                    <div className="text-muted font-sans">+972-54-615-2683</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold font-sans">אימייל</div>
                    <div className="text-muted font-sans">info@discoverafrica.co.il</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold font-sans">שעות פעילות</div>
                    <div className="text-muted font-sans">ראשון-חמישי: 9:00-18:00</div>
                    <div className="text-muted font-sans">שישי: 9:00-14:00</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div className="bg-surface rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6 font-sans">פרטי החברה</h2>
              <div className="space-y-4">
                <div className="text-muted font-sans leading-relaxed">
                  <p className="mb-2">Discover Africa מופעל על ידי Yuval Katz, עוסק מורשה</p>
                  <p className="mb-2">גבעון 13, גני תקווה, מרכז 5591110, ישראל</p>
                  <p className="text-sm text-gray-500 mt-4">Discover Africa is operated by Yuval Katz, Sole Proprietor</p>
                  <p className="text-sm text-gray-500">Givon 13, Ganei Tikva, Center 5591110, Israel</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;