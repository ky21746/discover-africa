import { TripPlannerData, GeneratedItinerary, ItineraryDay } from '../types';
import { attractions, Attraction } from '../data/attractions';

// Calculate distance between two points (rough estimation)
const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

// Score attractions based on user preferences
const scoreAttraction = (
  attraction: Attraction,
  tripData: TripPlannerData,
  previousLocation?: { lat: number; lng: number },
  usedClusters: string[] = []
): number => {
  let score = 0;

  // Base score for matching interests
  if (tripData.interests.includes(attraction.cluster)) {
    score += 100;
  }

  // Family compatibility
  if (tripData.travelers.children > 0) {
    if (attraction.family) score += 20;
    else score -= 30;
    
    // Young children bonus for easier activities
    if (tripData.specialRequests.youngChildren && attraction.difficulty === 'קל') {
      score += 15;
    }
  }

  // Budget compatibility
  const budgetMultiplier = {
    'נמוך': attraction.cost_est <= 200 ? 1.2 : 0.8,
    'בינוני': attraction.cost_est <= 500 ? 1.1 : 0.9,
    'גבוה': attraction.luxury ? 1.3 : 1.0
  };
  score *= budgetMultiplier[tripData.budget as keyof typeof budgetMultiplier] || 1;

  // Difficulty match
  const difficultyMatch = {
    'קל': { 'קל': 1.2, 'בינוני': 0.9, 'מאומץ': 0.5 },
    'בינוני': { 'קל': 1.0, 'בינוני': 1.2, 'מאומץ': 0.8 },
    'מאומץ': { 'קל': 0.8, 'בינוני': 1.0, 'מאומץ': 1.2 }
  };
  score *= difficultyMatch[tripData.difficulty][attraction.difficulty];

  // Proximity bonus (if previous location exists)
  if (previousLocation) {
    const distance = calculateDistance(
      previousLocation.lat, previousLocation.lng,
      attraction.lat, attraction.lng
    );
    
    // Bonus for nearby attractions (within 150km)
    if (distance <= 150) {
      score += 30 - (distance / 5); // Closer = higher bonus
    } else if (distance > 300) {
      // Penalty for very far attractions unless using helicopter/plane
      if (tripData.transport === 'רכב') {
        score -= 20;
      }
    }
  }

  // Diversity bonus - avoid too many of same cluster in a row
  const clusterCount = usedClusters.filter(c => c === attraction.cluster).length;
  if (clusterCount >= 2) {
    score -= 25; // Penalty for repetition
  }

  // Special requirements
  if (tripData.specialRequests.sabbath && attraction.tags.includes('שבת')) {
    score -= 50; // Avoid activities that conflict with Sabbath
  }

  // Luxury preference
  if (tripData.budget === 'גבוה' && attraction.luxury) {
    score += 25;
  }

  return Math.max(0, score);
};

// Generate reasoning for day selection
const generateReasoning = (
  day: ItineraryDay,
  selectedAttractions: Attraction[],
  tripData: TripPlannerData,
  dayIndex: number
): string => {
  const reasons = [];

  // Geographic logic
  if (selectedAttractions.length > 1) {
    const areas = [...new Set(selectedAttractions.map(a => a.area))];
    if (areas.length === 1) {
      reasons.push(`מיקמנו את הפעילויות באזור ${areas[0]} לחיסכון בזמני נסיעה`);
    }
  }

  // Recovery day logic
  if (dayIndex > 0 && selectedAttractions.every(a => a.difficulty === 'קל')) {
    reasons.push('יום מנוחה יחסית לאחר פעילויות מאומצות');
  }

  // Family considerations
  if (tripData.travelers.children > 0 && selectedAttractions.every(a => a.family)) {
    reasons.push('פעילויות מותאמות למשפחות עם ילדים');
  }

  // Interest matching
  const clusters = [...new Set(selectedAttractions.map(a => a.cluster))];
  const matchedInterests = clusters.filter(c => tripData.interests.includes(c));
  if (matchedInterests.length > 0) {
    reasons.push(`התאמה לתחומי העניין שבחרתם: ${matchedInterests.join(', ')}`);
  }

  // Budget considerations
  const avgCost = selectedAttractions.reduce((sum, a) => sum + a.cost_est, 0) / selectedAttractions.length;
  if (tripData.budget === 'נמוך' && avgCost <= 150) {
    reasons.push('פעילויות חסכוניות המתאימות לתקציב שהגדרתם');
  } else if (tripData.budget === 'גבוה' && avgCost >= 400) {
    reasons.push('חוויות פרימיום המתאימות לתקציב הגבוה');
  }

  return reasons.length > 0 
    ? reasons.join('. ') + '.'
    : 'שילוב מותאם של פעילויות לפי העדפותיכם.';
};

export const generateItinerary = async (tripData: TripPlannerData): Promise<GeneratedItinerary> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  const days: ItineraryDay[] = [];
  let currentLocation: { lat: number; lng: number } | undefined;
  let totalCost = 0;
  let totalDistance = 0;
  const usedAttractions = new Set<string>();
  const usedClusters: string[] = [];
  const breakdown: Record<string, number> = {};

  // Filter attractions based on basic criteria
  let availableAttractions = attractions.filter(attraction => {
    // Family filter
    if (tripData.travelers.children > 0 && !attraction.family) {
      return false;
    }

    // Young children filter
    if (tripData.specialRequests.youngChildren && attraction.difficulty === 'מאומץ') {
      return false;
    }

    // Budget filter (rough)
    if (tripData.budget === 'נמוך' && attraction.cost_est > 300) {
      return false;
    }

    return true;
  });

  for (let dayNum = 1; dayNum <= tripData.duration; dayNum++) {
    const dayAttractions: string[] = [];
    let dayDuration = 0;
    let dayCost = 0;
    let dayTravelTime = 0;

    // Determine if this should be a rest day
    const isRestDay = dayNum % 4 === 0 && dayNum > 1; // Every 4th day after the first

    if (isRestDay) {
      // Find a relaxing activity
      const restActivities = availableAttractions
        .filter(a => 
          !usedAttractions.has(a.id) && 
          a.difficulty === 'קל' && 
          (a.tags.includes('מנוחה') || a.cluster === 'מים' || a.cluster === 'תרבות')
        )
        .sort((a, b) => scoreAttraction(b, tripData, currentLocation, usedClusters) - 
                        scoreAttraction(a, tripData, currentLocation, usedClusters));

      if (restActivities.length > 0) {
        const selected = restActivities[0];
        dayAttractions.push(selected.id);
        usedAttractions.add(selected.id);
        dayDuration += selected.duration_h;
        dayCost += selected.cost_est;
        
        if (currentLocation) {
          const distance = calculateDistance(
            currentLocation.lat, currentLocation.lng,
            selected.lat, selected.lng
          );
          totalDistance += distance;
          dayTravelTime = Math.round(distance * 1.5); // Rough travel time in minutes
        }
        
        currentLocation = { lat: selected.lat, lng: selected.lng };
        usedClusters.push(selected.cluster);
        breakdown[selected.cluster] = (breakdown[selected.cluster] || 0) + 1;
      }
    } else {
      // Regular activity day - aim for 6-8 hours total
      const targetHours = 7;
      
      while (dayDuration < targetHours && dayAttractions.length < 3) {
        const scored = availableAttractions
          .filter(a => !usedAttractions.has(a.id))
          .map(a => ({
            attraction: a,
            score: scoreAttraction(a, tripData, currentLocation, usedClusters)
          }))
          .sort((a, b) => b.score - a.score);

        if (scored.length === 0) break;

        const selected = scored[0].attraction;
        
        // Check if adding this attraction would exceed reasonable daily hours
        if (dayDuration + selected.duration_h > 10) {
          break;
        }

        dayAttractions.push(selected.id);
        usedAttractions.add(selected.id);
        dayDuration += selected.duration_h;
        dayCost += selected.cost_est;
        
        if (currentLocation) {
          const distance = calculateDistance(
            currentLocation.lat, currentLocation.lng,
            selected.lat, selected.lng
          );
          totalDistance += distance;
          dayTravelTime += Math.round(distance * 1.5);
        }
        
        currentLocation = { lat: selected.lat, lng: selected.lng };
        usedClusters.push(selected.cluster);
        breakdown[selected.cluster] = (breakdown[selected.cluster] || 0) + 1;
      }
    }

    if (dayAttractions.length > 0) {
      const selectedAttractions = dayAttractions.map(id => 
        attractions.find(a => a.id === id)!
      );
      
      const dayArea = [...new Set(selectedAttractions.map(a => a.area))].join(', ');
      
      const day: ItineraryDay = {
        day: dayNum,
        title: `יום ${dayNum} – ${dayArea}`,
        attractions: dayAttractions,
        area: dayArea,
        totalCost: dayCost,
        totalDuration: dayDuration,
        travelTime: dayTravelTime,
        reasoning: generateReasoning(
          {} as ItineraryDay, 
          selectedAttractions, 
          tripData, 
          dayNum - 1
        ),
        isRestDay
      };

      days.push(day);
      totalCost += dayCost;
    }
  }

  // Generate summary
  const mainInterests = Object.entries(breakdown)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3)
    .map(([interest]) => interest);

  const summary = `מסלול ${tripData.duration} ימים המתמקד ב${mainInterests.join(', ')} עם ${tripData.travelers.adults} מבוגרים${tripData.travelers.children > 0 ? ` ו-${tripData.travelers.children} ילדים` : ''}`;

  return {
    days,
    totalCost: totalCost * tripData.travelers.adults + (totalCost * 0.7 * tripData.travelers.children),
    totalDistance,
    breakdown,
    summary
  };
};