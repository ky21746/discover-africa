import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, Baby, User, Menu, X, UserCheck, UsersIcon, Crown, Zap, Heart } from 'lucide-react';

interface TravelerProfile {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface TripData {
  profile: string;
  travelers: { adults: number; children: number; infants: number };
  ageRange: string;
  duration: string;
  dates: {
    startDate: string;
    endDate: string;
    flexible: boolean;
  };
  interests: string[];
  activityLevel: string;
}

interface GeneratedTrip {
  name: string;
  activities: string[];
  icon: React.ReactNode;
  description: string;
  image: string;
}

const PlanYourTrip: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [tripData, setTripData] = useState<TripData>({
    profile: '',
    travelers: { adults: 2, children: 0, infants: 0 },
    ageRange: '',
    duration: '',
    dates: {
      startDate: '',
      endDate: '',
      flexible: false
    },
    interests: [],
    activityLevel: ''
  });
  const [generatedTrip, setGeneratedTrip] = useState<GeneratedTrip | null>(null);

  const travelerProfiles: TravelerProfile[] = [
    {
      id: 'family',
      name: 'משפחה עם ילדים',
      description: 'פעילויות מתאימות לכל המשפחה עם דגש על בטיחות ונוחות',
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 'group',
      name: 'קבוצה מאורגנת',
      description: 'חוויות קבוצתיות עם ליווי מקצועי ותכנון מדויק',
      icon: <UsersIcon className="w-6 h-6" />
    },
    {
      id: 'luxury',
      name: 'מטיילי יוקרה',
      description: 'שירות פרימיום עם לינה יוקרתית ותחבורה פרטית',
      icon: <Crown className="w-6 h-6" />
    },
    {
      id: 'extreme',
      name: 'חובבי אקסטרים',
      description: 'הרפתקאות מרגשות ופעילויות אדרנלין באוגנדה',
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 'traditional',
      name: 'שומרי מסורת',
      description: 'טיולים עם התחשבות בצרכים דתיים ומסורתיים',
      icon: <Heart className="w-6 h-6" />
    }
  ];

  const interests = [
    { id: 'gorillas', name: 'טרק גורילות', description: 'מפגש קרוב עם גורילות הרים ביער בווינדי' },
    { id: 'safari', name: 'ספארי ברכבי שטח', description: 'צפייה בחיות בר בפארקים הלאומיים של אוגנדה' },
    { id: 'nile', name: 'שייט בנילוס', description: 'רפטינג ושייט על הנילוס הלבן המפורסם' },
    { id: 'vehicles', name: 'רייזרים ואופנועים', description: 'הרפתקאות על גלגלים בשטח הפראי' },
    { id: 'mountains', name: 'טיולי הרים', description: 'טרקים בהרי רוונזורי והר אלגון' },
    { id: 'culture', name: 'תרבות ומורשת', description: 'היכרות עם התרבות המקומית והמסורות' },
    { id: 'luxury-experiences', name: 'חוויות יוקרה', description: 'טיסות מסוק ומטוס פרטי עם שירות VIP' }
  ];

  const loadingMessages = [
    'מחפש את החוויות המושלמות בשבילך...',
    'בודק זמינות...',
    'מתאים את המסלול לצרכים שלך...',
    'כמעט מוכן! בונה את התוכנית המושלמת...'
  ];

  const [loadingMessageIndex, setLoadingMessageIndex] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setLoadingMessageIndex((prev) => (prev + 1) % loadingMessages.length);
      }, 1500);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const handleProfileSelect = (profileId: string) => {
    setTripData({ ...tripData, profile: profileId });
    setCurrentStep(1);
  };

  const handleTravelersSubmit = (travelers: { adults: number; children: number; infants: number }, ageRange: string) => {
    setTripData({ ...tripData, travelers, ageRange });
    setCurrentStep(2);
  };

  const handleDurationSelect = (duration: string) => {
    setTripData({ ...tripData, duration });
    setCurrentStep(3);
  };

  const handleDatesSubmit = (dates: { startDate: string; endDate: string; flexible: boolean }) => {
    setTripData({ ...tripData, dates });
    setCurrentStep(4);
  };

  const handleInterestsSubmit = (selectedInterests: string[]) => {
    setTripData({ ...tripData, interests: selectedInterests });
    setCurrentStep(5);
  };

  const handleActivityLevelSelect = (level: string) => {
    setTripData({ ...tripData, activityLevel: level });
    generateTrip({ ...tripData, activityLevel: level });
  };

  const generateTrip = async (finalTripData: TripData) => {
    setIsLoading(true);
    setCurrentStep(6);

    // Simulate trip generation
    await new Promise(resolve => setTimeout(resolve, 6000));

    // Generate trip based on selections
    const trip = createTripFromData(finalTripData);
    setGeneratedTrip(trip);
    setIsLoading(false);
    setCurrentStep(7);
  };

  const createTripFromData = (data: TripData): GeneratedTrip => {
    const profileNames = {
      family: 'משפחתי',
      group: 'קבוצתי',
      luxury: 'יוקרתי',
      extreme: 'אקסטרים',
      traditional: 'מסורתי'
    };

    const activities = data.interests.map(interest => {
      const interestObj = interests.find(i => i.id === interest);
      return interestObj?.name || interest;
    });


    return {
  name: `מסלול ${profileNames[data.profile as keyof typeof profileNames]} ${data.duration} באוגנדה`,
  activities,
  icon: <Users className="w-6 h-6" />,
  image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg',
  description: `מסלול מותאם אישית ל-${data.travelers.adults + data.travelers.children + data.travelers.infants} מטיילים עם ${activities.length} חוויות מרכזיות באוגנדה`
};
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetPlanner = () => {
    setCurrentStep(0);
    setTripData({
      profile: '',
      travelers: { adults: 2, children: 0, infants: 0 },
      ageRange: '',
      duration: '',
      dates: {
        startDate: '',
        endDate: '',
        flexible: false
      },
      interests: [],
      activityLevel: ''
    });
    setGeneratedTrip(null);
  };

  const getSummaryText = () => {
    const profileNames = {
      family: 'משפחה עם ילדים',
      group: 'קבוצה מאורגנת', 
      luxury: 'מטיילי יוקרה',
      extreme: 'חובבי אקסטרים',
      traditional: 'שומרי מסורת'
    };

    const formatDates = () => {
      if (tripData.dates.flexible) {
        return { formatted: 'תאריכים גמישים', startDate: '', endDate: '', flexible: true };
      }
      
      if (tripData.dates.startDate && tripData.dates.endDate) {
        const startDate = new Date(tripData.dates.startDate);
        const endDate = new Date(tripData.dates.endDate);
        
        const formatDate = (date: Date) => {
          return date.toLocaleDateString('he-IL', { 
            day: 'numeric', 
            month: 'long', 
            year: 'numeric' 
          });
        };
        
        if (startDate.getMonth() === endDate.getMonth() && startDate.getFullYear() === endDate.getFullYear()) {
          return {
            formatted: `${startDate.getDate()}–${endDate.getDate()} ${startDate.toLocaleDateString('he-IL', { month: 'long', year: 'numeric' })}`,
            startDate: tripData.dates.startDate,
            endDate: tripData.dates.endDate,
            flexible: false
          };
        } else {
          return {
            formatted: `${formatDate(startDate)} – ${formatDate(endDate)}`,
            startDate: tripData.dates.startDate,
            endDate: tripData.dates.endDate,
            flexible: false
          };
        }
      }
      
      return { formatted: '', startDate: '', endDate: '', flexible: false };
    };

    return {
      profile: tripData.profile ? profileNames[tripData.profile as keyof typeof profileNames] : '',
      travelers: `${tripData.travelers.adults} מבוגרים${tripData.travelers.children > 0 ? `, ${tripData.travelers.children} ילדים` : ''}${tripData.travelers.infants > 0 ? `, ${tripData.travelers.infants} תינוקות` : ''}`,
      duration: tripData.duration,
      dates: formatDates(),
      interests: tripData.interests.map(id => interests.find(i => i.id === id)?.name).filter(Boolean).join(', '),
      activityLevel: tripData.activityLevel === 'relaxed' ? 'רגוע' : tripData.activityLevel === 'moderate' ? 'בינוני' : tripData.activityLevel === 'challenging' ? 'מאתגר' : ''
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className={`fixed inset-y-0 right-0 z-50 w-80 bg-white shadow-lg transform transition-transform duration-300 lg:relative lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold font-sans">סיכום הבחירות</h3>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            {(() => {
              const summary = getSummaryText();
              return (
                <>
                  {summary.profile && (
                    <div>
                      <div className="text-sm font-medium text-gray-600 mb-1">סוג המטיילים</div>
                      <div className="font-sans">{summary.profile}</div>
                    </div>
                  )}
                  
                  {summary.travelers && (
                    <div>
                      <div className="text-sm font-medium text-gray-600 mb-1">מספר מטיילים</div>
                      <div className="font-sans">{summary.travelers}</div>
                    </div>
                  )}
                  
                  {summary.duration && (
                    <div>
                      <div className="text-sm font-medium text-gray-600 mb-1">משך הטיול</div>
                      <div className="font-sans">{summary.duration}</div>
                    </div>
                  )}
                  
                  {(summary.dates.startDate || summary.dates.flexible) && (
                    <div>
                      <div className="text-sm font-medium text-gray-600 mb-1">תאריכי הטיול</div>
                      <div className="font-sans">
                        {summary.dates.flexible ? 'תאריכים גמישים' : summary.dates.formatted}
                      </div>
                    </div>
                  )}
                  
                  {summary.interests && (
                    <div>
                      <div className="text-sm font-medium text-gray-600 mb-1">חוויות נבחרות</div>
                      <div className="font-sans text-sm">{summary.interests}</div>
                    </div>
                  )}
                  
                  {summary.activityLevel && (
                    <div>
                      <div className="text-sm font-medium text-gray-600 mb-1">רמת פעילות</div>
                      <div className="font-sans">{summary.activityLevel}</div>
                    </div>
                  )}
                </>
              );
            })()}
          </div>
        </div>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 py-8">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Mobile Sidebar Toggle */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border"
              >
                <Menu className="w-5 h-5" />
                <span>סיכום הבחירות</span>
              </button>
            </div>

        {/* Header */}
        {currentStep === 0 && (
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-gray-900">
              תכננו את הטיול המושלם שלכם לאוגנדה
            </h1>
            <p className="text-xl text-gray-600 font-sans">
              ענו על כמה שאלות קצרות ואנחנו נבנה לכם מסלול מותאם אישית
            </p>
          </div>
        )}

        {/* Progress Bar */}
        {currentStep > 0 && currentStep < 7 && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-gray-600">שלב {currentStep} מתוך 6</span>
              <button
                onClick={goBack}
                className="text-orange-600 hover:text-orange-700 font-medium"
              >
                חזור לשאלה הקודמת
              </button>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 6) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Step 0: Profile Selection */}
        {currentStep === 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8 font-sans">מי אתם?</h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              {travelerProfiles.map((profile) => (
                <button
                  key={profile.id}
                  onClick={() => handleProfileSelect(profile.id)}
                  className="w-full bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-right hover:border-orange-500 border-2 border-transparent"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2 font-sans">{profile.name}</h3>
                      <p className="text-gray-600 text-sm font-sans">{profile.description}</p>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      {profile.icon}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Travelers Count */}
        {currentStep === 1 && (
          <TravelersStep
            travelers={tripData.travelers}
            onSubmit={handleTravelersSubmit}
          />
        )}

        {/* Step 2: Duration */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8 font-sans">כמה ימים יש לכם?</h2>
            <div className="space-y-4">
              {['3 ימים', '5 ימים', 'שבוע', 'יותר משבוע'].map((duration) => (
                <button
                  key={duration}
                  onClick={() => handleDurationSelect(duration)}
                  className="w-full bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-orange-500 border-2 border-transparent text-right"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold font-sans">{duration}</h3>
                      <p className="text-gray-600 text-sm mt-1 font-sans">
                        {duration === '3 ימים' && 'טעימה מהיר מאוגנדה'}
                        {duration === '5 ימים' && 'חוויה מקיפה ומאוזנת'}
                        {duration === 'שבוע' && 'טיול מעמיק ומגוון'}
                        {duration === 'יותר משבוע' && 'חקירה מלאה של המדינה'}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Travel Dates */}
        {currentStep === 3 && (
          <DateSelectionStep
            dates={tripData.dates}
            onSubmit={handleDatesSubmit}
          />
        )}

        {/* Step 4: Interests */}
        {currentStep === 4 && (
          <InterestsStep
            interests={interests}
            selectedInterests={tripData.interests}
            onSubmit={handleInterestsSubmit}
          />
        )}

        {/* Step 5: Activity Level */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center mb-8 font-sans">רמת פעילות פיזית</h2>
            <div className="space-y-4">
              {[
                { id: 'relaxed', name: 'רגוע', description: 'פעילויות נוחות ללא מאמץ פיזי רב' },
                { id: 'moderate', name: 'בינוני', description: 'שילוב של פעילויות רגועות ומאתגרות' },
                { id: 'challenging', name: 'מאתגר', description: 'פעילויות פיזיות מאומצות וטרקים ארוכים' }
              ].map((level) => (
                <button
                  key={level.id}
                  onClick={() => handleActivityLevelSelect(level.id)}
                  className="w-full bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:border-orange-500 border-2 border-transparent text-right"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 font-sans">{level.name}</h3>
                      <p className="text-gray-600 text-sm font-sans">{level.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 6: Loading */}
        {currentStep === 6 && isLoading && (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold mb-4 font-sans">בונה את המסלול המושלם שלכם</h2>
            <p className="text-lg text-gray-600 font-sans">{loadingMessages[loadingMessageIndex]}</p>
          </div>
        )}

        {/* Step 7: Final Summary */}
        {currentStep === 7 && generatedTrip && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-3xl mx-auto">
            <img
              src={generatedTrip.image}
              alt={generatedTrip.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 font-sans">{generatedTrip.name}</h2>
              <p className="text-gray-600 mb-6 font-sans">{generatedTrip.description}</p>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 font-sans">פעילויות כלולות:</h3>
                <ul className="space-y-2">
                  {generatedTrip.activities.map((activity, index) => (
                    <li key={index} className="flex items-center text-gray-700 font-sans">
                      <span className="w-2 h-2 bg-orange-500 rounded-full ml-3"></span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
              </div>

              <div className="space-y-4">
                <button className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors text-lg">
                  דברו איתי להתאמה אישית
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a
                    href={`https://wa.me/972501234567?text=${encodeURIComponent(`שלום, אני מעוניין במסלול: ${generatedTrip.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors text-center"
                  >
                    שליחה בוואטסאפ
                  </a>
                  
                  <Link
                    to="/contact"
                    className="bg-white border-2 border-orange-500 text-orange-500 py-3 px-6 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-center"
                  >
                    טופס יצירת קשר
                  </Link>
                </div>

                <button
                  onClick={resetPlanner}
                  className="w-full bg-gray-200 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  תכנן מסלול חדש
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
        </div>
      </div>
    </div>
  );
};

// Date Selection Step Component
interface DateSelectionStepProps {
  dates: { startDate: string; endDate: string; flexible: boolean };
  onSubmit: (dates: { startDate: string; endDate: string; flexible: boolean }) => void;
}

const DateSelectionStep: React.FC<DateSelectionStepProps> = ({ dates, onSubmit }) => {
  const [localDates, setLocalDates] = useState(dates);
  const [isFlexible, setIsFlexible] = useState(dates.flexible);

  const today = new Date().toISOString().split('T')[0];
  
  const handleStartDateChange = (date: string) => {
    setLocalDates(prev => ({ ...prev, startDate: date, flexible: false }));
    setIsFlexible(false);
  };

  const handleEndDateChange = (date: string) => {
    setLocalDates(prev => ({ ...prev, endDate: date, flexible: false }));
    setIsFlexible(false);
  };

  const handleFlexibleToggle = () => {
    setIsFlexible(true);
    setLocalDates({ startDate: '', endDate: '', flexible: true });
  };

  const handleSubmit = () => {
    if (isFlexible) {
      onSubmit({ startDate: '', endDate: '', flexible: true });
    } else {
      onSubmit(localDates);
    }
  };

  const isValidSelection = () => {
    if (isFlexible) return true;
    if (!localDates.startDate || !localDates.endDate) return false;
    return new Date(localDates.startDate) <= new Date(localDates.endDate);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-4 font-sans">מתי תרצו לטוס?</h2>
      <p className="text-center text-gray-600 mb-8 font-sans">
        בחרו תאריך התחלה וסיום, או לחצו על 'עדיין לא בטוח'
      </p>
      
      <div className="bg-white rounded-xl p-8 shadow-md max-w-2xl mx-auto">
        <div className="space-y-6">
          {/* Flexible Option */}
          <button
            onClick={handleFlexibleToggle}
            className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-right ${
              isFlexible
                ? 'border-orange-500 bg-orange-50'
                : 'border-gray-200 bg-white hover:border-orange-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1 font-sans">עדיין לא בטוח</h3>
                <p className="text-gray-600 text-sm font-sans">נתכנן את התאריכים יחד בהמשך</p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ml-4 ${
                isFlexible
                  ? 'border-orange-500 bg-orange-500'
                  : 'border-gray-300'
              }`}>
                {isFlexible && (
                  <span className="text-white text-sm">✓</span>
                )}
              </div>
            </div>
          </button>

          {/* Date Selection */}
          {!isFlexible && (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <span className="text-gray-600 font-medium">או בחרו תאריכים מדויקים:</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    תאריך התחלה
                  </label>
                  <input
                    type="date"
                    value={localDates.startDate}
                    onChange={(e) => handleStartDateChange(e.target.value)}
                    min={today}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-right"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 text-right">
                    תאריך סיום
                  </label>
                  <input
                    type="date"
                    value={localDates.endDate}
                    onChange={(e) => handleEndDateChange(e.target.value)}
                    min={localDates.startDate || today}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none text-right"
                  />
                </div>
              </div>

              {localDates.startDate && localDates.endDate && (
                <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-center font-medium">
                    {(() => {
                      const startDate = new Date(localDates.startDate);
                      const endDate = new Date(localDates.endDate);
                      const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
                      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
                      
                      return `${diffDays} ימים (${startDate.toLocaleDateString('he-IL')} - ${endDate.toLocaleDateString('he-IL')})`;
                    })()}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isValidSelection()}
          className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-lg mt-6"
        >
          המשך
        </button>
      </div>
    </div>
  );
};

// Travelers Step Component
interface TravelersStepProps {
  travelers: { 
    adults: number; 
    children: number; 
    infants: number;
    childrenAges?: number[];
    infantsAges?: number[];
  };
  onSubmit: (travelers: { adults: number; children: number; infants: number; childrenAges?: number[]; infantsAges?: number[] }, ageRange: string) => void;
}

const TravelersStep: React.FC<TravelersStepProps> = ({ travelers, onSubmit }) => {
  const [localTravelers, setLocalTravelers] = useState(travelers);
  const [showAgeDetails, setShowAgeDetails] = useState(false);
  const [childrenAges, setChildrenAges] = useState<number[]>(travelers.childrenAges || []);
  const [infantsAges, setInfantsAges] = useState<number[]>(travelers.infantsAges || []);

  const updateTravelers = (type: 'adults' | 'children' | 'infants', change: number) => {
    setLocalTravelers(prev => {
      const newValue = Math.max(0, prev[type] + change);
      
      // Adjust ages arrays when counts change
      if (type === 'children') {
        const newAges = [...childrenAges];
        if (newValue < childrenAges.length) {
          newAges.splice(newValue);
          setChildrenAges(newAges);
        } else if (newValue > childrenAges.length) {
          while (newAges.length < newValue) {
            newAges.push(8); // Default age for children
          }
          setChildrenAges(newAges);
        }
      }
      
      if (type === 'infants') {
        const newAges = [...infantsAges];
        if (newValue < infantsAges.length) {
          newAges.splice(newValue);
          setInfantsAges(newAges);
        } else if (newValue > infantsAges.length) {
          while (newAges.length < newValue) {
            newAges.push(1); // Default age for infants
          }
          setInfantsAges(newAges);
        }
      }
      
      return {
        ...prev,
        [type]: newValue
      };
    });
  };

  const getTotalTravelers = () => {
    return localTravelers.adults + localTravelers.children + localTravelers.infants;
  };

  const hasMinorTravelers = () => {
    return localTravelers.children > 0 || localTravelers.infants > 0;
  };

  const hasExactAges = () => {
    return childrenAges.length > 0 || infantsAges.length > 0;
  };

  const updateChildAge = (index: number, age: number) => {
    const newAges = [...childrenAges];
    newAges[index] = age;
    setChildrenAges(newAges);
  };

  const updateInfantAge = (index: number, age: number) => {
    const newAges = [...infantsAges];
    newAges[index] = age;
    setInfantsAges(newAges);
  };

  const handleSubmit = () => {
    const finalTravelers = {
      ...localTravelers,
      childrenAges: localTravelers.children > 0 ? childrenAges : undefined,
      infantsAges: localTravelers.infants > 0 ? infantsAges : undefined
    };
    onSubmit(finalTravelers, '');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6 font-sans text-center">כמה מטיילים ובאיזה גילאים?</h2>
      
      <div className="bg-white rounded-xl p-8 shadow-md max-w-2xl mx-auto">
        {/* Main Travelers Counter */}
        <div className="space-y-6">
          <h3 className="text-lg font-medium mb-4 font-sans text-center">מספר מטיילים</h3>
          
          <div className="space-y-4">
            {/* Adults */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="font-medium">מבוגרים</div>
                  <div className="text-sm text-gray-600">גיל 18+</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateTravelers('adults', -1)}
                  disabled={localTravelers.adults <= 1}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:border-orange-500 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg"
                >
                  -
                </button>
                <span className="w-12 text-center font-bold text-lg">{localTravelers.adults}</span>
                <button
                  onClick={() => updateTravelers('adults', 1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:border-orange-500 font-bold text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="font-medium">ילדים</div>
                  <div className="text-sm text-gray-600">גיל 2-17</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateTravelers('children', -1)}
                  disabled={localTravelers.children <= 0}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:border-orange-500 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg"
                >
                  -
                </button>
                <span className="w-12 text-center font-bold text-lg">{localTravelers.children}</span>
                <button
                  onClick={() => updateTravelers('children', 1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:border-orange-500 font-bold text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Infants */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Baby className="w-5 h-5 text-gray-600" />
                <div>
                  <div className="font-medium">תינוקות</div>
                  <div className="text-sm text-gray-600">גיל 0-2</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => updateTravelers('infants', -1)}
                  disabled={localTravelers.infants <= 0}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:border-orange-500 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg"
                >
                  -
                </button>
                <span className="w-12 text-center font-bold text-lg">{localTravelers.infants}</span>
                <button
                  onClick={() => updateTravelers('infants', 1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center hover:bg-gray-100 hover:border-orange-500 font-bold text-lg"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Total Summary */}
          <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div className="text-center font-medium">
              סה"כ {getTotalTravelers()} מטיילים
            </div>
          </div>

          
          {/* Optional Age Details */}
          {hasMinorTravelers() && (
            <div className="mt-6 pt-4 border-t border-gray-200">
              <button
                onClick={() => setShowAgeDetails(!showAgeDetails)}
                className="text-orange-600 hover:text-orange-700 font-medium text-sm underline"
              >
                {hasExactAges() ? 'עריכת גילאים מדויקים' : 'הוספת גילאים מדויקים (אופציונלי)'}
              </button>
              
              {showAgeDetails && (
                <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
                  {/* Children Ages */}
                  {localTravelers.children > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">גילאי הילדים:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {Array.from({ length: localTravelers.children }, (_, index) => (
                          <select
                            key={index}
                            value={childrenAges[index] || 8}
                            onChange={(e) => updateChildAge(index, parseInt(e.target.value))}
                            className="p-2 border border-gray-300 rounded text-center"
                          >
                            {Array.from({ length: 16 }, (_, age) => age + 2).map(age => (
                              <option key={age} value={age}>{age} שנים</option>
                            ))}
                          </select>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Infants Ages */}
                  {localTravelers.infants > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">גילאי התינוקות:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {Array.from({ length: localTravelers.infants }, (_, index) => (
                          <select
                            key={index}
                            value={infantsAges[index] || 1}
                            onChange={(e) => updateInfantAge(index, parseInt(e.target.value))}
                            className="p-2 border border-gray-300 rounded text-center"
                          >
                            <option value={0}>פחות משנה</option>
                            <option value={1}>שנה</option>
                            <option value={2}>שנתיים</option>
                          </select>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={localTravelers.adults === 0}
          className="w-full bg-orange-500 text-white py-4 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-lg"
        >
          המשך
        </button>
      </div>
    </div>
  );
};

// Interests Step Component
interface InterestsStepProps {
  interests: Array<{ id: string; name: string; description: string }>;
  selectedInterests: string[];
  onSubmit: (interests: string[]) => void;
}

const InterestsStep: React.FC<InterestsStepProps> = ({ interests, selectedInterests, onSubmit }) => {
  const [selected, setSelected] = useState<string[]>(selectedInterests);

  const toggleInterest = (interestId: string) => {
    setSelected(prev => 
      prev.includes(interestId)
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center mb-8 font-sans">אילו חוויות מעניינות אתכם?</h2>
      <p className="text-center text-gray-600 mb-8 font-sans">בחרו אחת או יותר מהאפשרויות</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {interests.map((interest) => (
          <button
            key={interest.id}
            onClick={() => toggleInterest(interest.id)}
            className={`p-4 rounded-xl border-2 transition-all duration-300 text-right ${
              selected.includes(interest.id)
                ? 'border-orange-500 bg-orange-50'
                : 'border-gray-200 bg-white hover:border-orange-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1 font-sans">{interest.name}</h3>
                <p className="text-gray-600 text-sm font-sans">{interest.description}</p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ml-4 ${
                selected.includes(interest.id)
                  ? 'border-orange-500 bg-orange-500'
                  : 'border-gray-300'
              }`}>
                {selected.includes(interest.id) && (
                  <span className="text-white text-sm">✓</span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={() => onSubmit(selected)}
        disabled={selected.length === 0}
        className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed max-w-md mx-auto block"
      >
        המשך ({selected.length} נבחרו)
      </button>
    </div>
  );
};

export default PlanYourTrip;