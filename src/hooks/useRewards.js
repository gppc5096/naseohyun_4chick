import { useCallback } from 'react';
import useLocalStorage from './useLocalStorage';
import { BADGE_TYPES, BADGE_REWARDS } from '../types/rewards';

const checkRequirements = (stats, requirements) => {
  return Object.entries(requirements).every(([key, value]) => stats[key] >= value);
};

export function useRewards() {
  const [rewards, setRewards] = useLocalStorage('rewards', {
    badges: {},
    points: 0
  });

  const checkBadgeEligibility = useCallback((stats) => {
    const newBadges = [];
    
    Object.entries(BADGE_TYPES).forEach(([badgeId, badge]) => {
      if (!rewards.badges[badgeId] && checkRequirements(stats, badge.requirements)) {
        newBadges.push(badgeId);
      }
    });
    
    return newBadges;
  }, [rewards.badges]);

  const awardBadge = useCallback((badgeId) => {
    if (BADGE_TYPES[badgeId]) {
      setRewards(prev => ({
        ...prev,
        badges: {
          ...prev.badges,
          [badgeId]: {
            awarded: true,
            awardedAt: new Date().toISOString()
          }
        },
        points: prev.points + BADGE_REWARDS[badgeId].points
      }));
      return true;
    }
    return false;
  }, [setRewards]);

  return {
    rewards,
    checkBadgeEligibility,
    awardBadge
  };
}

export default useRewards; 