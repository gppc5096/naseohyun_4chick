import { useCallback } from 'react';
import { BADGE_TYPES } from '../types/rewards';
import useLocalStorage from './useLocalStorage';

export function useBadgeProgress() {
  const [badgeProgress, setBadgeProgress] = useLocalStorage('badge_progress', {});

  const updateProgress = useCallback((badgeType, progress) => {
    setBadgeProgress(prev => ({
      ...prev,
      [badgeType]: {
        ...prev[badgeType],
        currentProgress: progress,
        isCompleted: progress >= BADGE_TYPES[badgeType].target
      }
    }));
  }, [setBadgeProgress]);

  const checkBadgeCompletion = useCallback((badgeType) => {
    const progress = badgeProgress[badgeType]?.currentProgress || 0;
    const target = BADGE_TYPES[badgeType].target;
    return progress >= target;
  }, [badgeProgress]);

  const getBadgeProgress = useCallback((badgeType) => {
    return badgeProgress[badgeType] || {
      currentProgress: 0,
      isCompleted: false
    };
  }, [badgeProgress]);

  return {
    badgeProgress,
    updateProgress,
    checkBadgeCompletion,
    getBadgeProgress
  };
} 