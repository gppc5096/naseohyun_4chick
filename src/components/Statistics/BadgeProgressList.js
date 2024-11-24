import React from 'react';
import { useBadgeProgress } from '../../hooks/useBadgeProgress';
import { BADGE_TYPES } from '../../types/rewards';
import BadgeProgress from './BadgeProgress';
import styles from './BadgeProgressList.module.css';

function BadgeProgressList() {
  const { badgeProgress } = useBadgeProgress();

  const badgeOrder = [
    'STUDYING_HARD',
    'CONTINUOUS_3DAYS',
    'CONTINUOUS_7DAYS',
    'ACCURATE_CALCULATOR',
    'PERFECT_SOLVER',
    'MATH_MASTER'
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.titleIcon}>✨</span>
        서현이의 특별한 도전 목표
        <span className={styles.titleIcon}>✨</span>
      </h2>
      <div className={styles.badgeGrid}>
        {badgeOrder.map(badgeType => {
          const progress = badgeProgress[badgeType] || { currentProgress: 0, isCompleted: false };
          const badgeInfo = BADGE_TYPES[badgeType];
          
          return (
            <BadgeProgress
              key={badgeType}
              badgeData={{
                type: badgeType,
                status: progress.isCompleted ? 'COMPLETED' : 'IN_PROGRESS',
                progress: progress.currentProgress,
                target: badgeInfo.target,
                displayText: badgeInfo.displayName,
                description: badgeInfo.description,
                nextLevel: progress.isCompleted ? badgeInfo.nextLevel : null
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BadgeProgressList; 